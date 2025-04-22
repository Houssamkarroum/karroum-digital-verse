
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SkillCategoryProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

const SkillCategory = ({ title, icon, children, className }: SkillCategoryProps) => {
  return (
    <div className={cn("mb-12", className)}>
      <div className="mb-6 flex items-center">
        <div className="mr-3 text-theme-violet text-2xl">{icon}</div>
        <h3 className="text-xl md:text-2xl font-display font-bold text-white">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
};

export default SkillCategory;
