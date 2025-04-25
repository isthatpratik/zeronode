import React from 'react';
import { StyledCard } from '@/components/ui/styled-card';
import { SectionHeader } from '@/components/ui/section-header';
import FadeInSection from '@/components/FadeInSection';

const MicroSaasSection = () => {
  return (
    <FadeInSection className="mb-0">
      <StyledCard>
        <SectionHeader number="03" title="AI SaaS Tools and Micro Apps" />
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Definition & Market</h3>
            <p className="text-muted-foreground mb-4">
              This submarket refers to the plethora of AI-powered SaaS applications that have emerged to 
              tackle specific business tasks, often very targeted problems, using AI (including generative AI). 
              The past couple of years witnessed an explosion of these "micro AI tools", many of them fueled 
              by advances in large language models and readily available AI APIs.
            </p>
            <p className="text-muted-foreground">
              While hard to size as a single market (because they span domains from marketing to finance), 
              venture reports note that hundreds of AI micro startups have launched in niches across legal, 
              sales, HR, productivity, and more, collectively attracting significant investment.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Established Players</h3>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                <strong>Intelligence and Analytics Micro Tools:</strong> These include specialized apps like 
                AI-driven analytics or research assistants. For example, AlphaSense offers an AI-powered 
                market research search engine.
              </li>
              <li>
                <strong>Content and Marketing AI Tools:</strong> e.g. Jasper.ai, Copy.ai for copywriting, 
                Canva's Magic Write for design suggestions, or ChatGPT-based assistants for drafting emails 
                and content.
              </li>
              <li>
                <strong>Operations and Productivity Apps:</strong> e.g. Otter.ai for meeting transcription 
                and summaries, Motion (AI scheduling and task management), and AI plugins for project 
                management tools.
              </li>
              <li>
                <strong>Domain Specific AI SaaS:</strong> Many startups focus on one business domain: 
                Legal AI, HR AI, Finance AI, Compliance AI, etc.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">NeuralArc's Micro AI SaaS Suite</h3>
            <p className="text-muted-foreground mb-4">
              NeuralArc has deliberately developed a suite of micro AI applications that cover several 
              functional areas for businesses. Examples include: a Legal Contract Generator and Analyzer, 
              an AI-driven To-Do/Task management app, a Compliance Checker, an Investor Deck Analyzer, and 
              even a lightweight LLM platform (Rovyk) for custom language model queries.
            </p>
            <p className="text-muted-foreground mb-4">
              The strategic genius here is that NeuralArc isn't just selling these tools in isolation, it's 
              using them as entry points to a larger ecosystem. The micro tools can go viral and prove their 
              value in one domain, and as the customer's needs grow, NeuralArc can upsell or integrate them 
              into the broader ORB and NOD platforms.
            </p>
            <p className="text-muted-foreground">
              Already these micro-products contribute ~15% of NeuralArc's revenue and are growing 85% annually, 
              illustrating both their popularity and their role in driving broader adoption.
            </p>
          </div>
        </div>
      </StyledCard>
    </FadeInSection>
  );
};

export default MicroSaasSection;
