import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Add dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    // Add cursor glow effect
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.createElement('div');
      cursor.className = 'cursor-glow';
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      document.body.appendChild(cursor);
      
      setTimeout(() => {
        cursor.remove();
      }, 500);
    };
    
    // Uncomment to enable cursor effect (can impact performance)
    // window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      // window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
