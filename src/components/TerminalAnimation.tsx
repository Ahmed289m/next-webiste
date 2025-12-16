import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const commands = [
  { prompt: "next init", output: "Initializing your journey..." },
  { prompt: "next build --optimize", output: "Building production bundle..." },
  { prompt: "next deploy", output: "✓ Welcome to our website!" },
];

export const TerminalAnimation = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (showOutput) {
        setShowOutput(false);
        setCurrentLine((prev) => (prev + 1) % commands.length);
      } else {
        setShowOutput(true);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [showOutput]);

  return (
    <div className="glass rounded-xl overflow-hidden w-full max-w-md">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <span className="text-xs text-muted-foreground ml-2 font-mono">
          terminal
        </span>
      </div>

      {/* Terminal content */}
      <div className="p-4 font-mono text-sm space-y-2 min-h-[120px]">
        <div className="flex items-center gap-2">
          <span className="text-green-400">➜</span>
          <span className="text-primary">~</span>
          <motion.span
            key={currentLine}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-foreground"
          >
            {commands[currentLine].prompt}
          </motion.span>
          {!showOutput && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="w-2 h-4 bg-foreground inline-block"
            />
          )}
        </div>
        {showOutput && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-muted-foreground pl-6"
          >
            {commands[currentLine].output}
          </motion.div>
        )}
      </div>
    </div>
  );
};
