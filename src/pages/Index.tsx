
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import FadeInSection from '@/components/FadeInSection';
import CountUp from '@/components/CountUp';
import ChartComponent from '@/components/ChartComponent';

const marketData = {
  labels: ['2021', '2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'Global AI Market Size ($B)',
      data: [328.34, 422.37, 540.29, 634.92, 757.58],
      backgroundColor: '#28D9D9',
      borderColor: '#28D9D9'
    }
  ]
};

const Index = () => {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="grid-container">
          <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Pioneering Neural Business Intelligence</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              NeuralArc's revolutionary platforms transform competitive intelligence and decision acceleration through proprietary neural architecture.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-teal text-charcoal hover:bg-teal/90">
                <Link to="/contact">Get Demo</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/executive-summary">Read White Paper</Link>
              </Button>
            </div>
          </FadeInSection>
          
          {/* Stats */}
          <div className="col-span-4 md:col-span-8 lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FadeInSection delay={100}>
              <Card className="bg-charcoal/50 border-white/10">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2">
                    $<CountUp end={757.58} decimals={2} suffix="B" className="text-teal" />
                  </h3>
                  <p className="text-sm text-muted-foreground">Global AI Market Size in 2025</p>
                </CardContent>
              </Card>
            </FadeInSection>
            
            <FadeInSection delay={200}>
              <Card className="bg-charcoal/50 border-white/10">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2">
                    <CountUp end={33.83} suffix="%" className="text-teal" />
                  </h3>
                  <p className="text-sm text-muted-foreground">AI Market CAGR Through 2034</p>
                </CardContent>
              </Card>
            </FadeInSection>
            
            <FadeInSection delay={300}>
              <Card className="bg-charcoal/50 border-white/10">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2">
                    <CountUp end={14.3} suffix="B" className="text-teal" />
                  </h3>
                  <p className="text-sm text-muted-foreground">Parameters in NOD Platform</p>
                </CardContent>
              </Card>
            </FadeInSection>
            
            <FadeInSection delay={400}>
              <Card className="bg-charcoal/50 border-white/10">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2">
                    <CountUp end={74} suffix="%" className="text-teal" />
                  </h3>
                  <p className="text-sm text-muted-foreground">Reduction in Time from Data to Decision</p>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>
      
      {/* Platforms Section */}
      <section className="py-16 bg-charcoal/30">
        <div className="grid-container">
          <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Revolutionary Neural Platforms</h2>
          </FadeInSection>
          
          <FadeInSection delay={100} className="col-span-4 md:col-span-4 lg:col-span-6">
            <Card className="h-full bg-charcoal/50 border-white/10 hover:border-teal/50 transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">ORB Platform – <em>Outlast. Reimagine. Build.</em></h3>
                <p className="mb-6">The ORB platform transforms competitive intelligence through predictive capabilities powered by quantum-inspired algorithms.</p>
                <Button asChild variant="outline">
                  <Link to="/orb-platform" className="flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </FadeInSection>
          
          <FadeInSection delay={200} className="col-span-4 md:col-span-4 lg:col-span-6">
            <Card className="h-full bg-charcoal/50 border-white/10 hover:border-teal/50 transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">NOD Platform – <em>Navigate. Optimize. Disrupt.</em></h3>
                <p className="mb-6">The NOD platform leverages a 14.3 billion-parameter advantage to transform internal decision-making processes.</p>
                <Button asChild variant="outline">
                  <Link to="/nod-platform" className="flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </section>
      
      {/* Market Opportunity Section */}
      <section className="py-16">
        <div className="grid-container">
          <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Market Opportunity</h2>
          </FadeInSection>
          
          <FadeInSection delay={100} className="col-span-4 md:col-span-4 lg:col-span-4">
            <Card className="h-full bg-charcoal/50 border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Competitive Intelligence</h3>
                <p>Traditional competitive intelligence relies on historical data and is often unable to predict emerging threats. NeuralArc's ORB platform uses neural networks to identify patterns invisible to traditional analysis.</p>
              </CardContent>
            </Card>
          </FadeInSection>
          
          <FadeInSection delay={200} className="col-span-4 md:col-span-4 lg:col-span-4">
            <Card className="h-full bg-charcoal/50 border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Decision Intelligence</h3>
                <p>The explosion of data has paradoxically slowed decision-making processes at many enterprises. NOD platform processes vast datasets through its neural architecture to deliver faster, more accurate insights.</p>
              </CardContent>
            </Card>
          </FadeInSection>
          
          <FadeInSection delay={300} className="col-span-4 md:col-span-4 lg:col-span-4">
            <Card className="h-full bg-charcoal/50 border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Neural Networks</h3>
                <p>NeuralArc has pioneered proprietary neural network architectures that bridge the gap between academic research and practical business applications, creating significant advantages for enterprise clients.</p>
              </CardContent>
            </Card>
          </FadeInSection>
          
          <FadeInSection delay={400} className="col-span-4 md:col-span-8 lg:col-span-12 mt-12">
            <ChartComponent
              type="bar"
              data={marketData}
              title="Global AI Market Growth"
              caption="Data source: Industry projections based on 33.83% CAGR"
              className="w-full max-w-4xl mx-auto"
            />
          </FadeInSection>
        </div>
      </section>
      
      {/* Investment Opportunity */}
      <section className="py-16 bg-charcoal/30">
        <div className="grid-container">
          <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Investment Opportunity – Growth Trajectory</h2>
            
            <div className="mt-8 max-w-3xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>Revenue grows $<CountUp end={18} suffix=" M" className="text-teal" /> → $<CountUp end={240} suffix=" M" className="text-teal" /> (<CountUp end={90} suffix="%" className="text-teal" /> CAGR)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span><CountUp end={75} className="text-teal" /> → <CountUp end={300} className="text-teal" /> enterprise clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>Client retention rate of <CountUp end={95} suffix="%" className="text-teal" /></span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>Strategic partnerships with <CountUp end={4} className="text-teal" /> of the Big <CountUp end={5} className="text-teal" /> consulting firms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>Headcount growth from <CountUp end={25} className="text-teal" /> to <CountUp end={120} className="text-teal" /> FTEs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span><CountUp end={65} suffix="%" className="text-teal" /> gross margin → <CountUp end={82} suffix="%" className="text-teal" /> gross margin</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  <span>Break-even projected by Q3 <CountUp end={2025} className="text-teal" /></span>
                </li>
              </ul>
              
              <div className="mt-8 text-center">
                <Link to="/investment-opportunity">
                  <Button className="bg-teal text-charcoal hover:bg-teal/90">View Full Investment Opportunity</Button>
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="grid-container">
          <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Client Success Stories</h2>
          </FadeInSection>
          
          <FadeInSection delay={100} className="col-span-4 md:col-span-8 lg:col-span-4">
            <Card className="h-full bg-charcoal/50 border-white/10">
              <CardContent className="p-6">
                <blockquote className="mb-4">
                  "NeuralArc's ORB platform transformed our competitive intelligence, revealing patterns we would have missed through traditional analysis. It's been instrumental to our strategic planning."
                </blockquote>
                <p className="font-semibold">— Sarah Chen, Chief Strategy Officer</p>
              </CardContent>
            </Card>
          </FadeInSection>
          
          <FadeInSection delay={200} className="col-span-4 md:col-span-8 lg:col-span-4">
            <Card className="h-full bg-charcoal/50 border-white/10">
              <CardContent className="p-6">
                <blockquote className="mb-4">
                  "The NOD platform has fundamentally changed how we make decisions, cutting our analysis time by 74% while improving accuracy. We now respond to market shifts weeks faster than our competitors."
                </blockquote>
                <p className="font-semibold">— Michael Rodriguez, VP Operations</p>
              </CardContent>
            </Card>
          </FadeInSection>
          
          <FadeInSection delay={300} className="col-span-4 md:col-span-8 lg:col-span-4">
            <Card className="h-full bg-charcoal/50 border-white/10">
              <CardContent className="p-6">
                <blockquote className="mb-4">
                  "Their platforms have leveled the playing field for mid-sized enterprises like ours. We're now making data-driven decisions that rival those of companies ten times our size."
                </blockquote>
                <p className="font-semibold">— Jennifer Taylor, CEO</p>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-teal/10">
        <div className="grid-container">
          <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business Intelligence?</h2>
            <p className="max-w-3xl mx-auto mb-8 text-lg">
              Schedule a personalized demo to see how NeuralArc's platforms can accelerate your decision-making and provide unprecedented competitive insights.
            </p>
            <Button asChild size="lg" className="bg-teal text-charcoal hover:bg-teal/90">
              <Link to="/contact">Get Started</Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
};

export default Index;
