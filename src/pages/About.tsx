import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  Award, 
  BookOpen, 
  Brain, 
  Stethoscope,
  Target,
  Lightbulb,
  Globe
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Database",
      description: "Over 500 medical terms across 10+ categories, from basic anatomy to advanced procedures."
    },
    {
      icon: Brain,
      title: "Interactive Learning",
      description: "Flashcards and quizzes designed to enhance memory retention and understanding."
    },
    {
      icon: Target,
      title: "Personalized Progress",
      description: "Track your learning journey with detailed analytics and achievement badges."
    },
    {
      icon: Globe,
      title: "Accessible Design",
      description: "Mobile-friendly interface with pronunciations and examples for better comprehension."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Medical Education Specialist",
      description: "20+ years in medical education and curriculum development"
    },
    {
      name: "Ahmed Hassan",
      role: "Software Developer",
      description: "Full-stack developer specializing in educational technology"
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "Content Reviewer",
      description: "Board-certified physician ensuring medical accuracy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <Stethoscope className="h-16 w-16 mx-auto mb-6 animate-bounce-medical" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About MedTerms
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Empowering healthcare professionals and students with interactive 
            medical terminology education since 2024.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To democratize medical education by providing accessible, 
                interactive, and comprehensive tools for learning medical terminology. 
                We believe that understanding medical language is the foundation 
                of effective healthcare communication.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="medical-card p-6 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Patient Care</h3>
                <p className="text-muted-foreground">
                  Better terminology knowledge leads to improved patient communication and care.
                </p>
              </Card>
              
              <Card className="medical-card p-6 text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <p className="text-muted-foreground">
                  Supporting students and professionals in their medical education journey.
                </p>
              </Card>
              
              <Card className="medical-card p-6 text-center">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  Maintaining the highest standards of medical accuracy and educational quality.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose MedTerms?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform combines proven educational methods with modern technology 
              to create an optimal learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="medical-card medical-card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg shrink-0">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of medical professionals and technologists 
              work together to create the best learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="medical-card medical-card-hover p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Impact by Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Students Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground">Medical Terms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Lightbulb className="h-16 w-16 text-primary mx-auto mb-6 animate-pulse-medical" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of healthcare professionals who have improved 
              their medical terminology knowledge with MedTerms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="medical" size="lg">
                <Link to="/learn">
                  <BookOpen className="h-5 w-5" />
                  Start Learning
                </Link>
              </Button>
              <Button asChild variant="medical-secondary" size="lg">
                <Link to="/quiz">
                  <Brain className="h-5 w-5" />
                  Take a Quiz
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;