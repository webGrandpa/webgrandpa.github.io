import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import GitHubStats from "@/components/GitHubStats";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Languages from "@/components/Languages";
import Footer from "@/components/Footer";
import { MatrixRain } from "@/components/MatrixRain";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixRain />
      <Navbar />
      <Hero />
      <TechStack />
      <GitHubStats />
      <Projects />
      <Certificates />
      <Languages />
      <Footer />
    </div>
  );
};

export default Index;
