import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap, 
  Code, 
  BarChart3, 
  Database, 
  Github, 
  Linkedin, 
  Mail,
  Trophy,
  BookOpen,
  Target
} from "lucide-react";

export default function About() {
  const skills = [
    { name: "Python", level: 85, category: "Programming" },
    { name: "Pandas & NumPy", level: 80, category: "Data Manipulation" },
    { name: "Matplotlib & Seaborn", level: 75, category: "Visualization" },
    { name: "Statistics", level: 70, category: "Mathematics" },
    { name: "SQL", level: 65, category: "Database" },
    { name: "Machine Learning", level: 60, category: "AI/ML" },
  ];

  const achievements = [
    "Completed 7 comprehensive EDA projects on real-world datasets",
    "Mastered data cleaning and preprocessing techniques",
    "Developed expertise in statistical analysis and hypothesis testing",
    "Created interactive visualizations using modern Python libraries",
    "Applied ML algorithms for predictive analytics",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <Database className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About My Journey</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm currently pursuing <span className="text-primary font-semibold">AI & Data Science</span> through PWSkills' 
              comprehensive program, exploring the fascinating world of Exploratory Data Analysis as part of my Machine Learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                My Learning Path
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  My journey into data science began with curiosity about how data drives decision-making in today's digital world. 
                  Through PWSkills' Data Science with Gen AI course, I've been diving deep into the fundamentals of data analysis.
                </p>
                <p>
                  The EDA projects featured in this portfolio represent my hands-on learning experience with 7 diverse, real-world datasets. 
                  Each project has taught me valuable lessons about data cleaning, statistical analysis, and deriving actionable insights.
                </p>
                <p>
                  What excites me most is the intersection of traditional statistical methods with modern AI techniques, 
                  creating powerful tools for understanding complex datasets and making data-driven predictions.
                </p>
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-card to-muted/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  Current Focus Areas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Code className="h-4 w-4 mr-2 text-accent" />
                    Python Programming
                  </span>
                  <Badge>Advanced</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <BarChart3 className="h-4 w-4 mr-2 text-accent" />
                    Data Visualization
                  </span>
                  <Badge>Intermediate</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Database className="h-4 w-4 mr-2 text-accent" />
                    Statistical Analysis
                  </span>
                  <Badge>Intermediate</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-accent" />
                    Machine Learning
                  </span>
                  <Badge variant="secondary">Learning</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {skill.category}
                  </Badge>
                </div>
                <Progress value={skill.level} className="h-2" />
                <div className="text-right text-sm text-muted-foreground">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
            <Trophy className="h-8 w-8 text-primary mr-3" />
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always eager to learn from others in the data science community and share my experiences. 
            Feel free to reach out if you'd like to discuss projects, techniques, or opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
              <Mail className="h-4 w-4 mr-2" />
              Email Me
            </Button>
            <Button variant="outline" size="lg">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}