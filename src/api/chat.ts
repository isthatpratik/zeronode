/**
 * API service for interacting with the Gemini AI on the client side
 * This module replaces the Express-based implementation to work in a frontend-only environment
 */

type MessageHistory = {
  role: 'user' | 'assistant';
  content: string;
}[];

export const handleChatRequest = async (message: string, history: MessageHistory): Promise<string> => {
  const apiKey = localStorage.getItem('gemini_api_key');
  
  if (!apiKey) {
    throw new Error('API key not found. Please add your Gemini API key in settings.');
  }
  
  try {
    // Format messages for Gemini API
    const formattedMessages = history.map((msg) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    // Add the current message
    formattedMessages.push({
      role: 'user',
      parts: [{ text: message }]
    });

    // System instructions to keep responses positive and based on website content
    const systemInstruction = {
      role: 'system',
      parts: [{ 
        text: `You are the Neural Arc assistant. Only provide information about Neural Arc products (ORB, NOD, and the Micro AI Suite), 
        the investment opportunity (US $ 500,000 raise via convertible SAFE with 20% discount, US $ 12.5M cap), 
        and market statistics shown on the website. Be extremely positive, helpful, and focus only on Neural Arc. 
        If asked about something outside your knowledge of Neural Arc, politely redirect to what you do know about the company.`
      }]
    };

    // Add system instruction at the beginning
    formattedMessages.unshift(systemInstruction);

    // Call to Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: formattedMessages,
          generationConfig: {
            temperature: 0.2,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 800,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        }),
      }
    );

    const data = await response.json();
    
    if (data.error) {
      console.error('Gemini API error:', data.error);
      throw new Error(data.error.message || 'Error communicating with Gemini API');
    }

    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error processing chat request:', error);
    throw error;
  }
};
