import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { medicalCategories, medicalTerms, MedicalTerm } from "@/data/medicalTerms";
import { Search, BookOpen, Volume2 } from "lucide-react";

const Learn = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const filteredTerms = medicalTerms.filter(term => {
    const matchesCategory = !selectedCategory || term.category === selectedCategory;
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCardFlip = (termId: string) => {
    setFlippedCard(flippedCard === termId ? null : termId);
  };

  const speakTerm = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const selectedCategoryData = medicalCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Learn Medical Terms
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore medical terminology by category or search for specific terms. 
            Click on cards to reveal definitions and pronunciations.
          </p>
        </div>

        {!selectedCategory ? (
          // Category Selection
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Choose a Category
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalCategories.map((category) => (
                <Card
                  key={category.id}
                  className="category-card p-6 cursor-pointer group"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {medicalTerms.filter(term => term.category === category.id).length} terms
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          // Terms Display
          <div>
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <Button
                  variant="outline"
                  onClick={() => setSelectedCategory(null)}
                  className="shrink-0"
                >
                  ← Back to Categories
                </Button>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{selectedCategoryData?.icon}</span>
                  <h2 className="text-2xl font-semibold">{selectedCategoryData?.name}</h2>
                </div>
              </div>
              
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search terms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
            </div>

            {/* Terms Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTerms.map((term) => (
                <div key={term.id} className="medical-card">
                  <div
                    className={`flashcard ${flippedCard === term.id ? 'flipped' : ''}`}
                    onClick={() => handleCardFlip(term.id)}
                  >
                    {/* Front of card - Term */}
                    <div className="flashcard-face flashcard-front">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">{term.term}</h3>
                        {term.pronunciation && (
                          <div className="flex items-center justify-center gap-2 text-sm opacity-90">
                            <span>/{term.pronunciation}/</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 text-primary-foreground hover:bg-white/20"
                              onClick={(e) => {
                                e.stopPropagation();
                                speakTerm(term.term);
                              }}
                            >
                              <Volume2 className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                        <p className="text-sm mt-4 opacity-80">Click to see definition</p>
                      </div>
                    </div>

                    {/* Back of card - Definition */}
                    <div className="flashcard-face flashcard-back">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold mb-3">{term.term}</h3>
                        <p className="text-sm leading-relaxed">{term.definition}</p>
                        {term.examples && (
                          <div className="mt-3 pt-3 border-t border-white/20">
                            <p className="text-xs opacity-80">
                              Example: {term.examples[0]}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredTerms.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No terms found matching your search.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Learn;