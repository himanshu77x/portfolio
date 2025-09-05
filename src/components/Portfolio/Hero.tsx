import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Mail, Phone } from "lucide-react";
import React from "react";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ Simple downloader
  const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/Himanshu_Jangra_Resume.png"; // ye wahi file hai jo public/ me dali hai
  link.download = "Himanshu_Jangra_Resume.png";
  link.click();
};

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-accent p-1 animate-glow">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <span className="text-4xl font-bold gradient-text">HJ</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Himanshu Jangra</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-in-left"
            style={{ animationDelay: "0.3s" }}
          >
            Full Stack Web Developer
          </p>

          <p
            className="text-lg md:text-xl text-primary mb-8 animate-slide-in-left"
            style={{ animationDelay: "0.6s" }}
          >
            Specializing in Python & Django
          </p>

          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            Aspiring Web Developer passionate about designing and developing
            user-friendly, efficient, and scalable web applications using modern
            technologies like Django and SQL.
          </p>

          <div
            className="flex flex-wrap justify-center gap-6 mb-12 animate-scale-in"
            style={{ animationDelay: "1.2s" }}
          >
            <a
              href="mailto:himanshu77b@gmail.com"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              himanshu77b@gmail.com
            </a>
            <a
              href="tel:9996490111"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              9996490111
            </a>
            <a
              href="https://github.com/himanshu77x"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              github.com/himanshu77x
            </a>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in"
            style={{ animationDelay: "1.5s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
              onClick={downloadResume}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="#contact">
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce"
            onClick={scrollToNext}
            style={{ animationDelay: "2s" }}
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
