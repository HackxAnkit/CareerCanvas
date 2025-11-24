import { useState, useEffect } from "react";
import { Mail, Linkedin, Github, Twitter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
          {/* CUSTOMIZE: Replace with your name or initials */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="text-lg font-semibold hover-elevate active-elevate-2 rounded-md px-3 py-1.5"
            data-testid="link-home"
          >
            YN
          </a>

          <div className="flex items-center gap-1">
            {[
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors hover-elevate active-elevate-2 ${
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-20 md:py-32"
        >
          <div className="mx-auto w-full max-w-4xl text-center">
            {/* CUSTOMIZE: Replace with your name */}
            <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl" data-testid="text-name">
              Your Name
            </h1>
            
            {/* CUSTOMIZE: Replace with your professional title or tagline */}
            <p className="mt-6 text-xl font-medium text-muted-foreground md:text-2xl" data-testid="text-title">
              Creative Professional & Problem Solver
            </p>
            
            {/* CUSTOMIZE: Replace with your brief introduction (1-2 sentences) */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground md:text-lg" data-testid="text-intro">
              Passionate about creating meaningful work that makes a difference. 
              Combining creativity and technical expertise to deliver exceptional results.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                data-testid="button-view-work"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t bg-muted/30 px-6 py-16 md:py-24">
          <div className="mx-auto w-full max-w-3xl">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl" data-testid="heading-about">
              About Me
            </h2>

            <div className="mt-12 flex flex-col items-center">
              {/* CUSTOMIZE: Replace with your professional headshot */}
              <Avatar className="h-48 w-48 border-4 border-background shadow-lg md:h-56 md:w-56" data-testid="img-avatar">
                <AvatarImage src="" alt="Professional headshot" />
                <AvatarFallback className="text-4xl font-semibold">YN</AvatarFallback>
              </Avatar>

              {/* CUSTOMIZE: Replace with your professional bio (2-3 paragraphs) */}
              <div className="mt-12 space-y-6 text-base leading-relaxed text-foreground md:text-lg">
                <p data-testid="text-bio-1">
                  I'm a dedicated professional with a passion for excellence and innovation. 
                  With years of experience in my field, I've developed a unique approach that 
                  combines creativity, strategic thinking, and attention to detail to deliver 
                  outstanding results.
                </p>

                <p data-testid="text-bio-2">
                  My work is driven by curiosity and a commitment to continuous learning. 
                  I believe in the power of collaboration and always strive to bring out the 
                  best in every project I undertake. Whether working independently or as part 
                  of a team, I'm focused on creating value and making a positive impact.
                </p>

                <p data-testid="text-bio-3">
                  When I'm not working, you'll find me exploring new ideas, staying current 
                  with industry trends, and seeking inspiration from diverse sources. I'm 
                  always open to new opportunities and exciting challenges.
                </p>
              </div>

              {/* CUSTOMIZE: Replace with your skills and expertise areas */}
              <div className="mt-12 w-full">
                <h3 className="mb-6 text-center text-xl font-semibold text-foreground">
                  Skills & Expertise
                </h3>
                <div className="flex flex-wrap justify-center gap-2" data-testid="container-skills">
                  {[
                    "Leadership",
                    "Project Management",
                    "Strategic Planning",
                    "Creative Direction",
                    "Problem Solving",
                    "Communication",
                    "Team Collaboration",
                    "Innovation"
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-4 py-2 text-sm"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="border-t px-6 py-16 md:py-24">
          <div className="mx-auto w-full max-w-4xl">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl" data-testid="heading-projects">
              Featured Projects
            </h2>

            <div className="mt-12 space-y-12">
              {/* CUSTOMIZE: Replace with your actual projects */}
              {[
                {
                  id: 1,
                  title: "Project Alpha",
                  description:
                    "A comprehensive solution that transformed the way our clients approach their daily challenges. This project showcases innovative thinking and meticulous execution, resulting in measurable improvements and positive outcomes.",
                  tags: ["Strategy", "Design", "Implementation"],
                  link: "#"
                },
                {
                  id: 2,
                  title: "Initiative Beta",
                  description:
                    "An ambitious endeavor that pushed boundaries and explored new possibilities. Through collaborative effort and creative problem-solving, we delivered results that exceeded expectations and set new standards.",
                  tags: ["Research", "Development", "Launch"],
                  link: "#"
                },
                {
                  id: 3,
                  title: "Campaign Gamma",
                  description:
                    "A strategic project focused on creating meaningful connections and driving engagement. By combining data-driven insights with creative excellence, we achieved remarkable success and lasting impact.",
                  tags: ["Marketing", "Analytics", "Growth"],
                  link: "#"
                }
              ].map((project) => (
                <Card key={project.id} className="overflow-hidden" data-testid={`card-project-${project.id}`}>
                  <div className="p-6">
                    {/* CUSTOMIZE: Add your project images (16:9 aspect ratio recommended) */}
                    <div className="mb-6 aspect-video w-full overflow-hidden rounded-md bg-muted flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Project Image (16:9)</span>
                    </div>

                    <h3 className="text-2xl font-medium text-foreground" data-testid={`text-project-title-${project.id}`}>
                      {project.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-foreground" data-testid={`text-project-description-${project.id}`}>
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs" data-testid={`badge-tag-${tag.toLowerCase()}`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* CUSTOMIZE: Update links to view your projects */}
                    <Button
                      variant="ghost"
                      className="mt-6 gap-2 px-0 hover:gap-3 transition-all"
                      asChild
                      data-testid={`button-view-project-${project.id}`}
                    >
                      <a href={project.link} className="inline-flex items-center">
                        View Project
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t bg-muted/30 px-6 py-16 md:py-24">
          <div className="mx-auto w-full max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl" data-testid="heading-contact">
              Let's Connect
            </h2>

            {/* CUSTOMIZE: Replace with your message */}
            <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg" data-testid="text-contact-intro">
              I'm always interested in hearing about new opportunities, collaborations, 
              or just having a conversation. Feel free to reach out!
            </p>

            {/* CUSTOMIZE: Replace with your email address */}
            <div className="mt-12">
              <Button
                size="lg"
                className="gap-2 text-lg"
                asChild
                data-testid="button-email"
              >
                <a href="mailto:your.email@example.com">
                  <Mail className="h-5 w-5" />
                  your.email@example.com
                </a>
              </Button>
            </div>

            {/* CUSTOMIZE: Update with your social media profiles */}
            <div className="mt-12">
              <p className="mb-6 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Connect With Me
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  data-testid="button-linkedin"
                >
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  data-testid="button-github"
                >
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  data-testid="button-twitter"
                >
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t px-6 py-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* CUSTOMIZE: Update copyright with your name and year */}
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
