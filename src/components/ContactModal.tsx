import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser'; 

const SuccessMessage = ({ resetForm }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="text-center py-8"
  >
    <CheckCircle className="w-16 h-16 mx-auto text-success mb-4 animate-pulse" />
    <h3 className="text-3xl font-orbitron font-bold text-success mb-2">
      TRANSMISSION COMPLETE
    </h3>
    <p className="font-mono text-muted-foreground mb-6">
      Your message payload has been securely routed to the core server.
    </p>
    <Button
      onClick={resetForm}
      className="bg-primary text-primary-foreground hover:bg-primary/90 font-orbitron"
    >
      CLOSE MODULE
    </Button>
  </motion.div>
);

const ErrorMessage = ({ errorText, resetForm }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="text-center py-8"
  >
    <XCircle className="w-16 h-16 mx-auto text-destructive mb-4" />
    <h3 className="text-3xl font-orbitron font-bold text-destructive mb-2">
      TRANSMISSION ERROR
    </h3>
    <p className="font-mono text-muted-foreground mb-6">
      Error Code: {errorText || "UNKNOWN_FAILURE"}
    </p>
    <Button
      onClick={resetForm}
      className="bg-primary text-primary-foreground hover:bg-primary/90 font-orbitron"
    >
      RETRY
    </Button>
  </motion.div>
);


const ContactModal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [viewState, setViewState] = useState('form'); 
  const [submissionError, setSubmissionError] = useState(null);
  
  const [isOpen, setIsOpen] = useState(false);

  const resetFormAndClose = () => {
    setIsOpen(false);
    setName("");
    setEmail("");
    setMessage("");
    setViewState('form');
    setSubmissionError(null);
  };
  const resetViewToForm = () => {
    setViewState('form');
    setSubmissionError(null);
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setViewState("loading");

    let parameters = {
        name: name,
        email: email,
        subject: `New Portfolio Inquiry from ${name}`, 
        message: message
    }
    
    emailjs.send(
        "service_wz42v7t",
        "template_2otgcyq",
        parameters,
        "QKwyM4aTSSdo35eDi" 
    )
    .then(() => {
        setViewState("success");
    }, (error) => {
        setSubmissionError(error.text);
        setViewState("error");
    });
  };

  const renderContent = () => {
    switch (viewState) {
      case 'loading':
        return (
          <div className="text-center py-8">
            <Send className="w-16 h-16 mx-auto text-primary mb-4 animate-spin" />
            <p className="font-orbitron text-xl text-primary">TRANSMITTING...</p>
            <p className="text-xs font-mono text-muted-foreground mt-2">
              &gt; Secure channel verified. Sending payload.
            </p>
          </div>
        );
      case 'success':
        return <SuccessMessage resetForm={resetFormAndClose} />;
      case 'error':
        return <ErrorMessage errorText={submissionError} resetForm={resetViewToForm} />;
      case 'form':
      default:
        return (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-orbitron text-primary">
                SECURE TRANSMISSION
              </DialogTitle>
              <p className="text-success font-mono text-sm">
                &gt; Establishing encrypted connection...
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                <label className="text-sm font-mono text-muted-foreground mb-2 block">IDENTITY:</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="bg-background border-primary/30 focus:border-primary font-mono"
                  required
                  id="user_name" 
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <label className="text-sm font-mono text-muted-foreground mb-2 block">CONTACT CHANNEL:</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-background border-primary/30 focus:border-primary font-mono"
                  required
                  id="user_email" 
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <label className="text-sm font-mono text-muted-foreground mb-2 block">MESSAGE PAYLOAD:</label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  className="bg-background border-primary/30 focus:border-primary font-mono min-h-[120px]"
                  required
                  id="message" 
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Button
                  type="submit"
                  disabled={viewState === 'loading'}
                  className="w-full bg-success text-success-foreground hover:bg-success/90 font-orbitron font-bold"
                >
                  TRANSMIT MESSAGE
                </Button>
              </motion.div>

              <p className={`text-xs text-center font-mono mt-2 text-muted-foreground`}>
                Encryption Status: <span className="text-success animate-pulse">ACTIVE</span>
              </p>
            </form>
          </>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow font-orbitron"
          onClick={() => { setIsOpen(true); resetViewToForm(); }}
        >
          <Send className="mr-2 h-5 w-5" />
          CONNECT
        </Button>
      </DialogTrigger>
      
      <DialogContent className="glass border-primary/30 max-w-md">
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;