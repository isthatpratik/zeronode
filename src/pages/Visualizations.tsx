
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FadeInSection from "@/components/FadeInSection";
import ChartComponent from "@/components/ChartComponent";
import CountUp from "@/components/CountUp";
import { Card, CardContent } from "@/components/ui/card";

// Chart data
const revenueProjectionsData = {
  labels: ['2024', '2025', '2026', '2027', '2028'],
  datasets: [
    {
      label: 'Revenue ($M)',
      data: [18, 42, 89, 157, 240],
      backgroundColor: '#28D9D9',
    }
  ]
};

const marketShareData = {
  labels: ['NeuralArc', 'Competitor A', 'Competitor B', 'Competitor C', 'Others'],
  datasets: [
    {
      data: [17, 23, 19, 15, 26],
      backgroundColor: ['#28D9D9', '#1A9999', '#147777', '#0E5555', '#0A3333'],
      borderColor: '#111',
      borderWidth: 1,
    }
  ]
};

const adoptionRateData = {
  labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025'],
  datasets: [
    {
      label: 'New Enterprise Clients',
      data: [12, 18, 22, 23, 25, 25],
      backgroundColor: 'rgba(40, 217, 217, 0.7)',
    }
  ]
};

const roiMetricsData = {
  labels: ['Time to Decision Reduction', 'Competitive Insights', 'Decision Accuracy', 'Risk Mitigation', 'Cost Savings'],
  datasets: [
    {
      label: 'ORB Platform',
      data: [65, 80, 70, 75, 60],
      backgroundColor: 'rgba(40, 217, 217, 0.5)',
      borderColor: '#28D9D9',
      borderWidth: 2,
    },
    {
      label: 'NOD Platform',
      data: [85, 65, 80, 60, 70],
      backgroundColor: 'rgba(77, 77, 255, 0.5)',
      borderColor: '#4D4DFF',
      borderWidth: 2,
    }
  ]
};

