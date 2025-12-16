import { motion } from "framer-motion";
import { ArrowRight, Terminal, Layers, Cpu } from "lucide-react";
import { FloatingCode } from "./FloatingCode";
import { TerminalAnimation } from "./TerminalAnimation";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background floating code (hidden on mobile) */}
      <div className="hidden lg:block">
        <FloatingCode />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Top badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Terminal, label: "Web Development" },
                { icon: Layers, label: "Mobile Apps" },
                { icon: Cpu, label: "Custom Software" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-2 px-3 py-1.5 glass rounded-full text-xs font-mono"
                >
                  <item.icon className="w-3 h-3 text-primary" />
                  <span className="text-muted-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-gradient">Code</span> That
              <br />
              <span className="relative inline-block">
                Transforms
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <motion.path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="hsl(263, 70%, 58%)" />
                      <stop offset="100%" stopColor="hsl(280, 80%, 65%)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              <span className="text-muted-foreground">Your Business</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              From web platforms to mobile apps, we architect digital solutions
              that scale with your ambitions. Enterprise-grade code, startup
              speed.
            </motion.p>

            {/* CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold glow-primary"
            >
              Start Building
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-8 mt-10 pt-8 border-t border-border/30"
            >
              {[
                { value: "80+", label: "Projects" },
                { value: "50+", label: "Clients" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Terminal */}
              <TerminalAnimation />

              {/* Floating code (RESPONSIVE) */}
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, 2, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="
                  static mt-4 mx-auto w-fit
                  lg:absolute lg:-bottom-4 lg:-left-4 lg:mt-0
                  glass rounded-lg px-4 py-2 font-mono text-xs
                "
              >
                <span className="text-accent">async</span>{" "}
                <span className="text-foreground">build</span>()
              </motion.div>

              {/* Glow background */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1"
        >
          <motion.div className="w-1 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
