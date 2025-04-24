import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, Lock, Key } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { toast } = useToast();

  // Generate captcha on component mount
  React.useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaCode(result);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (captcha !== captchaCode) {
      toast({
        title: "Invalid Captcha",
        description: "Please enter the correct captcha code",
        variant: "destructive",
      });
      generateCaptcha();
      setCaptcha('');
      return;
    }

    try {
      setIsLoading(true);
      await signIn(email, password);
      // Navigation will be handled by the AuthProvider when the user state changes
    } catch (error: any) {
      console.error('Login error:', error);
      toast({
        title: "Login Failed",
        description: error.message || "Invalid email or password",
        variant: "destructive",
      });
      generateCaptcha();
      setCaptcha('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center">
      <div className="w-full max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/3cbb6750-3d48-45e8-b9ea-498f6527d80e.png" 
            alt="NeuralArc Logo" 
            className="h-10 mx-auto mb-4"
          />
        </div>

        <div className="bg-charcoal/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 shadow-xl">
          <h2 className="text-xl font-space font-semibold text-offwhite mb-6 text-center">
            Sign In
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-offwhite/80 block">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="pl-10"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-offwhite/80 block">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="pl-10"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="captcha" className="text-sm text-offwhite/80 block">
                Enter Captcha Code
              </label>
              <div className="bg-white/5 border border-white/10 rounded p-3 text-center mb-2">
                <span className="font-mono text-xl tracking-widest text-teal select-none">
                  {captchaCode}
                </span>
              </div>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="captcha"
                  type="text"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value.toUpperCase())}
                  placeholder="Enter the code above"
                  className="pl-10"
                  required
                  disabled={isLoading}
                />
              </div>
              <button
                type="button"
                onClick={generateCaptcha}
                className="text-xs text-teal hover:underline mt-1"
                disabled={isLoading}
              >
                Refresh Captcha
              </button>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
