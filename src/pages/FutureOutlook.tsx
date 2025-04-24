
import FadeInSection from "@/components/FadeInSection";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const FutureOutlook = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Future Outlook</h1>
        </FadeInSection>
        
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">Vision: The Neural Enterprise</h2>
            <p className="mb-6">
              NeuralArc envisions a future where enterprises leverage neural architectures across all critical functions, creating organizations that learn, adapt, and evolve more rapidly than traditionally possible. We refer to this as "The Neural Enterprise" — a company whose competitive intelligence, decision-making, and operational processes are enhanced and accelerated by purpose-built neural networks.
            </p>
            
            <p className="mb-10">
              While general artificial intelligence has made significant advances, the enterprise space requires specialized neural architectures designed explicitly for business contexts. NeuralArc's mission is to build these purpose-built neural layers that integrate with existing enterprise systems while delivering transformative capabilities beyond what general-purpose AI can provide.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-6">Product Roadmap</h2>
            <div className="relative border-l-2 border-teal pl-8 mb-12">
              <div className="mb-12">
                <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full bg-teal"></div>
                <h3 className="text-xl font-bold mb-2">2024-2025: Vertical Expansion</h3>
                <p className="mb-4">
                  Developing industry-specific neural modules for key verticals (financial services, healthcare, manufacturing, technology) that incorporate domain-specific knowledge, regulatory contexts, and competitive dynamics.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-charcoal/30 border-white/10">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Financial Risk Intelligence</h4>
                      <p className="text-sm">Specialized neural modules for financial institutions to identify emerging systemic risks and market anomalies.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-charcoal/30 border-white/10">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Healthcare Innovation Radar</h4>
                      <p className="text-sm">Neural monitoring of research publications, clinical trials, and regulatory developments to identify breakthrough therapeutic approaches.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="mb-12">
                <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full bg-teal"></div>
                <h3 className="text-xl font-bold mb-2">2025-2026: Functional Intelligence</h3>
                <p className="mb-4">
                  Expanding beyond competitive intelligence and decision support to neural-powered modules for specific business functions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-charcoal/30 border-white/10">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Neural Supply Chain</h4>
                      <p className="text-sm">Predictive optimization of supply chains, incorporating geopolitical risks, climate events, and demand fluctuations with greater accuracy than traditional forecasting.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-charcoal/30 border-white/10">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Neural R&D Accelerator</h4>
                      <p className="text-sm">Identification of promising research directions and innovation opportunities through analysis of patents, academic publications, and emerging technologies.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full bg-teal"></div>
                <h3 className="text-xl font-bold mb-2">2026-2028: Neural Enterprise Platform</h3>
                <p className="mb-4">
                  Integration of all neural modules into a unified platform that enables seamless information flow and coordinated intelligence across the enterprise.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-charcoal/30 border-white/10">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Enterprise Neural Fabric</h4>
                      <p className="text-sm">Cross-functional neural architecture that connects insights and decisions across traditionally siloed business units.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-charcoal/30 border-white/10">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Organizational Learning Engine</h4>
                      <p className="text-sm">System for capturing, distributing, and applying organizational knowledge and decision patterns across the enterprise.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Emerging Applications</h2>
            <p className="mb-6">
              Our research teams are already exploring several promising applications that extend our core neural architectures into new domains:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <FadeInSection delay={100}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <div className="text-teal mb-3">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Scenario Simulation</h3>
                    <p className="text-sm">
                      Neural architectures for modeling complex business scenarios with thousands of variables, enabling executives to test strategic decisions in high-fidelity simulated environments before real-world implementation.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <div className="text-teal mb-3">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Collaborative Intelligence</h3>
                    <p className="text-sm">
                      Systems that optimize human-AI collaboration across teams, adapting to individual cognitive styles and expertise areas to maximize collective intelligence and minimize cognitive biases.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={300}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <div className="text-teal mb-3">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Ecosystem Intelligence</h3>
                    <p className="text-sm">
                      Neural networks that analyze entire business ecosystems, identifying emerging partnership opportunities, potential disruptors, and optimal positioning within evolving industry structures.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Industry Transformation Vectors</h2>
            <p className="mb-6">
              Several key industry trends converge to create the opportunity for NeuralArc's vision:
            </p>
            
            <div className="space-y-6 mb-10">
              <FadeInSection delay={100}>
                <Card className="bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Decision Velocity as Competitive Advantage</h3>
                    <p>
                      In increasingly dynamic markets, the speed of high-quality decision-making has become a primary competitive differentiator. Organizations that can rapidly sense, analyze, decide, and act enjoy significant advantages in capturing opportunities and responding to threats. This trend is accelerating across all industries, with decision velocity emerging as a core metric for organizational performance.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Complexity Exceeding Human Capacity</h3>
                    <p>
                      The growing interconnectedness of global markets, supply chains, and information flows has created levels of complexity that exceed human cognitive capacity. Traditional analysis and decision-making approaches struggle to account for the exponential increase in variables and their interdependencies. Neural architectures specifically designed to handle this complexity will become essential for effective business operations.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={300}>
                <Card className="bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Enterprise AI Specialization</h3>
                    <p>
                      While general-purpose AI has seen tremendous advances, the enterprise space increasingly demands specialized architectures designed for specific business contexts and use cases. The next wave of enterprise AI will move beyond generic capabilities to purpose-built systems that integrate deeply with domain-specific knowledge and enterprise processes.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Creating the Neural Enterprise</h2>
            <p className="mb-6">
              The full realization of the Neural Enterprise represents a transformation similar in scope to the digitization of business processes over the past three decades. Just as companies evolved from isolated digital tools to integrated enterprise systems, we envision evolution from isolated AI applications to integrated neural architectures that fundamentally change how organizations sense, decide, and act.
            </p>
            
            <p className="mb-6">
              This transformation will occur in stages:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <FadeInSection delay={100}>
                <Card className="bg-charcoal/30 border-white/10 relative h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-teal"></div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Phase 1: Neural Augmentation</h3>
                    <p className="text-sm">
                      Neural systems augment existing business processes, providing enhanced intelligence and decision support while operating alongside traditional approaches. This is where most enterprises are today or will be in the near term.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="bg-charcoal/30 border-white/10 relative h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-teal"></div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Phase 2: Neural Integration</h3>
                    <p className="text-sm">
                      Neural capabilities become integrated across multiple business functions, with information and insights flowing between previously siloed neural systems. This creates network effects within the organization as neural modules enhance each other's capabilities.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={300}>
                <Card className="bg-charcoal/30 border-white/10 relative h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-teal"></div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Phase 3: Neural Transformation</h3>
                    <p className="text-sm">
                      The enterprise reconfigures its core processes around neural capabilities, leading to fundamentally new organizational structures, decision patterns, and competitive strategies that would be impossible without neural architectures.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Conclusion</h2>
            <p className="mb-4">
              NeuralArc's vision extends beyond our current platforms to a future where neural architectures transform every aspect of enterprise operation. The ORB and NOD platforms represent our first steps toward this vision — purpose-built neural systems that deliver immediate value while establishing the foundation for the broader neural transformation of the enterprise.
            </p>
            
            <p>
              By focusing specifically on business applications of neural technology rather than general-purpose AI, we are positioning NeuralArc to lead this transformation, creating substantial value for our clients and shareholders while defining an emerging category that we believe will become a foundational element of enterprise technology over the coming decade.
            </p>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default FutureOutlook;
