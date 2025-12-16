import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { CheckCircle2, Code2, Zap, Shield, Clock } from "lucide-react";

const features = [
  { icon: Code2, text: "Clean, maintainable code" },
  { icon: Zap, text: "Lightning-fast performance" },
  { icon: Shield, text: "Enterprise-grade security" },
  { icon: Clock, text: "On-time delivery guaranteed" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 1500;
      const steps = 40;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-gradient">
      {count}
      {suffix}
    </span>
  );
};

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Code visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-muted-foreground">
                  next-philosophy.ts
                </span>
              </div>

              <div className="space-y-2 text-xs md:text-sm">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-accent">interface</span>{" "}
                  <span className="text-primary">NextApproach</span> {"{"}
                </motion.div>
                {[
                  { key: "quality", value: '"uncompromising"' },
                  { key: "communication", value: '"transparent"' },
                  { key: "deadlines", value: '"sacred"' },
                  { key: "support", value: '"24/7"' },
                ].map((item, i) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="pl-4"
                  >
                    <span className="text-foreground">{item.key}</span>:{" "}
                    <span className="text-green-400">{item.value}</span>;
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  {"}"}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                  className="mt-4 pt-4 border-t border-border/50"
                >
                  <span className="text-accent">export</span>{" "}
                  <span className="text-foreground">const</span>{" "}
                  <span className="text-primary">success</span> ={" "}
                  <span className="text-accent">true</span>;
                </motion.div>
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass rounded-xl p-4 text-center"
            >
              <Counter value={99} suffix="%" />
              <p className="text-xs text-muted-foreground mt-1">Satisfaction</p>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
              {"// why next"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Engineering <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We're not just developers—we're partners in your digital journey.
              Every line of code we write is crafted with precision, tested
              rigorously, and optimized for performance.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 glass rounded-lg"
                >
                  <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex gap-8 pt-8 border-t border-border/30">
              {[
                { value: 80, suffix: "+", label: "Projects" },
                { value: 50, suffix: "+", label: "Clients" },
              ].map((stat) => (
                <div key={stat.label}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
