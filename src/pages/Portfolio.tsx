import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import miniature1 from "@/assets/miniature-1.png";
import miniature2 from "@/assets/miniature-2.png";
import miniature3 from "@/assets/miniature-3.png";
import miniature4 from "@/assets/miniature-4.png";

type VideoCategory = "horizontale" | "verticale" | "podcast" | "entrepreneuriat" | "miniature";

// Remplace ces IDs par les vrais IDs de tes vidéos YouTube
const videos = [
  // HORIZONTALE - 12 vidéos (4 rangées)
  {
    id: "HdsPOcMBllU",
    title: "Vidéo Horizontale 1",
    client: "Client 1",
    views: "500K vues",
    category: "horizontale" as VideoCategory,
  },
  {
    id: "doXOJ9kWSHc",
    title: "Vidéo Horizontale 2",
    client: "Client 2",
    views: "800K vues",
    category: "horizontale" as VideoCategory,
  },
  {
    id: "V1SUytYCkTQ",
    title: "Vidéo Horizontale 3",
    client: "Client 3",
    views: "1.2M vues",
    category: "horizontale" as VideoCategory,
  },
  {
    id: "7fwF9tp-o9w",
    title: "Vidéo Horizontale 4",
    client: "Client 4",
    views: "450K vues",
    category: "horizontale" as VideoCategory,
  },
  {
    id: "fBgGJoue2S4",
    title: "Vidéo Horizontale 5",
    client: "Client 5",
    views: "1.1M vues",
    category: "horizontale" as VideoCategory,
  },
  {
    id: "8MXfxB4pnGI",
    title: "Vidéo Horizontale 6",
    client: "Client 6",
    views: "650K vues",
    category: "horizontale" as VideoCategory,
  },
  {
    id: "6ilrdKKoCBU",
    title: "Vidéo Horizontale 7",
    client: "Client 7",
    views: "920K vues",
    category: "horizontale" as VideoCategory,
  },
  {
    id: "alClZb67PJo",
    title: "Vidéo Horizontale 8",
    client: "Client 8",
    views: "380K vues",
    category: "horizontale" as VideoCategory,
  },
  {
    id: "22vvFRgZkGs",
    title: "Vidéo Horizontale 9",
    client: "Client 9",
    views: "1.5M vues",
    category: "horizontale" as VideoCategory,
  },
  {
    id: "4358J1DXHiQ",
    title: "Vidéo Horizontale 10",
    client: "Client 10",
    views: "700K vues",
    category: "horizontale" as VideoCategory,
  },
  {
    id: "SllC2SmYrp4",
    title: "Vidéo Horizontale 11",
    client: "Client 11",
    views: "550K vues",
    category: "horizontale" as VideoCategory,
  },
  {
    id: "qcVGo2DooLQ",
    title: "Vidéo Horizontale 12",
    client: "Client 12",
    views: "890K vues",
    category: "horizontale" as VideoCategory,
  },

  // PODCAST - 12 vidéos (4 rangées)
  {
    id: "doXOJ9kWSHc",
    title: "Podcast 1",
    client: "Client 1",
    views: "1.2M vues",
    category: "podcast" as VideoCategory,
  },
  {
    id: "HdsPOcMBllU",
    title: "Podcast 2",
    client: "Client 2",
    views: "600K vues",
    category: "podcast" as VideoCategory,
  },
  {
    id: "V1SUytYCkTQ",
    title: "Podcast 3",
    client: "Client 3",
    views: "750K vues",
    category: "podcast" as VideoCategory,
  },
  {
    id: "EwGOET2GTOI",
    title: "Podcast 4",
    client: "Client 4",
    views: "980K vues",
    category: "podcast" as VideoCategory,
  },
  {
    id: "61uC7CsuruA",
    title: "Podcast 5",
    client: "Client 5",
    views: "1.4M vues",
    category: "podcast" as VideoCategory,
  },
  {
    id: "CDEWIc4OE6o",
    title: "Podcast 6",
    client: "Client 6",
    views: "520K vues",
    category: "podcast" as VideoCategory,
  },
  {
    id: "idqYDt5isiw",
    title: "Podcast 7",
    client: "Client 7",
    views: "870K vues",
    category: "podcast" as VideoCategory,
  },
  {
    id: "zOrUQjaoBYE",
    title: "Podcast 8",
    client: "Client 8",
    views: "1.1M vues",
    category: "podcast" as VideoCategory,
  },
  {
    id: "wT4rjFpVXuU",
    title: "Podcast 9",
    client: "Client 9",
    views: "640K vues",
    category: "podcast" as VideoCategory,
  },
  {
    id: "55g7ymt2BzM",
    title: "Podcast 10",
    client: "Client 10",
    views: "930K vues",
    category: "podcast" as VideoCategory,
  },
  {
    id: "xVHX8DwmDHE",
    title: "Podcast 11",
    client: "Client 11",
    views: "1.6M vues",
    category: "podcast" as VideoCategory,
  },
  {
    id: "5Vo4fSnH-VQ",
    title: "Podcast 12",
    client: "Client 12",
    views: "480K vues",
    category: "podcast" as VideoCategory,
  },

  // ENTREPRENEURIAT - 12 vidéos (4 rangées)
  {
    id: "7fwF9tp-o9w",
    title: "Entrepreneuriat 1",
    client: "Client 1",
    views: "350K vues",
    category: "entrepreneuriat" as VideoCategory,
  },
  {
    id: "mu8wuJRiSd0",
    title: "Entrepreneuriat 2",
    client: "Client 2",
    views: "900K vues",
    category: "entrepreneuriat" as VideoCategory,
  },
  {
    id: "zHBXDTOHR_0",
    title: "Entrepreneuriat 3",
    client: "Client 3",
    views: "1.3M vues",
    category: "entrepreneuriat" as VideoCategory,
  },
  {
    id: "k5EHtBpIhq4",
    title: "Entrepreneuriat 4",
    client: "Client 4",
    views: "720K vues",
    category: "entrepreneuriat" as VideoCategory,
  },
  {
    id: "vowcSRX2RFQ",
    title: "Entrepreneuriat 5",
    client: "Client 5",
    views: "580K vues",
    category: "entrepreneuriat" as VideoCategory,
  },
  {
    id: "fBgGJoue2S4",
    title: "Entrepreneuriat 6",
    client: "Client 6",
    views: "1.1M vues",
    category: "entrepreneuriat" as VideoCategory,
  },
  {
    id: "4pWpgwmD0Tc",
    title: "Entrepreneuriat 7",
    client: "Client 7",
    views: "410K vues",
    category: "entrepreneuriat" as VideoCategory,
  },
  {
    id: "aon8N50s36M",
    title: "Entrepreneuriat 8",
    client: "Client 8",
    views: "850K vues",
    category: "entrepreneuriat" as VideoCategory,
  },
  {
    id: "koutl_GWWPs",
    title: "Entrepreneuriat 9",
    client: "Client 9",
    views: "1.7M vues",
    category: "entrepreneuriat" as VideoCategory,
  },
  {
    id: "VifMoodQ1nI",
    title: "Entrepreneuriat 10",
    client: "Client 10",
    views: "620K vues",
    category: "entrepreneuriat" as VideoCategory,
  },
  {
    id: "GK3mJfrFW4w",
    title: "Entrepreneuriat 11",
    client: "Client 11",
    views: "990K vues",
    category: "entrepreneuriat" as VideoCategory,
  },
  {
    id: "ooCtIyO8RU0",
    title: "Entrepreneuriat 12",
    client: "Client 12",
    views: "530K vues",
    category: "entrepreneuriat" as VideoCategory,
  },

  // MINIATURE - 4 images
  {
    id: "miniature-1",
    title: "Miniature 1",
    client: "",
    views: "",
    category: "miniature" as VideoCategory,
    image: miniature1,
  },
  {
    id: "miniature-2",
    title: "Miniature 2",
    client: "",
    views: "",
    category: "miniature" as VideoCategory,
    image: miniature2,
  },
  {
    id: "miniature-3",
    title: "Miniature 3",
    client: "",
    views: "",
    category: "miniature" as VideoCategory,
    image: miniature3,
  },
  {
    id: "miniature-4",
    title: "Miniature 4",
    client: "",
    views: "",
    category: "miniature" as VideoCategory,
    image: miniature4,
  },

  // VERTICALE - 12 vidéos (4 rangées)
  {
    id: "pjFUHOsp1Zg",
    title: "Vidéo Verticale 1",
    client: "Client 1",
    views: "2M vues",
    category: "verticale" as VideoCategory,
  },
  {
    id: "Jv7jjzJxaIw",
    title: "Vidéo Verticale 2",
    client: "Client 2",
    views: "1.5M vues",
    category: "verticale" as VideoCategory,
  },
  {
    id: "Ao0IVYIoS78",
    title: "Vidéo Verticale 3",
    client: "Client 3",
    views: "2.5M vues",
    category: "verticale" as VideoCategory,
  },
  {
    id: "QvnboCi5aBU",
    title: "Vidéo Verticale 4",
    client: "Client 4",
    views: "1.8M vues",
    category: "verticale" as VideoCategory,
  },
  {
    id: "mOvu0uOxu8U",
    title: "Vidéo Verticale 5",
    client: "Client 5",
    views: "3.2M vues",
    category: "verticale" as VideoCategory,
  },
  {
    id: "ooCtIyO8RU0",
    title: "Vidéo Verticale 6",
    client: "Client 6",
    views: "1.1M vues",
    category: "verticale" as VideoCategory,
  },
  {
    id: "3OUBoaa3uOk",
    title: "Vidéo Verticale 7",
    client: "Client 7",
    views: "2.8M vues",
    category: "verticale" as VideoCategory,
  },
  {
    id: "SKkLwzFKvXQ",
    title: "Vidéo Verticale 8",
    client: "Client 8",
    views: "950K vues",
    category: "verticale" as VideoCategory,
  },
  {
    id: "GK3mJfrFW4w",
    title: "Vidéo Verticale 9",
    client: "Client 9",
    views: "1.9M vues",
    category: "verticale" as VideoCategory,
  },
  {
    id: "aD29EXB8tGM",
    title: "Vidéo Verticale 10",
    client: "Client 10",
    views: "2.3M vues",
    category: "verticale" as VideoCategory,
  },
  {
    id: "AA1Gzc_s0w0",
    title: "Vidéo Verticale 11",
    client: "Client 11",
    views: "1.4M vues",
    category: "verticale" as VideoCategory,
  },
  {
    id: "VifMoodQ1nI",
    title: "Vidéo Verticale 12",
    client: "Client 12",
    views: "3.5M vues",
    category: "verticale" as VideoCategory,
  },
];

