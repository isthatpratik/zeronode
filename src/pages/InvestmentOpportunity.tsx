
import FadeInSection from "@/components/FadeInSection";
import { Card, CardContent } from "@/components/ui/card";
import ChartComponent from "@/components/ChartComponent";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BarChart, LineChart, TrendingUp, DollarSign, Users, FileBarChart } from "lucide-react";

// Chart data
const clientGrowthData = {
  labels: ['2025', '2026', '2027', '2028', '2029'],
  datasets: [
    {
      label: 'Enterprise Clients',
      data: [10, 30, 75, 150, 250],
      backgroundColor: '#28D9D9',
    }
  ]
};

const arrGrowthData = {
  labels: ['2025', '2026', '2027', '2028', '2029'],
  datasets: [
    {
      label: 'Annual Recurring Revenue (US $ m)',
      data: [0.2, 0.72, 2.03, 4.50, 8.00],
      borderColor: '#28D9D9',
      backgroundColor: 'rgba(40, 217, 217, 0.2)',
      tension: 0.4,
      fill: true,
    }
  ]
};

const retentionData = {
  labels: ['2025', '2026', '2027', '2028', '2029'],
  datasets: [
    {
      label: 'Net Dollar Retention (%)',
      data: [130, 135, 138, 142, 145],
      borderColor: '#F97316',
      backgroundColor: 'rgba(249, 115, 22, 0.2)',
      tension: 0.4,
      fill: true,
    }
  ]
};

const unitEconomicsData = {
  labels: ['ACV', 'CAC', 'LTV (5-yr)'],
  datasets: [
    {
      label: 'US $ (thousands)',
      data: [27, 12, 109],
      backgroundColor: ['#28D9D9', '#9b87f5', '#F97316'],
    }
  ]
};

