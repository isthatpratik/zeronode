import React from 'react';
import { Card } from '@/components/ui/card';
import FadeInSection from '@/components/FadeInSection';
import { SectionHeader } from '@/components/ui/section-header';
import { StyledCard } from '@/components/ui/styled-card';

const WhitespaceSection = () => {
  return (
    <FadeInSection className="mb-0">
      <StyledCard>
        <SectionHeader number="04" title="AI Solutions for SMBs The White Space and NeuralArc's Niche" />
        <div className="space-y-6">
          <div>
            <p className="text-muted-foreground mb-4">
              This final category is more conceptual: it's about integrated AI solutions tailored for SMB needs. 
              Historically, most integrated AI or BI systems were targeted at large enterprises or specific 
              verticals (e.g. retail analytics, finance AI). SMBs have either used slimmed down versions of 
              enterprise software or a patchwork of separate SaaS tools.
            </p>
            <p className="text-muted-foreground">
              There remains a "white space": a comprehensive AI partner for SMBs that delivers multiple 
              capabilities (external intel, internal analytics, automation) in one package, without the heavy 
              implementation burden.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Adjacent Players</h3>
            <p className="text-muted-foreground mb-4">
              Some notable adjacent players hint at this direction: Zoho, a software suite popular with small 
              businesses, has integrated an AI assistant ("Zia") across its CRM, email, and finance tools, 
              aiming to give SMBs intelligent insights within an affordable suite.
            </p>
            <p className="text-muted-foreground">
              Similarly, Microsoft and Google are embedding AI (copilots, chatbots) across their productivity 
              and cloud offerings, which many SMBs use. Emerging startups like Levity AI or Akkio also target 
              this gap, providing simpler UIs for AI-powered automation. However, these solutions typically cover 
              a slice of what a business might need.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">NeuralArc's Holistic Advantage</h3>
            <p className="text-muted-foreground mb-4">
              This is where NeuralArc's holistic approach truly stands out as a strategic advantage. By design, 
              NeuralArc straddles multiple submarkets: it's simultaneously a Competitive Intelligence platform (ORB), 
              a Decision Intelligence platform (NOD), and a provider of AI micro services (the SaaS suite), all 
              tailored to be accessible to the mid-market.
            </p>
            <p className="text-muted-foreground mb-4">
              In doing so, NeuralArc occupies a unique position that competitors have left largely unfilled: an 
              integrated "neural intelligence" solution for SMBs. It essentially gives a smaller company the 
              capability to run with the big dogs in terms of intelligence and agility.
            </p>
            <p className="text-muted-foreground">
              NeuralArc's sweet spot is in between: delivering enterprise-grade AI breadth with SMB-friendly 
              delivery. This white space is a massive opportunity, consider that 77% of small businesses have 
              adopted some form of AI (often simple tools), indicating openness to AI, but very few have an 
              integrated strategy or platform.
            </p>
          </div>
        </div>
      </StyledCard>
    </FadeInSection>
  );
};

export default WhitespaceSection;
