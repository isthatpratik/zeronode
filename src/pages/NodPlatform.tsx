
import FadeInSection from "@/components/FadeInSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CountUp from "@/components/CountUp";

const NodPlatform = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">NOD Platform</h1>
          <p className="text-xl mt-4 text-muted-foreground">Navigate. Optimize. Disrupt.</p>
        </FadeInSection>
        
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">Decision Paralysis in the Age of Big Data</h2>
            <p className="mb-6">
              The exponential growth in available data has paradoxically slowed decision-making in many enterprises. As teams struggle to integrate and prioritize information from disparate sources and systems, the "time-to-decision" extends beyond the window of opportunity. This decision paralysis creates tangible business costs:
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span><span className="font-semibold">Opportunity Costs:</span> In fast-moving markets, delayed decisions directly translate to missed opportunities, with each week of delay reducing the potential value capture by an average of 11%.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span><span className="font-semibold">Resource Drain:</span> Extended decision processes consume disproportionate executive bandwidth and organizational resources that could be deployed toward execution.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span><span className="font-semibold">Analysis Paralysis:</span> The pursuit of perfect information often leads to diminishing returns, with each additional week of analysis typically yielding less than 2% improvement in decision quality.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span><span className="font-semibold">Competitive Disadvantage:</span> Organizations that can make high-quality decisions faster gain significant advantages in product development, market entry, talent acquisition, and strategic pivots.</span>
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-6">The 14.3 Billion Parameter Advantage</h2>
            <p className="mb-8">
              The NOD platform leverages a proprietary 14.3 billion-parameter neural architecture specifically designed to accelerate enterprise decision-making while improving decision quality. Unlike general-purpose large language models, NOD's architecture is purpose-built for complex business decisions with specialized parameters for:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <FadeInSection delay={100}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-teal">Temporal Reasoning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      3.2 billion parameters dedicated to understanding time-dependent factors, trend analysis, and future projections, enabling accurate forecasting of decision outcomes across multiple time horizons.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={150}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-teal">Multi-Domain Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      4.8 billion parameters that enable the platform to contextualize information across traditionally siloed domains (finance, operations, marketing, R&D, etc.) for truly integrated decision support.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-teal">Uncertainty Modeling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      2.7 billion parameters dedicated to quantifying uncertainties, identifying critical assumptions, and modeling potential outcomes across multiple scenarios to improve decision robustness.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={250}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-teal">Human-AI Collaboration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      3.6 billion parameters focused on integrating human expertise, preferences, and judgment with neural processing to create decisions that combine the best of both human and artificial intelligence.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">Technical Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <FadeInSection delay={100}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-teal">Enterprise Data Mesh</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Connects to enterprise data sources through 200+ pre-built connectors, integrating structured and unstructured data while maintaining governance and security. Proprietary data harmonization engine resolves conflicts and inconsistencies across sources.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-teal">Neural Decision Core</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      14.3 billion parameter architecture optimized for decision intelligence, combining transformer networks with proprietary uncertainty quantification algorithms and causal inference models to support robust decision-making under complex conditions.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={300}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-teal">Decision Interface</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Collaborative workspace that makes complex neural processing accessible and actionable for decision-makers. Features interactive scenario modeling, assumption testing, and decision visualization tools designed for both individual and team decision processes.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <h2 className="text-2xl font-bold mt-10 mb-6">Implementation Phases</h2>
            <Accordion type="single" collapsible className="mb-10">
              <FadeInSection delay={100}>
                <AccordionItem value="phase1" className="border-white/10">
                  <AccordionTrigger className="hover:text-teal">Phase 1: Decision Mapping (3-4 weeks)</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 ml-6">
                      <li className="list-disc">Assessment of current decision processes and bottlenecks</li>
                      <li className="list-disc">Data source identification and connection planning</li>
                      <li className="list-disc">Decision domain prioritization and roadmap development</li>
                      <li className="list-disc">Success metrics definition and baseline measurement</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </FadeInSection>
              
              <FadeInSection delay={150}>
                <AccordionItem value="phase2" className="border-white/10">
                  <AccordionTrigger className="hover:text-teal">Phase 2: Neural Configuration (6-8 weeks)</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 ml-6">
                      <li className="list-disc">Enterprise data integration and quality assurance</li>
                      <li className="list-disc">Domain-specific neural module configuration</li>
                      <li className="list-disc">Decision template development for priority use cases</li>
                      <li className="list-disc">Initial training with historical decisions and outcomes</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <AccordionItem value="phase3" className="border-white/10">
                  <AccordionTrigger className="hover:text-teal">Phase 3: Decision Acceleration (Ongoing)</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 ml-6">
                      <li className="list-disc">Parallel decision processes (traditional + NOD) with comparison</li>
                      <li className="list-disc">Continuous neural refinement based on decision outcomes</li>
                      <li className="list-disc">Expansion to additional decision domains and use cases</li>
                      <li className="list-disc">Advanced feature activation (scenario modeling, risk quantification)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </FadeInSection>
            </Accordion>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <FadeInSection delay={100}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Manufacturing Conglomerate</h3>
                    <p className="mb-4">
                      NOD reduced the time required for major capital allocation decisions from 16 weeks to 4 weeks while improving the accuracy of ROI projections by 34%. The platform identified non-obvious synergies between business units that traditional analysis had missed.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Result: $1.2B in capital deployed more effectively, with projected 5-year ROI improvement of 27%.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Healthcare Provider Network</h3>
                    <p className="mb-4">
                      NOD transformed patient care pathway optimization, analyzing millions of patient journeys to identify bottlenecks and improvement opportunities. Decision time reduced from months to days, with implementation of changes accelerated by 63%.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Result: 17% improvement in patient outcomes and $43M annual cost reduction across the network.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">Competitive Landscape</h2>
            <p className="mb-6">
              While several solutions address aspects of decision intelligence, NOD differentiates itself through:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <FadeInSection delay={100}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Parameter Scale & Specialization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      NOD's 14.3B parameters are specifically optimized for business decision processes, unlike general-purpose AI models or analytics platforms adapted to decision support as a secondary use case.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={150}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Human-Neural Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Rather than replacing human decision-makers or merely providing recommendations, NOD is designed for deep collaboration between human expertise and neural processing throughout the decision process.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Enterprise Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      NOD integrates deeply with enterprise systems and processes rather than functioning as a standalone tool, becoming embedded in the organization's decision fabric.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={250}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Uncertainty Intelligence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      While most tools focus on providing single-point predictions or recommendations, NOD explicitly models uncertainties, quantifies risks, and supports robust decision-making under conditions of incomplete information.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">ROI Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <FadeInSection delay={100}>
                <Card className="text-center bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-5xl font-bold text-teal mb-2">
                      <CountUp end={74} suffix="%" />
                    </h3>
                    <p className="text-sm">Reduction in time from data to decision</p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="text-center bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-5xl font-bold text-teal mb-2">
                      <CountUp end={31} suffix="%" />
                    </h3>
                    <p className="text-sm">Improvement in decision accuracy</p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={300}>
                <Card className="text-center bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-5xl font-bold text-teal mb-2">
                      <CountUp end={5.7} suffix="x" decimals={1} />
                    </h3>
                    <p className="text-sm">Average ROI within first 12 months</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <div className="mt-12 bg-charcoal/30 border-white/10 p-6 rounded-lg">
              <blockquote className="mb-4 text-lg italic">
                "The NOD platform has fundamentally changed how we make strategic decisions. What used to take us months of analysis now happens in weeks, and the quality of outcomes has improved substantially. It's as if we've acquired a superpower that lets us see connections and opportunities that were previously invisible."
              </blockquote>
              <p className="font-semibold">— Chief Operating Officer, Global Logistics Company</p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default NodPlatform;
