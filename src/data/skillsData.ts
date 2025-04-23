import { 
  Code, Database, Cloud, LineChart, Library, Brain,
  PencilRuler, Cpu, Box, Hexagon, Chrome,
  FileCode, FileType, Database as SqlIcon, FilePen,
  SquareCode, HeartPulse, Boxes, CloudCog, Cable,
  BarChartBig, Wifi, Briefcase, Binary, Boxes as DbIcon,
  Lightbulb, BarChart, Settings, Terminal, Wrench, Languages
} from "lucide-react";

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 95, icon: FileCode },
      { name: "Java", level: 85, icon: FileType },
      { name: "C++", level: 65, icon: FileType },
      { name: "PHP", level: 80, icon: FilePen },
      { name: "SQL", level: 90, icon: SqlIcon },
      { name: "JavaScript", level: 75, icon: SquareCode },
      { name: "Bash", level: 68, icon: Terminal },
      { name: "VBA", level: 60, icon: FileCode },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Library,
    skills: [
      { name: "Pandas", level: 90, icon: Briefcase },
      { name: "NumPy", level: 85, icon: Briefcase },
      { name: "Scikit-learn", level: 85, icon: Brain },
      { name: "TensorFlow", level: 70, icon: Brain },
      { name: "Keras", level: 70, icon: Brain },
      { name: "Seaborn", level: 75, icon: BarChart },
      { name: "Matplotlib", level: 75, icon: BarChart },
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
      { name: "Git", level: 80, icon: Wrench },
    ],
  },
  {
    title: "Big Data & Analytics",
    icon: Database,
    skills: [
      { name: "Kafka", level: 85, icon: Cable },
      { name: "Spark", level: 70, icon: Wifi },
      { name: "Flink", level: 80, icon: Wifi },
      { name: "SAS", level: 65, icon: Database },
      { name: "Elasticsearch", level: 75, icon: BarChartBig },
      { name: "Kibana", level: 70, icon: LineChart },
      { name: "ETL", level: 68, icon: Cable },
      { name: "Power BI", level: 90, icon: Briefcase },
      { name: "Tableau", level: 65, icon: BarChart },
    ],
  },
  {
    title: "Databases",
    icon: LineChart,
    skills: [
      { name: "MySQL", level: 95, icon: DbIcon },
      { name: "PostgreSQL", level: 90, icon: Database },
      { name: "MongoDB", level: 75, icon: Binary },
      { name: "Redis", level: 65, icon: Database },
    ],
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 85, icon: Brain },
      { name: "Supervised Learning", level: 80, icon: Brain },
      { name: "Unsupervised Learning", level: 75, icon: Brain },
      { name: "Data Science", level: 80, icon: PencilRuler },
      { name: "NLP", level: 75, icon: Lightbulb },
    ],
  },
  {
    title: "Languages",
    icon: Languages,
    skills: [
      { name: "Français", level: 100, icon: Languages },
      { name: "Anglais", level: 85, icon: Languages },
      { name: "Arabe", level: 90, icon: Languages },
    ],
  },
];
