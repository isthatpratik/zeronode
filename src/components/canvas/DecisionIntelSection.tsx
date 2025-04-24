
import React from 'react';
import { Card } from '@/components/ui/card';
import FadeInSection from '@/components/FadeInSection';
import { SectionHeader } from '@/components/ui/section-header';
import { StyledCard } from '@/components/ui/styled-card';

const DecisionIntelSection = () => {
  return (
    <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
      <StyledCard>
        <SectionHeader number="02" title="Decision Intelligence & Data Analytics (Internal Insights)" />
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Definition & Market</h3>
            <p className="text-muted-foreground mb-4">
              The second major arena is Decision Intelligence – leveraging AI and analytics to improve 
              internal business decision-making. This overlaps heavily with the large data analytics/Business 
              Intelligence (BI) market, which is expected to grow from about $82–94 billion in 2025 to 
              $402–483 billion by 2032.
            </p>
            <p className="text-muted-foreground">
              Within this space, a newer segment dubbed "augmented analytics" – essentially AI-enhanced 
              analytics for business users – is forecast to expand from $11.0 billion in 2024 to $60.1 
              billion by 2031, reflecting the demand for tools that go beyond dashboards to provide insights 
              and recommendations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Established Players</h3>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                <strong>Traditional BI & Analytics Tools:</strong> Tableau, Microsoft Power BI, Qlik, etc. 
                are widely used for data visualization and reporting. They help companies slice and dice 
                historical data and create dashboards. However, these tools are largely descriptive, not 
                prescriptive.
              </li>
              <li>
                <strong>Advanced Analytics & Data Science Tools:</strong> SAS, SPSS, R/Python – These offer 
                statistical and predictive analysis capabilities. Expert data scientists can use them to 
                build predictive models or run complex analyses.
              </li>
              <li>
                <strong>Enterprise AI/AutoML Platforms:</strong> DataRobot, H2O.ai, Dataiku and similar platforms 
                provide automated machine learning and AI model deployment for enterprises. They streamline 
                building predictive models without as much manual coding.
              </li>
              <li>
                <strong>Manual & Legacy Approaches:</strong> Some mid-sized firms still rely on Excel models, 
                manual reports, and intuition for decisions – highlighting the gap between what's technologically 
                possible and what smaller teams can operationalize.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">NeuralArc's NOD Platform Advantage</h3>
            <p className="text-muted-foreground mb-4">
              NeuralArc's NOD platform (Navigate, Optimize, Disrupt) is positioned as a holistic decision 
              acceleration engine. It leverages a massive 14.3 billion-parameter neural network decision 
              architecture to unify data across the business and generate rapid insights.
            </p>
            <p className="text-muted-foreground mb-4">
              NOD ingests data from everywhere – internal systems (CRM, ERP, marketing, supply chain, etc.), 
              unstructured docs and communications, even external datasets like economic indicators – and 
              synthesizes it into a real-time "cognitive map" for the business. This enables what NeuralArc 
              calls "decision velocity," or the ability to compress the time from data to decision.
            </p>
            <p className="text-muted-foreground">
              Importantly, NOD's design addresses SMB needs in several ways: it's adaptive and out-of-the-box 
              (so smaller firms don't need to build a data science team to get value), and it's modular 
              (able to connect to the tools a business already uses, rather than forcing a rip-and-replace).
            </p>
          </div>
        </div>
      </StyledCard>
    </FadeInSection>
  );
};

export default DecisionIntelSection;
