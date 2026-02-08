import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
