
import { Code, Database, Cloud, LineChart, Library, Brain } from "lucide-react";

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 85 },
      { name: "PHP", level: 80 },
      { name: "SQL", level: 90 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Library,
    skills: [
      { name: "Flask", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "Express", level: 70 },
      { name: "JEE", level: 75 },
      { name: "React", level: 80 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 80 },
      { name: "Oracle Cloud", level: 75 },
      { name: "Docker", level: 90 },
      { name: "Render", level: 85 },
      { name: "Vercel", level: 85 },
    ],
  },
  {
    title: "Big Data & Analytics",
    icon: Database,
    skills: [
      { name: "Kafka", level: 85 },
      { name: "Flink", level: 80 },
      { name: "Elasticsearch", level: 75 },
      { name: "Kibana", level: 70 },
      { name: "Power BI", level: 90 },
    ],
  },
  {
    title: "Databases",
    icon: LineChart,
    skills: [
      { name: "MySQL", level: 95 },
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Data Science", level: 80 },
      { name: "NLP", level: 75 },
    ],
  },
];
