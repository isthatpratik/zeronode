
import { Card, CardContent } from "./card";
import { cn } from "@/lib/utils";

interface StyledCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  highlight?: boolean;
}

export function StyledCard({ children, highlight, className, ...props }: StyledCardProps) {
  return (
    <Card 
      className={cn(
        "bg-charcoal/30 border-white/10 transition-all duration-300 hover:bg-charcoal/40",
        highlight && "border-l-4 border-l-teal",
        className
      )} 
      {...props}
    >
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
}
