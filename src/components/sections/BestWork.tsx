import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const videos = [
  { id: "5v0gz2zkqXQ", title: "Vidéo 1" },
  { id: "HdsPOcMBllU", title: "Vidéo 2" },
  { id: "cH6eY17TRMo", title: "Vidéo 3" },
];

const shorts = [
  { id: "hv8IWvIwgOY", title: "Short 1" },
  { id: "pjFUHOsp1Zg", title: "Short 2" },
  { id: "o-vsqzENPQw", title: "Short 3" },
  { id: "3OUBoaa3uOk", title: "Short 4" },
  { id: "Ao0IVYIoS78", title: "Short 5" },
];

const BestWork = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mon meilleur <span className="text-gradient">travail</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des projets qui parlent de leur résultat
          </p>
        </motion.div>

        {/* Vidéos YouTube */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shorts */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {shorts.map((short, index) => (
            <motion.div
              key={short.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${short.id}`}
                  title={short.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bouton Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 shadow-glow"
            asChild
          >
            <Link to="/portfolio">
              Voir tout le portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BestWork;
