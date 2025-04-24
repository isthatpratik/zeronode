
import React from 'react';
import { Card } from '@/components/ui/card';
import FadeInSection from '@/components/FadeInSection';
import { StyledCard } from '@/components/ui/styled-card';
import { 
  ChartContainer,
  ChartLegend,
  ChartLegendContent
} from '@/components/ui/chart';

const VisualizationSection = () => {
  return (
    <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
      <StyledCard highlight>
        <div className="aspect-[16/9] relative mb-6">
          <img 
            src="/lovable-uploads/239bb8fa-e862-4366-944f-9abd7f5a9234.png"
            alt="AI Landscape Positioning Chart"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4">AI Industry Landscape Analysis</h2>
        <p className="text-muted-foreground mb-3">
          The visualization above maps NeuralArc's position relative to other solutions in the AI landscape. 
          The horizontal axis represents target customer size (SMB to Enterprise), while the vertical axis shows 
          solution scope (from single-point tools to integrated platforms).
        </p>
        <p className="text-muted-foreground">
          NeuralArc (orange X) sits in the upper-left quadrant – an integrated platform tailored to SMB/mid-market – 
          which is a sparsely occupied space. This highlights the white-space that NeuralArc fills, combining 
          capabilities in a way no single competitor currently does.
        </p>
      </StyledCard>
    </FadeInSection>
  );
};

export default VisualizationSection;
