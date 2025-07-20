import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { quizQuestions, medicalCategories, QuizQuestion } from "@/data/medicalTerms";
import { Brain, CheckCircle, XCircle, Trophy, RotateCcw, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface QuizScore {
  correct: number;
  total: number;
  percentage: number;
  category: string;
  date: string;
}

const Quiz = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const { toast } = useToast();

  const categoryQuestions = selectedCategory 
    ? quizQuestions.filter(q => q.category === selectedCategory)
    : quizQuestions;

  useEffect(() => {
    if (selectedCategory) {
      setAnsweredQuestions(new Array(categoryQuestions.length).fill(false));
      setUserAnswers(new Array(categoryQuestions.length).fill(-1));
    }
  }, [selectedCategory, categoryQuestions.length]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setIsQuizComplete(false);
    setSelectedAnswer(null);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const newAnsweredQuestions = [...answeredQuestions];
    const newUserAnswers = [...userAnswers];
    
    newAnsweredQuestions[currentQuestion] = true;
    newUserAnswers[currentQuestion] = selectedAnswer;
    
    setAnsweredQuestions(newAnsweredQuestions);
    setUserAnswers(newUserAnswers);

    if (selectedAnswer === categoryQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setShowResult(true);

    // Auto-advance after 2 seconds
    setTimeout(() => {
      if (currentQuestion < categoryQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        completeQuiz();
      }
    }, 2000);
  };

  const completeQuiz = () => {
    const finalScore = score + (selectedAnswer === categoryQuestions[currentQuestion]?.correctAnswer ? 1 : 0);
    const percentage = Math.round((finalScore / categoryQuestions.length) * 100);
    
    // Save score to localStorage
    const newScore: QuizScore = {
      correct: finalScore,
      total: categoryQuestions.length,
      percentage,
      category: selectedCategory || 'all',
      date: new Date().toISOString()
    };

    const savedScores = JSON.parse(localStorage.getItem('medicalQuizScores') || '[]');
    savedScores.push(newScore);
    localStorage.setItem('medicalQuizScores', JSON.stringify(savedScores));

    setIsQuizComplete(true);
    
    // Show completion toast
    toast({
      title: "Quiz Complete!",
      description: `You scored ${percentage}% (${finalScore}/${categoryQuestions.length})`,
    });
  };

  const resetQuiz = () => {
    setSelectedCategory(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setIsQuizComplete(false);
    setSelectedAnswer(null);
  };

  const selectedCategoryData = medicalCategories.find(cat => cat.id === selectedCategory);
  const currentQ = categoryQuestions[currentQuestion];
  const progress = ((currentQuestion + (showResult ? 1 : 0)) / categoryQuestions.length) * 100;

  if (isQuizComplete) {
    const finalScore = score;
    const percentage = Math.round((finalScore / categoryQuestions.length) * 100);
    
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="medical-card p-8 text-center">
            <div className="mb-6">
              <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
              <p className="text-muted-foreground">
                {selectedCategoryData?.name || 'All Categories'} Quiz
              </p>
            </div>

            <div className="mb-8">
              <div className="text-6xl font-bold text-primary mb-2">{percentage}%</div>
              <p className="text-lg text-muted-foreground">
                You got {finalScore} out of {categoryQuestions.length} questions correct
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-secondary/20 rounded-lg">
                <div className="text-2xl font-bold text-secondary">{finalScore}</div>
                <div className="text-sm text-muted-foreground">Correct Answers</div>
              </div>
              <div className="p-4 bg-destructive/20 rounded-lg">
                <div className="text-2xl font-bold text-destructive">
                  {categoryQuestions.length - finalScore}
                </div>
                <div className="text-sm text-muted-foreground">Incorrect Answers</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="medical" onClick={resetQuiz}>
                <RotateCcw className="h-4 w-4" />
                Take Another Quiz
              </Button>
              <Button asChild variant="outline">
                <Link to="/learn">
                  <Brain className="h-4 w-4" />
                  Continue Learning
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/">
                  <Home className="h-4 w-4" />
                  Home
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Take a Quiz
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Test your medical terminology knowledge. Choose a category to begin your quiz.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              Select Quiz Category
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalCategories.map((category) => {
                const categoryQuestionCount = quizQuestions.filter(q => q.category === category.id).length;
                return (
                  <Card
                    key={category.id}
                    className="category-card p-6 cursor-pointer group"
                    onClick={() => handleCategorySelect(category.id)}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <Badge variant="secondary" className="text-xs">
                        {categoryQuestionCount} questions
                      </Badge>
                    </div>
                  </Card>
                );
              })}
              
              {/* All Categories Option */}
              <Card
                className="category-card p-6 cursor-pointer group border-primary/30"
                onClick={() => handleCategorySelect('all')}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    🎯
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Mixed Quiz</h3>
                  <p className="text-muted-foreground mb-4">Questions from all categories</p>
                  <Badge variant="secondary" className="text-xs">
                    {quizQuestions.length} questions
                  </Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Quiz Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" onClick={resetQuiz}>
              ← Back to Categories
            </Button>
            <Badge variant="outline" className="text-sm">
              {selectedCategoryData?.name || 'Mixed Quiz'}
            </Badge>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1} of {categoryQuestions.length}</span>
              <span>Score: {score}/{categoryQuestions.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Question Card */}
        <Card className="medical-card p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">{currentQ?.question}</h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {currentQ?.options.map((option, index) => {
              let buttonClass = "w-full text-left p-4 h-auto justify-start";
              
              if (showResult) {
                if (index === currentQ.correctAnswer) {
                  buttonClass += " bg-secondary text-secondary-foreground border-secondary";
                } else if (index === selectedAnswer && index !== currentQ.correctAnswer) {
                  buttonClass += " bg-destructive text-destructive-foreground border-destructive";
                } else {
                  buttonClass += " opacity-50";
                }
              } else if (selectedAnswer === index) {
                buttonClass += " bg-primary text-primary-foreground border-primary";
              } else {
                buttonClass += " variant-outline";
              }

              return (
                <Button
                  key={index}
                  className={buttonClass}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                >
                  <div className="flex items-center gap-3 w-full">
                    <span className="text-lg font-semibold">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="flex-1">{option}</span>
                    {showResult && index === currentQ.correctAnswer && (
                      <CheckCircle className="h-5 w-5 text-secondary" />
                    )}
                    {showResult && index === selectedAnswer && index !== currentQ.correctAnswer && (
                      <XCircle className="h-5 w-5 text-destructive" />
                    )}
                  </div>
                </Button>
              );
            })}
          </div>

          {/* Explanation */}
          {showResult && currentQ?.explanation && (
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2">Explanation:</h4>
              <p className="text-muted-foreground">{currentQ.explanation}</p>
            </div>
          )}

          {/* Submit Button */}
          {!showResult && (
            <div className="mt-8 text-center">
              <Button
                variant="medical"
                size="lg"
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="min-w-32"
              >
                Submit Answer
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Quiz;