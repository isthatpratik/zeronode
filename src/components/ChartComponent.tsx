
import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartType,
  ChartData,
  ChartOptions
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
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

    const defaultOptions = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom' as const,
          labels: {
            color: '#F9F9F9',
            padding: 20,
            font: {
              family: 'Space Grotesk, sans-serif',
              size: 13
            },
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        tooltip: {
          backgroundColor: 'rgba(17, 17, 17, 0.95)',
          titleColor: '#F9F9F9',
          bodyColor: '#F9F9F9',
          borderColor: '#28D9D9',
          borderWidth: 1,
          padding: 12,
          titleFont: {
            family: 'Space Grotesk, sans-serif',
            size: 14,
            weight: 'bold' as 'bold' // Fix: Use a valid font weight value as type
          },
          bodyFont: {
            family: 'Inter, sans-serif',
            size: 13
          },
          displayColors: false,
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y.toLocaleString();
              }
              return label;
            }
          }
        }
      },
      scales: type !== 'pie' && type !== 'doughnut' ? {
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            color: '#F9F9F9',
            font: {
              family: 'Inter, sans-serif',
              size: 12
            },
            padding: 10
          }
        },
        y: {
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            color: '#F9F9F9',
            font: {
              family: 'Inter, sans-serif',
              size: 12
            },
            padding: 10
          },
          beginAtZero: true
        }
      } : undefined,
    };

    const mergedOptions = {
      ...defaultOptions,
      ...options,
      plugins: {
        ...defaultOptions.plugins,
        ...(options.plugins || {})
      }
    };

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    if (ctx) {
      chartInstance.current = new ChartJS(ctx, {
        type,
        data,
        options: mergedOptions
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type, data, options]);

  return (
    <figure className={`bg-charcoal/30 p-6 rounded-lg border border-white/5 ${className}`}>
      {title && (
        <h3 className="text-lg font-medium text-center mb-6">{title}</h3>
      )}
      <div className="relative aspect-[16/9]">
        <canvas ref={chartRef} aria-label={title || "Chart"} role="img"></canvas>
      </div>
      {caption && (
        <figcaption className="mt-4 text-sm text-center text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default ChartComponent;
