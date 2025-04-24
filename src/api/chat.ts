type MessageHistory = {
  role: 'user' | 'assistant' | 'system';
  content: string;
}[];

export const handleChatRequest = async (message: string, history: MessageHistory): Promise<string> => {
  const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
  
  if (!apiKey) {
    throw new Error('API key not found. Please set the VITE_DEEPSEEK_API_KEY environment variable.');
  }
  
  try {
    // Format messages for DeepSeek API
    const formattedMessages = history.map((msg) => ({
      role: msg.role,
      content: msg.content
    }));

    // Add system instruction at the beginning
    formattedMessages.unshift({
      role: 'system',
      content: `You are the Neural Arc AI assistant. You must ONLY provide information about:
      1. Neural Arc products (ORB Platform, NOD Platform, and the Micro AI Suite)
      2. The investment opportunity (US $ 500,000 raise via convertible SAFE with 20% discount, US $ 12.5M cap)
      3. Market statistics from the website
      
      Rules:
      - Be extremely positive and optimistic in all responses
      - Focus exclusively on Neural Arc's strengths and opportunities
      - If asked about something outside Neural Arc, politely redirect to relevant Neural Arc information
      - Highlight the company's innovative technology and market potential
      - Emphasize the investment opportunity when relevant
      - Keep responses professional and investor-focused
      - Structure your responses with clear headings, bullet points, and concise paragraphs
      - Use markdown formatting with bold text for important points
      - Keep responses under 200 words whenever possible
      - Respond quickly with the most relevant information first`
    });

    // Add the current message
    formattedMessages.push({
      role: 'user',
      content: message
    });

    // Call to DeepSeek API with optimized parameters
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: formattedMessages,
        temperature: 0.1, // Lower temperature for more concise responses
        max_tokens: 500, // Limit response length
        top_p: 0.95
      }),
    });

    const data = await response.json();
    
    if (data.error) {
      console.error('DeepSeek API error:', data.error);
      throw new Error(data.error.message || 'Error communicating with DeepSeek API');
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error processing chat request:', error);
    throw error;
  }
};
