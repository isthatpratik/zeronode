
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FadeInSection from "@/components/FadeInSection";
import ChartComponent from "@/components/ChartComponent";
import CountUp from "@/components/CountUp";
import { StyledCard } from "@/components/ui/styled-card";
import { SectionHeader } from "@/components/ui/section-header";
import { useMarketMetricsVerifier } from "@/components/MarketMetricsVerifier";
import { Card, CardContent } from "@/components/ui/card";

// Updated chart data with improved styling
const revenueProjectionsData = {
  labels: ['2025', '2026', '2027', '2028', '2029'],
  datasets: [{
    label: 'ARR (US $ m)',
    data: [0.20, 0.72, 2.03, 4.50, 8.00],
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    pointBackgroundColor: '#28D9D9',
    pointBorderColor: '#28D9D9',
    pointHoverBackgroundColor: '#FFFFFF',
    pointHoverBorderColor: '#28D9D9',
    tension: 0.4
  }]
};

const clientGrowthData = {
  labels: ['2025', '2026', '2027', '2028', '2029'],
  datasets: [{
    label: 'Enterprise Clients',
    data: [10, 30, 75, 150, 250],
    backgroundColor: 'rgba(40, 217, 217, 0.1)',
    borderColor: '#28D9D9',
    borderWidth: 2,
    pointBackgroundColor: '#FFFFFF',
    pointBorderColor: '#28D9D9',
    pointHoverBackgroundColor: '#28D9D9',
    pointHoverBorderColor: '#FFFFFF',
    tension: 0.4
  }]
};

const unitEconomicsData = {
  labels: ['ACV', 'CAC', '5-yr LTV'],
  datasets: [{
    label: 'Amount (US $ k)',
    data: [27, 12, 109],
    backgroundColor: [
      'rgba(255, 255, 255, 0.8)',
      'rgba(40, 217, 217, 0.8)',
      'rgba(155, 135, 245, 0.8)'
    ],
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 4
  }]
};

const margins = {
  labels: ['2025', '2026', '2027', '2028', '2029'],
  datasets: [{
    label: 'Gross Margin (%)',
    data: [82, 83, 84, 85, 86],
    backgroundColor: 'rgba(155, 135, 245, 0.1)',
    borderColor: '#9b87f5',
    borderWidth: 2,
    pointBackgroundColor: '#FFFFFF',
    pointBorderColor: '#9b87f5',
    fill: true,
    tension: 0.4
  }]
};

const profitabilityData = {
  labels: ['2025', '2026', '2027', '2028', '2029'],
  datasets: [{
    label: 'Net Dollar Retention (%)',
    data: [110, 125, 138, 142, 145],
    backgroundColor: 'rgba(40, 217, 217, 0.1)',
    borderColor: '#28D9D9',
    borderWidth: 2,
    pointBackgroundColor: '#FFFFFF',
    pointBorderColor: '#28D9D9',
    fill: true,
    tension: 0.4
  }]
};

