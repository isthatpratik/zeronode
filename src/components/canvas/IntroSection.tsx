
import React from 'react';
import { Card } from '@/components/ui/card';
import FadeInSection from '@/components/FadeInSection';

const IntroSection = () => {
  return (
    <>
      <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
          NeuralArc's Position in the AI Landscape
        </h1>
        <p className="text-xl text-muted-foreground text-center max-w-4xl mx-auto">
          A comprehensive analysis of NeuralArc's strategic positioning in the AI industry,
          focusing on our unique value proposition for SMBs and enterprise clients.
        </p>
      </FadeInSection>

      <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
        <Card className="p-8 bg-charcoal/30 border-white/10">
          <h2 className="text-2xl font-bold mb-6">AI Landscape and the SMB Opportunity</h2>
          <p className="text-muted-foreground mb-6">
            Artificial Intelligence has become one of the fastest-growing technology sectors globally, 
            with the market projected to soar from roughly $750 billion in 2025 to over $3.68 trillion by 2034.
            This explosive growth is fueled by advancements in neural networks, data analytics, and enterprise AI adoption.
          </p>
          <p className="text-muted-foreground mb-6">
            Yet, a significant portion of AI's benefits have historically been captured by large enterprises 
            with the resources to implement complex AI systems. Small and mid-sized businesses (SMBs) are 
            only beginning to tap into AI, despite clear evidence of its value – 91% of SMBs using AI report 
            increased revenue.
          </p>
          <p className="text-muted-foreground mb-6">
            In fact, while over three-quarters of small businesses have adopted AI in some capacity, full adoption 
            among medium-sized firms remains around 20-21%. This gap between interest and implementation signals 
            a major opportunity: delivering enterprise-grade AI capabilities to the underserved SMB segment.
          </p>
          <p className="text-muted-foreground">
            NeuralArc squarely targets this white-space in the market. The company's offerings – the ORB platform 
            for competitive intelligence, the NOD platform for decision acceleration, and a suite of Micro AI SaaS 
            tools – are designed to "democratize" advanced neural intelligence for businesses of all sizes.
          </p>
        </Card>
      </FadeInSection>
    </>
  );
};

export default IntroSection;