const categories = [
  { id: "horizontale" as VideoCategory, label: "Horizontale" },
  { id: "verticale" as VideoCategory, label: "Verticale" },
  { id: "podcast" as VideoCategory, label: "Podcast" },
  { id: "entrepreneuriat" as VideoCategory, label: "Entrepreneuriat" },
  { id: "miniature" as VideoCategory, label: "Miniature" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("horizontale");

  const filteredVideos = videos.filter((video) => video.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-6">
        <Button variant="outline" asChild className="glass">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Notre <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Découvrez les vidéos que nous avons produites pour nos clients. Chaque projet est unique et conçu pour
              maximiser l'impact.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={
                    activeCategory === category.id
                      ? "bg-white text-background hover:bg-white/90 font-semibold px-6"
                      : "glass border-white/20 hover:bg-white/10 font-semibold px-6"
                  }
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-center mb-12"
          >
          {activeCategory === "miniature" ? "" : "VIDÉOS "}
            <span className="text-gradient">
              {activeCategory === "miniature" ? "MINIATURES" : activeCategory.toUpperCase() + "S"}
            </span>
          </motion.h2>

          <div
            className={`grid gap-6 ${
              activeCategory === "verticale"
                ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                : activeCategory === "miniature"
                ? "grid-cols-2 md:grid-cols-4"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {filteredVideos.map((video, index) => (
              {video.category === "miniature" ? (
              <div
                key={index}
                className="glass rounded-2xl overflow-hidden group"
              >
              ) : (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
                className="glass rounded-2xl overflow-hidden group"
              >
              )}
                {video.category === "miniature" && video.image ? (
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={video.category === "verticale" ? "aspect-[9/16]" : "aspect-video"}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {filteredVideos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 text-muted-foreground"
            >
              Aucune vidéo dans cette catégorie pour le moment.
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à créer votre prochaine vidéo ?</h2>
            <p className="text-muted-foreground mb-8">
              Rejoignez nos clients satisfaits et boostez votre présence YouTube.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 shadow-glow" asChild>
              <a href="/#contact">Réserver un appel découverte</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TWKPRODUCTION. Tous droits réservés.
        </div>
      </footer>
    </main>
  );
};

export default Portfolio;
