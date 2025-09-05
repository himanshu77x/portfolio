import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Server, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["HTML", "CSS", "Python", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks",
      icon: <Globe className="w-6 h-6" />,
      skills: ["Django", "Bootstrap"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "SQLite", "MongoDB"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "AWS", "DevOps", "Profile Building"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const certifications = [
    "IBM Python",
    "Django",
    "Advanced Web Design",
    "SQL", 
    "Core Web Design",
    "Full Stack Web Development (Python)",
    "Test in Python",
    "Profile Building",
    "MongoDB",
    "AWS Essentials and DevOps"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise in modern web development technologies
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border hover:shadow-lg transition-all duration-300 card-hover animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} p-0.5 mb-4`}>
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-foreground">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Certifications & Achievements
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {certifications.map((cert, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="text-sm px-4 py-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* Progress Bars */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Proficiency Levels
          </h3>
          <div className="space-y-6">
            {[
              { skill: "Python & Django", level: 90 },
              { skill: "HTML & CSS", level: 95 },
              { skill: "JavaScript", level: 80 },
              { skill: "Database Management", level: 85 },
              { skill: "Problem Solving", level: 88 }
            ].map((item, index) => (
              <div key={index} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">{item.skill}</span>
                  <span className="text-primary font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%`, animationDelay: `${index * 0.2}s` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;