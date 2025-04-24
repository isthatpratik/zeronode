
import { useEffect, useRef } from "react";
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  ChartType,
  ChartData,
  ChartOptions
} from 'chart.js';

// Register all necessary chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

interface ChartComponentProps {
  type: ChartType;
  data: ChartData;
  options?: ChartOptions;
  className?: string;
  title?: string;
  caption?: string;
}

const ChartComponent = ({ 
  type, 
  data, 
  options = {}, 
  className = "", 
  title,
  caption 
}: ChartComponentProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Default chart options to ensure consistent styling
    const defaultOptions = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom' as const,
          labels: {
            color: '#F9F9F9',
            font: {
              family: 'Inter, sans-serif'
            }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(17, 17, 17, 0.9)',
          titleColor: '#F9F9F9',
          bodyColor: '#F9F9F9',
          borderColor: '#28D9D9',
          borderWidth: 1,
          padding: 10,
          titleFont: {
            family: 'Space Grotesk, sans-serif',
            size: 14
          },
          bodyFont: {
            family: 'Inter, sans-serif',
            size: 12
          },
          displayColors: false
        }
      },
      scales: type !== 'pie' && type !== 'doughnut' ? {
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
          ticks: {
            color: '#F9F9F9'
          }
        },
        y: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
          ticks: {
            color: '#F9F9F9'
          }
        }
      } : undefined
    };

    // Merge default options with provided options
    const mergedOptions = {
      ...defaultOptions,
      ...options,
      plugins: {
        ...defaultOptions.plugins,
        ...(options.plugins || {})
      }
    };

    // Check if there's an existing chart and destroy it
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart
    const ctx = chartRef.current.getContext('2d');
    if (ctx) {
      chartInstance.current = new ChartJS(ctx, {
        type,
        data,
        options: mergedOptions
      });
    }

    // Cleanup on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type, data, options]);

  return (
    <figure className={`bg-charcoal/50 p-4 rounded-lg border border-white/10 ${className}`}>
      {title && <h3 className="text-center mb-4">{title}</h3>}
      <canvas ref={chartRef} aria-label={title || "Chart"} role="img"></canvas>
      {caption && <figcaption className="mt-4 text-sm text-center text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
};

export default ChartComponent;
