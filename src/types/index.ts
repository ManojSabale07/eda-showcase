import { ReactNode } from "react";

export interface DatasetCardProps {
  title: string;
  description: string;
  category: string;
  techniques: string[];
  path: string;
  icon: ReactNode;
}

export interface DatasetInfo {
  title: string;
  description: string;
  category: string;
  dateCompleted: string;
  duration: string;
  keyInsights: string[];
  techniques: string[];
  tools: string[];
  htmlFile: string;
}

export interface NavigationItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}