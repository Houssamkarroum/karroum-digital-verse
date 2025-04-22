
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = true,
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12",
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 bg-gradient-to-r from-theme-violet to-theme-teal w-24 mt-4",
        centered ? "mx-auto" : ""
      )} />
    </div>
  );
}
