
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: React.ReactNode | LucideIcon;
  name: string;
  level?: number;
  className?: string;
}

const SkillCard = ({ icon: Icon, name, level = 75, className }: SkillCardProps) => {
  return (
    <div
      className={cn(
        "group bg-theme-dark-blue border border-slate-800 hover:border-theme-violet/30 rounded-xl p-4 transition-all duration-300 hover:shadow-md hover:shadow-theme-violet/10",
        className
      )}
    >
      <div className="flex items-center mb-3">
        <div className="mr-3 text-theme-violet text-2xl">
          {typeof Icon === "function" ? <Icon className="w-6 h-6" /> : Icon}
        </div>
        <h3 className="text-white font-medium">{name}</h3>
      </div>

      <div className="w-full h-1.5 bg-slate-800/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-theme-violet to-theme-teal rounded-full group-hover:animate-pulse"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
