
import React from 'react';
import { Card } from '@/components/ui/card';
import FadeInSection from '@/components/FadeInSection';
import { StyledCard } from '@/components/ui/styled-card';
import { SectionHeader } from '@/components/ui/section-header';

const VisualizationSection = () => {
  return (
    <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
      <StyledCard highlight>
        <SectionHeader 
          number="00" 
          title="AI Industry Landscape Analysis" 
          className="mb-8" 
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative aspect-square p-12 pt-0 lg:aspect-auto bg-charcoal/30 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/af0dd9e0-fac8-4703-ac3a-d0292015b485.png"
              alt="AI Landscape Positioning Chart"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              The visualization above maps NeuralArc's position relative to other solutions in the AI landscape. 
              The vertical axis represents solution scope (from single-point tools to integrated platforms), while 
              the horizontal axis shows target customer size (SMB to Enterprise).
            </p>
            <p className="text-muted-foreground">
              NeuralArc (orange X) sits in the upper-left quadrant – an integrated platform tailored to SMB/mid-market – 
              which is a sparsely occupied space. Traditional competitors cluster in other areas: enterprise-focused 
              platforms like Palantir and IBM Watson (upper right), point solutions like Jasper.ai (lower left), 
              and conventional tools like Tableau/PowerBI (lower right).
            </p>
            <p className="text-muted-foreground">
              This positioning highlights NeuralArc's unique value proposition: delivering enterprise-grade AI 
              capabilities in an SMB-friendly package, addressing a significant market gap.
            </p>
          </div>
        </div>
      </StyledCard>
    </FadeInSection>
  );
};

export default VisualizationSection;
