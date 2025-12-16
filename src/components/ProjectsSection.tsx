import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Globe, Smartphone, ShoppingCart, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    description: "Full-stack marketplace with real-time inventory, payment processing, and analytics dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    icon: ShoppingCart,
    gradient: "from-primary to-accent",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile Application",
    description: "Cross-platform app for patient management, appointment scheduling, and telemedicine features.",
    tech: ["React Native", "Firebase", "WebRTC"],
    icon: Smartphone,
    gradient: "from-accent to-primary",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
  },
  {
    title: "Analytics Dashboard",
    category: "Enterprise Software",
    description: "Real-time business intelligence platform with custom reporting and predictive analytics.",
    tech: ["Vue.js", "Python", "TensorFlow", "AWS"],
    icon: BarChart3,
    gradient: "from-primary via-accent to-primary",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "SaaS Platform",
    category: "Web Application",
    description: "Multi-tenant subscription platform with automated billing, user management, and API integrations.",
    tech: ["Next.js", "Prisma", "Stripe", "Vercel"],
    icon: Globe,
    gradient: "from-accent to-primary",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <div className="relative h-full glass rounded-2xl overflow-hidden transition-all duration-500 hover:glow-primary">
        {/* Image */}
        <div className="relative h-48 md:h-full min-h-[200px] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
        </div>
        
        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Category badge */}
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${project.gradient} p-0.5`}>
              <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                <project.icon className="w-4 h-4 text-primary" />
              </div>
            </div>
            <span className="text-xs font-mono text-primary">{project.category}</span>
          </div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
            {project.title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span 
                key={tech} 
                className="px-2 py-1 text-xs font-mono bg-secondary/50 rounded-md text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              View Live
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              Code
            </motion.button>
          </div>
        </div>

        {/* Hover border effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 rounded-2xl border-2 border-primary/50 pointer-events-none"
        />
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
              {"// recent work"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Projects That <span className="text-gradient">Deliver</span>
            </h2>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="mt-6 md:mt-0 flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Start Your Project <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Projects grid - bento style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
