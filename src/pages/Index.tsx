import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { SectionHeading } from "@/components/ui/section-heading";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import SkillCategory from "@/components/SkillCategory";
import TimelineItem from "@/components/TimelineItem";
import ContactForm from "@/components/ContactForm";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bg-theme-deep-navy min-h-screen">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16 hero-glow">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full border border-theme-violet/20 -top-12 -right-12 animate-pulse-light"></div>
          <div className="absolute w-48 h-48 rounded-full bg-theme-electric-blue/5 bottom-24 right-12 animate-float delay-700"></div>
          <div className="absolute w-64 h-64 rounded-full bg-theme-violet/5 top-36 left-12 animate-float"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-1 rounded-full bg-theme-violet/10 text-theme-violet font-medium text-sm mb-6">
                Data Engineer & Cloud Enthusiast
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white leading-tight">
                Turning Data Into <span className="gradient-text">Actionable Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Hi, I'm Houssam Karroum — a Data Engineering & Cloud Computing student, passionate about building intelligent systems, solving real-world problems, and creating innovative digital experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-theme-violet hover:bg-theme-violet/90">
                  <a href="#projects">View My Projects</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#" download>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text mr-2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-16 flex justify-center">
              <a href="#about" className="animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-theme-violet"><circle cx="12" cy="12" r="10"/><path d="m16 12-4 4-4-4"/><path d="m16 8-4 4-4-4"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-theme-dark-blue">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="relative rounded-xl overflow-hidden aspect-square max-w-md mx-auto md:ml-0">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                  alt="Houssam Karroum" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-theme-dark-blue via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="reveal">
              <SectionHeading 
                title="About Me" 
                centered={false}
              />

              <div className="space-y-6 text-gray-300">
                <p>
                  I'm a passionate Data Engineering & Cloud Computing student, currently pursuing my engineering degree at ENSIBS with a focus on data and cybersecurity.
                </p>
                <p>
                  My journey in tech started with a BTS in Computer Science, which eventually led to my admission to a top engineering school. I combine technical expertise with creative problem-solving to build robust, scalable data solutions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                  <div className="flex items-start">
                    <div className="mr-3 text-theme-violet">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Data Science & Analytics</h3>
                      <p className="text-sm text-gray-400">Building real-time data pipelines & analytics solutions</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 text-theme-violet">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Cloud Computing</h3>
                      <p className="text-sm text-gray-400">AWS, Oracle Cloud, Docker, Vercel & Render</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 text-theme-violet">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Backend Development</h3>
                      <p className="text-sm text-gray-400">Python, Flask, Spring, PHP</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 text-theme-violet">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Currently</h3>
                      <p className="text-sm text-gray-400">Engineer student at ENSIBS (Data & Cybersecurity)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="flex items-center text-gray-400 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin mr-2 text-theme-violet"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Based in Vannes, Mobile in France
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild variant="outline" size="sm">
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin mr-2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github mr-2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href="mailto:example@email.com">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mr-2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Check out some of my recent work spanning data engineering, machine learning and web development."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="reveal">
              <ProjectCard
                title="AI Football Predictor"
                description="A Flask + React app that predicts Premier League match winners using a machine learning model trained on real match data. Features include interactive team comparisons, historical performance analysis, and win probability visualization."
                image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
                tags={["Python", "Flask", "React", "Machine Learning", "Tailwind CSS", "Mantine UI", "Vercel", "Render"]}
                githubLink="https://github.com/"
                demoLink="https://example.com/"
              />
            </div>

            <div className="reveal">
              <ProjectCard
                title="Power BI Football Dashboard"
                description="An interactive dashboard developed during my internship that visualizes Premier League performance statistics. Extracted and transformed complex data sets to provide insights for fans, analysts, and coaches through intuitive visualizations."
                image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                tags={["Power BI", "Data Analysis", "SQL", "ETL", "Data Visualization"]}
                demoLink="https://example.com/"
              />
            </div>

            <div className="reveal">
              <ProjectCard
                title="Docker App – Alternance Tracker"
                description="A containerized application built with native PHP, Tailwind CSS, and MySQL that helps track job applications. Features an advanced search and filter system for managing application statuses and deadlines."
                image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                tags={["Docker", "PHP", "MySQL", "Tailwind CSS", "Docker Compose"]}
                githubLink="https://github.com/"
              />
            </div>

            <div className="reveal">
              <ProjectCard
                title="JEE Reservation Platform"
                description="A comprehensive business reservation platform built with Spring Boot, Spring Security, and Thymeleaf. Includes a REST API and secure admin portal for managing bookings, users, and services."
                image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                tags={["Java", "Spring Boot", "Spring Security", "Thymeleaf", "Swagger", "REST API"]}
                githubLink="https://github.com/"
              />
            </div>

            <div className="reveal">
              <ProjectCard
                title="Kafka/Flink Real-Time System"
                description="A real-time data processing pipeline using Apache Kafka, Apache Flink, Elasticsearch, and Kibana. Simulates and processes streaming data with a PostgreSQL storage layer for long-term analytics."
                image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
                tags={["Kafka", "Flink", "Elasticsearch", "Kibana", "PostgreSQL", "Data Streaming"]}
                githubLink="https://github.com/"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-theme-dark-blue">
        <div className="container mx-auto">
          <SectionHeading 
            title="Experience & Education"
            subtitle="My professional journey and educational background in the field of data engineering and cloud computing."
          />

          <div className="max-w-3xl mx-auto">
            <div className="reveal">
              <TimelineItem
                date="2023"
                title="Data Analysis Intern"
                organization="Neotem"
                location="Paris, France"
                description={
                  <div className="space-y-2">
                    <p>Analyzed football data and built interactive Power BI dashboards to visualize key performance metrics.</p>
                    <p>Collaborated with Hicham and was mentored by Ali to extract actionable insights from complex datasets.</p>
                    <p>Implemented ETL processes to transform raw match data into clean, structured datasets for analysis.</p>
                  </div>
                }
              />
            </div>

            <div className="reveal">
              <TimelineItem
                date="2022 - 2023"
                title="BCG x ENSIBS Project"
                organization="Boston Consulting Group"
                description={
                  <div className="space-y-2">
                    <p>Worked on an AI-powered chatbot for analyzing financial reports (10-K, 10-Q).</p>
                    <p>Focused on financial data extraction and trend analysis using natural language processing.</p>
                    <p>Collaborated with a team of 5 to deliver a functional prototype with 85% accuracy in financial insight extraction.</p>
                  </div>
                }
              />
            </div>

            <div className="reveal">
              <TimelineItem
                date="2021 - Present"
                title="Engineering Student"
                organization="ENSIBS"
                location="Vannes, France"
                description="Pursuing an engineering degree with specialization in Data Engineering and Cybersecurity. Coursework includes advanced data structures, machine learning, cloud computing, and network security."
              />
            </div>

            <div className="reveal">
              <TimelineItem
                date="2019 - 2021"
                title="BTS in Computer Science"
                organization="Lycée Pierre Mendès-France"
                location="Rennes, France"
                description="Completed a technical degree in Computer Science with honors. Focused on software development, database management, and system administration."
                isLast={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container mx-auto">
          <SectionHeading 
            title="Skills & Technologies"
            subtitle="A comprehensive overview of my technical expertise and the tools I work with."
          />

          <div className="reveal">
            <SkillCategory
              title="Programming Languages"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>}
            >
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-python"><path d="M12 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3"/><path d="M12 15h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3"/><path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"/><path d="M16 15v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/><path d="M9 9h1"/><path d="M14 9h1"/><path d="M9 15h1"/><path d="M14 15h1"/></svg>}
                name="Python"
                level={95}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-java"><path d="M5 16 5 5a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v11.46L19 22s-9 2-9-8m1-9l0 12"/><path d="M12 9m-3 0c0 -4 6 -4 6 0s-6 4-6 0"/></svg>}
                name="Java"
                level={85}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-php"><path d="M5 16L5 5a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v11.46L19 22S9 21 9 16m1-9l0 9"/><path d="M6 5.5 6 2.5 10 2.5"/><path d="M11 12.5L12 5.5 15 5.5 14 12.5m-3 4l1.5 1"/></svg>}
                name="PHP"
                level={80}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sql"><path d="M7 11 c-2 0 -4 1 -4 3c0 1 .5 2 2 3 c1.5 1 4 1 6 0c2 -1 2.5 -2 2.5 -3c0 -2 -2 -3 -4.5 -3z"/><path d="M2 10v8.4a1 1 0 0 0 1.45 .89L8 17l4.55 2.3a1 1 0 0 0 .9 0L18 17l4.55 2.3a1 1 0 0 0 1.45 -.9v-8.8a1 1 0 0 0 -1.45 -.89L18 11l-4.55 -2.3a1 1 0 0 0 -.9 0L8 11l-4.55 -2.3a1 1 0 0 0 -1.45 .89z"/><path d="M5 9v-6a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v6"/></svg>}
                name="SQL"
                level={90}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-javascript"><path d="M3 3H21V21H3z"/><path d="M10 17V13.5m1 0a1.5 1.5 0 1 0 0 3c.83 0 1.5-.67 1.5-1.5V9.5M15 17c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5z"/></svg>}
                name="JavaScript"
                level={75}
              />
            </SkillCategory>
          </div>

          <div className="reveal">
            <SkillCategory
              title="Frameworks & Libraries"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask"><path d="M10 2v7.31"/><path d="M14 9.3V2"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>}
            >
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask"><path d="M10 2v7.31"/><path d="M14 9.3V2"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>}
                name="Flask"
                level={90}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-spring-boot"><path d="M3 7c0 -2 2.5 -3 4 -3 2 0 4.5 1 4.5 3s-2.5 3 -4.5 3c-1.5 0 -4 -1 -4 -3z"/><path d="M3 19c0 -2 2.5 -3 4 -3 2 0 4.5 1 4.5 3s-2.5 3 -4.5 3c-1.5 0 -4 -1 -4 -3z"/><path d="M7 7v5m4 7l8 0c2 0 3 -1 3 -3v-11c0 -2 -1 -3 -3 -3l-7 0"/></svg>}
                name="Spring Boot"
                level={85}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-express"><path d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z"/><path d="M7 12h10"/><path d="m13 8-3 4 3 4"/></svg>}
                name="Express"
                level={70}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-jee"><path d="M5 16L5 5a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v11.46L19 22s-9 2-9-8m1-9l0 12"/><path d="M5 5h14"/><path d="M9 7v3m0 3v2"/><path d="M12 7v3m0 3v2"/><path d="M15 7v3m0 3v2"/></svg>}
                name="JEE"
                level={75}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-react"><circle cx="12" cy="12" r="10"/><path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/><path d="M18.6 11c.37.75.7 1.5.97 2.25a10.5 10.5 0 0 1 .36 7.5 10.5 10.5 0 0 1-5.58 5.58 10.5 10.5 0 0 1-7.5-.36A10.5 10.5 0 0 1 3.1 20.4a10.5 10.5 0 0 1-.36-7.5 10.5 10.5 0 0 1 3.75-5.58A10.5 10.5 0 0 1 11 5.37"/></svg>}
                name="React"
                level={80}
              />
            </SkillCategory>
          </div>

          <div className="reveal">
            <SkillCategory
              title="Cloud & DevOps"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>}
            >
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-aws"><path d="m2 2 20 20"/><path d="M3 5c1.5-1.5 3-2 5-2 3 0 5 2 6.5 2 1.5 0 3-1 5.5-1 2 0 3 .5 4 1.5M3 11c1 1 2.5 2 5 2 3 0 5-2 6-2 2 0 3 1 5 1 1.5 0 3-.5 4-1.5M3 17c.5.5 2 2 5 2 4 0 6-3 8-3 3 0 4 2 5 2 2 0 3-1 3-1"/></svg>}
                name="AWS"
                level={80}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-oracle-cloud"><path d="M12 2a8 8 0 0 0-7.992 7.796C3.996 9.9 3.984 9.953 3.974 10.005a5.5 5.5 0 1 0 .32 10.987A8 8 0 1 0 12 2z"/></svg>}
                name="Oracle Cloud"
                level={75}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-docker"><path d="M12 3a6 6 0 0 0-6 6v.75H4.5v2.25H9"/><path d="M12 3a6 6 0 0 1 6 6v.75h1.5v2.25H15"/><path d="M13.5 9.75H4.5v4.5c0 4.15 3.6 7.5 7.5 7.5s7.5-3.35 7.5-7.5v-4.5h-6"/></svg>}
                name="Docker"
                level={90}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-render"><path d="M17.94 13.06A7.5 7.5 0 1 0 5 12a4.5 4.5 0 0 0 7.83 3h1.67"/><path d="m20 7-4 4 4 4"/><path d="M7 3c2 2 6 1 7 0"/></svg>}
                name="Render"
                level={85}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-vercel"><path d="M12 2L2 19.8h20L12 2z"/></svg>}
                name="Vercel"
                level={85}
              />
            </SkillCategory>
          </div>

          <div className="reveal">
            <SkillCategory
              title="Big Data & Analytics"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>}
            >
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-kafka"><path d="M8 16.65V7a1 1 0 0 1 1-1h9c2.5 0 0 8 2.5 8"/><path d="M16 21.5c0-3-4.5-5.5-11.5-3.5"/><path d="M16 2V0"/><path d="M12 2V0"/><path d="M8 2V0"/><path d="M4 2V0"/></svg>}
                name="Kafka"
                level={85}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flink"><path d="M12 2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9Z"/><path d="M4 8v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/></svg>}
                name="Flink"
                level={80}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-elasticsearch"><path d="M2 12a5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5Z"/><path d="M22 19a9 9 0 0 0-9-9 9 9 0 0 0-9 9"/></svg>}
                name="Elasticsearch"
                level={75}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-kibana"><path d="M2 2a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2z"/><path d="M10 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/><path d="M10 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/><path d="M18 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/><path d="M18 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/></svg>}
                name="Kibana"
                level={70}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-power-bi"><path d="M4 4v14a2 2 0 0 0 2 2"/><path d="M8 17a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v4z"/><path d="M14 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5z"/><path d="M8 12v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2"/><path d="M14 7V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1"/></svg>}
                name="Power BI"
                level={90}
              />
            </SkillCategory>
          </div>

          <div className="reveal">
            <SkillCategory
              title="Databases"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>}
            >
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mysql"><path d="M5 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/></svg>}
                name="MySQL"
                level={95}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-postgresql"><path d="M19 6.5h-4c-1 0-1.5-.5-2-1l-1-1c-.5-.5-1-1-2-1H6C4.3 3.5 3 4.8 3 6.5v11c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-8c0-1.7-1-3-2-3z"/><path d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M20 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M16 16a1 1 0 0 0 2 0"/><path d="M12 16a1 1 0 0 0 2 0"/><path d="M8 16a1 1 0 0 0 2 0"/></svg>}
                name="PostgreSQL"
                level={90}
              />
              <SkillCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mongodb"><path d="M8 6h5"/><path d="M8 10h7"/><path d="M8 14h3"/><path d="M16 6h-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"/><path d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3z"/><path d="M2 21h20"/></svg>}
                name="MongoDB"
                level={75}
              />
            </SkillCategory>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="section-padding bg-theme-dark-blue">
        <div className="container mx-auto">
          <SectionHeading 
            title="Leadership & Activities"
            subtitle="Some of the leadership roles and extracurricular activities I've been involved in."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="reveal">
              <div className="bg-theme-deep-navy p-6 rounded-xl border border-slate-800 hover:border-theme-violet/30 transition-all">
                <div className="text-theme-violet text-3xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">President of Fine Arts Club</h3>
                <p className="text-gray-400">Led a team of 15 members, organized exhibitions and workshops to promote creativity among engineering students.</p>
              </div>
            </div>

            <div className="reveal">
              <div className="bg-theme-deep-navy p-6 rounded-xl border border-slate-800 hover:border-theme-violet/30 transition-all">
                <div className="text-theme-violet text-3xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Organizer of GEIW 2024</h3>
                <p className="text-gray-400">Coordinated the Global Engineering Innovation Week, bringing together industry leaders and students for keynotes and workshops.</p>
              </div>
            </div>

            <div className="reveal">
              <div className="bg-theme-deep-navy p-6 rounded-xl border border-slate-800 hover:border-theme-violet/30 transition-all">
                <div className="text-theme-violet text-3xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Vice President of ADE</h3>
                <p className="text-gray-400">Association for Data Engineering – organized tech talks, hackathons, and mentorship programs for aspiring data engineers.</p>
              </div>
            </div>

            <div className="reveal">
              <div className="bg-theme-deep-navy p-6 rounded-xl border border-slate-800 hover:border-theme-violet/30 transition-all">
                <div className="text-theme-violet text-3xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Former delegate of BDCC Program</h3>
                <p className="text-gray-400">Represented student interests in the Big Data & Cloud Computing program, facilitating communication between faculty and students.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto">
          <SectionHeading 
            title="Get In Touch"
            subtitle="Have a question or want to work together? Feel free to reach out through the form below or via social media."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="reveal">
              <ContactForm />
            </div>

            <div className="reveal">
              <div className="bg-theme-dark-blue p-6 md:p-8 rounded-xl border border-slate-800 h-full">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-theme-violet/10 rounded-lg text-theme-violet">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <a href="mailto:example@email.com" className="text-gray-400 hover:text-theme-violet transition-colors">contact@houssamkarroum.com</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-theme-violet/10 rounded-lg text-theme-violet">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Location</h4>
                      <p className="text-gray-400">Vannes, France</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h4 className="text-white font-medium mb-4">Follow Me</h4>
                    <div className="flex gap-4">
                      <a 
                        href="https://linkedin.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-theme-violet/10 rounded-lg text-theme-violet hover:bg-theme-violet/20 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      </a>
                      <a 
                        href="https://github.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-theme-violet/10 rounded-lg text-theme-violet hover:bg-theme-violet/20 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      </a>
                      <a 
                        href="mailto:example@email.com"
                        className="p-3 bg-theme-violet/10 rounded-lg text-theme-violet hover:bg-theme-violet/20 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-theme-dark-blue border-t border-slate-800">
        <div className="container mx-auto text-center">
          <a href="#" className="text-2xl font-display font-bold text-white inline-block mb-6">
            <span className="text-theme-violet">K</span>arroum
          </a>

          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Turning Data Into Actionable Solutions – Data Engineer & Cloud Enthusiast
          </p>

          <div className="flex justify-center gap-6 mb-10">
            <a href="#about" className="text-gray-400 hover:text-theme-violet transition-colors">About</a>
            <a href="#projects" className="text-gray-400 hover:text-theme-violet transition-colors">Projects</a>
            <a href="#experience" className="text-gray-400 hover:text-theme-violet transition-colors">Experience</a>
            <a href="#skills" className="text-gray-400 hover:text-theme-violet transition-colors">Skills</a>
            <a href="#contact" className="text-gray-400 hover:text-theme-violet transition-colors">Contact</a>
          </div>

          <div className="border-t border-slate-800 pt-6">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Houssam Karroum. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
