
import { 
  Code, Database, Cloud, LineChart, Library, Brain,
  PencilRuler, Cpu, Box, Hexagon, Chrome,
  // Import specific tech icons
  FileCode, FileType, Database as SqlIcon, FilePen,
  SquareCode, HeartPulse, Boxes, CloudCog, Cable,
  BarChartBig, Wifi, Briefcase, Binary, Boxes as DbIcon,
  Lightbulb
} from "lucide-react";

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 95, icon: FileCode },
      { name: "Java", level: 85, icon: FileType },
      { name: "PHP", level: 80, icon: FilePen },
      { name: "SQL", level: 90, icon: SqlIcon },
      { name: "JavaScript", level: 75, icon: SquareCode },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Library,
    skills: [
      { name: "Flask", level: 90, icon: Briefcase },
      { name: "Spring Boot", level: 85, icon: HeartPulse },
      { name: "Express", level: 70, icon: Boxes },
      { name: "JEE", level: 75, icon: FileType },
      { name: "React", level: 80, icon: Chrome },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 80, icon: CloudCog },
      { name: "Oracle Cloud", level: 75, icon: Cloud },
      { name: "Docker", level: 90, icon: Box },
      { name: "Render", level: 85, icon: Hexagon },
      { name: "Vercel", level: 85, icon: Cpu },
    ],
  },
  {
    title: "Big Data & Analytics",
    icon: Database,
    skills: [
      { name: "Kafka", level: 85, icon: Cable },
      { name: "Flink", level: 80, icon: Wifi },
      { name: "Elasticsearch", level: 75, icon: BarChartBig },
      { name: "Kibana", level: 70, icon: LineChart },
      { name: "Power BI", level: 90, icon: Briefcase },
    ],
  },
  {
    title: "Databases",
    icon: LineChart,
    skills: [
      { name: "MySQL", level: 95, icon: DbIcon },
      { name: "PostgreSQL", level: 90, icon: Database },
      { name: "MongoDB", level: 75, icon: Binary },
    ],
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 85, icon: Brain },
      { name: "Data Science", level: 80, icon: PencilRuler },
      { name: "NLP", level: 75, icon: Lightbulb },
    ],
  },
];
