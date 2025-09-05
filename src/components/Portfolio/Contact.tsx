import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Send, MessageCircle } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Defensive: some projects may not provide useToast hook
  const toastHook = (useToast as any)?.();
  const toast = toastHook?.toast;

  // Robust handler with correct typing for both Input and Textarea
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    if (!name) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // NOTE: This submit simulates sending. Replace the inside with EmailJS/Formspree fetch
  // if you want to actually send emails. See commented section below for a simple Formspree example.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form:", formData);
    setIsSubmitting(true);

    try {
      // simulate network delay
      await new Promise((res) => setTimeout(res, 700));

      // show toast if available, otherwise fallback to alert
      try {
        if (typeof toast === "function") {
          toast({
            title: "Message Sent!",
            description: "Thank you for your message — I will get back to you soon.",
          });
        } else {
          alert("Message Sent! Thank you — (fallback)");
        }
      } catch (innerErr) {
        console.error("Toast failed:", innerErr);
        alert("Message Sent! (toast failed)");
      }

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Submit failed:", err);
      try {
        if (typeof toast === "function") {
          toast({ title: "Error", description: "Something went wrong. Try again." });
        } else {
          alert("Something went wrong. Check console.");
        }
      } catch (innerErr) {
        alert("Something went wrong.");
      }
    } finally {
      setIsSubmitting(false);
      console.log("Submit finished");
    }
  };

  /*
    OPTIONAL: To enable real email sending using Formspree, replace the contents
    of handleSubmit above with the fetch example below (and remove the simulation):

    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xxxxx"; // replace
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error("Network response not ok");
        alert("Message sent! Check your email.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (err) {
        console.error(err);
        alert("Failed to send message.");
      } finally {
        setIsSubmitting(false);
      }
    };
  */

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, label: "Email", value: "himanshu77b@gmail.com", href: "mailto:himanshu77b@gmail.com" },
    { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+91 9996490111", href: "tel:+919996490111" },
    { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "Delhi, India", href: "#" },
    { icon: <Github className="w-6 h-6" />, label: "GitHub", value: "github.com/himanshu77x", href: "https://github.com/himanshu77x" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="bg-card border">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MessageCircle className="w-6 h-6 mr-3 text-primary" /> Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">I'm always interested in hearing about new opportunities...</p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300 group"
                    >
                      <div className="text-primary group-hover:text-accent transition-colors duration-300">{info.icon}</div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">I typically respond within 24 hours.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Send className="w-6 h-6 mr-3 text-primary" /> Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
