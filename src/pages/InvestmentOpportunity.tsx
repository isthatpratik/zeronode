
import React from "react";
import FadeInSection from "@/components/FadeInSection";
import { StyledCard } from "@/components/ui/styled-card";
import { SectionHeader } from "@/components/ui/section-header";
import SeedRound from "@/components/investment/SeedRound";
import Benchmarks from "@/components/investment/Benchmarks";
import Forecast from "@/components/investment/Forecast";
import Valuation from "@/components/investment/Valuation";
import MicroSuite from "@/components/investment/MicroSuite";

const InvestmentOpportunity = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
          <StyledCard highlight className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Investment Opportunity</h1>
            <p className="text-xl text-muted-foreground">
              Neural Arc offers a unique investment opportunity in the rapidly growing AI sector,
              combining enterprise platform stability with viral micro-app scalability.
            </p>
          </StyledCard>
        </FadeInSection>

        <div className="col-span-4 md:col-span-8 lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeInSection className="space-y-8">
            <section>
              <SeedRound />
            </section>

            <section>
              <Benchmarks />
            </section>
          </FadeInSection>

          <FadeInSection className="space-y-8">
            <section>
              <Forecast />
            </section>

            <section>
              <Valuation />
            </section>
          </FadeInSection>
        </div>

        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mt-8">
          <section>
            <MicroSuite />
          </section>
        </FadeInSection>

        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mt-8">
          <section>
            <SectionHeader number="5" title="Why Invest Now" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StyledCard>
                <h3 className="text-lg font-bold mb-3 text-teal">Market Position</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Market-anchored cap</li>
                  <li>Dual revenue engines</li>
                  <li>Strategic positioning</li>
                </ul>
              </StyledCard>

              <StyledCard>
                <h3 className="text-lg font-bold mb-3 text-teal">Financial Metrics</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>84% gross margin</li>
                  <li>&lt;6-month CAC payback</li>
                  <li>&gt;140% NDR by 2027</li>
                </ul>
              </StyledCard>

              <StyledCard>
                <h3 className="text-lg font-bold mb-3 text-teal">Growth Potential</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>18-month runway</li>
                  <li>≥30 enterprise clients</li>
                  <li>3 new app launches</li>
                </ul>
              </StyledCard>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mt-8">
          <StyledCard className="text-center">
            <p className="text-xl font-medium">
              Neural Arc offers investors immediate fair-value entry with asymmetric upside—powered by a dual flywheel of 
              high-ACV neural-intelligence platforms and rapidly deployable micro-AI tools.
            </p>
          </StyledCard>
        </FadeInSection>
      </div>
    </main>
  );
};

export default InvestmentOpportunity;
