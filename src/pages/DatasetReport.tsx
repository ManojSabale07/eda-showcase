import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Download, 
  ExternalLink, 
  FileText, 
  BarChart3, 
  Database,
  Calendar,
  User,
  Code,
  Github
} from "lucide-react";
import { DatasetInfo } from "@/types";

const datasetInfo: Record<string, DatasetInfo> = {
  "google-playstore": {
    title: "Google Play Store Apps Analysis",
    description: "Comprehensive EDA on Google Play Store app data including ratings, installs, categories, and pricing strategies.",
    category: "Mobile Analytics",
    dateCompleted: "March 2024",
    duration: "2 weeks",
    keyInsights: [
      "Free apps dominate the market with 92% share",
      "Games category has highest number of apps but Communication apps have higher ratings",
      "Strong correlation between app size and category type",
      "Rating distribution follows normal pattern with mean around 4.2"
    ],
    techniques: ["Data Cleaning", "Statistical Analysis", "Correlation Analysis", "Categorical Analysis"],
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "NumPy"],
    htmlFile: "google_playstore_eda.html"
  },
  "hr-analytics": {
    title: "HR Analytics - Employee Attrition Study",
    description: "Deep analysis of employee data to understand factors affecting attrition, satisfaction, and performance metrics.",
    category: "People Analytics",
    dateCompleted: "March 2024",
    duration: "3 weeks",
    keyInsights: [
      "Employees with 1-2 years experience show highest attrition rate (24%)",
      "Work-life balance score strongly correlates with employee retention",
      "Sales department has highest attrition rate among all departments",
      "Monthly income and job satisfaction are key retention factors"
    ],
    techniques: ["Predictive Modeling", "Feature Engineering", "Chi-Square Tests", "ANOVA"],
    tools: ["Python", "Pandas", "Scikit-learn", "Plotly", "Matplotlib"],
    htmlFile: "hr_analytics_eda.html"
  },
  // Add other datasets...
};

export default function DatasetReport() {
  const { datasetId } = useParams<{ datasetId: string }>();
  const dataset = datasetInfo[datasetId as keyof typeof datasetInfo];

  if (!dataset) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Dataset Not Found</h1>
          <p className="text-muted-foreground">The requested dataset analysis could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white">
                {dataset.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{dataset.title}</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {dataset.description}
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gradient-to-r from-primary to-accent">
              <FileText className="h-4 w-4 mr-2" />
              View Full Report
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Notebook
            </Button>
            <Button variant="outline">
              <Github className="h-4 w-4 mr-2" />
              View Code
            </Button>
            <Button variant="outline">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Completed</p>
                    <p className="text-sm text-muted-foreground">{dataset.dateCompleted}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Duration</p>
                    <p className="text-sm text-muted-foreground">{dataset.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Category</p>
                    <p className="text-sm text-muted-foreground">{dataset.category}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Code className="h-4 w-4 mr-2" />
                  Techniques Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {dataset.techniques.map((technique) => (
                    <Badge key={technique} variant="secondary" className="text-xs">
                      {technique}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tools & Libraries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {dataset.tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Key Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Key Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dataset.keyInsights.map((insight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <p className="text-muted-foreground">{insight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Separator />

            {/* Embedded Report */}
            <Card>
              <CardHeader>
                <CardTitle>Interactive Analysis Report</CardTitle>
                <p className="text-muted-foreground">
                  Below is the complete Jupyter notebook analysis with all visualizations and detailed findings.
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/20 rounded-lg p-8 text-center">
                  <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Report Placeholder</h3>
                  <p className="text-muted-foreground mb-6">
                    The Jupyter notebook HTML export would be embedded here as an iframe.
                  </p>
                  <div className="bg-card p-6 rounded border-2 border-dashed border-border">
                    <code className="text-sm text-muted-foreground">
                      &lt;iframe src="{dataset.htmlFile}" width="100%" height="800px" frameborder="0"&gt;&lt;/iframe&gt;
                    </code>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Upload your notebook HTML export and replace the src path to display your analysis.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}