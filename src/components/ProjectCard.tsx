
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  demoLink,
  githubLink,
  className,
}: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={cn(
        "group perspective h-[450px] w-full cursor-pointer",
        className
      )}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative preserve-3d w-full h-full duration-500",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front of card */}
        <div className="absolute backface-hidden w-full h-full rounded-xl overflow-hidden shadow-xl">
          <div className="relative w-full h-full">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-theme-violet/20 text-theme-violet rounded-full px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {tags.length > 3 && (
                    <span className="bg-theme-violet/20 text-theme-violet rounded-full px-3 py-1 text-xs">
                      +{tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute backface-hidden rotate-y-180 w-full h-full rounded-xl overflow-hidden bg-theme-dark-blue border border-theme-violet/20">
          <div className="p-6 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-300 mb-4 flex-grow overflow-auto">{description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-theme-violet/20 text-theme-violet rounded-full px-3 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 mt-auto">
              {githubLink && (
                <Button asChild variant="outline" className="flex-1">
                  <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github mr-2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    GitHub
                  </a>
                </Button>
              )}
              
              {demoLink && (
                <Button asChild className="flex-1 bg-theme-violet hover:bg-theme-violet/90">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                    Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
