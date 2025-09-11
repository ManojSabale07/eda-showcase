import { Navigation } from "@/components/Navigation";
import { DatasetCard } from "@/components/DatasetCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Database, 
  BarChart3, 
  Users, 
  Heart, 
  ShoppingCart, 
  TrendingUp, 
  MessageCircle, 
  DollarSign,
  Github,
  Linkedin,
  Mail
} from "lucide-react";

const datasets = [
  {
    title: "Google Play Store Apps",
    description: "Comprehensive analysis of app ratings, installs, categories, and market trends. Exploring factors that contribute to app success and user engagement patterns.",
    category: "Mobile Analytics",
    techniques: ["Data Cleaning", "Statistical Analysis", "Visualization", "Correlation Analysis"],
    path: "/dataset/google-playstore",
    icon: <Database className="h-5 w-5" />
  },
  {
    title: "HR Analytics",
    description: "Deep dive into employee attrition, satisfaction scores, salary distribution, and performance metrics. Identifying key factors affecting employee retention.",
    category: "People Analytics",
    techniques: ["Predictive Modeling", "Feature Engineering", "Segmentation", "Trend Analysis"],
    path: "/dataset/hr-analytics",
    icon: <Users className="h-5 w-5" />
  },
  {
    title: "Chronic Disease Data",
    description: "Analysis of health patterns, lifestyle correlations, and risk factors associated with chronic diseases. Statistical insights into preventive healthcare.",
    category: "Health Analytics",
    techniques: ["Medical Statistics", "Risk Analysis", "Demographic Study", "Pattern Recognition"],
    path: "/dataset/chronic-disease",
    icon: <Heart className="h-5 w-5" />
  },
  {
    title: "Customer Segmentation",
    description: "Behavioral analysis and clustering of customers based on purchase patterns, demographics, and engagement metrics for targeted marketing strategies.",
    category: "Marketing Analytics",
    techniques: ["K-Means Clustering", "RFM Analysis", "Behavioral Segmentation", "Cohort Analysis"],
    path: "/dataset/customer-segmentation",
    icon: <ShoppingCart className="h-5 w-5" />
  },
  {
    title: "Sales Forecasting",
    description: "Time series analysis of sales data to predict future trends, seasonal patterns, and revenue optimization opportunities for business planning.",
    category: "Business Intelligence",
    techniques: ["Time Series", "Forecasting Models", "Seasonal Decomposition", "Trend Analysis"],
    path: "/dataset/sales-forecasting",
    icon: <TrendingUp className="h-5 w-5" />
  },
  {
    title: "Social Media Analysis",
    description: "Sentiment analysis and engagement metrics from social media platforms. Understanding user behavior, content performance, and viral patterns.",
    category: "Social Analytics",
    techniques: ["Sentiment Analysis", "Text Mining", "Network Analysis", "Engagement Metrics"],
    path: "/dataset/social-media",
    icon: <MessageCircle className="h-5 w-5" />
  },
  {
    title: "Financial Market Data",
    description: "Technical and fundamental analysis of stock market data, trading patterns, volatility analysis, and portfolio optimization strategies.",
    category: "Financial Analytics",
    techniques: ["Technical Analysis", "Risk Modeling", "Portfolio Theory", "Market Research"],
    path: "/dataset/financial-market",
    icon: <DollarSign className="h-5 w-5" />
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-accent text-white px-4 py-2">
              PWSkills Data Science Portfolio
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Exploratory Data Analysis Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A comprehensive collection of 7 real-world datasets analyzed using Python, Pandas, and advanced visualization tools. 
              Part of my journey in mastering Data Science with Gen AI through PWSkills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/about">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  About My Journey
                </Button>
              </Link>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Skills & Tools</h2>
            <p className="text-muted-foreground">Technologies and methodologies used in these EDA projects</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Jupyter", "Statistics", "SQL", "Scikit-learn", "Data Visualization", "Machine Learning"].map((skill) => (
              <Badge key={skill} variant="secondary" className="p-3 text-center justify-center">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Datasets Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Dataset Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore comprehensive EDA reports on real-world datasets covering diverse domains from mobile app analytics 
              to financial market analysis. Each report includes data cleaning, statistical insights, and actionable recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {datasets.map((dataset, index) => (
              <DatasetCard key={index} {...dataset} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Connect?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing data science projects, collaborating on analytics work, or sharing insights about the field.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg">
                <Mail className="h-4 w-4 mr-2" />
                Get In Touch
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              <BarChart3 className="h-4 w-4 mr-2" />
              View All Reports
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}