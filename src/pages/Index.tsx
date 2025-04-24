
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FadeInSection from '@/components/FadeInSection';
import CountUp from '@/components/CountUp';

const Index = () => {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
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

          {/* Market Stats */}
          <div className="col-span-4 md:col-span-8 lg:col-span-12 mt-16">
            <FadeInSection>
              <Card className="bg-charcoal/30 border-white/10">
                <CardContent className="p-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Metric</TableHead>
                        <TableHead>Today</TableHead>
                        <TableHead>2034</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Global AI Market</TableCell>
                        <TableCell>$ <CountUp end={758} suffix=" B" /></TableCell>
                        <TableCell>$ <CountUp end={3.68} suffix=" T" /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>CI-Tools TAM</TableCell>
                        <TableCell>$ <CountUp end={495} suffix=" M" /></TableCell>
                        <TableCell>$ <CountUp end={1.12} suffix=" B" /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Analytics TAM</TableCell>
                        <TableCell>$ <CountUp end={88} suffix=" B" /></TableCell>
                        <TableCell>$ <CountUp end={483} suffix=" B" /></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <p className="mt-4 text-center text-muted-foreground">
                    Neural Arc sits at the intersection of <strong>both fastest-growing AI segments</strong>: predictive competitive intelligence <strong>and</strong> decision-automation analytics—while monetising a third vector via viral Micro AI apps.
                  </p>
                </CardContent>
              </Card>
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
              <Card className="bg-charcoal/50 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">ORB</h3>
                  <p className="text-teal italic mb-4">Outlast. Reimagine. Build.</p>
                  <p className="mb-4">Predicts competitor moves 30-120 days early via a neural decision matrix.</p>
                  <p className="text-muted-foreground mb-2">For: Strategy, Product, C-Suite</p>
                  <span className="inline-block bg-teal/20 text-teal px-2 py-1 rounded">GA</span>
                </CardContent>
              </Card>

              {/* NOD Card */}
              <Card className="bg-charcoal/50 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">NOD</h3>
                  <p className="text-teal italic mb-4">Navigate. Optimize. Disrupt.</p>
                  <p className="mb-4">Ingests every data stream, surfaces ranked actions, closes the insight-to-action gap.</p>
                  <p className="text-muted-foreground mb-2">For: Ops, Finance, Execs</p>
                  <span className="inline-block bg-teal/20 text-teal px-2 py-1 rounded">GA (v1.5)</span>
                </CardContent>
              </Card>

              {/* Micro AI Suite Card */}
              <Card className="bg-charcoal/50 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Micro AI SaaS Suite</h3>
                  <p className="text-teal italic mb-4">Solve a pain in minutes.</p>
                  <p className="mb-4">Nine bite-sized AI utilities with shared auth & billing.</p>
                  <p className="text-muted-foreground mb-2">For: Individuals → Teams → SMBs</p>
                  <div className="space-x-2">
                    <span className="inline-block bg-teal/20 text-teal px-2 py-1 rounded">3 Live</span>
                    <span className="inline-block bg-teal/10 text-teal px-2 py-1 rounded">3 Beta</span>
                    <span className="inline-block bg-teal/5 text-teal px-2 py-1 rounded">3 Planned</span>
                  </div>
                </CardContent>
              </Card>
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
                <a href="mailto:invest@neuralarc.ai">Request Data Room</a>
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
