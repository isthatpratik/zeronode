
import React from 'react';
import { Card } from '@/components/ui/card';
import FadeInSection from '@/components/FadeInSection';

const VisualizationSection = () => {
  return (
    <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
      <Card className="p-6 bg-charcoal/30 border-white/10">
        <div className="aspect-[16/9] relative mb-6">
          <img 
            src="/lovable-uploads/239bb8fa-e862-4366-944f-9abd7f5a9234.png"
            alt="AI Landscape Positioning Chart"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4">AI Industry Landscape Analysis</h2>
        <p className="text-muted-foreground">
          The visualization above maps NeuralArc's position relative to other solutions in the AI landscape. 
          The horizontal axis represents target customer size (SMB to Enterprise), while the vertical axis shows 
          solution scope (from single-point tools to integrated platforms).
        </p>
      </Card>
    </FadeInSection>
  );
};

export default VisualizationSection;
