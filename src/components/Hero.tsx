import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Brain, 
  TrendingUp, 
  Award,
  Stethoscope,
  Heart
} from "lucide-react";

const Hero = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Learning",
      description: "Master medical terminology with organized categories and definitions"
    },
    {
      icon: Brain,
      title: "Interactive Quizzes",
      description: "Test your knowledge with multiple-choice and flashcard quizzes"
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Monitor your learning journey with detailed score tracking"
    },
    {
      icon: Award,
      title: "Achievement System",
      description: "Earn badges and certificates as you complete each category"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Background */}
      <div className="hero-gradient">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            {/* Medical Icons Animation */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Stethoscope className="h-16 w-16 animate-bounce-medical" />
                <Heart className="h-8 w-8 absolute -top-2 -right-2 text-red-400 animate-pulse-medical" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Master Medical
              <br />
              <span className="bg-gradient-to-r from-secondary-light to-accent-light bg-clip-text text-transparent">
                Terminology
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Build your medical vocabulary with interactive flashcards, 
              comprehensive quizzes, and structured learning paths designed for healthcare professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/learn">
                  <BookOpen className="h-5 w-5" />
                  Start Learning
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/quiz">
                  <Brain className="h-5 w-5" />
                  Take Quiz
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Choose MedTerms?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform combines proven learning methods with modern technology 
              to help you master medical terminology efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="category-card p-6 text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Medical Terms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">10+</div>
              <div className="text-muted-foreground">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-muted-foreground">Quiz Questions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;