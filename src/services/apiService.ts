/**
 * API service for interacting with the DeepSeek AI
 */

import { handleChatRequest } from '@/api/chat';

type MessageHistory = {
  role: 'user' | 'assistant' | 'system';
  content: string;
}[];

type StreamingCallback = (chunk: string) => void;

// Non-streaming version for components that don't need streaming
export const chatWithGeminiSync = async (message: string, history: MessageHistory): Promise<string> => {
  try {
    return await handleChatRequest(message, history);
  } catch (error) {
    console.error('Error in chat:', error);
    throw error;
  }
};

// Streaming version for chat interface
export const chatWithGemini = async (
  message: string, 
  history: MessageHistory,
  onStream: StreamingCallback
): Promise<void> => {
  try {
    const response = await handleChatRequest(message, history);
    
    // Split response into smaller chunks for faster streaming
    const chunks = response.split(/(?<=[.!?])\s+/);
    let currentResponse = '';
    
    for (let i = 0; i < chunks.length; i++) {
      currentResponse += chunks[i] + ' ';
      onStream(currentResponse.trim());
      // Update the response every 30ms for faster streaming
      await new Promise(resolve => setTimeout(resolve, 30));
    }
  } catch (error) {
    console.error('Error in chat:', error);
    throw error;
  }
};
