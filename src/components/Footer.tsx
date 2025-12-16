import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import nextLogo from "@/assets/next-logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={nextLogo} alt="Next" className="w-20 h-10" />
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a
              href="#services"
              className="hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 glass rounded-lg flex items-center justify-center hover:glow-primary transition-all"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Next Software Solutions. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
