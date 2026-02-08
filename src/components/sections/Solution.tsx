import { motion } from "framer-motion";
import { 
  Lightbulb, 
  FileText, 
  Film, 
  Image, 
  Search, 
  Rocket,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Stratégie de contenu",
    description: "On définit ensemble votre positionnement et votre ligne éditoriale sur tous vos canaux",
  },
  {
    icon: Search,
    title: "Recherche de sujets",
    description: "Des idées validées par la data pour maximiser votre impact",
  },
  {
    icon: FileText,
    title: "Scripts & storytelling",
    description: "Des scripts structurés qui captent l'attention de A à Z",
  },
  {
    icon: Film,
    title: "Montage professionnel",
    description: "Vidéos longues, shorts, reels, podcasts — on gère tous les formats",
  },
  {
    icon: Image,
    title: "Visuels & miniatures",
    description: "Des visuels qui génèrent des clics et se démarquent",
  },
  {
    icon: Rocket,
    title: "Optimisation & SEO",
    description: "Optimisation pour que les algorithmes vous mettent en avant",
  },
];

const Solution = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <CheckCircle2 className="w-4 h-4" />
            La solution
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Un accompagnement <span className="text-gradient">A-Z</span> pour vos contenus
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            On gère tout le processus de création pour que vous puissiez vous concentrer sur ce que vous faites de mieux : votre expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 group hover:border-primary/50 transition-all hover:shadow-glow/20"
            >
              <div className="p-3 rounded-xl bg-gradient-primary w-fit mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl font-medium text-muted-foreground">
            Plus besoin de vous soucier de la technique.
            <br />
            <span className="text-foreground">Focus 100% sur votre valeur ajoutée.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
