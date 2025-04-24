
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import FadeInSection from '@/components/FadeInSection';

const MicroSaas = () => {
  const apps = [
    {
      name: 'Rovyk',
      pitch: 'Unified chat + prompt lab for GPT-4o, Claude-3, Gemini, Mistral. Team libraries, share-links, token heat-map.',
      status: 'LIVE'
    },
    {
      name: 'LawBit.ai',
      pitch: 'Draft watertight NDAs, MSAs, SOWs. Clause-risk colour-coding & one-tap "legal-ese ➜ plain-English."',
      status: 'LIVE'
    },
    {
      name: 'Compliance AI',
      pitch: 'HIPAA, GDPR, ISO-27001 gap-scan in minutes. Generates board-ready PDF.',
      status: 'LIVE'
    },
    {
      name: 'Kashew',
      pitch: 'AI invoicing & rolling cash-flow forecasting for freelancers & Shopify sellers.',
      status: 'BETA'
    },
    {
      name: 'Spider',
      pitch: 'Point-&-click web scraper with Gen-AI transforms; CSV, JSON, or direct to Google Sheets.',
      status: 'BETA'
    },
    {
      name: 'Striker',
      pitch: 'Real-time market-signal radar: price jumps, sentiment swings, ad-spend spikes.',
      status: 'BETA'
    },
    {
      name: 'PatentPal',
      pitch: 'Drafts claims, abstracts & figures; auto-checks USPTO classification.',
      status: 'PLANNED'
    },
    {
      name: 'Asseto',
      pitch: 'OCRs receipts, tracks warranty windows, suggests resale value.',
      status: 'PLANNED'
    },
    {
      name: 'ScribbleCRM',
      pitch: 'Camera-snap handwritten notes → structured CRM entries with follow-up tasks.',
      status: 'PLANNED'
    }
  ];

  const cases = [
    {
      team: 'Indie Game Studio',
      story: 'Used Rovyk to prototype NPC dialogue in three models; shipping script locked in two afternoons.',
      outcome: 'Saved 46 design hours.'
    },
    {
      team: 'Boutique Law Firm',
      story: 'LawBit.ai bulk-generated 27 NDAs for a hackathon sponsor.',
      outcome: '$4K of billable paralegal time freed.'
    },
    {
      team: 'DTC Skincare Brand',
      story: 'Compliance AI flagged PII exposure in a forgotten Shopify plug-in.',
      outcome: 'Avoided €20K GDPR penalty.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Freemium',
      price: '0',
      features: ['25 AI calls & community support']
    },
    {
      name: 'Pro',
      price: '19',
      features: ['Unlimited calls', 'CSV export', 'Slack alerts']
    },
    {
      name: 'Team',
      price: '49',
      features: ['SSO', 'shared prompt libraries', 'usage analytics']
    },
    {
      name: 'Suite Bundle',
      subtitle: '(any 5 apps)',
      price: '99',
      features: ['Everything + priority roadmap voting']
    }
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        {/* Hero Section */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 text-center mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Tiny Apps. <span className="text-teal">Titanic Impact.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Launch a neural-powered utility during your coffee break—then graduate to ORB or NOD when you're ready for warp speed.
          </p>
        </FadeInSection>

        {/* Why Section */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why a Micro Suite?</h2>
            <p className="text-xl mb-8 text-teal">
              "77% of small businesses run at least one AI tool, yet fewer than a quarter use anything enterprise-grade."
            </p>
            <p className="text-2xl font-semibold mb-8">We built the bridge.</p>
            
            <div className="grid gap-6">
              <Card className="bg-charcoal/30 border-white/10">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Common Pain</h3>
                      <p>"I just need to draft a contract—now."</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Instant Fix</h3>
                      <p>LawBit.ai generates, red-flags, and plain-speaks legalese in &lt;90s.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </FadeInSection>

        {/* Apps Line-up */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-20">
          <h2 className="text-3xl font-bold mb-8">The Line-up (Q2 2025 → Q2 2026)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => (
              <Card key={app.name} className="bg-charcoal/30 border-white/10">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{app.name}</h3>
                    <span className={`text-sm px-2 py-1 rounded ${
                      app.status === 'LIVE' ? 'bg-teal/20 text-teal' :
                      app.status === 'BETA' ? 'bg-yellow-500/20 text-yellow-500' :
                      'bg-white/10 text-white/60'
                    }`}>
                      {app.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{app.pitch}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeInSection>

        {/* Inside the Fabric */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Inside the "Fabric"</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-charcoal/30 px-4 py-2 rounded-full">Auth</span>
              <span className="text-teal">↔</span>
              <span className="bg-charcoal/30 px-4 py-2 rounded-full">Billing</span>
              <span className="text-teal">↔</span>
              <span className="bg-charcoal/30 px-4 py-2 rounded-full">Model-Orchestration</span>
              <span className="text-teal">↔</span>
              <span className="bg-charcoal/30 px-4 py-2 rounded-full">Usage Telemetry</span>
              <span className="text-teal">↔</span>
              <span className="bg-charcoal/30 px-4 py-2 rounded-full">Cross-Sell Engine</span>
            </div>
          </div>
        </FadeInSection>

        {/* Case Studies */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-20">
          <h2 className="text-3xl font-bold mb-8">Real-World Mini-Wins</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((case_, index) => (
              <Card key={index} className="bg-charcoal/30 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{case_.team}</h3>
                  <p className="mb-4 text-muted-foreground">{case_.story}</p>
                  <p className="text-teal font-medium">{case_.outcome}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeInSection>

        {/* Pricing */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing — Coffee-Money Entry, Mocha Upsell</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className="bg-charcoal/30 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                  {tier.subtitle && <p className="text-sm text-muted-foreground mb-4">{tier.subtitle}</p>}
                  <p className="text-3xl font-bold mb-4">${tier.price}<span className="text-lg">/user</span></p>
                  <ul className="space-y-2">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="text-teal mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-4">
            Annual-commit and student discounts apply automatically at checkout.
          </p>
        </FadeInSection>

        {/* Call to Action */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to experience "AI in 60 seconds"?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-teal text-charcoal hover:bg-teal/90">
              <Link to="/signup">Launch Your First Micro App →</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/orb-platform">Skip straight to ORB »</Link>
            </Button>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default MicroSaas;
