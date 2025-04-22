
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  organization: string;
  location?: string;
  description: string | ReactNode;
  isLast?: boolean;
  className?: string;
}

const TimelineItem = ({
  date,
  title,
  organization,
  location,
  description,
  isLast = false,
  className,
}: TimelineItemProps) => {
  return (
    <div className={cn("relative pl-8 pb-12", isLast && "pb-0", className)}>
      {/* Timeline bar */}
      {!isLast && (
        <div className="absolute left-0 top-0 w-[2px] h-full bg-theme-violet/30"></div>
      )}

      {/* Timeline circle */}
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-theme-violet border-4 border-theme-dark-blue"></div>

      <div className="mb-1 flex flex-wrap gap-2 items-center">
        <span className="text-sm font-semibold bg-theme-violet/20 text-theme-violet py-1 px-2 rounded-full">
          {date}
        </span>
        {location && (
          <span className="text-sm text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin inline-block mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            {location}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-400 mb-4">{organization}</p>

      {typeof description === "string" ? (
        <p className="text-gray-300">{description}</p>
      ) : (
        description
      )}
    </div>
  );
};

export default TimelineItem;
