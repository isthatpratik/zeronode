
/**
 * API service for interacting with the DeepSeek AI
 */

import { handleChatRequest } from '@/api/chat';

type MessageHistory = {
  role: 'user' | 'assistant' | 'system';
  content: string;
}[];

export const chatWithGemini = async (message: string, history: MessageHistory): Promise<string> => {
  try {
    return await handleChatRequest(message, history);
  } catch (error) {
    console.error('Error in chat:', error);
    throw error;
  }
};
