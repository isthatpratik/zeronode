
import { useEffect, useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { chatWithGemini } from '@/services/apiService';

export interface MarketMetric {
  name: string;
  current: number;
  future: number;
  suffix: string;
}

export const useMarketMetricsVerifier = () => {
  const [metrics, setMetrics] = useState<MarketMetric[]>([
    { name: 'Global AI Market', current: 758, future: 3.68, suffix: ' B' },
    { name: 'CI-Tools TAM', current: 495, future: 1.12, suffix: ' M' },
    { name: 'Analytics TAM', current: 88, future: 483, suffix: ' B' }
  ]);
  const { toast } = useToast();

  useEffect(() => {
    const verifyMetrics = async () => {
      try {
        const apiKey = localStorage.getItem('deepseek_api_key');
        if (!apiKey) return;

        const response = await chatWithGemini(
          "Please verify these market metrics and respond with updated numbers if needed: " +
          JSON.stringify(metrics),
          []
        );

        if (response.includes('verified') || response.includes('accurate')) {
          toast({
            title: "Market Metrics Verified",
            description: "The displayed metrics are up to date.",
          });
        }
      } catch (error) {
        console.error('Error verifying metrics:', error);
      }
    };

    verifyMetrics();
  }, []);

  return metrics;
};
