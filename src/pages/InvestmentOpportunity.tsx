import React from "react";
import FadeInSection from "@/components/FadeInSection";
import { StyledCard } from "@/components/ui/styled-card";
import { SectionHeader } from "@/components/ui/section-header";
import SeedRound from "@/components/investment/SeedRound";
import Benchmarks from "@/components/investment/Benchmarks";
import Forecast from "@/components/investment/Forecast";
import Valuation from "@/components/investment/Valuation";
import MicroSuite from "@/components/investment/MicroSuite";
import { Card } from "@/components/ui/card";
import { ChartLine, TrendingUp, LineChart } from "lucide-react";

const InvestmentOpportunity = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        {/* Header Section */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
          <StyledCard highlight className="text-center p-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Neural Arc Investment Overview
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-muted-foreground">
                A unique opportunity in AI enterprise solutions, combining stable platform revenue with 
                high-growth micro-app potential.
              </p>
            </div>
          </StyledCard>
        </FadeInSection>

        {/* Stats Cards */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StyledCard className="text-center p-6">
              <ChartLine className="w-12 h-12 text-teal mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">84% Gross Margin</h3>
              <p className="text-muted-foreground">High-efficiency operations with strong unit economics</p>
            </StyledCard>
            
            <StyledCard className="text-center p-6">
              <TrendingUp className="w-12 h-12 text-teal mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">140% NDR</h3>
              <p className="text-muted-foreground">Projected net dollar retention by 2027</p>
            </StyledCard>
            
            <StyledCard className="text-center p-6">
              <LineChart className="w-12 h-12 text-teal mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">18-Month Runway</h3>
              <p className="text-muted-foreground">Extended operating timeline with current raise</p>
            </StyledCard>
          </div>
        </FadeInSection>

        {/* Main Content in Two Columns */}
        <div className="col-span-4 md:col-span-8 lg:col-span-12 grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Left Column */}
          <FadeInSection>
            <div className="space-y-8">
              <SeedRound />
              <StyledCard>
                <Benchmarks />
              </StyledCard>
            </div>
          </FadeInSection>

          {/* Right Column */}
          <FadeInSection>
            <div className="space-y-8">
              <StyledCard>
                <Forecast />
              </StyledCard>
              <StyledCard>
                <Valuation />
              </StyledCard>
            </div>
          </FadeInSection>
        </div>

        {/* Bottom Section */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mt-8">
          <StyledCard>
            <div className="prose prose-invert max-w-none">
              <MicroSuite />
            </div>
          </StyledCard>
        </FadeInSection>
      </div>
    </main>
  );
};

export default InvestmentOpportunity;
