import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import VideoCard from "@/components/VideoCard";

const videos = [
  { id: "5v0gz2zkqXQ", title: "Vidéo 1", format: "FORMAT LONG", views: "1,2M" },
  { id: "HdsPOcMBllU", title: "Vidéo 2", format: "FORMAT LONG", views: "850K" },
  { id: "cH6eY17TRMo", title: "Vidéo 3", format: "FORMAT LONG", views: "620K" },
];

const shorts = [
  { id: "hv8IWvIwgOY", title: "Short 1", format: "FORMAT COURT", views: "2,1M" },
  { id: "pjFUHOsp1Zg", title: "Short 2", format: "FORMAT COURT", views: "1,5M" },
  { id: "o-vsqzENPQw", title: "Short 3", format: "FORMAT COURT", views: "980K" },
  { id: "3OUBoaa3uOk", title: "Short 4", format: "FORMAT COURT", views: "1,8M" },
  { id: "Ao0IVYIoS78", title: "Short 5", format: "FORMAT COURT", views: "760K" },
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
            Mes <span className="text-gradient">Réalisations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une sélection de mes meilleurs montages
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
            >
              <VideoCard
                videoId={video.id}
                title={video.title}
                format={video.format}
                views={video.views}
                aspectRatio="16/9"
              />
            </motion.div>
          ))}
        </div>

        {/* Shorts */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-5 mb-12">
          {shorts.map((short, index) => (
            <motion.div
              key={short.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <VideoCard
                videoId={short.id}
                title={short.title}
                format={short.format}
                views={short.views}
                aspectRatio="9/16"
              />
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
