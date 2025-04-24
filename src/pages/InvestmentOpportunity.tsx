
import FadeInSection from "@/components/FadeInSection";
import { Card, CardContent } from "@/components/ui/card";
import CountUp from "@/components/CountUp";
import ChartComponent from "@/components/ChartComponent";

// Chart data
const revenueGrowthData = {
  labels: ['2024', '2025', '2026', '2027', '2028'],
  datasets: [
    {
      label: 'Revenue ($M)',
      data: [18, 42, 89, 157, 240],
      backgroundColor: '#28D9D9',
    }
  ]
};

const clientGrowthData = {
  labels: ['2024', '2025', '2026', '2027', '2028'],
  datasets: [
    {
      label: 'Enterprise Clients',
      data: [75, 125, 180, 240, 300],
      borderColor: '#28D9D9',
      backgroundColor: 'rgba(40, 217, 217, 0.2)',
      tension: 0.4,
      fill: true
    }
  ]
};

const InvestmentOpportunity = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Investment Opportunity</h1>
        </FadeInSection>
        
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">Funding & Milestones</h2>
            <p className="mb-6">
              NeuralArc has raised $18M to date across two funding rounds:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <FadeInSection delay={100}>
                <Card className="bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Seed Round: $3M (2021)</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-teal mr-2">•</span>
                        <span>Core team assembled (15 FTEs)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">•</span>
                        <span>Initial architecture development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">•</span>
                        <span>Prototype validation with 3 pilot customers</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Series A: $15M (2023)</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-teal mr-2">•</span>
                        <span>Team expansion to 25 FTEs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">•</span>
                        <span>ORB and NOD platforms launched</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">•</span>
                        <span>75 enterprise clients onboarded</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">•</span>
                        <span>$18M ARR achieved</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <p className="mb-6">
              NeuralArc is now raising a $40M Series B to accelerate growth through:
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span><span className="font-semibold">Go-to-Market Expansion:</span> Growing sales and customer success teams to support rapid client acquisition and expansion (targeting 125 clients by end of 2025)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span><span className="font-semibold">R&D Acceleration:</span> Expanding neural architecture capabilities and building industry-specific modules for key verticals</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span><span className="font-semibold">International Expansion:</span> Establishing presence in EMEA and APAC markets (currently 92% US revenue)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span><span className="font-semibold">Strategic Partnerships:</span> Building channel partnerships with global consulting firms to accelerate enterprise adoption</span>
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Growth Trajectory</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <FadeInSection delay={100}>
                <ChartComponent 
                  type="bar" 
                  data={revenueGrowthData} 
                  title="Projected Revenue Growth"
                  caption="90% CAGR from 2024-2028"
                />
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <ChartComponent 
                  type="line" 
                  data={clientGrowthData} 
                  title="Enterprise Client Growth"
                  caption="From 75 to 300 enterprise clients"
                />
              </FadeInSection>
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Unit Economics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <FadeInSection delay={100}>
                <Card className="text-center bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-4xl font-bold text-teal mb-2">
                      <CountUp end={385} suffix="K" />
                    </h3>
                    <p className="text-sm">Average Contract Value</p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="text-center bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-4xl font-bold text-teal mb-2">
                      <CountUp end={135} suffix="%" />
                    </h3>
                    <p className="text-sm">Net Revenue Retention</p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={300}>
                <Card className="text-center bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-4xl font-bold text-teal mb-2">
                      <CountUp end={7.8} decimals={1} prefix="" />
                    </h3>
                    <p className="text-sm">LTV:CAC Ratio</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <p className="mb-10">
              Our tiered pricing model includes base platform licensing plus usage-based components, with average deal sizes growing from $385K initially to $720K after 24 months through expanded use cases and additional modules. Current gross margin of 65% is projected to expand to 82% at scale as infrastructure costs are amortized across a larger client base.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Competitive Moat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <FadeInSection delay={100}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Proprietary Neural Architecture</h3>
                    <p>
                      NeuralArc's neural architectures are purpose-built for business intelligence applications, with 5 years of R&D and 12 pending patents. Unlike general-purpose AI models, our solutions are optimized specifically for competitive intelligence and decision acceleration.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={150}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Enterprise Data Advantage</h3>
                    <p>
                      Each new enterprise client enriches our neural models with unique data patterns and decision contexts, creating a flywheel effect that continuously improves platform performance. This data advantage becomes more significant with each additional client.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Strategic Integration</h3>
                    <p>
                      NeuralArc platforms are deeply integrated into client decision processes and workflows, creating high switching costs. Average client implementation involves 8-12 weeks of configuration and neural training, resulting in 95% client retention.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={250}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Category Definition</h3>
                    <p>
                      NeuralArc is establishing the emerging category of Neural Business Intelligence, positioning us to lead this space as it grows into a multi-billion dollar market segment over the next decade.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Risk Factors & Mitigation</h2>
            <div className="grid grid-cols-1 gap-6 mb-10">
              <FadeInSection delay={100}>
                <Card className="bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Competition from Tech Giants</h3>
                    <p>
                      <span className="text-teal font-semibold">Risk:</span> Major cloud providers and enterprise software companies could enter the neural business intelligence space.
                    </p>
                    <p className="mt-2">
                      <span className="text-teal font-semibold">Mitigation:</span> Our domain-specific architectures, deep enterprise integration, and focus on specialized business use cases provide advantages that generalist approaches cannot easily replicate. We're also pursuing partnership discussions with several potential competitors to become their specialized neural layer.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={150}>
                <Card className="bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Enterprise Adoption Cycles</h3>
                    <p>
                      <span className="text-teal font-semibold">Risk:</span> Enterprise sales cycles could extend beyond projections, delaying revenue growth.
                    </p>
                    <p className="mt-2">
                      <span className="text-teal font-semibold">Mitigation:</span> We've developed a "land and expand" strategy with modular implementation options that lower initial barriers to adoption. Our consulting partnerships also accelerate enterprise access and credibility. Current sales cycles average 4.7 months, in line with industry benchmarks.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Talent Acquisition</h3>
                    <p>
                      <span className="text-teal font-semibold">Risk:</span> Competition for AI talent could impact our ability to scale the team at projected rates.
                    </p>
                    <p className="mt-2">
                      <span className="text-teal font-semibold">Mitigation:</span> Our specialized focus on neural business applications attracts researchers and engineers interested in applied AI rather than general research. We've established university partnerships with three top AI programs for talent pipelines, and our current team includes recognized leaders who help attract additional talent.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Exit Opportunities</h2>
            <p className="mb-6">
              Given NeuralArc's position at the intersection of business intelligence, decision support, and neural networks, multiple exit paths are viable within a 4-6 year horizon:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <FadeInSection delay={100}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Strategic Acquisition</h3>
                    <p>
                      Enterprise software leaders seeking to enhance their business intelligence or AI capabilities. Recent comparable acquisitions have valued companies at 12-18x ARR.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Public Markets</h3>
                    <p>
                      IPO as a category-defining neural business intelligence platform, with comparable public companies trading at 15-25x revenue.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <FadeInSection delay={300}>
                <Card className="h-full bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Private Equity</h3>
                    <p>
                      Growth equity or take-private transaction as the company achieves profitability, with strong unit economics and predictable revenue supporting long-term value creation.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
            
            <p>
              NeuralArc's leadership team has previous exit experience, including two acquisitions and one IPO, and is aligned on building long-term enterprise value while maintaining optionality for various exit scenarios.
            </p>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default InvestmentOpportunity;
