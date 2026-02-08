import { motion } from "framer-motion";
import { 
  Clock, 
  TrendingUp, 
  Shield, 
  Zap, 
  Target 
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Gagnez 20h+ par mois",
    description: "Plus de temps perdu sur le montage et la recherche. Concentrez-vous sur votre activité.",
  },
  {
    icon: TrendingUp,
    title: "Croissance accélérée",
    description: "Des contenus optimisés qui génèrent plus de vues, d'engagement et de clients.",
  },
  {
    icon: Shield,
    title: "Qualité constante",
    description: "Un rendu professionnel à chaque contenu, sans variation de qualité.",
  },
  {
    icon: Zap,
    title: "Publication régulière",
    description: "Maintenez un rythme de publication soutenu sans sacrifier votre énergie.",
  },
  {
    icon: Target,
    title: "Plus de visibilité",
    description: "Vos contenus deviennent votre meilleur canal d'acquisition, 24/7.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que vous allez <span className="text-gradient">gagner</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Les bénéfices concrets de notre accompagnement pour votre création de contenu
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 flex gap-6 items-center hover:border-primary/50 transition-colors group"
            >
              <div className="p-4 rounded-2xl bg-gradient-primary shrink-0 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
