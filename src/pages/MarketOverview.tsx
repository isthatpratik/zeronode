
import FadeInSection from "@/components/FadeInSection";
import { Card, CardContent } from "@/components/ui/card";
import CountUp from "@/components/CountUp";
import ChartComponent from "@/components/ChartComponent";

// Chart data
const marketGrowthData = {
  labels: ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
  datasets: [
    {
      label: 'Global AI Market Size ($B)',
      data: [328.34, 422.37, 540.29, 634.92, 757.58, 901.28, 1079.52, 1213.39, 1394.30],
      borderColor: '#28D9D9',
      backgroundColor: 'rgba(40, 217, 217, 0.2)',
      tension: 0.4,
      fill: true
    }
  ]
};

const biSegmentData = {
  labels: ['2022', '2023', '2024', '2025', '2026', '2027', '2028'],
  datasets: [
    {
      label: 'Business Intelligence Market ($B)',
      data: [25.82, 28.92, 32.40, 35.82, 38.54, 40.89, 43.03],
      backgroundColor: '#28D9D9',
    }
  ]
};

const MarketOverview = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Market Overview</h1>
        </FadeInSection>
        
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">Artificial Intelligence Market</h2>
            <p className="mb-6">
              The global artificial intelligence market is experiencing unprecedented growth, projected to expand from $328.34 billion in 2021 to $1,394.30 billion by 2029, representing a compound annual growth rate (CAGR) of 20.1%. This growth is driven by increasing adoption across industries, advancements in deep learning technologies, and the growing recognition of AI's transformative potential in enterprise operations.
            </p>
            
            <FadeInSection delay={100} className="my-8">
              <ChartComponent 
                type="line" 
                data={marketGrowthData} 
                title="Global AI Market Growth Projection (2021-2029)"
                caption="Source: Fortune Business Insights, Global Market Analysis"
              />
            </FadeInSection>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Business Intelligence Segment</h2>
            <p className="mb-6">
              Within the broader AI market, the business intelligence segment represents a significant opportunity, valued at $25.82 billion in 2022 and expected to reach $43.03 billion by 2028. This segment is growing as enterprises seek to leverage their data assets more effectively and make faster, more informed decisions in increasingly competitive markets.
            </p>
            
            <FadeInSection delay={200} className="my-8">
              <ChartComponent 
                type="bar" 
                data={biSegmentData} 
                title="Business Intelligence Market Growth (2022-2028)"
                caption="Source: Market Research Future, BI Industry Report"
              />
            </FadeInSection>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Competitive Intelligence Challenges</h2>
            <p className="mb-6">
              Traditional competitive intelligence faces several limitations in today's business environment:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <FadeInSection delay={100}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Data Fragmentation</h3>
                    <p>
                      Valuable competitive intelligence is scattered across numerous sources—news, social media, financial reports, patents, academic research, and industry analyses—making comprehensive collection and analysis increasingly challenging.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={150}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Analysis Limitations</h3>
                    <p>
                      Human analysts can only process a fraction of available data, leading to inevitable blind spots and missed connections that could reveal emerging competitive threats or opportunities.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Limited Predictive Capability</h3>
                    <p>
                      Most competitive analysis remains retrospective rather than predictive, identifying trends after they've already begun to impact the market rather than anticipating emerging threats.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={250}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Time-to-Insight Lag</h3>
                    <p>
                      The time required to gather, process, and derive actionable insights from competitive data often exceeds the window of opportunity for effective response in fast-moving markets.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Decision Intelligence Gap</h2>
            <p className="mb-6">
              Similarly, enterprise decision-making faces critical challenges:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <FadeInSection delay={300}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Decision Paralysis</h3>
                    <p>
                      The exponential growth in available data has paradoxically slowed decision-making, as teams struggle to integrate and prioritize information from disparate sources and systems.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={350}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Complexity Management</h3>
                    <p>
                      Modern business decisions involve numerous interdependent variables that exceed human cognitive capacity to model effectively, leading to oversimplified analyses and suboptimal outcomes.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={400}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Siloed Expertise</h3>
                    <p>
                      Critical knowledge and expertise remain trapped in organizational silos, preventing holistic approaches to complex decisions that cross functional or divisional boundaries.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={450}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Cognitive Biases</h3>
                    <p>
                      Human decision-makers are subject to well-documented cognitive biases that can systematically distort analysis and lead to suboptimal decisions, particularly under conditions of uncertainty.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">NeuralArc's Market Position</h2>
            <p className="mb-6">
              NeuralArc addresses these challenges through purpose-built neural architectures that:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span>Integrate and analyze vast amounts of structured and unstructured data</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span>Identify patterns and connections invisible to traditional analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span>Provide predictive capabilities for anticipating competitive threats</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span>Accelerate decision-making by <CountUp end={74} suffix="%" className="text-teal" /> while improving accuracy</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span>Combine neural processing with human expertise for optimal outcomes</span>
              </li>
            </ul>
            
            <p>
              By focusing specifically on the enterprise segment of the business intelligence market—particularly Fortune 1000 companies and rapidly scaling mid-market enterprises ($250M-$1B revenue)—NeuralArc has positioned itself at the intersection of several high-growth technology trends while addressing concrete business challenges for which clients demonstrate clear willingness to pay.
            </p>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default MarketOverview;
