
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/';

  return (
    <div className="min-h-screen bg-charcoal">
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Index />} />
        <Route path="/visualizations" element={<Visualizations />} />
        <Route path="/executive-summary" element={<ExecutiveSummary />} />
        <Route path="/orb-platform" element={<OrbPlatform />} />
        <Route path="/nod-platform" element={<NodPlatform />} />
        <Route path="/investment-opportunity" element={<InvestmentOpportunity />} />
        <Route path="/market-overview" element={<MarketOverview />} />
        <Route path="/future-outlook" element={<FutureOutlook />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/platforms/micro-saas" element={<MicroSaas />} />
        <Route path="/canvas" element={<Canvas />} />
        <Route path="/white-paper" element={<WhitePaper />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
