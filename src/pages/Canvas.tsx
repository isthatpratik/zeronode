
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
    <main className="min-h-screen bg-gradient-to-b from-charcoal to-charcoal/90">
      <div className="pt-24 pb-16">
        <div className="grid-container">
          <div className="col-span-4 md:col-span-8 lg:col-span-12">
            <IntroSection />
            <VisualizationSection />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MarketSection />
              <DecisionIntelSection />
              <MicroSaasSection />
              <WhitespaceSection />
              <StrategicAdvantageSection />
              <SummarySection />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Canvas;
