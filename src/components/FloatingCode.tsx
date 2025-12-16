import { motion } from "framer-motion";

const codeLines = [
  "const success = await buildYourVision();",
  "import { Innovation } from '@next/solutions';",
  "function transformBusiness() { return growth; }",
  "const app = new MobileApp({ platform: 'all' });",
  "export default NextSoftwareSolutions;",
  "await deploy({ target: 'production' });",
];

const binaryStrings = ["01001110", "01000101", "01011000", "01010100"];

export const FloatingCode = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Scrolling code lines - left side */}
      <div className="absolute left-4 top-0 bottom-0 w-64 opacity-20 overflow-hidden hidden lg:block">
        <motion.div
          animate={{ y: [0, -600] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="font-mono text-xs text-primary/50 space-y-4"
        >
          {[...codeLines, ...codeLines, ...codeLines].map((line, i) => (
            <div key={i} className="whitespace-nowrap">{line}</div>
          ))}
        </motion.div>
      </div>

      {/* Scrolling code lines - right side */}
      <div className="absolute right-4 top-0 bottom-0 w-64 opacity-20 overflow-hidden hidden lg:block">
        <motion.div
          animate={{ y: [-600, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="font-mono text-xs text-accent/50 space-y-4 text-right"
        >
          {[...codeLines, ...codeLines, ...codeLines].map((line, i) => (
            <div key={i} className="whitespace-nowrap">{line}</div>
          ))}
        </motion.div>
      </div>

      {/* Binary rain effect */}
      {binaryStrings.map((binary, index) => (
        <motion.div
          key={index}
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: ["0vh", "100vh"],
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration: 8 + index * 2,
            delay: index * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: `${15 + index * 20}%` }}
          className="absolute font-mono text-xs text-primary/20 hidden md:block"
        >
          {binary.split("").map((char, i) => (
            <div key={i} className="my-1">{char}</div>
          ))}
        </motion.div>
      ))}

      {/* Gradient orbs - optimized with will-change */}
      <div 
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] will-change-transform"
        style={{ animation: "pulse 8s ease-in-out infinite" }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] will-change-transform"
        style={{ animation: "pulse 10s ease-in-out infinite reverse" }}
      />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};
