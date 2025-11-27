import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Advanced React Development",
    issuer: "Meta",
    year: "2024",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&q=80",
  },
  {
    title: "TypeScript Mastery",
    issuer: "Microsoft",
    year: "2023",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
  },
  {
    title: "Full-Stack Web Development",
    issuer: "FreeCodeCamp",
    year: "2023",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
  },
  {
    title: "UI/UX Design Principles",
    issuer: "Google",
    year: "2024",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
  },
];

const Certificates = () => {
  return (
    <section id="archives" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16"
        >
          <span className="text-primary">DATA</span>{" "}
          <span className="text-secondary">ARCHIVES</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="glass rounded-lg overflow-hidden border border-primary/30 hover:border-secondary hover:neon-glow-purple cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute top-4 right-4">
                  <Award className="w-6 h-6 text-secondary animate-pulse" />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-orbitron font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground font-mono mb-1">
                  {cert.issuer}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-success font-mono">
                    {cert.year}
                  </span>
                  <ExternalLink className="w-4 h-4 text-primary group-hover:text-secondary transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
