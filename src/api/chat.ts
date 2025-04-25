import { GoogleGenAI } from "@google/genai"; // Assuming you might eventually use the SDK

// Define the message history type
type MessageHistory = {
  role: "user" | "assistant" | "system"; // Gemini uses 'model' for assistant internally
  content: string;
}[];

// Map internal roles to Gemini API roles ('system' is handled separately now)
const roleMapping: { [key in "user" | "assistant"]: "user" | "model" } = {
  user: "user",
  assistant: "model",
  // system: 'user', // No longer needed for mapping, handled by systemInstruction
};

// --- Updated Helper Function ---
// Formats history for Gemini API, extracting system instruction
const formatHistoryAndSystemInstruction = (
  history: MessageHistory
): {
  contents: { role: "user" | "model"; parts: { text: string }[] }[];
  systemInstruction?: { parts: { text: string }[] };
} => {
  let systemInstruction: { parts: { text: string }[] } | undefined = undefined;
  const chatContents: { role: "user" | "model"; parts: { text: string }[] }[] =
    [];

  // Find the system prompt (usually the first one)
  const systemPromptIndex = history.findIndex((msg) => msg.role === "system");

  if (systemPromptIndex !== -1) {
    // Enhance the system instruction with formatting guidelines
    let systemContent = history[systemPromptIndex].content;
    
    // Add explicit formatting instructions if not already present
    if (!systemContent.includes("FORMAT TEMPLATE")) {
      systemContent += `

**CRITICAL MARKDOWN FORMAT INSTRUCTIONS:**

Always use this FORMAT TEMPLATE for all responses:

🚀 Main Heading

Brief introduction paragraph.

💡 **Key Features**

✨ Real-Time Processing: Lightning-fast AI inference directly on edge devices
✨ Enhanced Privacy: Local data processing for maximum security
✨ Optimized Performance: High efficiency with minimal power consumption

💫 "Important quote or highlight goes here"

📊 Second Subheading

Additional information paragraph.

---

FORMAT RULES:
1. ALWAYS start headings on a new line
2. Place an empty line before AND after each heading
3. Place an empty line before AND after bullet point lists
4. Each bullet point MUST be on its own line
5. Do NOT use multiple asterisks (like ****) when bolding text - use only **text** format
6. NEVER show the markdown syntax (*, >) in the final output
7. Do NOT put bullet points directly next to each other without line breaks
8. Use emojis consistently for visual hierarchy
9. For blockquotes, use the 💫 emoji followed by the quote in quotes
10. For bullet points, use the ✨ emoji followed by the content
11. ALWAYS make "Key Features" bold using **Key Features**
12. ALWAYS ensure there is an empty line before and after the "Key Features" heading

This formatting is MANDATORY for proper rendering.
`;
    }
    
    // Extract the system instruction content
    systemInstruction = {
      parts: [{ text: systemContent }],
    };
    // Filter out the system message from the main chat history
    history = history.filter((_, index) => index !== systemPromptIndex);
  }

  // Map the remaining messages to the Gemini 'contents' format
  history.forEach((msg) => {
    // Skip any potential leftover system messages just in case
    if (msg.role === "user" || msg.role === "assistant") {
      chatContents.push({
        role: roleMapping[msg.role],
        parts: [{ text: msg.content }],
      });
    }
  });

  return { contents: chatContents, systemInstruction };
};

