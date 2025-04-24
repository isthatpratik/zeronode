import React from 'react';
import { Card } from '@/components/ui/card';
import FadeInSection from '@/components/FadeInSection';
import { SectionHeader } from '@/components/ui/section-header';
import { StyledCard } from '@/components/ui/styled-card';

const StrategicAdvantageSection = () => {
  const advantages = [
    {
      title: "Multi-Segment Presence",
      description: "NeuralArc isn't confined to one silo of the AI market; it sits at the nexus of multiple high-growth segments – notably the competitive intelligence market and the data analytics/decision market."
    },
    {
      title: "Integrated Solution with Viral On-ramps", 
      description: "Unlike competitors that offer either a big platform or a single app, NeuralArc has created a pipeline for customer adoption. The accessible micro-apps draw users in with quick ROI on a small scale, while the enterprise-grade ORB and NOD platforms provide a natural progression path."
    },
    {
      title: "Enterprise-Grade Tech, SMB-Friendly Delivery",
      description: "NeuralArc's neural architecture – including things like the 14B-parameter model and quantum-inspired algorithms – is cutting-edge by any standard. What's impressive is the team's ability to package this power into solutions that don't require an army of consultants to deploy."
    },
    {
      title: "First-Mover in \"Neural Intelligence for SMBs\"", 
      description: "The concept of neural intelligence – AI that mimics brain-like synthesis of disparate info – is at the cutting edge of AI research. NeuralArc is effectively pioneering this concept in the business arena, especially for smaller firms."
    },
    {
      title: "Market Tailwinds",
      description: "Investors are pouring money into AI startups (nearly 58% of global VC in Q1 2025 went to AI companies), especially those showing real revenue and traction. NeuralArc's traction in both ARR growth and customer expansion positions it well in this funding climate."
    }
  ];

  return (
    <FadeInSection className="mb-0">
      <StyledCard>
        <SectionHeader number="05" title="Strategic Advantage and Market Opportunity" className="mb-8" />
        
        <div className="space-y-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="pb-6 border-b border-white/10 last:border-0 last:pb-0">
              <h3 className="text-xl font-semibold mb-3 text-teal">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-muted-foreground">
            A retail chain saw $14M in savings and 37% marketing ROI lift using NOD, results that speak 
            to the power of NeuralArc's approach. With 92% of companies planning to boost AI investment 
            in the next three years, even cost-conscious mid-market firms are seeking where to invest – 
            and NeuralArc's ROI stories make a strong case.
          </p>
        </div>
      </StyledCard>
    </FadeInSection>
  );
};

export default StrategicAdvantageSection;
