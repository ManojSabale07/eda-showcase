import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, FileText } from "lucide-react";

interface DatasetCardProps {
  title: string;
  description: string;
  category: string;
  techniques: string[];
  path: string;
  icon: React.ReactNode;
}

export function DatasetCard({ title, description, category, techniques, path, icon }: DatasetCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/80 border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
              {icon}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
              <Badge variant="secondary" className="mt-1 text-xs">
                {category}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-4">
        <CardDescription className="text-sm leading-relaxed mb-4">
          {description}
        </CardDescription>
        
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground">Techniques Used:</p>
          <div className="flex flex-wrap gap-1">
            {techniques.map((technique) => (
              <Badge key={technique} variant="outline" className="text-xs px-2 py-1">
                {technique}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between pt-4">
        <Link to={path}>
          <Button className="flex items-center space-x-2 bg-gradient-to-r from-primary to-accent hover:opacity-90">
            <FileText className="h-4 w-4" />
            <span>View Report</span>
          </Button>
        </Link>
        
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="p-2">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="p-2">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}