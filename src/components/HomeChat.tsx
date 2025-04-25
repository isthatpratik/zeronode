import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { chatWithGemini } from '@/services/apiService';
import ReactMarkdown from 'react-markdown';
import { Card } from '@/components/ui/card';
import { BorderBeam } from '@/components/magicui/border-beam';
import './loading-dots.css';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const HomeChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: '# 🚀 Welcome to Neural Arc AI!\n\nI\'m your AI assistant, ready to help you explore our innovative platforms and investment opportunities. How can I assist you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToLatestResponse = () => {
    const container = messagesEndRef.current?.parentElement;
    if (container) {
      const lastResponse = container.querySelector('.flex.justify-start:last-child') as HTMLElement;
      if (lastResponse) {
        const windowHeight = container.clientHeight;
        container.scrollTop = lastResponse.offsetTop - container.offsetTop - (windowHeight * 0.5);
      }
    }
  };

  useEffect(() => {
    if (messages.length > 1) {
      requestAnimationFrame(scrollToLatestResponse);
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

  // Enhanced function to aggressively fix Markdown formatting issues
  const formatMarkdownResponse = (text: string): string => {
    // Step 1: Fix improper headings (like ##Key Features: without space)
    let formatted = text.replace(/^(#{1,6})([^\s#])/gm, '$1 $2');
    
    // Step 2: Fix bullet points that don't have proper spacing
    formatted = formatted.replace(/^\s*\*\s*([^\s])/gm, '* $1');
    formatted = formatted.replace(/^\s*-\s*([^\s])/gm, '- $1');
    
    // Step 3: Fix adjacent bullet points without line breaks
    formatted = formatted.replace(/(\*\s+[^\n]+)(\*\s+)/g, '$1\n$2');
    formatted = formatted.replace(/(-\s+[^\n]+)(-\s+)/g, '$1\n$2');
    
    // Step 4: Fix bolding issues (****)
    formatted = formatted.replace(/\*{4,}/g, '**');
    
    // Step 5: Fix blockquotes
    formatted = formatted.replace(/^\s*>\s*([^\s])/gm, '> $1');
    
    // Step 6: Ensure heading sections are properly separated
    formatted = formatted.replace(/([^\n])(\n#{1,6}\s)/g, '$1\n\n$2');
    
    // Step 7: Add line breaks after headings
    formatted = formatted.replace(/(#{1,6}\s+[^\n]+)(\n[^#\n])/g, '$1\n$2');
    
    // Step 8: Ensure bullet points are separated from previous content
    formatted = formatted.replace(/([^\n])(\n\s*[\*-]\s)/g, '$1\n\n$2');
    
    // Step 9: Add spacing after bullet points for lists
    const lines = formatted.split('\n');
    for (let i = 0; i < lines.length; i++) {
      // If this is a bullet point and the next line is also a bullet point without spacing
      if ((lines[i].trim().startsWith('* ') || lines[i].trim().startsWith('- ')) && 
          i + 1 < lines.length && 
          (lines[i+1].trim().startsWith('* ') || lines[i+1].trim().startsWith('- '))) {
        if (lines[i+1].indexOf('\n') === -1) {
          lines[i] = lines[i] + '\n';
        }
      }
    }
    formatted = lines.join('\n');
    
    // Step 10: Clean up any excessive newlines
    formatted = formatted.replace(/\n{3,}/g, '\n\n');
    
    return formatted;
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
        const response = "# 🤔 Let's Try That Again\n\nI notice your input might contain some typos or random characters. Could you please rephrase your question in a clearer way? I'm here to help you learn about Neural Arc's investment opportunity and platforms.";
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      } else if (handleFounderQuery(input)) {
        const response = "# 👨‍💼 About Our Founder\n\nFounded by Aniket Tapre, a serial entrepreneur with 30+ years of tech experience and multiple successful exits across industries.";
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
              // Apply aggressive markdown formatting to fix common issues
              lastMessage.content = formatMarkdownResponse(chunk);
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
                <ReactMarkdown
                  className="prose prose-invert prose-sm max-w-none"
                  components={{
                    h1: ({ children }) => <h1 className="text-xl font-bold mb-3 mt-1 text-white">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-lg font-bold mb-2 mt-1 text-white">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-base font-bold mb-2 mt-1 text-white">{children}</h3>,
                    p: ({ children }) => <p className="mb-3 text-white/90">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc pl-4 mb-3 space-y-2 text-white/90">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal pl-4 mb-3 space-y-2 text-white/90">{children}</ol>,
                    li: ({ children }) => <li className="mb-2 text-white/90">{children}</li>,
                    strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
                    em: ({ children }) => <em className="italic text-white/90">{children}</em>,
                    code: ({ children }) => <code className="bg-charcoal/20 px-1 rounded text-white/90">{children}</code>,
                    pre: ({ children }) => <pre className="bg-charcoal/20 p-2 rounded my-3 overflow-x-auto text-white/90">{children}</pre>,
                    blockquote: ({ children }) => <blockquote className="border-l-4 border-teal pl-4 my-3 italic text-white/90">{children}</blockquote>,
                    a: ({ href, children }) => <a href={href} className="text-teal hover:underline">{children}</a>,
                  }}
                >
                  {message.content}
                </ReactMarkdown>
              ) : (
                message.content
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg p-3 bg-charcoal/50 border border-white/10">
              <div className="flex items-center space-x-1">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
              </div>
            </div>
          </div>
        )}
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