
import React from 'react';
import IntroSection from '@/components/canvas/IntroSection';
import VisualizationSection from '@/components/canvas/VisualizationSection';
import MarketSection from '@/components/canvas/MarketSection';
import DecisionIntelSection from '@/components/canvas/DecisionIntelSection';
import MicroSaasSection from '@/components/canvas/MicroSaasSection';
import WhitespaceSection from '@/components/canvas/WhitespaceSection';
import StrategicAdvantageSection from '@/components/canvas/StrategicAdvantageSection';
import SummarySection from '@/components/canvas/SummarySection';

const Canvas = () => {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-charcoal to-charcoal/90">
      <div className="grid-container">
        <IntroSection />
        <VisualizationSection />
        <MarketSection />
        <DecisionIntelSection />
        <MicroSaasSection />
        <WhitespaceSection />
        <StrategicAdvantageSection />
        <SummarySection />
      </div>
    </main>
  );
};

export default Canvas;
