
import FadeInSection from "@/components/FadeInSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CountUp from "@/components/CountUp";

const OrbPlatform = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">ORB Platform</h1>
          <p className="text-xl mt-4 text-muted-foreground">Outlast. Reimagine. Build.</p>
        </FadeInSection>
        
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12">
          <div className="max-w-5xl">
            <h2 className="text-2xl font-bold mb-4">Traditional Competitive Intelligence Limitations</h2>
            <p className="mb-6">
              Traditional competitive intelligence approaches suffer from several critical limitations that diminish their effectiveness in today's rapidly evolving business environment:
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span><span className="font-semibold">Data Fragmentation:</span> Valuable competitive intelligence is scattered across numerous sources—news, social media, financial reports, patents, academic research, and industry analyses—making comprehensive collection and analysis increasingly challenging.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span><span className="font-semibold">Analysis Limitations:</span> Human analysts can only process a fraction of available data, leading to inevitable blind spots and missed connections that could reveal emerging competitive threats or opportunities.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span><span className="font-semibold">Limited Predictive Capability:</span> Most competitive analysis remains retrospective rather than predictive, identifying trends after they've already begun to impact the market rather than anticipating emerging threats.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span><span className="font-semibold">Time-to-Insight Lag:</span> The time required to gather, process, and derive actionable insights from competitive data often exceeds the window of opportunity for effective response in fast-moving markets.</span>
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4">ORB Platform Overview</h2>
            <p className="mb-6">
              The ORB platform transforms competitive intelligence through proprietary neural architectures and quantum-inspired algorithms that identify patterns across disparate data sources, predict emerging competitive threats, and recommend strategic responses. Unlike traditional competitive intelligence tools that rely on historical analysis and human processing of limited data sets, ORB's neural architecture continuously analyzes vast amounts of structured and unstructured data to identify subtle patterns and connections that would be invisible to conventional approaches.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">Technical Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <FadeInSection delay={100}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-teal">Data Ingestion Layer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Connects to over 300 data sources through APIs and custom scrapers, processing both structured and unstructured data in 47 languages. Proprietary NLP models extract insights from unstructured text with 94% accuracy.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-teal">Neural Processing Core</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Utilizes a proprietary hybrid architecture combining transformer networks with quantum-inspired algorithms, enabling pattern recognition across seemingly unrelated data points and temporal analysis for predictive capabilities.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={300}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-teal">Intelligence Interface</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Adaptive UI presents insights in context-appropriate formats (visualizations, alerts, reports, recommendations) and integrates with existing enterprise workflow tools. Includes explainability features that make neural insights accessible to business users.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <h2 className="text-2xl font-bold mt-10 mb-6">Implementation Phases</h2>
            <Accordion type="single" collapsible className="mb-10">
              <FadeInSection delay={100}>
                <AccordionItem value="phase1" className="border-white/10">
                  <AccordionTrigger className="hover:text-teal">Phase 1: Initial Integration (4-6 weeks)</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 ml-6">
                      <li className="list-disc">Custom API connections to client data sources</li>
                      <li className="list-disc">Historical data ingestion and initial model training</li>
                      <li className="list-disc">Configuration of industry-specific parameters</li>
                      <li className="list-disc">User access and permission setup</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </FadeInSection>
              
              <FadeInSection delay={150}>
                <AccordionItem value="phase2" className="border-white/10">
                  <AccordionTrigger className="hover:text-teal">Phase 2: Neural Training (2-3 months)</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 ml-6">
                      <li className="list-disc">Supervised learning with client competitive intelligence team</li>
                      <li className="list-disc">Integration of proprietary client knowledge</li>
                      <li className="list-disc">Pattern recognition calibration</li>
                      <li className="list-disc">Initial insight generation and validation</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <AccordionItem value="phase3" className="border-white/10">
                  <AccordionTrigger className="hover:text-teal">Phase 3: Full Deployment (Ongoing)</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 ml-6">
                      <li className="list-disc">Continuous neural learning and refinement</li>
                      <li className="list-disc">Integration with strategic planning processes</li>
                      <li className="list-disc">Advanced predictive modeling activation</li>
                      <li className="list-disc">Executive dashboard customization</li>
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
                    <h3 className="text-xl font-semibold mb-3">Global Pharmaceutical Company</h3>
                    <p className="mb-4">
                      ORB identified early signals of a competitor's pivot to a new therapeutic area by correlating academic research publications, patent filings, talent movement, and changes in research partnerships—all before any public announcement. This provided an 8-month early warning that enabled strategic countermeasures.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Result: Preserved $430M in annual revenue that would have been at risk and accelerated related R&D initiative by 14 months.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Financial Services Institution</h3>
                    <p className="mb-4">
                      ORB analyzed patterns across consumer behavior, regulatory discussions, and fintech innovations to predict emerging competitive threats from non-traditional banking entities. This enabled the client to launch a preemptive digital transformation initiative.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Result: Retained 82% of at-risk customers representing $1.2B in assets under management and developed new revenue streams worth $37M annually.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">Competitive Landscape</h2>
            <p className="mb-6">
              While several solutions exist in the competitive intelligence space, ORB differentiates itself through:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <FadeInSection delay={100}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Neural Architecture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Unlike tools that rely on keyword monitoring or simple trend analysis, ORB's neural architecture identifies non-obvious connections and patterns across disparate data sources.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={150}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Predictive Capability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Most competitive intelligence tools are retrospective, analyzing what has already happened. ORB's quantum-inspired algorithms enable predictive analysis of emerging threats and opportunities.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Integration Depth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      ORB integrates deeply with client data sources and systems, creating a customized neural network specific to each client's competitive environment, rather than providing generic insights.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={250}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Strategic Focus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      While many tools focus on tactical monitoring, ORB is designed specifically for strategic competitive intelligence, with features that connect directly to strategic planning and decision processes.
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
                      <CountUp end={267} suffix="%" />
                    </h3>
                    <p className="text-sm">Improvement in early threat detection</p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="text-center bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-5xl font-bold text-teal mb-2">
                      <CountUp end={58} suffix="%" />
                    </h3>
                    <p className="text-sm">More strategic opportunities identified</p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={300}>
                <Card className="text-center bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-5xl font-bold text-teal mb-2">
                      <CountUp end={4.2} suffix="x" decimals={1} />
                    </h3>
                    <p className="text-sm">Average ROI within first 12 months</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default OrbPlatform;
