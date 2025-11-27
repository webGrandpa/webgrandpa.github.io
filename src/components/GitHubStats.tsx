import { motion } from "framer-motion";
import { Activity, Code, TrendingUp } from "lucide-react";
// Button import is not needed for this component structure

const GitHubStats = () => {
  // Languages data adapted to use the specific color classes from the first example
  const languages = [
    { name: "JavaScript", percentage: 60, color: "bg-yellow-400" },
    { name: "TypeScript", percentage: 30, color: "bg-blue-400" },
    { name: "Other", percentage: 10, color: "bg-gray-400" },
  ];

  return (
    <section id="intelligence" className="py-20 px-4"> {/* Removed bg-muted/20 */}
      <div className="container mx-auto max-w-6xl relative z-20"> {/* Increased max-width */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16"
        >
          <span className="text-primary">GITHUB</span>{" "}
          <span className="text-secondary">INTELLIGENCE</span>
        </motion.h2>

        {/* Outer Container with Glass Effect and Border */}
        <div className="glass p-8 rounded-lg border border-primary/30">
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Code Frequency (Left Column) - Adapted from the first example */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">
                Code Frequency
              </h3>
              <div className="space-y-4">
                
                {/* Commits Bar (using the data from the first example) */}
                <div className="flex items-center gap-4">
                  <div className="w-32 font-mono text-sm">Commits</div>
                  <div className="flex-1 h-8 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-terminal-green to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                  <span className="font-mono text-secondary">850+</span>
                </div>

                {/* Repositories Bar */}
                <div className="flex items-center gap-4">
                  <div className="w-32 font-mono text-sm">Repositories</div>
                  <div className="flex-1 h-8 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-secondary to-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                  <span className="font-mono text-primary">45+</span>
                </div>

                {/* Contributions Bar */}
                <div className="flex items-center gap-4">
                  <div className="w-32 font-mono text-sm">Contributions</div>
                  <div className="flex-1 h-8 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-terminal-green"
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                    />
                  </div>
                  <span className="font-mono text-terminal-green">2000+</span>
                </div>

              </div>
            </motion.div>

            {/* Top Languages (Right Column) - Adapted from the first example */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">
                Top Languages
              </h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex justify-between font-mono text-sm">
                      <span>{lang.name}</span>
                      <span className="text-primary">{lang.percentage}%</span>
                    </div>
                    <div className="h-4 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${lang.color}`} // Uses the specific Tailwind classes (bg-yellow-400, etc.)
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* System Status Box */}
              <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-primary/30">
                <div className="flex items-center gap-2 font-mono text-sm text-primary">
                  <span className="animate-pulse">
                    <Activity className="w-4 h-4" />
                  </span>
                  <span>System Status: Online</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;