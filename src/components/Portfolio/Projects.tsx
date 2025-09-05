import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Database, ShoppingCart, CheckSquare, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Loan Website",
      description: "Django, HTML, CSS, Bootstrap - Developed a secure loan application platform implemented user authentication and a loan approval system.",
      icon: <Database className="w-8 h-8" />,
      technologies: ["Django", "HTML", "CSS", "Bootstrap", "SQLite"],
      features: [
        "User Authentication System",
        "Loan Application Processing", 
        "Secure Payment Gateway Integration",
        "Admin Dashboard for Loan Management",
        "Responsive Design"
      ],
      category: "Web Application",
      status: "Completed"
    },
    {
      id: 2,
      title: "E-Shoes Website",
      description: "Django, HTML, CSS, Bootstrap, SQLite, Python - Built an online shoe store with full shopping cart & secure checkout functionality. Integrated a user authentication system and an admin panel for product management.",
      icon: <ShoppingCart className="w-8 h-8" />,
      technologies: ["Django", "Python", "HTML", "CSS", "Bootstrap", "SQLite"],
      features: [
        "Product Catalog with Categories",
        "Shopping Cart & Checkout System",
        "User Account Management",
        "Order Tracking System",
        "Admin Panel for Product Management",
        "Payment Integration"
      ],
      category: "E-commerce",
      status: "Completed"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Django, HTML, CSS, Bootstrap, SQLite, Python - Developed a role-based task management system with task assignment, filtering, and status tracking features. Implemented responsive dashboard using Bootstrap and Django ORM for seamless CRUD operations.",
      icon: <CheckSquare className="w-8 h-8" />,
      technologies: ["Django", "Python", "HTML", "CSS", "Bootstrap", "SQLite"],
      features: [
        "Role-based Access Control",
        "Task Assignment & Tracking",
        "Priority & Status Management",
        "Advanced Filtering Options",
        "Responsive Dashboard",
        "Real-time Updates"
      ],
      category: "Productivity Tool",
      status: "Completed"
    },
    {
      id: 4,
      title: "Employee Management System",
      description: "Django, HTML, CSS, Bootstrap, SQL, Python - Developed a Django-based web application to efficiently manage employee records, including CRUD operations, role-based access, and departmental organization.",
      icon: <Users className="w-8 h-8" />,
      technologies: ["Django", "Python", "HTML", "CSS", "Bootstrap", "SQL"],
      features: [
        "Employee CRUD Operations",
        "Department Management",
        "Role-based Access Control",
        "Employee Search & Filter",
        "Attendance Tracking",
        "Report Generation"
      ],
      category: "Management System",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my expertise in full-stack web development with real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-card border hover:shadow-2xl transition-all duration-500 card-hover animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-primary group-hover:text-accent transition-colors duration-300">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="text-xs border-green-500 text-green-500"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Technologies Used */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-sm text-muted-foreground">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex pt-4">
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25"
                    asChild
                  >
                    <a href="https://github.com/himanshu77x" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://github.com/himanshu77x" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;