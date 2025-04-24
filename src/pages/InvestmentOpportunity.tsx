
import React from "react";
import FadeInSection from "@/components/FadeInSection";
import { Card, CardContent } from "@/components/ui/card";
import SeedRound from "@/components/investment/SeedRound";
import Benchmarks from "@/components/investment/Benchmarks";
import Forecast from "@/components/investment/Forecast";
import Valuation from "@/components/investment/Valuation";
import MicroSuite from "@/components/investment/MicroSuite";

const InvestmentOpportunity = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Investment Opportunity – Neural Arc</h1>
        </FadeInSection>

        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-10">
          <SeedRound />
        </FadeInSection>

        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-10">
          <Benchmarks />
        </FadeInSection>

        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-10">
          <Forecast />
        </FadeInSection>

        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-10">
          <Valuation />
        </FadeInSection>

        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-10">
          <MicroSuite />
        </FadeInSection>

        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">5 ▸ Why Invest Now</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Market-anchored cap: Valuation equals the 2025 AI-seed median and is lower than peer raises in the same verticals.</li>
              <li>Two revenue engines: Enterprise contracts plus viral, low-CAC micro-apps diversify risk and accelerate ARR.</li>
              <li>High-efficiency economics: 84 % gross margin, &lt; 6-month CAC payback, &gt; 140 % NDR from 2027 onward.</li>
              <li>Defensible IP: In-house 14.3 B-parameter neural stack and re-usable micro-app platform.</li>
              <li>Capital-light path: Seed funds extend 18 months, bringing us to ≥ 30 enterprise clients and three additional app launches before Series A.</li>
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-10">
          <Card className="bg-charcoal/50 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-bold mb-4">Flexible Deal Structure</h2>
            <p>We are open to:</p>
            <ul className="list-disc list-inside mt-2 mb-4">
              <li>Convertible SAFE/Note (MFN, 20 % discount, 6 % interest) or</li>
              <li>Straight equity at US $ 12 m pre-money.</li>
            </ul>
          </Card>
        </FadeInSection>

        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12">
          <p className="text-xl font-medium text-center">
            Neural Arc offers investors immediate fair-value entry with asymmetric upside—powered by a dual flywheel of high-ACV neural-intelligence platforms and rapidly deployable micro-AI tools.
          </p>
        </FadeInSection>
      </div>
    </main>
  );
};

export default InvestmentOpportunity;
