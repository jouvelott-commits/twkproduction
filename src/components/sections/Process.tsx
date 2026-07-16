import { motion } from "framer-motion";
import { Workflow } from "lucide-react";

const processes = [
  {
    title: "Process Montage",
    steps: [
      {
        title: "Brief & échange",
        description:
          "on cadre ensemble le projet, le ton et l'objectif de la vidéo",
      },
      {
        title: "Montage",
        description:
          "je monte la vidéo selon vos indications et votre style",
      },
      {
        title: "Retours & validation",
        description:
          "via Frame.io, on échange facilement jusqu'à ce que le résultat vous corresponde",
      },
      {
        title: "Livraison",
        description: "fichiers finaux prêts à publier",
      },
    ],
  },
  {
    title: "Process Miniature",
    steps: [
      {
        title: "Brief & échange",
        description:
          "on cadre le projet, le titre et l'objectif de la vidéo",
      },
      {
        title: "Miniature",
        description: "conception de la miniature",
      },
      {
        title: "Retours & validation",
        description:
          "via Frame.io, on échange facilement jusqu'à ce que le résultat vous corresponde",
      },
      {
        title: "Livraison",
        description: "fichiers fournis, prêts à publier",
      },
    ],
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6">
            <Workflow className="w-4 h-4 text-primary" />
            Notre process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comment on travaille <span className="text-gradient">ensemble</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Deux workflows clairs pour vos vidéos et vos miniatures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processes.map((process, columnIndex) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: columnIndex * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-xl font-bold mb-8">{process.title}</h3>
              <div>
                {process.steps.map((step, stepIndex) => (
                  <div key={step.title} className="relative flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm shadow-glow">
                        {stepIndex + 1}
                      </div>
                      {stepIndex !== process.steps.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/50 to-transparent mt-2" />
                      )}
                    </div>
                    <div
                      className={`${
                        stepIndex !== process.steps.length - 1 ? "pb-8" : ""
                      }`}
                    >
                      <h4 className="font-semibold text-lg mb-1">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
