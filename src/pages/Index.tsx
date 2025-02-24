
import { useEffect } from "react";
import { Progress } from "@/components/Progress";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-container min-h-[90vh] flex items-center">
        <div className="reveal">
          <span className="text-accent font-medium mb-4 block">Welcome to my portfolio</span>
          <h1 className="text-5xl sm:text-7xl font-display font-bold mb-6">
            Hi, I'm <span className="text-accent">John Doe</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8">
            A passionate full-stack developer crafting beautiful and functional web experiences. 
            Based in San Francisco, CA.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors">
              Get in touch <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-container bg-secondary">
        <div className="reveal">
          <span className="text-accent font-medium mb-2 block">About me</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-8">Professional Background</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                With over 5 years of experience in web development, I specialize in creating modern and efficient web applications. 
                My approach combines clean code practices with innovative design thinking.
              </p>
              <p className="text-muted-foreground">
                I'm passionate about creating intuitive user experiences and solving complex problems through elegant solutions.
              </p>
            </div>
            <div className="space-y-6">
              <Progress label="React / Next.js" value={90} />
              <Progress label="TypeScript" value={85} />
              <Progress label="Node.js" value={80} />
              <Progress label="UI/UX Design" value={75} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-container">
        <div className="reveal">
          <span className="text-accent font-medium mb-2 block">My Work</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl bg-secondary">
                <div className="aspect-video bg-muted"></div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl mb-2">Project {i}</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of the project and its main features.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                      React
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                      TypeScript
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container bg-secondary">
        <div className="reveal max-w-2xl mx-auto text-center">
          <span className="text-accent font-medium mb-2 block">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out if you'd like to work together!
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Say Hello
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
