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

// Import data
import { heroData } from "@/data/heroData";
import { aboutData } from "@/data/aboutData";
import { experienceData } from "@/data/experienceData";
import { projectsData } from "@/data/projectsData";
import { skillCategories } from "@/data/skillsData";
import { leadershipData } from "@/data/leadershipData";
import { contactData } from "@/data/contactData";

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
                {heroData.subtitle}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white leading-tight">
                {heroData.tagline}
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                {heroData.intro}
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
                <img src={aboutData.image} alt="Houssam Karroum" className="w-full h-full object-cover" />
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
            {projectsData.map((project, index) => (
              <div key={index} className="reveal">
                <ProjectCard {...project} />
              </div>
            ))}
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
            {experienceData.map((item, index) => (
              <div key={index} className="reveal">
                <TimelineItem
                  {...item}
                  isLast={index === experienceData.length - 1}
                />
              </div>
            ))}
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

          {skillCategories.map((category, index) => (
            <div key={index} className="reveal">
              <SkillCategory
                title={category.title}
                icon={<category.icon className="w-6 h-6" />}
              >
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </SkillCategory>
            </div>
          ))}
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
            {leadershipData.map((item, index) => (
              <div key={index} className="reveal">
                <div className="bg-theme-deep-navy p-6 rounded-xl border border-slate-800 hover:border-theme-violet/30 transition-all">
                  <div className="text-theme-violet text-3xl mb-4">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
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
