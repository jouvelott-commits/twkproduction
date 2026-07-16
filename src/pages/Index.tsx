import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import BestWork from "@/components/sections/BestWork";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <SocialProof />
      <BestWork />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
