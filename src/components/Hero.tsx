import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Web Developer | Problem Solver";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center cyber-grid overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(184 100% 50% / 0.1), transparent)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(285 100% 50% / 0.1), transparent)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-orbitron font-black mb-6 glitch"
        >
          <span className="text-primary">GIORGI</span>
          <br />
          <span className="text-secondary">KHILADZE</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground font-mono min-h-[2rem]"
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 inline-block glass px-6 py-3 rounded-lg border border-primary/30"
        >
          <p className="text-success font-mono">
            &gt; System Online _ Ready for Mission
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
