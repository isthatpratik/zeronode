import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  disclaimerAccepted: boolean;
  loading: boolean;
  user: any | null;
  acceptDisclaimer: () => void;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated and has accepted disclaimer
    const auth = localStorage.getItem('isAuthenticated');
    const disclaimer = localStorage.getItem('disclaimerAccepted');
    if (auth === 'true') {
      setIsAuthenticated(true);
      setUser({ id: auth }); // Set a basic user object
      if (disclaimer === 'true') {
        setDisclaimerAccepted(true);
      }
    }
    setLoading(false);
  }, []);

  const acceptDisclaimer = () => {
    setDisclaimerAccepted(true);
    localStorage.setItem('disclaimerAccepted', 'true');
  };

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      // Your authentication logic here
      setIsAuthenticated(true);
      setUser({ email }); // Set user with email
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/home'); // Navigate to home after successful sign in
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    setIsAuthenticated(false);
    setDisclaimerAccepted(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('disclaimerAccepted');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      disclaimerAccepted,
      loading,
      user,
      acceptDisclaimer,
      signIn, 
      signOut 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 