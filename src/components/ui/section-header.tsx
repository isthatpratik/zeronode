
interface SectionHeaderProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionHeader({ number, title, className }: SectionHeaderProps) {
  return (
    <h2 className={`text-2xl font-bold mb-6 flex items-start gap-2 ${className} text-pretty`}>
      <span className="text-teal flex-shrink-0">{number} ▸</span> {title}
    </h2>
  );
}
