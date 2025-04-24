
interface SectionHeaderProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionHeader({ number, title, className }: SectionHeaderProps) {
  return (
    <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${className}`}>
      <span className="text-teal">{number} ▸</span> {title}
    </h2>
  );
}
