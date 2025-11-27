import { motion } from "framer-motion";
import { Code2, Database, Layers, Palette, FileCode, Braces } from "lucide-react";

const techStack = [
  { name: "JavaScript", icon: Code2, delay: 0 },
  { name: "TypeScript", icon: FileCode, delay: 0.1 },
  { name: "React", icon: Braces, delay: 0.2 },
  { name: "HTML", icon: Layers, delay: 0.3 },
  { name: "CSS", icon: Palette, delay: 0.4 },
  { name: "SCSS/Sass", icon: Database, delay: 0.5 },
];

const TechStack = () => {
  return (
    <section id="arsenal" className="py-20 px-4">
      <div className="container mx-auto relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16"
        >
          <span className="text-primary">THE</span>{" "}
          <span className="text-secondary">ARSENAL</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: tech.delay, duration: 0.5 }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              className="flex flex-col items-center gap-4 glass p-6 rounded-lg hexagon border border-primary/30 hover:border-primary hover:neon-glow cursor-pointer group"
            >
              <tech.icon className="w-12 h-12 text-primary group-hover:text-secondary transition-colors" />
              <span className="text-sm font-mono text-center group-hover:text-primary transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
