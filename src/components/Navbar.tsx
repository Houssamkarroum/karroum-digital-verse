
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled
          ? "bg-theme-dark-blue/90 backdrop-blur-lg shadow-lg py-3"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold text-white">
          <span className="text-theme-violet">K</span>arroum
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-theme-violet transition-colors font-medium"
              onClick={(e) => scrollToSection(e, link.href.substring(1))}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="bg-theme-violet hover:bg-theme-violet/90 text-white">
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>Contact Me</a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute left-0 right-0 bg-theme-dark-blue/95 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[500px] py-4" : "max-h-0 overflow-hidden py-0"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-theme-violet py-2 transition-colors"
              onClick={(e) => scrollToSection(e, link.href.substring(1))}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="bg-theme-violet hover:bg-theme-violet/90 text-white w-full">
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>Contact Me</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
