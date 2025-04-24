import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import FadeInSection from '@/components/FadeInSection';
import CountUp from '@/components/CountUp';
import { useMarketMetricsVerifier } from '@/components/MarketMetricsVerifier';
import HomeChat from '@/components/HomeChat';

const Index = () => {
  const metrics = useMarketMetricsVerifier();

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-8 md:py-12">
        <div className="grid-container">
          <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Neural Intelligence for{' '}
              <span className="underline decoration-teal">Business Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Neural Arc gives every organisation—startup to enterprise—the power to{' '}
              <strong>see competitive moves before they happen</strong>,{' '}
              <strong>make optimal decisions in real time</strong>,{' '}
              and <strong>solve niche problems with lightning-fast Micro AI tools</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-teal text-charcoal hover:bg-teal/90">
                <a href="/docs/NeuralArc_Whitepaper.pdf">Download White Paper</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#products">Explore the Stack ↓</a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Chat Section */}
      <section className="py-4 bg-gradient-to-b from-charcoal/0 to-charcoal/30">
        <div className="grid-container">
          <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12">
            <HomeChat />
          </FadeInSection>
        </div>
      </section>

      {/* Market Stats Section */}
      <section className="py-8 md:py-12">
        <div className="grid-container">
          {/* Market Stats - Converted from table to cards */}
          <div className="col-span-4 md:col-span-8 lg:col-span-12 mt-16">
            <FadeInSection>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Market Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {metrics.map((metric, index) => (
                  <Card key={index} className="bg-charcoal/30 border-white/10 overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium text-muted-foreground mb-2">{metric.name}</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg">Today:</span>
                        <span className="text-2xl font-bold text-teal">$ <CountUp end={metric.current} suffix={metric.suffix} /></span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg">2034:</span>
                        <span className="text-2xl font-bold text-teal">$ <CountUp end={metric.future} suffix={metric.suffix} /></span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="mt-8 text-center text-muted-foreground max-w-3xl mx-auto">
                Neural Arc sits at the intersection of <strong>both fastest-growing AI segments</strong>: predictive competitive intelligence <strong>and</strong> decision-automation analytics—while monetising a third vector via viral Micro AI apps.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-charcoal/30">
        <div className="grid-container">
          <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Three Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* ORB Card */}
              <Link to="/orb-platform" className="no-underline hover:no-underline">
                <Card className="bg-charcoal/50 border-white/10 transition-transform duration-300 hover:scale-105 hover:bg-charcoal/70 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">ORB</h3>
                    <p className="text-teal italic mb-4">Outlast. Reimagine. Build.</p>
                    <p className="mb-4">Predicts competitor moves 30-120 days early via a neural decision matrix.</p>
                    <p className="text-muted-foreground mb-2">For: Strategy, Product, C-Suite</p>
                    <span className="inline-block bg-teal/20 text-teal px-2 py-1 rounded">POC Phase</span>
                  </CardContent>
                </Card>
              </Link>

              {/* NOD Card */}
              <Link to="/nod-platform" className="no-underline hover:no-underline">
                <Card className="bg-charcoal/50 border-white/10 transition-transform duration-300 hover:scale-105 hover:bg-charcoal/70 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">NOD</h3>
                    <p className="text-teal italic mb-4">Navigate. Optimize. Disrupt.</p>
                    <p className="mb-4">Ingests every data stream, surfaces ranked actions, closes the insight-to-action gap.</p>
                    <p className="text-muted-foreground mb-2">For: Ops, Finance, Execs</p>
                    <span className="inline-block bg-teal/20 text-teal px-2 py-1 rounded">Prototype</span>
                  </CardContent>
                </Card>
              </Link>

              {/* Micro AI Suite Card */}
              <Link to="/platforms/micro-saas" className="no-underline hover:no-underline">
                <Card className="bg-charcoal/50 border-white/10 transition-transform duration-300 hover:scale-105 hover:bg-charcoal/70 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">Micro AI SaaS Suite</h3>
                    <p className="text-teal italic mb-4">Solve a pain in minutes.</p>
                    <p className="mb-4">Nine bite-sized AI utilities with shared auth & billing.</p>
                    <p className="text-muted-foreground mb-2">For: Individuals → Teams → SMBs</p>
                    <div className="space-x-2">
                      <span className="inline-block bg-teal/20 text-teal px-2 py-1 rounded">3 Beta</span>
                      <span className="inline-block bg-teal/10 text-teal px-2 py-1 rounded">2 Coding</span>
                      <span className="inline-block bg-teal/5 text-teal px-2 py-1 rounded">4 Planned</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Investment CTA */}
      <section className="py-16">
        <div className="grid-container">
          <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're raising <span className="text-teal">US $ 500,000</span> 
              <br /> via a Convertible SAFE (20% discount, US $ 12.5M cap)
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-teal text-charcoal hover:bg-teal/90">
                <a href="mailto:invest@neuralarc.ai">I'm Interested! Let's Connect</a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/investment-opportunity">View Deal Terms →</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
};

export default Index;
