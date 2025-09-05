import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA) - Pursuing",
      institution: "Delhi, India",
      period: "Starting 2025 (1 year)",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Full Stack Web Development Course",
      institution: "IT Vedant Institute",
      period: "06/2024 - 06/2025",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Higher Secondary Education",
      institution: "Govt. Sr. Sec School",
      period: "04/2023 - 04/2024",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Secondary Education",
      institution: "Rama Krishna Vidya Mandir Sr. Sec. School",
      period: "04/2021 - 05/2022",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative web solutions that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Career Objective
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Aspiring Web Developer passionate about designing and developing user-friendly, 
              efficient, and scalable web applications using modern technologies like Django and SQL. 
              Strong problem-solving skills and a keen interest in continuous learning.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 rounded-lg bg-card border">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Certificates Earned</div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card/50 border hover:bg-card transition-colors duration-300 card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-primary mt-1">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;