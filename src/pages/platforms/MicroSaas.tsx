import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import FadeInSection from '@/components/FadeInSection';

const MicroSaas = () => {
  const apps = [
    {
      name: 'Rovyk',
      pitch: 'Unified chat + prompt lab for GPT-4o, Claude-3, Gemini, Grok, Deepseek. Retro terminal UI, token heat-map, affordable pricing.',
      status: 'BETA'
    },
    {
      name: 'LawBit.ai',
      pitch: 'AI legal assistant that drafts NDAs, MSAs, SOWs with risk analysis and plain-English explanations.',
      status: 'BETA'
    },
    {
      name: 'Beacon',
      pitch: 'AI compliance assistant that automatically checks regulations and suggests fixes for GDPR, CCPA, and industry rules.',
      status: 'UPCOMING'
    },
    {
      name: 'Spider',
      pitch: 'AI pitch deck analyzer that evaluates content and design, providing actionable insights for better investor engagement.',
      status: 'UPCOMING'
    },
    {
      name: 'Kashew',
      pitch: 'AI invoicing & rolling cash-flow forecasting for freelancers & Shopify sellers.',
      status: 'PLANNED'
    },
    {
      name: 'Striker',
      pitch: 'Real-time market-signal radar: price jumps, sentiment swings, ad-spend spikes.',
      status: 'PLANNED'
    },
    {
      name: 'Radar',
      pitch: 'AI patent assistant that drafts claims, checks prior art, and suggests optimal filing strategies.',
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
      features: ['50,000 tokens/month', 'Community support', 'Basic features']
    },
    {
      name: 'Pro',
      price: '19',
      features: ['250,000 tokens/month', 'Priority support', 'Full history access', 'Advanced features']
    },
    {
      name: 'Team',
      price: '49',
      features: ['500,000 tokens/month', 'Priority support', 'Full history access', 'Advanced analytics']
    },
    {
      name: 'Suite Bundle',
      subtitle: '(any 5 apps)',
      price: '99',
      features: ['1,200,000 tokens/month', 'Priority support', 'Early access to new features', 'Full history access', 'Advanced analytics']
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
                    <h3 className="text-xl font-semibold">
                      {app.name === 'Rovyk' ? (
                        <a 
                          href="https://rovyk.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-teal transition-colors"
                        >
                          {app.name}
                        </a>
                      ) : app.name === 'LawBit.ai' ? (
                        <a 
                          href="https://lawbit.ai" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-teal transition-colors"
                        >
                          {app.name}
                        </a>
                      ) : (
                        app.name
                      )}
                    </h3>
                    <span className={`text-sm px-2 py-1 rounded ${
                      app.status === 'LIVE' ? 'bg-teal/20 text-teal' :
                      app.status === 'BETA' ? 'bg-yellow-500/20 text-yellow-500' :
                      app.status === 'UPCOMING' ? 'bg-blue-500/20 text-blue-500' :
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
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
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
            <Button asChild size="lg" variant="outline" className="relative group overflow-hidden">
              <Link to="/nod-platform">
                <span className="relative z-10">Skip straight to NOD »</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d] to-[#00b8ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="relative group overflow-hidden">
              <Link to="/orb-platform">
                <span className="relative z-10">Skip straight to ORB »</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d] to-[#00b8ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </Button>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default MicroSaas;
