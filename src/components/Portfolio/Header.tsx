import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Github, Mail, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ];

  const downloadResume = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = '/src/assets/resume.png'; // We'll handle this better in production
    link.download = 'Himanshu_Jangra_Resume.png';
    link.click();
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">
            Himanshu Jangra
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={downloadResume}
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25"
              asChild
            >
              <a href="https://github.com/himanshu77x" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadResume}
                  className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25"
                  asChild
                >
                  <a href="https://github.com/himanshu77x" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {/* Animated Floating Elements below navbar */}
      <div className="absolute top-full left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-floating -z-10" />
      <div className="absolute top-full right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-floating -z-10" style={{ animationDelay: '2s' }} />
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-floating -z-10" style={{ animationDelay: '4s' }} />
    </header>
  );
};

export default Header;