
import React from 'react';
import IntroSection from '@/components/canvas/IntroSection';
import VisualizationSection from '@/components/canvas/VisualizationSection';
import MarketSection from '@/components/canvas/MarketSection';

const Canvas = () => {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-charcoal to-charcoal/90">
      <div className="grid-container">
        <IntroSection />
        <VisualizationSection />
        <MarketSection />
      </div>
    </main>
  );
};

export default Canvas;
