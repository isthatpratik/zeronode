
import React from 'react';
import { StyledCard } from '@/components/ui/styled-card';
import { SectionHeader } from '@/components/ui/section-header';
import FadeInSection from '@/components/FadeInSection';

const WhitePaper = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Title Section */}
            <StyledCard highlight className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                NeuralArc – A Deep Dive into ORB, NOD, and the Micro AI SaaS Suite
              </h1>
            </StyledCard>

            {/* Executive Summary Section */}
            <section>
              <SectionHeader title="Executive Summary" />
              <StyledCard>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="prose prose-invert max-w-none">
                    <p>
                      NeuralArc is pioneering a neural intelligence platform that delivers enterprise-grade AI capabilities across businesses of all sizes. Its three product pillars – ORB (Outlast. Reimagine. Build.), NOD (Navigate. Optimize. Disrupt.), and a Micro AI SaaS product suite – form a cohesive ecosystem addressing external competitive insight, internal decision acceleration, and specialized AI micro-services.
                    </p>
                    <p>
                      From an investor perspective, NeuralArc sits at the intersection of multiple high-growth markets in AI. The global AI market is projected to surge from $757.58 billion in 2025 to $3.6 trillion by 2034, and venture funding is following suit (nearly 58% of global VC in Q1 2025 went to AI startups).
                    </p>
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/8d223397-fee5-4144-8368-af236b39e2b9.png" 
                      alt="Neural Decision Core Architecture"
                      className="w-full rounded-lg shadow-lg border border-white/10"
                    />
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      Neural Decision Core Architecture Diagram
                    </p>
                  </div>
                </div>
              </StyledCard>
            </section>

            {/* Market Landscape Section */}
            <section>
              <SectionHeader title="Market Landscape and Opportunity" />
              <StyledCard>
                <div className="prose prose-invert max-w-none">
                  <p>
                    The adoption of AI in business is reaching an inflection point. The global AI market is on track to grow at 19.2% CAGR, from $757.6B in 2025 to $3.68T by 2034, signaling unprecedented demand for AI-driven solutions.
                  </p>
                  <p>
                    NeuralArc's positioning squarely targets this need. It straddles two rapidly expanding segments: Competitive Intelligence Tools and Data Analytics/Decision Platforms.
                  </p>
                </div>
              </StyledCard>
            </section>

            {/* Additional sections can be added following the same pattern */}
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default WhitePaper;
