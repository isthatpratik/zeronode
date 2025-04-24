
import React from 'react';
import { Card } from '@/components/ui/card';
import FadeInSection from '@/components/FadeInSection';
import { SectionHeader } from '@/components/ui/section-header';
import { StyledCard } from '@/components/ui/styled-card';

const MarketSection = () => {
  return (
    <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
      <StyledCard>
        <SectionHeader number="01" title="Competitive Intelligence Tools (External Insights)" />
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Definition & Market</h3>
            <p className="text-muted-foreground mb-4">
              Competitive Intelligence (CI) tools enable companies to track competitor activities 
              and market trends to inform strategy. It's a niche but growing segment – valued at 
              only ~$495 million in 2025 and expected to reach $1.12 billion by 2032 (12.4% CAGR) 
              for dedicated CI software.
            </p>
            <p className="text-muted-foreground">
              However, the broader competitive intelligence and market research industry (including 
              services and data providers) is much larger, projected at ~$96 billion by 2030, 
              reflecting the extensive demand for actionable market insights.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Established Players</h3>
            <p className="text-muted-foreground mb-4">Traditional CI solutions fall into a few categories:</p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                <strong>Traditional Monitoring Platforms:</strong> e.g. Crayon, Klue, Kompyte – These track 
                competitors' digital footprints and alert companies to updates. They are effective for basic 
                monitoring but largely retrospective.
              </li>
              <li>
                <strong>Market Intelligence Services:</strong> e.g. CB Insights, Gartner, IDC – These firms 
                provide in-depth reports, industry analyses, and competitor profiles. They offer broad 
                perspective but typically in the form of periodic reports or static analyses.
              </li>
              <li>
                <strong>DIY Analytics:</strong> Some companies build their own competitive dashboards using 
                general tools like Tableau or Power BI with custom data feeds.
              </li>
              <li>
                <strong>Consulting & Research Firms:</strong> Strategy consulting firms often provide bespoke 
                competitive intelligence as a service. This yields strategic insights but is point-in-time and expensive.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">NeuralArc's ORB Platform Advantage</h3>
            <p className="text-muted-foreground mb-4">
              NeuralArc's ORB platform (Outlast, Reimagine, Build) is a next-generation competitive 
              intelligence solution built to overcome the above limitations. ORB introduces predictive 
              competitive intelligence powered by a neural network architecture.
            </p>
            <p className="text-muted-foreground mb-4">
              Instead of a "rearview mirror" on competitors, ORB constructs a multi-dimensional model to 
              forecast where competitors are heading. It continuously analyzes dozens of digital signals – 
              from social media sentiment to strategic job postings – in parallel using quantum-inspired algorithms.
            </p>
            <p className="text-muted-foreground">
              For SMBs, ORB delivers enterprise-grade CI capabilities that were previously out of reach. By 
              predicting competitor behavior and market shifts, SMBs can respond proactively rather than 
              reactively – gaining a significant strategic edge.
            </p>
          </div>
        </div>
      </StyledCard>
    </FadeInSection>
  );
};

export default MarketSection;
