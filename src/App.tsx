import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Index from '@/pages/Index';
import Visualizations from '@/pages/Visualizations';
import ExecutiveSummary from '@/pages/ExecutiveSummary';
import OrbPlatform from '@/pages/OrbPlatform';
import NodPlatform from '@/pages/NodPlatform';
import InvestmentOpportunity from '@/pages/InvestmentOpportunity';
import Contact from '@/pages/Contact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MicroSaas from '@/pages/platforms/MicroSaas';
import MarketOverview from '@/pages/MarketOverview';
import FutureOutlook from '@/pages/FutureOutlook';
import Canvas from '@/pages/Canvas';
import WhitePaper from '@/pages/WhitePaper';
import Login from '@/pages/Login';
import ScrollToTop from '@/components/ScrollToTop';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import TermsOfUse from '@/pages/TermsOfUse';
import Disclaimer from '@/pages/Disclaimer';
import ResponsibleAI from '@/pages/ResponsibleAI';

const AppContent = () => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const isLoginPage = location.pathname === '/login';

  // Redirect authenticated users from login page to home
  if (!loading && user && isLoginPage) {
    return <Navigate to="/home" replace />;
  }

  // Show loading state while checking authentication
  if (loading) {
    return <div>Loading...</div>; // You might want to replace this with a proper loading component
  }

  return (
    <div className="min-h-screen bg-charcoal">
      <ScrollToTop />
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to={user ? "/home" : "/login"} replace />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <Index />
          </ProtectedRoute>
        } />
        <Route path="/visualizations" element={
          <ProtectedRoute>
            <Visualizations />
          </ProtectedRoute>
        } />
        <Route path="/executive-summary" element={
          <ProtectedRoute>
            <ExecutiveSummary />
          </ProtectedRoute>
        } />
        <Route path="/orb-platform" element={
          <ProtectedRoute>
            <OrbPlatform />
          </ProtectedRoute>
        } />
        <Route path="/nod-platform" element={
          <ProtectedRoute>
            <NodPlatform />
          </ProtectedRoute>
        } />
        <Route path="/investment-opportunity" element={
          <ProtectedRoute>
            <InvestmentOpportunity />
          </ProtectedRoute>
        } />
        <Route path="/market-overview" element={
          <ProtectedRoute>
            <MarketOverview />
          </ProtectedRoute>
        } />
        <Route path="/future-outlook" element={
          <ProtectedRoute>
            <FutureOutlook />
          </ProtectedRoute>
        } />
        <Route path="/contact" element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        } />
        <Route path="/platforms/micro-saas" element={
          <ProtectedRoute>
            <MicroSaas />
          </ProtectedRoute>
        } />
        <Route path="/canvas" element={
          <ProtectedRoute>
            <Canvas />
          </ProtectedRoute>
        } />
        <Route path="/white-paper" element={
          <ProtectedRoute>
            <WhitePaper />
          </ProtectedRoute>
        } />
        <Route path="/TermsOfUse" element={
          <ProtectedRoute>
            <TermsOfUse />
          </ProtectedRoute>
        } />
        <Route path="/Disclaimer" element={
          <ProtectedRoute>
            <Disclaimer />
          </ProtectedRoute>
        } />
        <Route path="/ResponsibleAI" element={
          <ProtectedRoute>
            <ResponsibleAI />
          </ProtectedRoute>
        } />
      </Routes>
      {!isLoginPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
};

export default App;
