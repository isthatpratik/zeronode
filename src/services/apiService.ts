
/**
 * API service for interacting with the Gemini AI
 */

import { handleChatRequest } from '@/api/chat';

type MessageHistory = {
  role: 'user' | 'assistant';
  content: string;
}[];

export const chatWithGemini = async (message: string, history: MessageHistory): Promise<string> => {
  try {
    return await handleChatRequest(message, history);
  } catch (error) {
    console.error('Error in chatWithGemini:', error);
    throw error;
  }
};
