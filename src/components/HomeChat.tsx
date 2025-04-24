import React, { useState, useRef, useEffect } from 'react';
import { Send, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { chatWithGemini } from '@/services/apiService';
import ReactMarkdown from 'react-markdown';
import { Card } from '@/components/ui/card';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const HomeChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: '👋 Welcome to Neural Arc Investment Opportunity! 🚀\n\n' +
        'Explore the future of AI for SMBs. Ask me about:\n\n' +
        '• Our revolutionary platforms (ORB & NOD)\n' +
        '• AI market potential\n' +
        '• Investment details\n' +
        '• Our unique micro-SaaS suite\n\n' +
        'What would you like to know about this groundbreaking opportunity?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
      const apiKey = localStorage.getItem('deepseek_api_key');
      if (!apiKey) {
        throw new Error('Please set your DeepSeek API key in settings first');
      }

      let response;
      if (handleFounderQuery(input)) {
        response = "Founded by Aniket Tapre, a serial entrepreneur with 30+ years of tech experience and multiple successful exits across industries.";
      } else {
        response = await chatWithGemini(input, messages);
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
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
    <div className="relative animate-pulse-subtle before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-r before:from-teal/10 before:via-blue-500/10 before:to-teal/10 before:animate-glow">
      <Card className="w-full max-w-3xl mx-auto bg-charcoal/30 border-white/10 relative">
        <div className="h-[400px] overflow-y-auto p-6 space-y-4">
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
      </Card>
    </div>
  );
};

export default HomeChat;
