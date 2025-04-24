
import { Card, CardContent } from "@/components/ui/card";
import FadeInSection from "@/components/FadeInSection";

const MicroSuite = () => {
  const liveApps = [
    {
      name: "Rovyk",
      subtitle: "Multi-Model Chat & Prompt Lab",
      problem: "Model hopping and prompt engineering are messy.",
      features: [
        "Unified chat window for GPT-4, Claude-3 Haiku, Gemini 1.5 Pro, Mistral-Large",
        "Prompt-library generator & share links",
        "Cost estimator per token"
      ],
      pricing: "Freemium → Pro US $ 6 / mo"
    },
    {
      name: "LawBit.ai",
      subtitle: "Contract Draft & Review",
      problem: "Legal drafting is slow & expensive.",
      features: [
        "40+ automated contract templates",
        "Clause risk heat-map & jurisdiction tuning",
        "Upload & audit any doc"
      ],
      pricing: "US $ 49 / seat / mo"
    },
    {
      name: "Compliance AI",
      subtitle: "Instant Gap-Scan",
      problem: "Manual compliance audits drain ops.",
      features: [
        "Upload policy pack, map to HIPAA, GDPR, ISO 27001, SOC-2",
        "Visual gap matrix & remediation wizard"
      ],
      pricing: "US $ 79 / workspace / mo"
    }
  ];

  const pipelineApps = [
    {
      name: "Kashew",
      category: "FinOps",
      pitch: "AI-powered invoice, billing & cash-flow projections."
    },
    {
      name: "Spider",
      category: "Data-Intelligence",
      pitch: "No-code web/data extractor with Gen-AI transforms."
    },
    {
      name: "Striker",
      category: "Market-Analytics",
      pitch: "Real-time GTM signal radar (jobs, news, socials)."
    },
    {
      name: "PatentPal",
      category: "IP Automation",
      pitch: "Search, draft & track patent applications via PatentsView API."
    },
    {
      name: "Asseto",
      category: "Warranty Tracker",
      pitch: "Smart receipt, warranty & resale recommendation engine."
    },
    {
      name: "ScribbleCRM",
      category: "Lightweight CRM",
      pitch: "OCR handwritten notes → pipeline entries + AI summaries."
    }
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Neural Arc Micro-AI SaaS Suite
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            Nine specialised AI utilities designed to solve the "last-mile" pains of modern founders.
            Three are live today, six more roll out over the next 12 months.
          </p>
        </FadeInSection>

        {/* Live Apps Section */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            🚀 Live Today
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveApps.map((app) => (
              <Card key={app.name} className="bg-charcoal/30 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{app.name}</h3>
                  <p className="text-white/60 mb-4">{app.subtitle}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Problem Solved</h4>
                    <p className="text-white/80">{app.problem}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="list-disc list-inside text-white/80 space-y-1">
                      {app.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Monetisation</h4>
                    <p className="text-white">{app.pricing}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeInSection>

        {/* Pipeline Apps Section */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            🛠️ Six Apps in Pipeline (H₂ 2025 Launch Cadence)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pipelineApps.map((app) => (
              <Card key={app.name} className="bg-charcoal/30 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{app.name}</h3>
                  <p className="text-white/60 mb-4">{app.category}</p>
                  <p className="text-white/80">{app.pitch}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeInSection>

        {/* Bottom Note */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mt-12">
          <Card className="bg-charcoal/30 border-white/10">
            <CardContent className="p-6">
              <p className="text-white/80">
                Each pipeline app re-uses Neural Arc's multi-tenant "micro-app fabric" 
                (shared auth, billing, and model-orchestration), slashing marginal launch 
                cost to < US $ 40 k per app.
              </p>
            </CardContent>
          </Card>
        </FadeInSection>
      </div>
    </main>
  );
};

export default MicroSuite;
