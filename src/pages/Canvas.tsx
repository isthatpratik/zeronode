
import React from 'react';
import FadeInSection from '@/components/FadeInSection';
import { Card } from '@/components/ui/card';
import Image from '@/components/ui/image';

const Canvas = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
            NeuralArc's Position in the AI Landscape
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-4xl mx-auto mb-12">
            A comprehensive analysis of NeuralArc's strategic positioning in the AI industry,
            focusing on our unique value proposition for SMBs and enterprise clients.
          </p>
        </FadeInSection>

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

        <div className="col-span-4 md:col-span-8 lg:col-span-12">
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Introduction: AI Landscape and the SMB Opportunity</h2>
              <p>
                Artificial Intelligence has become one of the fastest-growing technology sectors globally, 
                with the market projected to soar from roughly $750 billion in 2025 to over $3.68 trillion by 2034.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Strategic Market Position</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6 bg-charcoal/30 border-white/10">
                  <h3 className="text-xl font-bold mb-4">Enterprise-Grade for SMBs</h3>
                  <p>
                    NeuralArc uniquely delivers enterprise-level AI capabilities in an 
                    SMB-friendly package, bridging the gap between powerful technology 
                    and accessible implementation.
                  </p>
                </Card>
                <Card className="p-6 bg-charcoal/30 border-white/10">
                  <h3 className="text-xl font-bold mb-4">Multi-Market Integration</h3>
                  <p>
                    Our solutions span multiple high-growth segments, from competitive 
                    intelligence to decision support, creating a comprehensive ecosystem 
                    for business intelligence.
                  </p>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Canvas;
