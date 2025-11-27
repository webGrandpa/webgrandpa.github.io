import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react"; // 1. Swiper Imports
import { EffectCoverflow, Pagination } from "swiper/modules"; // 1. Swiper Modules
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button"; // Keep your existing Button component import

// 2. Swiper CSS Imports
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Project Data (Updated with the images from the Swiper example for visual consistency)
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack shopping platform with real-time inventory",
    tech: ["React", "TypeScript", "Node.js"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Social Dashboard",
    description: "Analytics dashboard with data visualization",
    tech: ["React", "D3.js", "Firebase"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Portfolio Builder",
    description: "Drag-and-drop portfolio creation tool",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Task Manager",
    description: "Collaborative task management system",
    tech: ["React", "Redux", "Express"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Weather App",
    description: "Real-time weather tracking with maps",
    tech: ["React", "OpenWeather API", "Leaflet"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  // Removed useState(activeIndex) and getCardStyle since Swiper handles it now

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16"
        >
          <span className="text-primary">HOLOGRAPHIC</span>{" "}
          <span className="text-secondary">PROJECTS</span>
        </motion.h2>

        {/* 3. SWIPER COMPONENT INTEGRATION */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto" // Allows for the slide width to be custom defined
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="py-12" // Padding for pagination dots
        >
          {projects.map((project, index) => (
            <SwiperSlide 
              key={project.id} 
              // Set the slide width for the centered effect
              className="!w-[90%] md:!w-[600px]"
            >
              <motion.div
                className="glass rounded-lg overflow-hidden group cursor-pointer border border-primary/30 hover:border-primary transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />

                  {/* Hover overlay with buttons */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      className="glass p-4 rounded-full hover:shadow-[0_0_15px_rgba(37,99,235,0.7)] transition-all duration-300" // Use a primary color glow
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-6 h-6 text-primary" />
                    </a>
                    <a
                      href={project.demo}
                      className="glass p-4 rounded-full hover:shadow-[0_0_15px_rgba(139,92,246,0.7)] transition-all duration-300" // Use a secondary color glow
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-6 h-6 text-secondary" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-orbitron font-bold mb-2 text-primary">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 font-mono text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-primary/10 border border-primary/30 rounded text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* END SWIPER COMPONENT */}
      </div>

      {/* Custom Styles for Swiper Pagination to match your theme */}
      <style>{`
        .swiper-pagination-bullet {
          background: hsl(var(--primary) / 0.5); /* Primary color, semi-transparent */
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: hsl(var(--secondary)); /* Secondary color for active dot */
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default Projects;