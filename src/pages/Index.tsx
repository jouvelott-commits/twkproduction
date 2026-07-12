import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <SocialProof />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
