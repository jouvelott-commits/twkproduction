import { motion } from "framer-motion";
import { Clock, Brain, Frown, TrendingDown, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Pas le temps",
    description: "Vous êtes débordé par votre business et YouTube passe toujours après",
  },
  {
    icon: Brain,
    title: "Manque d'idées",
    description: "Vous ne savez pas quoi publier ni comment structurer vos vidéos",
  },
  {
    icon: Frown,
    title: "Montage frustrant",
    description: "Des heures passées sur le montage pour un résultat amateur",
  },
  {
    icon: TrendingDown,
    title: "Peu de vues",
    description: "Vos vidéos ne décollent pas malgré vos efforts",
  },
];

const Problem = () => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm mb-6">
            <AlertTriangle className="w-4 h-4" />
            Le constat
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vous voulez créer sur YouTube mais...
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ces obstacles vous empêchent de développer votre chaîne et d'atteindre vos objectifs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 flex gap-4 items-start hover:border-destructive/30 transition-colors"
            >
              <div className="p-3 rounded-xl bg-destructive/10 shrink-0">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-xl font-medium mt-12"
        >
          Résultat : votre chaîne YouTube stagne et vous perdez des opportunités chaque jour.
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;
