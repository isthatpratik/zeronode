
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import FadeInSection from "@/components/FadeInSection";
import ChartComponent from "@/components/ChartComponent";
import { BarChart, TrendingUp, DollarSign, Users } from "lucide-react";

const InvestmentOpportunity = () => {
  // Chart data for growth trajectory
  const growthData = {
    labels: ['2025', '2026', '2027', '2028', '2029'],
    datasets: [{
      label: 'ARR (US $ m)',
      data: [0.20, 0.72, 2.03, 4.50, 8.00],
      backgroundColor: '#28D9D9',
    }]
  };

  const unitEconomicsData = {
    labels: ['ACV', 'CAC', '5-yr LTV'],
    datasets: [{
      label: 'Amount (US $ k)',
      data: [27, 12, 109],
      backgroundColor: ['#28D9D9', '#9b87f5', '#F97316'],
    }]
  };

  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Investment Opportunity</h1>
          
          {/* Seed Raise & Valuation Headline */}
          <div className="bg-charcoal/50 p-6 rounded-lg border border-white/10 mb-10">
            <h2 className="text-2xl font-bold mb-4">Seed Raise &amp; Valuation Headline</h2>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-bold">Round</TableCell>
                  <TableCell>Seed / SAFE with &quot;most-favoured&quot; discount</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Capital sought</TableCell>
                  <TableCell><strong>US $ 500 k</strong></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Pre-money valuation</TableCell>
                  <TableCell><strong>US $ 12 m</strong></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Ownership offered</TableCell>
                  <TableCell>≈ 4 %</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            
            <p className="mt-4 text-muted-foreground">
              Median seed valuations for AI-first B2B SaaS startups in 2024–25 sit between <strong>US $ 12 m</strong> and <strong>US $ 15 m</strong>. Neural Arc is priced <strong>at the market floor, not at a premium</strong>, despite having early enterprise revenue and proprietary IP.
            </p>
          </div>
        </FadeInSection>

        {/* Valuation Justification */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-10">
          <h2 className="text-2xl font-bold mb-4">1 ▸ Valuation Justification (Conservative Approach)</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Method</TableHead>
                <TableHead>Inputs &amp; Assumptions</TableHead>
                <TableHead>Present-Value Result</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">Run-Rate Multiple</TableCell>
                <TableCell>Median private-SaaS multiple = <strong>7 × ARR</strong></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>• 2028E ARR (conservative plan)</TableCell>
                <TableCell><strong>US $ 4.5 m</strong></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>• EV at exit multiple</TableCell>
                <TableCell>4.5 m × 7 = <strong>US $ 31.5 m</strong></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>• Discount back 3 yrs @ 35 % seed risk rate</TableCell>
                <TableCell></TableCell>
                <TableCell><strong>US $ 12.8 m</strong> PV</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Discounted-Cashflow (DCF)</TableCell>
                <TableCell>5-yr ARR scenario discounted @ 35 %</TableCell>
                <TableCell><strong>US $ 11.1 m</strong> PV</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </FadeInSection>

        {/* Growth Trajectory */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-10">
          <h2 className="text-2xl font-bold mb-4">2 ▸ Conservative Growth Trajectory</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            <ChartComponent
              type="bar"
              data={growthData}
              title="Annual Recurring Revenue Growth"
              caption="Projected ARR reaching US $ 8M by 2029"
            />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Year</TableHead>
                  <TableHead>Clients EoY</TableHead>
                  <TableHead>ARR (US $ m)</TableHead>
                  <TableHead>Gross Margin</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell><strong>2025</strong></TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>0.20</TableCell>
                  <TableCell>82 %</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2026</TableCell>
                  <TableCell>30</TableCell>
                  <TableCell>0.72</TableCell>
                  <TableCell>83 %</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2027</TableCell>
                  <TableCell>75</TableCell>
                  <TableCell>2.03</TableCell>
                  <TableCell>84 %</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2028</TableCell>
                  <TableCell>150</TableCell>
                  <TableCell>4.50</TableCell>
                  <TableCell>85 %</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2029</TableCell>
                  <TableCell>250</TableCell>
                  <TableCell>8.00</TableCell>
                  <TableCell>86 %</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </FadeInSection>

        {/* Unit Economics */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-10">
          <h2 className="text-2xl font-bold mb-4">3 ▸ Steady-State Unit Economics (2027 cohort)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-charcoal/30 border-white/10">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <DollarSign className="h-8 w-8 text-teal mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">ACV</p>
                    <p className="text-2xl font-bold">US $ 27 k</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-charcoal/30 border-white/10">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <Users className="h-8 w-8 text-teal mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">Gross Margin</p>
                    <p className="text-2xl font-bold">84 %</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-charcoal/30 border-white/10">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <BarChart className="h-8 w-8 text-teal mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">LTV / CAC</p>
                    <p className="text-2xl font-bold">9.1×</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-charcoal/30 border-white/10">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <TrendingUp className="h-8 w-8 text-teal mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">Payback Period</p>
                    <p className="text-2xl font-bold">5.5 mo</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <ChartComponent
              type="bar"
              data={unitEconomicsData}
              title="Unit Economics (US $ thousands)"
            />
          </div>
        </FadeInSection>

        {/* Use of Proceeds */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-10">
          <h2 className="text-2xl font-bold mb-4">5 ▸ Use of Proceeds (US $ 500 k)</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Allocation</TableHead>
                <TableHead>%</TableHead>
                <TableHead>Milestones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">Go-to-Market (2 AEs, 1 PMM)</TableCell>
                <TableCell>45</TableCell>
                <TableCell>Reach 30 clients &amp; US $ 0.7 m ARR by Q4 2026</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Platform Hardening &amp; SecOps</TableCell>
                <TableCell>25</TableCell>
                <TableCell>GPU cluster + SOC-2 Type I audit</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Vertical Model Packs</TableCell>
                <TableCell>15</TableCell>
                <TableCell>Launch FinServ &amp; Healthcare packs → +20 % ACV</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Working Capital / Runway</TableCell>
                <TableCell>15</TableCell>
                <TableCell>18-month runway into Series A window</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </FadeInSection>

        {/* Investor Take-away */}
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12">
          <div className="bg-charcoal/50 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-bold mb-4">6 ▸ Investor Take-away</h2>
            
            <ul className="space-y-2 mb-6">
              <li>• <strong>Fair entry point:</strong> Price set at the <strong>seed-stage median</strong> yet under peer comparables.</li>
              <li>• <strong>Capital-efficient engine:</strong> 82–86 % GM, sub-6-month CAC payback, &gt; 9 × LTV/CAC.</li>
              <li>• <strong>Defensible IP:</strong> 14.3 B-parameter in-house stack, zero royalty drag.</li>
              <li>• <strong>Upside vector:</strong> Conservative 7 × ARR multiple still yields <strong>&gt; US $ 30 m</strong> EV by 2028.</li>
            </ul>
            
            <p className="text-xl font-bold text-teal text-center mt-6">
              Join us in making neural-powered decision intelligence the new enterprise standard.
            </p>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default InvestmentOpportunity;
