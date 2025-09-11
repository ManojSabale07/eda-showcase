import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Github, 
  Linkedin, 
  MessageCircle, 
  Send,
  MapPin,
  Calendar,
  Download
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in discussing data science projects, collaborating on analytics work, or sharing insights? 
            I'd love to hear from you!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're a fellow data science enthusiast, a potential collaborator, or someone interested in 
                my work, I'm always open to meaningful conversations about data, analytics, and technology.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <Card className="hover:shadow-md transition-shadow border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">your.email@example.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Linkedin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">LinkedIn</h3>
                      <p className="text-muted-foreground">linkedin.com/in/yourprofile</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-secondary/20 rounded-full">
                      <Github className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">GitHub</h3>
                      <p className="text-muted-foreground">github.com/yourusername</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start h-auto py-4">
                  <Download className="h-4 w-4 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Download Resume</div>
                    <div className="text-xs text-muted-foreground">PDF Format</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-4">
                  <Calendar className="h-4 w-4 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Schedule Call</div>
                    <div className="text-xs text-muted-foreground">30 min meeting</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Availability */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Availability & Location</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Currently based in [Your Location] and available for remote collaboration worldwide.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Response time:</span> Usually within 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Data Science Collaboration" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Hi! I'd like to discuss your EDA work on the HR Analytics dataset. I'm particularly interested in your approach to..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                I'll get back to you as soon as possible. For urgent matters, please reach out via LinkedIn.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always looking for opportunities to work on interesting data science projects, 
            contribute to open-source initiatives, or learn from experienced professionals in the field.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Github className="h-4 w-4 mr-2" />
              View My Projects
            </Button>
            <Button variant="outline" size="lg">
              <Linkedin className="h-4 w-4 mr-2" />
              Professional Network
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}