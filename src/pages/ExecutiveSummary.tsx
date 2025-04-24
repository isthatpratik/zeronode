
import FadeInSection from "@/components/FadeInSection";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ExecutiveSummary = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              US $ 500 K Convertible SAFE — Neural Arc
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              A fair-value, median-cap entry into neural intelligence.
            </p>

            {/* 1. Offer at a Glance */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">1 ▸ Offer at a Glance</h2>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold">Capital Sought</TableCell>
                    <TableCell className="font-bold">US $ 500 000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Instrument</TableCell>
                    <TableCell>
                      Convertible SAFE (MFN, 20% discount, 6% interest) <br />
                      <em>or</em> straight equity ≈ 4% for US $ 500 K
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Pre-money Valuation Cap</TableCell>
                    <TableCell className="font-bold">US $ 12 M</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Maturity</TableCell>
                    <TableCell>24 months (auto-convert at next equity round)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Minimum Ticket</TableCell>
                    <TableCell>US $ 25 000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Runway Extension</TableCell>
                    <TableCell>18 months</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </section>

            {/* 2. Benchmarks */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">2 ▸ How Does US $ 12 M Compare? — 2025 Benchmarks</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company (2025)</TableHead>
                    <TableHead>Focus</TableHead>
                    <TableHead>Round</TableHead>
                    <TableHead>Raise</TableHead>
                    <TableHead>Implied Pre-money*</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Jurimesh</TableCell>
                    <TableCell>AI due-diligence</TableCell>
                    <TableCell>Pre-Seed</TableCell>
                    <TableCell>€ 1.6 M</TableCell>
                    <TableCell>≈ US $ 8 M</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>WilsonAI</TableCell>
                    <TableCell>AI paralegal</TableCell>
                    <TableCell>Pre-Seed</TableCell>
                    <TableCell>US $ 1.7 M</TableCell>
                    <TableCell>≈ US $ 8 M</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Augmetec</TableCell>
                    <TableCell>Investigations AI</TableCell>
                    <TableCell>Seed</TableCell>
                    <TableCell>£ 2 M</TableCell>
                    <TableCell>≈ US $ 10 M</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Sector Median</TableCell>
                    <TableCell>—</TableCell>
                    <TableCell>—</TableCell>
                    <TableCell>—</TableCell>
                    <TableCell className="font-bold">US $ 12 M</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-2">*Assumes standard 20-25% dilution when valuations weren&apos;t disclosed.</p>
              <p className="font-medium mt-4">Take-away: our US $ 12 M cap sits right on today&apos;s AI-seed median.</p>
            </section>

            {/* 3. Five-Year Forecast */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">3 ▸ Five-Year Conservative Forecast</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Year</TableHead>
                    <TableHead>Enterprise Clients</TableHead>
                    <TableHead>Platform ARR (US $ M)</TableHead>
                    <TableHead>Active Micro-app Users</TableHead>
                    <TableHead>Micro-app ARR (US $ M)</TableHead>
                    <TableHead>Total ARR</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { year: "2025", clients: "10", platform: "0.20", users: "5 k", microArr: "0.15", total: "0.35" },
                    { year: "2026", clients: "30", platform: "0.72", users: "20 k", microArr: "0.45", total: "1.17" },
                    { year: "2027", clients: "75", platform: "2.03", users: "55 k", microArr: "1.00", total: "3.03" },
                    { year: "2028", clients: "150", platform: "4.50", users: "100 k", microArr: "2.50", total: "7.00" },
                    { year: "2029", clients: "250", platform: "8.00", users: "160 k", microArr: "4.10", total: "12.10" }
                  ].map((row) => (
                    <TableRow key={row.year}>
                      <TableCell>{row.year}</TableCell>
                      <TableCell>{row.clients}</TableCell>
                      <TableCell>{row.platform}</TableCell>
                      <TableCell>{row.users}</TableCell>
                      <TableCell>{row.microArr}</TableCell>
                      <TableCell className="font-bold">{row.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                Assumptions: modest ACV lift (20 K→32 K), micro-ARPU $2.5→3.5, GM &gt; 84%, churn &lt; 4%, NDR &gt; 130%.
              </p>
            </section>

            {/* 4. Valuation Math */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">4 ▸ Valuation Math (Discounted)</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Method</TableHead>
                    <TableHead>Inputs</TableHead>
                    <TableHead>PV Today</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Forward-ARR Multiple</TableCell>
                    <TableCell>2028E ARR $7 M × 7×</TableCell>
                    <TableCell className="font-bold">$49 M EV</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>High-risk discount</TableCell>
                    <TableCell>35% @ 3 yrs</TableCell>
                    <TableCell className="font-bold">$18.5 M PV</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>5-yr DCF</TableCell>
                    <TableCell>Cash-flows above, 35% r</TableCell>
                    <TableCell className="font-bold">$16.3 M PV</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="font-medium mt-4">$16-19 M present value ⇒ ~30% upside to our $12 M cap.</p>
            </section>

            {/* 6. Leadership Team */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">6 ▸ Leadership Team</h2>
              <Card className="bg-charcoal/30 border-white/10">
                <CardContent className="p-6">
                  <p className="text-lg mb-2">
                    A <strong>mixed team with 35+ years of combined technology leadership experience.</strong>
                  </p>
                  <p className="text-lg">
                    The <strong>founder is a serial entrepreneur with multiple successful exits over the last ~15 years.</strong>
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* 7. Why Invest Now */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">7 ▸ Why Invest Now</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Market-anchored valuation cap.</li>
                <li>Dual revenue engines (platform + viral micro-apps).</li>
                <li>Efficient economics: GM 84%, CAC payback &lt; 6 mo, NDR &gt; 140% by 2027.</li>
                <li>Proprietary 14.3 B-parameter neural stack + micro-app fabric.</li>
                <li>18-month runway to ≥ 30 enterprise clients and three more app launches.</li>
              </ul>
            </section>

            {/* 8. Flexible Deal Structure */}
            <section>
              <h2 className="text-2xl font-bold mb-6">8 ▸ Flexible Deal Structure</h2>
              <Card className="bg-charcoal/30 border-white/10">
                <CardContent className="p-6">
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Convertible SAFE</strong> (preferred) — MFN, 20% discount, 6% interest, 24-mo maturity.</li>
                    <li><strong>Straight equity</strong> — US $ 12 M pre-money (≈ 4% for US $ 500 K).</li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default ExecutiveSummary;
