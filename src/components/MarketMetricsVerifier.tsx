import { useEffect, useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { handleChatRequest } from '@/api/chat';

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
        const response = await handleChatRequest(
          "Please verify these market metrics and respond with updated numbers if needed. Format your response as JSON with the same structure: " +
          JSON.stringify(metrics),
          []
        );

        console.log('DeepSeek verification response:', response);

        // Try to parse the response as JSON
        try {
          if (response.includes('{') && response.includes('}')) {
            // Extract JSON string from the response
            const jsonStr = response.substring(
              response.indexOf('{'),
              response.lastIndexOf('}') + 1
            );
            
            const updatedMetrics = JSON.parse(jsonStr);
            
            // Validate the structure before updating
            if (Array.isArray(updatedMetrics) && 
                updatedMetrics.length > 0 && 
                updatedMetrics.every(m => 'name' in m && 'current' in m && 'future' in m && 'suffix' in m)) {
              setMetrics(updatedMetrics);
              toast({
                title: "Market Metrics Updated",
                description: "The displayed metrics have been refreshed with the latest data.",
                duration: 3000
              });
            }
          }
        } catch (parseError) {
          console.error('Error parsing metrics JSON:', parseError);
        }
      } catch (error) {
        console.error('Error verifying metrics:', error);
      }
    };

    verifyMetrics();
  }, []);

  return metrics;
};
