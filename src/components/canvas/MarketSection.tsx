
import React from 'react';
import { Card } from '@/components/ui/card';
import FadeInSection from '@/components/FadeInSection';
import { SectionHeader } from '@/components/ui/section-header';

const MarketSection = () => {
  return (
    <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
      <Card className="p-8 bg-charcoal/30 border-white/10">
        <SectionHeader number="01" title="Competitive Intelligence Tools" />
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Definition & Market</h3>
            <p className="text-muted-foreground">
              Competitive Intelligence (CI) tools enable companies to track competitor activities 
              and market trends to inform strategy. It's a niche but growing segment – valued at 
              only ~$495 million in 2025 and expected to reach $1.12 billion by 2032 (12.4% CAGR) 
              for dedicated CI software.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">ORB Platform Advantage</h3>
            <p className="text-muted-foreground">
              NeuralArc's ORB platform introduces predictive competitive intelligence powered by 
              a neural network architecture. Instead of a "rearview mirror" on competitors, ORB 
              constructs a multi-dimensional model to forecast where competitors are heading.
            </p>
          </div>
        </div>
      </Card>
    </FadeInSection>
  );
};

export default MarketSection;
