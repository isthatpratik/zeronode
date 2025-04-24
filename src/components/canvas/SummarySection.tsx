import React from 'react';
import { Card } from '@/components/ui/card';
import FadeInSection from '@/components/FadeInSection';
import { SectionHeader } from '@/components/ui/section-header';
import { StyledCard } from '@/components/ui/styled-card';

const SummarySection = () => {
  return (
    <FadeInSection className="mb-0">
      <StyledCard>
        <SectionHeader number="06" title="Summary" />
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            NeuralArc occupies a unique and highly strategic position in the AI landscape, especially 
            regarding the SMB market segment. It offers a blend of capabilities that no single competitor 
            matches, effectively creating a new category of neural intelligence platforms that deliver 
            enterprise-level insight in an SMB-friendly package.
          </p>
          
          <p className="text-muted-foreground">
            By highlighting submarkets like competitive intelligence and decision support – and showing how 
            NeuralArc transcends their traditional limitations – this industry canvas demonstrates the 
            substantial market opportunity for NeuralArc. The white-space it fills is both real and large: 
            as SMBs worldwide continue to adopt AI, they will need solutions that are powerful yet practical. 
            NeuralArc is poised to be that solution, leveraging its head start and integrated vision.
          </p>
          
          <p className="text-muted-foreground">
            For investors, this means NeuralArc isn't just another AI SaaS company; it's a potential 
            category leader that can capture pent-up demand in a largely untapped segment. With the AI 
            sector's growth continuing at over 30% CAGR and billions flowing into it, NeuralArc's focus 
            on SMBs with viral micro-apps and neural enterprise engines gives it both defensible 
            differentiation and scalability.
          </p>
          
          <p className="text-muted-foreground">
            It transforms the fragmented competitive landscape into a cohesive offering under one roof, 
            which is a narrative that resonates strongly when assessing long-term winners in tech. In the 
            arc of the AI industry's evolution, NeuralArc is bending it toward inclusive, neural-driven 
            intelligence – and that is a compelling story in the market today.
          </p>
          
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-sm text-muted-foreground italic">
              <strong>Sources:</strong> Industry reports and analyst data were used to substantiate market sizes and trends 
              (e.g. Precedence Research via GlobeNewswire for global AI market, Coherent Market Insights for 
              CI tools market). Competitive landscapes are drawn from known players and categories, with 
              NeuralArc's own documentation highlighting differentiation in CI and decision platforms. SMB adoption 
              statistics come from recent surveys (Salesforce and others).
            </p>
          </div>
        </div>
      </StyledCard>
    </FadeInSection>
  );
};

export default SummarySection;
