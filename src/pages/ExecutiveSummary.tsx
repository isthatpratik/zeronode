
import FadeInSection from "@/components/FadeInSection";
import CountUp from "@/components/CountUp";
import { Card, CardContent } from "@/components/ui/card";

const ExecutiveSummary = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Executive Summary</h1>
          
          <div className="mt-8 max-w-4xl">
            <p className="text-lg mb-6">
              NeuralArc is revolutionizing how enterprises process information and make strategic decisions through two complementary platforms: ORB (competitive intelligence) and NOD (decision intelligence). Our neural network architectures, developed over five years of R&D, offer significant advantages over traditional business intelligence approaches.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Market Opportunity</h2>
            <p>
              The global AI market size is projected to grow from $328.34 billion in 2021 to $1,394.30 billion in 2029 at a CAGR of 20.1%. Within this, the business intelligence segment is estimated at $25.82 billion in 2022, growing to $43.03 billion by 2028. NeuralArc's solutions target the enterprise segment of this market, focusing on Fortune 1000 companies and rapidly scaling mid-market enterprises ($250M-$1B revenue).
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Competitive Landscape</h2>
            <p>
              While there are numerous BI tools and an emerging class of AI-augmented analytics platforms, NeuralArc stands apart through its purpose-built neural architectures designed specifically for business applications. Unlike general-purpose AI platforms that require extensive customization, our solutions deliver immediate, specialized value in competitive intelligence and decision acceleration.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <FadeInSection delay={100}>
                <Card className="bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">ORB Platform Advantages</h3>
                    <ul className="space-y-2">
                      <li>• Quantum-inspired algorithms for predictive capability</li>
                      <li>• Pattern recognition across disparate data sources</li>
                      <li>• Adapts to industry-specific competitive dynamics</li>
                      <li>• <CountUp end={267} suffix="%" className="text-teal" /> improvement in early threat detection</li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">NOD Platform Advantages</h3>
                    <ul className="space-y-2">
                      <li>• <CountUp end={14.3} suffix="B" className="text-teal" /> parameters for complex decision modeling</li>
                      <li>• <CountUp end={74} suffix="%" className="text-teal" /> reduction in time from data to decision</li>
                      <li>• Integrates human expertise with neural processing</li>
                      <li>• Explainable AI for critical business decisions</li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Traction & Validation</h2>
            <p>
              NeuralArc has secured $18M in venture funding to date and has onboarded 75 enterprise clients across financial services, healthcare, manufacturing, and technology sectors. Notable clients include three Fortune 100 companies and partnerships with two of the Big Five consulting firms who now recommend our platforms to their clients.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Financial Projections</h2>
            <p>
              Revenue is projected to grow from $18M in 2024 to $240M by 2028 (90% CAGR), with gross margins expanding from 65% to 82% as we scale. Client acquisition costs are offset by a high LTV:CAC ratio of 7.8:1 and a net revenue retention of 135%, driven by our tiered pricing model and expanding use cases within client organizations.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Leadership</h2>
            <p>
              Our founding team combines expertise in neural networks (3 PhD researchers with over 40 published papers), enterprise software (executives from Oracle, Salesforce, and Palantir), and business intelligence (former McKinsey and BCG partners). This unique blend of technical and domain expertise has enabled us to build platforms that are both cutting-edge and deeply practical for enterprise applications.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Strategic Vision</h2>
            <p>
              NeuralArc aims to define the emerging category of Neural Business Intelligence—moving enterprises beyond traditional analytics to neural-powered systems that learn, adapt, and provide unprecedented competitive advantages. Our long-term vision is to become the neural layer for enterprise decision-making across all industries and functional areas.
            </p>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default ExecutiveSummary;
