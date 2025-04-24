
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { initAnimations } from "./scripts/animations";

import Index from "./pages/Index";
import ExecutiveSummary from "./pages/ExecutiveSummary";
import MarketOverview from "./pages/MarketOverview";
import OrbPlatform from "./pages/OrbPlatform";
import NodPlatform from "./pages/NodPlatform";
import InvestmentOpportunity from "./pages/InvestmentOpportunity";
import FutureOutlook from "./pages/FutureOutlook";
import Visualizations from "./pages/Visualizations";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-charcoal text-offwhite">
              <Header />
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/executive-summary" element={<ExecutiveSummary />} />
                  <Route path="/market-overview" element={<MarketOverview />} />
                  <Route path="/orb-platform" element={<OrbPlatform />} />
                  <Route path="/nod-platform" element={<NodPlatform />} />
                  <Route path="/investment-opportunity" element={<InvestmentOpportunity />} />
                  <Route path="/future-outlook" element={<FutureOutlook />} />
                  <Route path="/visualizations" element={<Visualizations />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
