import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Award, Eye, Download, Calendar, Building2 } from "lucide-react";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const certificates = [
    {
      id: 1,
      title: "Master in Full Stack Web Development with Python",
      issuer: "I.T.VEDANT",
      date: "03/02/25",
      image: "/certificates/cce_certificate16748_.jpg",
      type: "Course Completion",
      description: "Comprehensive full-stack web development program covering Python, Django, databases, and modern web technologies.",
      skills: ["Python", "Django", "Full Stack Development", "Web Development"],
      certificateId: "ITV67aae782b925a"
    },
    {
      id: 2,
      title: "Advanced Web Design",
      issuer: "I.T.VEDANT",
      date: "15th Jun, 2025",
      image: "/certificates/advance.jpg",
      type: "Specialization",
      description: "Advanced concepts in web design including responsive design, user experience, and modern CSS techniques.",
      skills: ["Advanced CSS", "Responsive Design", "UI/UX", "Web Design"],
      certificateId: "ITV67aae782b925a"
    },
    {
      id: 3,
      title: "AWS Essentials and DevOps",
      issuer: "I.T.VEDANT",
      date: "15/06/25",
      image: "/certificates/aws.jpg",
      type: "Cloud Computing",
      description: "Essential AWS services and DevOps practices for modern web development and deployment.",
      skills: ["AWS", "DevOps", "Cloud Computing", "Deployment"],
      certificateId: "ITV67aae78129ebf"
    },
    {
      id: 4,
      title: "Core Web Design",
      issuer: "I.T.VEDANT",
      date: "15th Jun, 2025",
      image: "/certificates/core.jpg",
      type: "Foundation",
      description: "Fundamental web design principles and core technologies for web development.",
      skills: ["HTML", "CSS", "Web Fundamentals", "Design Principles"],
      certificateId: "ITV67a4df94057ac"
    },
    {
      id: 5,
      title: "Django Framework",
      issuer: "I.T.VEDANT",
      date: "17th Jun, 2025",
      image: "/certificates/dj.jpg",
      type: "Framework",
      description: "Comprehensive Django framework training for building robust web applications.",
      skills: ["Django", "Python", "Web Framework", "Backend Development"],
      certificateId: "ITV67aae781ebd23"
    },
    {
      id: 6,
      title: "Python Programming",
      issuer: "I.T.VEDANT",
      date: "15th Jun, 2025",
      image: "/certificates/py.jpg",
      type: "Programming Language",
      description: "Comprehensive Python programming course covering fundamentals to advanced concepts.",
      skills: ["Python", "Programming", "Algorithms", "Data Structures"],
      certificateId: "ITV67a4df6d38369"
    },
    {
      id: 7,
      title: "SQL Database Management",
      issuer: "I.T.VEDANT",
      date: "15th Jun, 2025",
      image: "/certificates/sql.jpg",
      type: "Database",
      description: "SQL database management and advanced query optimization techniques.",
      skills: ["SQL", "Database Design", "Query Optimization", "Data Management"],
      certificateId: "ITV66f63e2738c20"
    },
    {
      id: 8,
      title: "MongoDB",
      issuer: "I.T.VEDANT",
      date: "27/10/24",
      image: "/certificates/mon.jpg",
      type: "NoSQL Database",
      description: "NoSQL database management with MongoDB for modern web applications.",
      skills: ["MongoDB", "NoSQL", "Database Design", "Document Databases"],
      certificateId: "ITV647fafc69dd2"
    },
    {
      id: 9,
      title: "Profile Building",
      issuer: "I.T.VEDANT",
      date: "19/10/24",
      image: "/certificates/pro.jpg",
      type: "Professional Development",
      description: "Professional profile building and career development strategies.",
      skills: ["Profile Building", "Career Development", "Professional Skills"],
      certificateId: "ITV67a4df5a56fbc"
    }
  ];

  const openCertificate = (certificate: any) => {
    setSelectedCertificate(certificate);
    setIsDialogOpen(true);
  };

  const downloadCertificate = (certificate: any) => {
    // In a real implementation, this would download the actual certificate file
    console.log(`Downloading certificate: ${certificate.title}`);
  };

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications showcasing expertise in modern web development technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <Card 
              key={certificate.id}
              className="bg-card border hover:shadow-xl transition-all duration-300 card-hover cursor-pointer animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openCertificate(certificate)}
            >
              <CardContent className="p-6">
                {/* Certificate Preview */}
                <div className="aspect-[4/3] mb-4 rounded-lg overflow-hidden bg-muted/50 border relative group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to icon if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Award className="w-16 h-16 text-muted-foreground/50" />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <Badge 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary"
                    >
                      {certificate.type}
                    </Badge>
                  </div>

                  <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {certificate.title}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Building2 className="w-4 h-4 mr-2" />
                      {certificate.issuer}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {certificate.date}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {certificate.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1">
                    {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {certificate.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{certificate.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certificate Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl gradient-text">
                {selectedCertificate?.title}
              </DialogTitle>
            </DialogHeader>
            
            {selectedCertificate && (
              <div className="space-y-6">
                {/* Certificate Image */}
                <div className="aspect-[4/3] rounded-lg overflow-hidden border bg-muted/50">
                  <img 
                    src={selectedCertificate.image} 
                    alt={selectedCertificate.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to styled placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Award className="w-24 h-24 text-muted-foreground mx-auto" />
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {selectedCertificate.title}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          Certificate of Completion
                        </p>
                        <p className="text-xl font-semibold text-primary">
                          Himanshu Jangra
                        </p>
                        <p className="text-muted-foreground">
                          Has successfully completed the {selectedCertificate.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Certificate ID: {selectedCertificate.certificateId}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Date of Achievement: {selectedCertificate.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Certificate Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Issuer:</span>
                        <span className="text-foreground">{selectedCertificate.issuer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="text-foreground">{selectedCertificate.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type:</span>
                        <span className="text-foreground">{selectedCertificate.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">ID:</span>
                        <span className="text-foreground font-mono text-xs">{selectedCertificate.certificateId}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Skills Acquired</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill: string, skillIndex: number) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  {selectedCertificate.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25"
                    onClick={() => downloadCertificate(selectedCertificate)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Certificate
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certificates;