
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
          <span className="text-accent font-medium mb-4 block">Data Science & AI Engineer</span>
          <h1 className="text-5xl sm:text-7xl font-display font-bold mb-6">
            Hi, I'm <span className="text-accent">Darshan Kumar</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8">
            A passionate Data Scientist and AI Engineer with expertise in Machine Learning, Deep Learning, and LLM fine-tuning. 
            Currently pursuing Data Science and AI at IIT Madras.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors">
              Get in touch <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/Darshanroy" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/darshankumarr" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
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
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-8">Education & Experience</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="mb-6">
                <h3 className="font-semibold text-lg">Indian Institute of Technology Madras (IITM)</h3>
                <p className="text-muted-foreground">Bachelor's Degree in Data Science and AI | CGPA 8.0</p>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold text-lg">Data Science Intern at EduGorilla Pvt. Ltd</h3>
                <p className="text-muted-foreground">
                  Developed and fine-tuned LLMs for educational content, achieving 40% resource optimization using PEFT.
                  Worked with Qwen 3.2 and Llama 3 models using advanced techniques.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Progress label="Python (ML/DL Libraries)" value={95} />
              <Progress label="LLM Fine-tuning & RAG" value={90} />
              <Progress label="MLOps & Cloud (AWS)" value={85} />
              <Progress label="Data Analysis & Visualization" value={88} />
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
            <div className="group relative overflow-hidden rounded-xl bg-secondary">
              <div className="aspect-video bg-muted"></div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl mb-2">AI Text Detection</h3>
                <p className="text-muted-foreground mb-4">
                  Runner-up in IITM Hackathon. Built an ensemble model achieving 98.3% accuracy in detecting AI-generated text.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">GPT-2</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">BERT</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-secondary">
              <div className="aspect-video bg-muted"></div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl mb-2">GitHub Repository Assistant</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced RAG implementation reducing documentation time by 50% using Llama3 and Gemma models.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">RAG</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">LangChain</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-secondary">
              <div className="aspect-video bg-muted"></div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl mb-2">Homestays Prediction</h3>
                <p className="text-muted-foreground mb-4">
                  MLOps pipeline for house price prediction using XGBoost, LightGBM, and CatBoost with ZenML and MLflow.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">MLOps</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container bg-secondary">
        <div className="reveal max-w-2xl mx-auto text-center">
          <span className="text-accent font-medium mb-2 block">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to new opportunities in Data Science and AI.
            Feel free to reach out if you'd like to collaborate!
          </p>
          <a
            href="mailto:Darshankumarr03@gmail.com"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
          <div className="mt-4 text-muted-foreground">
            <p>Phone: (+91) 8453036381</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
