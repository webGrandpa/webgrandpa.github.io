import { motion } from "framer-motion";

const languages = [
  { name: "Georgian", level: 100, native: true },
  { name: "English", level: 85},
  { name: "Russian", level: 90},
  { name: "Turkish", level: 60},
];

const Languages = () => {
  const circumference = 352; 

  return (
    <section id="languages" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16"
        >
          <span className="text-primary">LANGUAGE</span>{" "}
          <span className="text-secondary">PROTOCOLS</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-lg border border-primary/30 hover:border-secondary hover:neon-glow-purple"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-orbitron font-bold text-primary">
                  {lang.name}
                </h3>
                {lang.native && (
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-mono border border-secondary/30">
                    NATIVE
                  </span>
                )}
              </div>

              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-muted"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="8"
                    fill="transparent"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 352" }}
                    whileInView={{ 
                      strokeDasharray: `${(lang.level / 100) * circumference} ${circumference}` 
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    style={{
                      filter: "drop-shadow(0 0 8px hsl(var(--secondary)))",
                    }}
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.span
                    className="text-xl font-orbitron font-bold text-secondary mt-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {lang.level}%
                  </motion.span>
                </div>
              </div>

              <div className="mt-4 text-center font-mono text-xs text-muted-foreground">
                {lang.level === 100 
                  ? "SYSTEM LANGUAGE PROTOCOL" 
                  : `UPLOADING MODULE - ${lang.level}%`}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;