const InvestmentOpportunity = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Investment Opportunity</h1>
        </FadeInSection>
        
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-10">
          <div className="max-w-4xl">
            <div className="bg-charcoal/50 p-6 rounded-lg border border-white/10">
              <h2 className="text-3xl font-bold mb-3">Neural Arc — Seed Round Snapshot</h2>
              <div className="flex flex-col md:flex-row gap-10 mb-2">
                <div>
                  <p className="text-muted-foreground">Target raise:</p>
                  <p className="text-2xl font-bold text-teal">US $ 500 k</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Pre-money valuation sought:</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold text-teal">US $ 12 m</p>
                    <p className="text-sm">(≈ 4 % equity offered)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
        
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-16">
          <div className="max-w-6xl">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-2xl font-bold">1 ▸ Five-Year Growth Trajectory</h2>
              <span className="text-xl">— Starting with <span className="font-bold">10 Enterprise Clients</span></span>
            </div>
            
            <div className="mb-10 overflow-x-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Calendar Year</TableHead>
                    <TableHead>Enterprise Clients (EoY)</TableHead>
                    <TableHead>Average Contract Value (US $ k)</TableHead>
                    <TableHead>ARR (US $ m)</TableHead>
                    <TableHead>Gross Margin</TableHead>
                    <TableHead>Net Dollar Retention</TableHead>
                    <TableHead>Monthly Burn (US $ k)</TableHead>
                    <TableHead>Cash-flow Breakeven</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="font-bold">
                    <TableCell>2025 (base)</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>20</TableCell>
                    <TableCell>0.20</TableCell>
                    <TableCell>82 %</TableCell>
                    <TableCell>130 %</TableCell>
                    <TableCell>55</TableCell>
                    <TableCell>—</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2026</TableCell>
                    <TableCell>30</TableCell>
                    <TableCell>24</TableCell>
                    <TableCell>0.72</TableCell>
                    <TableCell>83 %</TableCell>
                    <TableCell>135 %</TableCell>
                    <TableCell>95</TableCell>
                    <TableCell>—</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2027</TableCell>
                    <TableCell>75</TableCell>
                    <TableCell>27</TableCell>
                    <TableCell>2.03</TableCell>
                    <TableCell>84 %</TableCell>
                    <TableCell>138 %</TableCell>
                    <TableCell>175</TableCell>
                    <TableCell>Q4 2027</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2028</TableCell>
                    <TableCell>150</TableCell>
                    <TableCell>30</TableCell>
                    <TableCell>4.50</TableCell>
                    <TableCell>85 %</TableCell>
                    <TableCell>142 %</TableCell>
                    <TableCell>300</TableCell>
                    <TableCell>—</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2029</TableCell>
                    <TableCell>250</TableCell>
                    <TableCell>32</TableCell>
                    <TableCell>8.00</TableCell>
                    <TableCell>86 %</TableCell>
                    <TableCell>145 %</TableCell>
                    <TableCell>Cash-flow +</TableCell>
                    <TableCell>✓</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <FadeInSection delay={100}>
                <ChartComponent 
                  type="bar" 
                  data={clientGrowthData} 
                  title="Enterprise Client Growth"
                  caption="From 10 to 250 enterprise clients in 5 years"
                />
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <ChartComponent 
                  type="line" 
                  data={arrGrowthData} 
                  title="Annual Recurring Revenue Growth"
                  caption="Projected ARR reaching US $ 8M by 2029"
                />
              </FadeInSection>
            </div>
            
            <div className="bg-charcoal/30 p-4 rounded-lg border border-white/10 mb-8">
              <h3 className="font-semibold mb-2">Key assumptions</h3>
              <ul className="space-y-1 text-sm">
                <li>• 35-day average sales cycle (pilot → paid) on seed-funded GTM team.</li>
                <li>• CAC falls from <strong>US $ 15 k → 10 k</strong> by 2027 via channel partners.</li>
                <li>• Churn held &lt; 4 % annually; upsell modules drive retention above 140 %.</li>
                <li>• Gross margin expands as GPU inference migrates to reserved clusters.</li>
              </ul>
            </div>
          </div>
        </FadeInSection>
        
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-16">
          <div className="max-w-6xl">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-2xl font-bold">2 ▸ Valuation Rationale</h2>
            </div>
            
            <div className="mb-8 overflow-x-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Valuation Anchor</TableHead>
                    <TableHead>Evidence & Benchmarks</TableHead>
                    <TableHead>Signal for Investors</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold">Seed-stage AI median</TableCell>
                    <TableCell>2024 data: median AI <strong>seed pre-money = US $ 12 m</strong> (Aventis "AI Valuation Multiples 2024" report). citeturn0search0</TableCell>
                    <TableCell>Neural Arc is priced <em>at</em> the market median — no premium asked.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Early Revenue Traction</TableCell>
                    <TableCell>10 contracted enterprises (FinServ, HealthTech, SaaS) producing <strong>US $ 18 k MRR</strong> four months post-MVP.</TableCell>
                    <TableCell>Real revenue + short sales cycle de-risk tech adoption.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Proprietary 14.3 B-parameter stack</TableCell>
                    <TableCell>Zero third-party royalty, patent filings in-process — a defensible neural architecture.</TableCell>
                    <TableCell>Supports a 2-3× ARR multiple uplift over generic AI SaaS.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Capital Efficiency</TableCell>
                    <TableCell>MVP built on &lt; US $ 250 k spent; 82 % GM; runway to breakeven on &lt; US $ 3 m total capital.</TableCell>
                    <TableCell>Capital-light model commands higher ownership retention for investors.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </FadeInSection>
        
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-16">
          <div className="max-w-6xl">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-2xl font-bold">3 ▸ Comparable Company Benchmarks</h2>
            </div>
            
            <div className="mb-8 overflow-x-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Focus</TableHead>
                    <TableHead>Stage / Round</TableHead>
                    <TableHead>Latest Known Valuation</TableHead>
                    <TableHead>ARR at That Time</TableHead>
                    <TableHead>Reference</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold">Quantexa</TableCell>
                    <TableCell>Decision-Intelligence for FS & Gov</TableCell>
                    <TableCell>Series F (Mar 2025)</TableCell>
                    <TableCell><strong>US $ 2.6 b</strong></TableCell>
                    <TableCell>n/a (late stage)</TableCell>
                    <TableCell>citeturn0search2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Sisu Data</TableCell>
                    <TableCell>AI-driven Decision Analytics</TableCell>
                    <TableCell>Series C (Sep 2021)</TableCell>
                    <TableCell><strong>US $ 569 m</strong></TableCell>
                    <TableCell>~US $ 15 m¹</TableCell>
                    <TableCell>citeturn1search4</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Crayon</TableCell>
                    <TableCell>Competitive-Intelligence SaaS</TableCell>
                    <TableCell>Series B (May 2021)</TableCell>
                    <TableCell>Funding <strong>US $ 22 m</strong> (valuation undisclosed; est. ~US $ 120 m)</TableCell>
                    <TableCell>500 customers</TableCell>
                    <TableCell>citeturn3search0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">AI Seed Median</TableCell>
                    <TableCell>Cross-sector AI startups</TableCell>
                    <TableCell>Seed (2024)</TableCell>
                    <TableCell><strong>US $ 12 m</strong></TableCell>
                    <TableCell>Median ARR ≈ US $ 0.3 m</TableCell>
                    <TableCell>citeturn0search0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Neural Arc</TableCell>
                    <TableCell>Neural Decision & Competitive Intelligence</TableCell>
                    <TableCell>Seed (Now)</TableCell>
                    <TableCell><strong>US $ 12 m pre</strong></TableCell>
                    <TableCell><strong>US $ 0.20 m ARR</strong> (projected EoY 2025)</TableCell>
                    <TableCell>—</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <p className="text-sm mb-6">¹ TechCrunch article indicates Series-C $62 m raise and public sources peg implied post-money ~US $ 569 m.</p>
            
            <p className="mb-8">
              <strong>Take-away:</strong> Valuation peers show that decision-intelligence vendors who achieve product/market fit can scale to <strong>9-figure</strong> valuations within 3–4 funding cycles. Neural Arc's <strong>US $ 12 m</strong> pre-money sits firmly on the median seed benchmark while offering proprietary tech and early enterprise traction — providing significant upside against these comps.
            </p>
          </div>
        </FadeInSection>
        
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-16">
          <div className="max-w-6xl">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-2xl font-bold">4 ▸ Unit Economics @ 2027 Steady-State Cohort</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <ChartComponent 
                  type="bar" 
                  data={unitEconomicsData} 
                  title="Unit Economics (US $ thousands)"
                />
              </div>
              
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
                      <FileBarChart className="h-8 w-8 text-teal mb-2" />
                      <p className="text-sm text-muted-foreground mb-1">LTV / CAC</p>
                      <p className="text-2xl font-bold">9.1×</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <TrendingUp className="h-8 w-8 text-teal mb-2" />
                      <p className="text-sm text-muted-foreground mb-1">Net Dollar Retention</p>
                      <p className="text-2xl font-bold">138 %</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="col-span-2 bg-charcoal/30 border-white/10">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center">
                        <p className="text-sm text-muted-foreground mb-1">CAC</p>
                        <p className="text-xl font-bold">US $ 12 k</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="text-sm text-muted-foreground mb-1">LTV (5-yr)</p>
                        <p className="text-xl font-bold">US $ 109 k</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="text-sm text-muted-foreground mb-1">Payback Period</p>
                        <p className="text-xl font-bold">5.5 months</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </FadeInSection>
        
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-16">
          <div className="max-w-6xl">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-2xl font-bold">5 ▸ Use of Proceeds (US $ 500 k)</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="overflow-x-auto">
                <Table className="w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Category</TableHead>
                      <TableHead>%</TableHead>
                      <TableHead>Milestones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-bold">Go-to-Market (2 AEs, 1 PMM)</TableCell>
                      <TableCell>45</TableCell>
                      <TableCell>Reach 30 clients & US $ 720 k ARR by Q4 2026</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold">Platform Hardening & SecOps</TableCell>
                      <TableCell>25</TableCell>
                      <TableCell>GPU clustering, SOC-2 Type I audit complete</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold">Vertical Model Packs (FinServ, Health)</TableCell>
                      <TableCell>15</TableCell>
                      <TableCell>Lift ACV by 20 % via premium modules</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold">Runway & Working Capital</TableCell>
                      <TableCell>15</TableCell>
                      <TableCell>18-month runway into Series A</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <div>
                <ChartComponent
                  type="doughnut"
                  data={{
                    labels: ['Go-to-Market', 'Platform Hardening', 'Vertical Model Packs', 'Runway'],
                    datasets: [{
                      data: [45, 25, 15, 15],
                      backgroundColor: ['#28D9D9', '#9b87f5', '#F97316', '#8B5CF6'],
                    }]
                  }}
                  title="Fund Allocation"
                />
              </div>
            </div>
          </div>
        </FadeInSection>
        
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12">
          <div className="max-w-4xl">
            <div className="bg-charcoal/50 p-6 rounded-lg border border-white/10 mb-6">
              <h2 className="text-2xl font-bold mb-4">🚀 Investor Message</h2>
              
              <p className="mb-4">
                At a <strong>US $ 12 m</strong> pre-money — precisely the 2024 AI-seed median — investors acquire <strong>4 %</strong> of a company poised to:
              </p>
              
              <ul className="space-y-2 mb-4 pl-4">
                <li>• Triple client count annually through 2027</li>
                <li>• Expand ARR to <strong>US $ 8 m</strong> by 2029 with &gt; 85 % gross margin</li>
                <li>• Show <strong>9× LTV/CAC</strong> and &gt; 140 % net retention in steady-state cohorts</li>
              </ul>
              
              <p className="mb-4">
                Neural Arc is engineered for <strong>capital-efficient compounding</strong>, giving seed investors a clear path from today&apos;s <strong>$12 m</strong> valuation toward the 9-figure territory established by <strong>Sisu Data</strong> and the multi-billion track record of <strong>Quantexa</strong>.
              </p>
              
              <p className="text-xl font-bold text-teal text-center mt-6">
                Join us in transforming raw data into neural-powered strategic advantage.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default InvestmentOpportunity;
