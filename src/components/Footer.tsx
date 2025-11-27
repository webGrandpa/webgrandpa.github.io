import Mail from 'lucide-react/dist/esm/icons/mail';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Github from 'lucide-react/dist/esm/icons/github';
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

const Footer = () => {
  return (
    <footer className="py-20 px-4 border-t border-primary/20 relative z-10"> 
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-6"
          >
            <span className="text-primary">LET'S</span>{" "}
            <span className="text-secondary">CONNECT</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-mono mb-8 max-w-md mx-auto"
          >
            Ready to build the future together? Initiate secure transmission protocol.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative z-20 inline-block" 
          >
            <ContactModal />
          </motion.div>
        </div>

        <div className="flex justify-center gap-6 mb-8 relative z-10">
          <motion.a
            href="https://github.com/webGrandpa"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="glass p-3 rounded-lg border border-primary/30 hover:border-primary hover:neon-glow"
          >
            <Github className="w-6 h-6 text-primary" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/giorgi-khiladze/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="glass p-3 rounded-lg border border-primary/30 hover:border-primary hover:neon-glow"
          >
            <Linkedin className="w-6 h-6 text-primary" />
          </motion.a>
          <motion.a
            href="mailto:goga.khilo@gmail.com"
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="glass p-3 rounded-lg border border-primary/30 hover:border-primary hover:neon-glow"
          >
            <Mail className="w-6 h-6 text-primary" />
          </motion.a>
        </div>

        <div className="text-center relative z-10">
          <p className="text-sm font-mono text-muted-foreground">
            © 2024 Giorgi Khiladze. All rights reserved.
          </p>
          <p className="text-xs font-mono text-success mt-2">
            &gt; System Status: <span className="animate-pulse">ONLINE</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;