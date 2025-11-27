import { motion } from "framer-motion";
import { Download } from "lucide-react";

// Inline Button component replacement to resolve the external import issue.
const Button = ({ children, className, onClick }) => {
  return (
    <a 
      href="#" // Keeping it as a link for navigation/download action
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 px-4 py-2 ${className}`}
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  // Define links in an array to map over them for the staggered animation effect
  const navLinks = [
    { name: "Arsenal", href: "#arsenal" },
    { name: "Intelligence", href: "#intelligence" },
    { name: "Projects", href: "#projects" },
    { name: "Archives", href: "#archives" },
    { name: "Languages", href: "#languages" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      // Use standard Tailwind classes for a similar effect without external 'glass'
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-700/50 backdrop-blur-md bg-gray-900/60"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo - Updated to split colors like the example */}
        <motion.div
          className="text-3xl font-orbitron font-bold text-primary glitch"
          whileHover={{ scale: 1.05 }}
        >
          GK
        </motion.div>

        {/* Navigation Links with Staggered Animation & Sliding Underline */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative group text-gray-300 hover:text-cyan-400 transition-colors font-medium text-sm tracking-wide"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.name}
              {/* The sliding underline effect */}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 ease-out" />
            </motion.a>
          ))}
        </div>

        {/* Button with tap/hover physics */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-transparent border rounded-sm px-2 py-1 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(52,211,255,0.2)] hover:shadow-[0_0_20px_rgba(52,211,255,0.6)]"
          >
            Download CV
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;