const Visualizations = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Interactive Visuals</h1>
        </FadeInSection>
        
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="financial" className="mb-12">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="financial">Financial Projections</TabsTrigger>
                <TabsTrigger value="market">Market Analysis</TabsTrigger>
                <TabsTrigger value="performance">Performance Metrics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="financial" className="space-y-8">
                <h2 className="text-2xl font-bold mb-6">Financial Projections</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FadeInSection delay={100}>
                    <ChartComponent 
                      type="bar" 
                      data={revenueProjectionsData} 
                      title="Projected Revenue Growth"
                      caption="90% CAGR from 2024-2028"
                    />
                  </FadeInSection>
                  
                  <FadeInSection delay={200}>
                    <Card className="bg-charcoal/30 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Key Financial Indicators</h3>
                        <ul className="space-y-4">
                          <li className="flex justify-between items-center">
                            <span>Revenue (2024):</span>
                            <span className="text-teal font-bold">$<CountUp end={18} suffix="M" /></span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Revenue (2028):</span>
                            <span className="text-teal font-bold">$<CountUp end={240} suffix="M" /></span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>CAGR (2024-2028):</span>
                            <span className="text-teal font-bold"><CountUp end={90} suffix="%" /></span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Gross Margin (2024):</span>
                            <span className="text-teal font-bold"><CountUp end={65} suffix="%" /></span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Gross Margin (2028):</span>
                            <span className="text-teal font-bold"><CountUp end={82} suffix="%" /></span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Break-even Quarter:</span>
                            <span className="text-teal font-bold">Q3 <CountUp end={2025} /></span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                </div>
              </TabsContent>
              
              <TabsContent value="market" className="space-y-8">
                <h2 className="text-2xl font-bold mb-6">Market Analysis</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FadeInSection delay={100}>
                    <ChartComponent 
                      type="pie" 
                      data={marketShareData} 
                      title="Market Share Distribution (2025 Projected)"
                      caption="Neural Business Intelligence Segment"
                    />
                  </FadeInSection>
                  
                  <FadeInSection delay={200}>
                    <ChartComponent 
                      type="bar" 
                      data={adoptionRateData} 
                      title="Enterprise Client Adoption Rate"
                      caption="Quarterly new client acquisition"
                    />
                  </FadeInSection>
                </div>
                
                <FadeInSection delay={300}>
                  <Card className="bg-charcoal/30 border-white/10 mt-8">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Competitive Landscape Comparison</h3>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="border-b border-white/10">
                              <th className="py-3 px-4">Feature</th>
                              <th className="py-3 px-4">NeuralArc</th>
                              <th className="py-3 px-4">Competitors</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-white/10">
                              <td className="py-3 px-4">Neural Architecture</td>
                              <td className="py-3 px-4 text-teal">Purpose-built (14.3B parameters)</td>
                              <td className="py-3 px-4">General-purpose AI adaptation</td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="py-3 px-4">Decision Speed Improvement</td>
                              <td className="py-3 px-4 text-teal">74% average</td>
                              <td className="py-3 px-4">25-40% average</td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="py-3 px-4">Enterprise Integration Depth</td>
                              <td className="py-3 px-4 text-teal">Deep (200+ connectors)</td>
                              <td className="py-3 px-4">Moderate (50-100 connectors)</td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="py-3 px-4">Implementation Timeline</td>
                              <td className="py-3 px-4 text-teal">8-12 weeks</td>
                              <td className="py-3 px-4">16-24 weeks</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4">Client Retention Rate</td>
                              <td className="py-3 px-4 text-teal">95%</td>
                              <td className="py-3 px-4">78-85%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInSection>
              </TabsContent>
              
              <TabsContent value="performance" className="space-y-8">
                <h2 className="text-2xl font-bold mb-6">Performance Metrics</h2>
                
                <FadeInSection delay={100}>
                  <ChartComponent 
                    type="radar" 
                    data={roiMetricsData} 
                    title="Platform Performance Comparison"
                    caption="Key performance indicators by platform"
                    options={{
                      scales: {
                        r: {
                          beginAtZero: true,
                          max: 100,
                          ticks: {
                            display: false
                          },
                          pointLabels: {
                            color: '#F9F9F9'
                          },
                          grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                          }
                        }
                      }
                    }}
                  />
                </FadeInSection>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <FadeInSection delay={200}>
                    <Card className="bg-charcoal/30 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">ORB Platform KPIs</h3>
                        <ul className="space-y-4">
                          <li className="flex justify-between items-center">
                            <span>Early Threat Detection:</span>
                            <span className="text-teal font-bold">+<CountUp end={267} suffix="%" /></span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Strategic Opportunities Identified:</span>
                            <span className="text-teal font-bold">+<CountUp end={58} suffix="%" /></span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Data Sources Integrated:</span>
                            <span className="text-teal font-bold"><CountUp end={300} suffix="+" /></span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Language Support:</span>
                            <span className="text-teal font-bold"><CountUp end={47} /></span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Average First-Year ROI:</span>
                            <span className="text-teal font-bold"><CountUp end={4.2} suffix="x" decimals={1} /></span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                  
                  <FadeInSection delay={300}>
                    <Card className="bg-charcoal/30 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">NOD Platform KPIs</h3>
                        <ul className="space-y-4">
                          <li className="flex justify-between items-center">
                            <span>Decision Time Reduction:</span>
                            <span className="text-teal font-bold"><CountUp end={74} suffix="%" /></span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Decision Accuracy Improvement:</span>
                            <span className="text-teal font-bold"><CountUp end={31} suffix="%" /></span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Neural Parameters:</span>
                            <span className="text-teal font-bold"><CountUp end={14.3} suffix="B" /></span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Enterprise Connectors:</span>
                            <span className="text-teal font-bold"><CountUp end={200} suffix="+" /></span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Average First-Year ROI:</span>
                            <span className="text-teal font-bold"><CountUp end={5.7} suffix="x" decimals={1} /></span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                </div>
              </TabsContent>
            </Tabs>
            
            <h2 className="text-2xl font-bold mt-16 mb-6">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="mb-10">
              <FadeInSection delay={100}>
                <AccordionItem value="faq1" className="border-white/10">
                  <AccordionTrigger className="hover:text-teal">How do NeuralArc platforms differ from general-purpose AI solutions?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      NeuralArc platforms are purpose-built for specific business applications rather than adapted from general-purpose AI models. Our neural architectures are optimized for competitive intelligence and decision acceleration, with specialized parameters that understand business contexts, temporal relationships, and enterprise data structures. Unlike general AI that requires extensive customization, our platforms deliver immediate value through pre-configured modules for specific business domains.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </FadeInSection>
              
              <FadeInSection delay={150}>
                <AccordionItem value="faq2" className="border-white/10">
                  <AccordionTrigger className="hover:text-teal">What is the typical implementation timeline?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Implementation follows a phased approach:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Initial integration: 4-6 weeks</li>
                      <li>Neural training: 2-3 months</li>
                      <li>Full deployment: Ongoing, with initial value delivered within the first 60 days</li>
                    </ul>
                    <p className="mt-2">
                      This timeline is significantly faster than competitive solutions due to our pre-built connectors and industry-specific neural modules.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <AccordionItem value="faq3" className="border-white/10">
                  <AccordionTrigger className="hover:text-teal">How do you ensure data security and privacy?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      NeuralArc platforms are designed with enterprise-grade security from the ground up:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>SOC 2 Type II certified infrastructure</li>
                      <li>End-to-end encryption for data in transit and at rest</li>
                      <li>Client data isolation with dedicated computational resources</li>
                      <li>Role-based access controls and comprehensive audit logging</li>
                      <li>Support for on-premise deployment for sensitive use cases</li>
                    </ul>
                    <p className="mt-2">
                      We also maintain compliance with GDPR, CCPA, and industry-specific regulations as applicable.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </FadeInSection>
              
              <FadeInSection delay={250}>
                <AccordionItem value="faq4" className="border-white/10">
                  <AccordionTrigger className="hover:text-teal">How do you measure ROI for your platforms?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      We work with clients to establish baseline metrics before implementation and track improvements across several dimensions:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li><span className="font-semibold">Time value</span>: Reduction in time-to-decision and time-to-insight</li>
                      <li><span className="font-semibold">Quality value</span>: Improvement in decision accuracy and prediction success rate</li>
                      <li><span className="font-semibold">Opportunity value</span>: New opportunities identified and successfully pursued</li>
                      <li><span className="font-semibold">Risk value</span>: Early threat detection and successful risk mitigation</li>
                    </ul>
                    <p className="mt-2">
                      These metrics are tracked through our ROI dashboard, which provides ongoing visibility into platform value. On average, clients achieve 4.2-5.7x ROI within the first 12 months.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </FadeInSection>
              
              <FadeInSection delay={300}>
                <AccordionItem value="faq5" className="border-white/10">
                  <AccordionTrigger className="hover:text-teal">Can NeuralArc platforms integrate with our existing systems?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Yes, our platforms are designed for seamless integration with enterprise environments:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>200+ pre-built connectors for common enterprise systems</li>
                      <li>Support for custom API development for proprietary systems</li>
                      <li>Integration with major BI tools (Tableau, Power BI, Looker, etc.)</li>
                      <li>SSO support for major identity providers</li>
                      <li>Workflow integration with enterprise collaboration tools</li>
                    </ul>
                    <p className="mt-2">
                      Our integration architecture ensures that NeuralArc platforms enhance rather than disrupt existing workflows and technology investments.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </FadeInSection>
            </Accordion>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default Visualizations;
