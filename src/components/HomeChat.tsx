import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { chatWithGemini } from '@/services/apiService';
import ReactMarkdown from 'react-markdown';
import { Card } from '@/components/ui/card';
import { BorderBeam } from '@/components/magicui/border-beam';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const HomeChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: '🚀 AI Revolution Awaits! \n\nDiscover Neural Arc\'s groundbreaking platforms. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    const container = messagesEndRef.current?.parentElement;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  const isGibberish = (text: string): boolean => {
    // Remove special characters and numbers
    const cleanText = text.replace(/[^a-zA-Z\s]/g, '');
    
    // Check for repeated characters (e.g., "asdfasdf")
    const hasRepeatedPattern = /(.)\1{3,}/.test(text);
    
    // Check for random character sequences
    const hasRandomChars = /[a-z]{5,}[A-Z]{5,}|[A-Z]{5,}[a-z]{5,}/.test(text);
    
    // Check for very short inputs
    const isTooShort = cleanText.length < 3;
    
    // Check for non-alphabetic ratio
    const nonAlphaRatio = (text.replace(/[a-zA-Z\s]/g, '').length / text.length) > 0.5;
    
    return hasRepeatedPattern || hasRandomChars || isTooShort || nonAlphaRatio;
  };

  const handleFounderQuery = (userInput: string) => {
    const founderKeywords = ['founder', 'aniket', 'tapre', 'who started'];
    return founderKeywords.some(keyword => 
      userInput.toLowerCase().includes(keyword)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      if (isGibberish(input)) {
        const response = "I notice your input might contain some typos or random characters. Could you please rephrase your question in a clearer way? I'm here to help you learn about Neural Arc's investment opportunity and platforms.";
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      } else if (handleFounderQuery(input)) {
        const response = "Founded by Aniket Tapre, a serial entrepreneur with 30+ years of tech experience and multiple successful exits across industries.";
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      } else {
        // Add an empty assistant message that will be updated with streaming content
        setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
        
        // Get the streaming response
        await chatWithGemini(input, messages, (chunk) => {
          setMessages(prev => {
            const newMessages = [...prev];
            const lastMessage = newMessages[newMessages.length - 1];
            if (lastMessage.role === 'assistant') {
              lastMessage.content = chunk;
            }
            return newMessages;
          });
        });
      }
    } catch (error: any) {
      console.error('Chat error:', error);
      toast({
        title: "Chat Error",
        description: error.message || "Could not connect to the AI. Please try again later.",
        variant: "destructive",
      });
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I'm sorry, I couldn't process your request. Please try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-charcoal/30 border-white/10 relative overflow-hidden">
      <div className="h-[400px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {messages.map((message, index) => (
          <div 
            key={index}
            className={`flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'assistant' 
                  ? 'bg-charcoal/50 border border-white/10' 
                  : 'bg-teal/20 text-white'
              }`}
            >
              {message.role === 'assistant' ? (
                <ReactMarkdown className="prose prose-invert prose-sm max-w-none">
                  {message.content}
                </ReactMarkdown>
              ) : (
                message.content
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="border-t border-white/10 p-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Neural Arc's investment opportunity..."
          className="flex-1 bg-charcoal/20 text-foreground rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-teal"
          disabled={isLoading}
          autoFocus={false}
        />
        <Button 
          type="submit" 
          size="icon"
          disabled={isLoading}
          className="bg-teal text-charcoal hover:bg-teal/90"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
      <BorderBeam 
        duration={8} 
        size={100} 
        colorFrom="#00ff9d" 
        colorTo="#00b8ff"
        className="rounded-[inherit]"
      />
    </Card>
  );
};

export default HomeChat;
