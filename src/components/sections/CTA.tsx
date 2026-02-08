import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useEffect } from "react";

const CTA = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8">
            <Calendar className="w-4 h-4 text-primary" />
            Appel découverte gratuit
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prêt à créer du
            <br />
            <span className="text-gradient">contenu qui performe ?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Réservez un appel découverte gratuit pour discuter de vos objectifs et voir comment on peut vous aider à les atteindre.
          </p>
          
          {/* Calendly Widget */}
          <div 
            className="calendly-inline-widget rounded-2xl overflow-hidden" 
            data-url="https://calendly.com/twkproduction/45min"
            style={{ minWidth: "320px", height: "700px" }}
          />
          
          <p className="text-sm text-muted-foreground mt-6">
            ⏱️ Appel de 30 minutes • Sans engagement
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
