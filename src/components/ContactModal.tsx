import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactModal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow font-orbitron"
        >
          <Send className="mr-2 h-5 w-5" />
          CONNECT
        </Button>
      </DialogTrigger>
      <DialogContent className="glass border-primary/30 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-orbitron text-primary">
            SECURE TRANSMISSION
          </DialogTitle>
          <p className="text-success font-mono text-sm">
            &gt; Establishing encrypted connection...
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="text-sm font-mono text-muted-foreground mb-2 block">
              IDENTITY:
            </label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="bg-background border-primary/30 focus:border-primary font-mono"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="text-sm font-mono text-muted-foreground mb-2 block">
              CONTACT CHANNEL:
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-background border-primary/30 focus:border-primary font-mono"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="text-sm font-mono text-muted-foreground mb-2 block">
              MESSAGE PAYLOAD:
            </label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              className="bg-background border-primary/30 focus:border-primary font-mono min-h-[120px]"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              type="submit"
              className="w-full bg-success text-success-foreground hover:bg-success/90 font-orbitron font-bold"
            >
              TRANSMIT MESSAGE
            </Button>
          </motion.div>

          <p className="text-xs text-center text-muted-foreground font-mono">
            Encryption Status: <span className="text-success">ACTIVE</span>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