// --- Updated Main Request Handler ---
export const handleChatRequest = async (
  message: string,
  history: MessageHistory
): Promise<string> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const modelName = "gemini-2.0-flash";

  if (!apiKey) {
    throw new Error(
      "API key not found. Please set the VITE_GEMINI_API_KEY environment variable."
    );
  }

  try {
    // Deep copy history to avoid modifying the original array passed from the component
    const historyCopy = JSON.parse(JSON.stringify(history)) as MessageHistory;

    // Ensure the system instruction is present in the history copy with improved formatting guidance
    const systemPromptContent = `You are the Neural Arc AI assistant. You must ONLY provide information about:
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

**CRITICAL MARKDOWN FORMAT INSTRUCTIONS:**

Always use this FORMAT TEMPLATE for all responses:

🚀 Main Heading

Brief introduction paragraph.

💡 **Key Features**

✨ Real-Time Processing: Lightning-fast AI inference directly on edge devices
✨ Enhanced Privacy: Local data processing for maximum security
✨ Optimized Performance: High efficiency with minimal power consumption

💫 "Important quote or highlight goes here"

📊 Second Subheading

Additional information paragraph.

---

FORMAT RULES:
1. ALWAYS start headings on a new line
2. Place an empty line before AND after each heading
3. Place an empty line before AND after bullet point lists
4. Each bullet point MUST be on its own line
5. Do NOT use multiple asterisks (like ****) when bolding text - use only **text** format
6. NEVER show the markdown syntax (*, >) in the final output
7. Do NOT put bullet points directly next to each other without line breaks
8. Use emojis consistently for visual hierarchy
9. For blockquotes, use the 💫 emoji followed by the quote in quotes
10. For bullet points, use the ✨ emoji followed by the content
11. ALWAYS make "Key Features" bold using **Key Features**
12. ALWAYS ensure there is an empty line before and after the "Key Features" heading

This formatting is MANDATORY for proper rendering.`;

    // Check if system prompt already exists, if not, add it
    if (!historyCopy.some((msg) => msg.role === "system")) {
      historyCopy.unshift({
        role: "system",
        content: systemPromptContent,
      });
    } else {
      // Update existing system prompt to ensure proper formatting
      const sysIndex = historyCopy.findIndex((msg) => msg.role === "system");
      if (sysIndex !== -1) {
        historyCopy[sysIndex].content = systemPromptContent;
      }
    }

    // Add the current user message to the copied history
    historyCopy.push({
      role: "user",
      content: message + "\n\nRemember to follow the FORMAT TEMPLATE with proper Markdown formatting!",
    });

    // Format messages for Gemini API, separating system instruction
    const { contents, systemInstruction } =
      formatHistoryAndSystemInstruction(historyCopy);

    // --- Construct the API Request Body ---
    const requestBody: {
      contents: any[];
      systemInstruction?: { parts: { text: string }[] };
      generationConfig: any;
    } = {
      contents: contents, // User/Assistant turns only
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 800, // Slightly increased default, adjust as needed
        topP: 0.95,
      },
    };

    // Add system instruction if it was extracted
    if (systemInstruction) {
      requestBody.systemInstruction = systemInstruction;
    }

    // --- Call Google AI Gemini REST API ---
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey, // API key in header
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    // --- Handle API Response ---
    if (!response.ok) {
      console.error("Gemini API error response:", data);
      const errorDetails =
        data?.error?.message ||
        `HTTP error! status: ${response.status} ${response.statusText}`;
      const errorStatus = data?.error?.status || "UNKNOWN_STATUS";
      throw new Error(
        `Error communicating with Gemini API (${errorStatus}): ${errorDetails}`
      );
    }

    // Extract content safely, handling potential lack of response or candidates
    const candidate = data.candidates?.[0];
    const responseText = candidate?.content?.parts?.[0]?.text;
    const finishReason = candidate?.finishReason;

    // Log if the response was stopped for reasons other than normal completion
    if (finishReason && finishReason !== "STOP") {
      console.warn(`Gemini response finished with reason: ${finishReason}`);
      if (finishReason === "SAFETY") {
        console.error(
          "Safety settings blocked the response. Prompt Feedback:",
          data.promptFeedback
        );
        throw new Error(
          `Response blocked due to safety settings. Reason: ${data.promptFeedback?.blockReason}`
        );
      }
      if (finishReason === "MAX_TOKENS") {
        console.warn("Response truncated due to maxOutputTokens limit.");
        // Return truncated text but maybe signal truncation upstream
      }
    }

    if (!responseText) {
      console.error("Gemini API - No response text found:", data);
      // Check for blocking reasons in prompt feedback as well
      const blockReason = data.promptFeedback?.blockReason;
      if (blockReason) {
        console.error(
          "Prompt Feedback indicated blocking:",
          data.promptFeedback
        );
        throw new Error(`Request blocked by API. Reason: ${blockReason}`);
      }
      throw new Error("Received an empty or invalid response from the AI.");
    }

    return responseText;
  } catch (error) {
    console.error("Error processing chat request:", error);
    // Re-throw the original error or a new error with more context
    throw error instanceof Error
      ? error
      : new Error("An unexpected error occurred during the chat request.");
  }
};