import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Mail, Phone, ArrowUp, Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/himanshu77x",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub"
    },
    {
      href: "mailto:himanshu77b@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      label: "Email"
    },
    {
      href: "tel:+919996490111",
      icon: <Phone className="w-5 h-5" />,
      label: "Phone"
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="md:col-span-2 space-y-4">
              <div className="text-2xl font-bold gradient-text">
                Himanshu Jangra
              </div>
              <p className="text-muted-foreground max-w-md">
                Full Stack Web Developer passionate about creating innovative solutions 
                with Python, Django, and modern web technologies. Always eager to take on 
                new challenges and learn emerging technologies.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Code2 className="w-4 h-4 mr-2" />
                Building the web, one line of code at a time
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {social.icon}
                    <span className="ml-2">{social.label}</span>
                  </a>
                ))}
              </div>

              {/* Back to Top Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="mt-6 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <span>© {currentYear} Himanshu Jangra. All rights reserved.</span>
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;