const Visualizations = () => {
  const metrics = useMarketMetricsVerifier();
  
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
          <StyledCard highlight className="text-center p-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Interactive Metrics</h1>
            <p className="text-xl text-muted-foreground">
              Explore Neural Arc's growth trajectory and financial performance through dynamic visualizations
            </p>
          </StyledCard>
        </FadeInSection>
        
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12 mb-12">
          <StyledCard className="p-8">
            <SectionHeader number="1" title="Market Overview" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <Card key={index} className="bg-charcoal/20 border-white/5">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium text-teal mb-4">{metric.name}</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Today:</span>
                        <span className="text-2xl font-bold">
                          $ <CountUp end={metric.current} suffix={metric.suffix} />
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">2034:</span>
                        <span className="text-2xl font-bold">
                          $ <CountUp end={metric.future} suffix={metric.suffix} />
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </StyledCard>
        </FadeInSection>
        
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12">
          <StyledCard className="p-8">
            <Tabs defaultValue="growth" className="mb-12">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="growth">Growth Metrics</TabsTrigger>
                <TabsTrigger value="financial">Financial Data</TabsTrigger>
                <TabsTrigger value="unit">Unit Economics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="growth" className="space-y-8">
                <SectionHeader number="2" title="Growth Trajectory" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FadeInSection delay={100}>
                    <ChartComponent 
                      type="bar" 
                      data={revenueProjectionsData} 
                      title="Annual Recurring Revenue"
                      caption="Projected ARR reaching US $ 8M by 2029"
                    />
                  </FadeInSection>
                  
                  <FadeInSection delay={200}>
                    <ChartComponent 
                      type="line"
                      data={clientGrowthData} 
                      title="Enterprise Client Growth"
                      caption="Projected client base expansion to 250 clients by 2029"
                    />
                  </FadeInSection>
                </div>
              </TabsContent>
              
              <TabsContent value="financial" className="space-y-8">
                <SectionHeader number="3" title="Financial Metrics" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FadeInSection delay={100}>
                    <ChartComponent 
                      type="line"
                      data={margins} 
                      title="Gross Margin Evolution"
                      caption="High margin business model improving to 86% by 2029"
                    />
                  </FadeInSection>
                  
                  <FadeInSection delay={200}>
                    <ChartComponent 
                      type="line"
                      data={profitabilityData} 
                      title="Net Dollar Retention"
                      caption="Strong growth in customer expansion revenue"
                    />
                  </FadeInSection>
                  
                  <FadeInSection delay={300}>
                    <StyledCard className="col-span-1 md:col-span-2">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Key Financial Indicators</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <ul className="space-y-4">
                            <li className="flex justify-between items-center">
                              <span>Initial ARR (2025):</span>
                              <span className="text-white font-bold">$<CountUp end={0.20} decimals={2} suffix="M" /></span>
                            </li>
                            <li className="flex justify-between items-center">
                              <span>Target ARR (2029):</span>
                              <span className="text-white font-bold">$<CountUp end={8.00} decimals={2} suffix="M" /></span>
                            </li>
                            <li className="flex justify-between items-center">
                              <span>Initial Gross Margin:</span>
                              <span className="text-white font-bold"><CountUp end={82} suffix="%" /></span>
                            </li>
                            <li className="flex justify-between items-center">
                              <span>Target Gross Margin:</span>
                              <span className="text-white font-bold"><CountUp end={86} suffix="%" /></span>
                            </li>
                          </ul>
                          
                          <ul className="space-y-4">
                            <li className="flex justify-between items-center">
                              <span>LTV/CAC Ratio:</span>
                              <span className="text-white font-bold"><CountUp end={9.1} decimals={1} suffix="×" /></span>
                            </li>
                            <li className="flex justify-between items-center">
                              <span>Payback Period:</span>
                              <span className="text-white font-bold"><CountUp end={5.5} decimals={1} /> months</span>
                            </li>
                            <li className="flex justify-between items-center">
                              <span>Initial NDR:</span>
                              <span className="text-white font-bold"><CountUp end={110} suffix="%" /></span>
                            </li>
                            <li className="flex justify-between items-center">
                              <span>Target NDR (2029):</span>
                              <span className="text-white font-bold"><CountUp end={145} suffix="%" /></span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </StyledCard>
                  </FadeInSection>
                </div>
              </TabsContent>
              
              <TabsContent value="unit" className="space-y-8">
                <SectionHeader number="4" title="Unit Economics (2027 Steady-State)" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FadeInSection delay={100}>
                    <ChartComponent 
                      type="bar"
                      data={unitEconomicsData} 
                      title="Key Unit Economic Metrics"
                      caption="Values in US $ thousands"
                    />
                  </FadeInSection>
                  
                  <FadeInSection delay={200}>
                    <StyledCard>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
                        <ul className="space-y-4">
                          <li className="flex justify-between items-center">
                            <span>Annual Contract Value:</span>
                            <span className="text-white font-bold">$<CountUp end={27} suffix="K" /></span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Customer Acquisition Cost:</span>
                            <span className="text-white font-bold">$<CountUp end={12} suffix="K" /></span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>5-Year Lifetime Value:</span>
                            <span className="text-white font-bold">$<CountUp end={109} suffix="K" /></span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>LTV/CAC Ratio:</span>
                            <span className="text-white font-bold"><CountUp end={9.1} decimals={1} suffix="×" /></span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Payback Period:</span>
                            <span className="text-white font-bold"><CountUp end={5.5} decimals={1} /> months</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Net Dollar Retention:</span>
                            <span className="text-white font-bold"><CountUp end={138} suffix="%" /></span>
                          </li>
                        </ul>
                      </CardContent>
                    </StyledCard>
                  </FadeInSection>
                </div>
              </TabsContent>
            </Tabs>
          </StyledCard>
        </FadeInSection>
      </div>
    </main>
  );
};

export default Visualizations;
