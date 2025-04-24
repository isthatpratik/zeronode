
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Check, Settings } from 'lucide-react';

const APIKeyManager = () => {
  const [apiKey, setApiKey] = useState('');
  const [isTesting, setIsTesting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if key exists in localStorage on component mount
    const storedKey = localStorage.getItem('gemini_api_key');
    if (storedKey) {
      setApiKey(storedKey);
    }
  }, []);

  const saveApiKey = () => {
    if (!apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter a valid API key",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem('gemini_api_key', apiKey);
    toast({
      title: "API Key Saved",
      description: "Your API key has been saved successfully",
    });
    
    testApiKey(apiKey);
  };

  const testApiKey = async (key: string) => {
    setIsTesting(true);
    
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${key}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              role: 'user',
              parts: [{ text: "Hello, this is a test message. Please respond with OK if you can read this." }]
            }],
            generationConfig: {
              temperature: 0.1,
              maxOutputTokens: 100,
            },
          }),
        }
      );
      
      const data = await response.json();
      
      if (data.error) {
        console.error('API test error:', data.error);
        toast({
          title: "API Key Test Failed",
          description: data.error.message || "Could not connect to Gemini API",
          variant: "destructive",
        });
      } else {
        toast({
          title: "API Key Test Successful",
          description: "Successfully connected to Gemini API",
        });
      }
    } catch (error) {
      console.error('API test error:', error);
      toast({
        title: "Connection Error",
        description: "Failed to test API key. Please check your internet connection.",
        variant: "destructive",
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="ml-2"
          aria-label="API Settings"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Gemini API Key Settings</SheetTitle>
        </SheetHeader>
        <div className="py-6 space-y-6">
          <div className="space-y-2">
            <label htmlFor="api-key" className="text-sm font-medium">
              Enter your Gemini API Key
            </label>
            <Input
              id="api-key"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Your Gemini API key"
            />
            <p className="text-xs text-muted-foreground">
              Get your API key from{" "}
              <a 
                href="https://aistudio.google.com/app/apikey" 
                target="_blank" 
                rel="noreferrer"
                className="text-teal underline"
              >
                Google AI Studio
              </a>
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button 
              onClick={saveApiKey}
              disabled={isTesting || !apiKey.trim()}
              className="bg-teal text-charcoal hover:bg-teal/90"
            >
              {isTesting ? "Testing..." : "Save & Test"}
              {!isTesting && <Check className="ml-1 h-4 w-4" />}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default APIKeyManager;
