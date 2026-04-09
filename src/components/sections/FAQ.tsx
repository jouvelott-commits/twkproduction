import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    title: "Versions & Paiement",
    content: [
      "Jusqu'à la V3 incluse dans tous les forfaits — au-delà : 80€ HT / version",
      "Sans retour sous 48h ouvrées après envoi d'une version : validation tacite automatique",
      "Miniature non incluse dans les forfaits montage — option séparée",
      "Paiement intégral avant démarrage — aucun travail engagé sans règlement reçu",
    ],
  },
  {
    title: "Délais de livraison",
    content: [
      "Short form (unité) — 48h ouvrées après réception des rushs",
      "Shorts multiples — 1er short livré en 48h pour validation du format, reste sous 7 jours ouvrés",
      "Podcast vidéo — 7 jours ouvrés après réception des rushs",
      "YouTube jusqu'à 15 min — 7 jours ouvrés après réception des rushs",
      "YouTube 15 à 30 min — 14 jours ouvrés après réception des rushs",
      "Le délai commence à la réception des rushs, jamais avant",
    ],
  },
  {
    title: "Conditions des rushs",
    content: [
      "Rushs obligatoirement nommés + brief écrit fourni — sinon démarrage impossible",
      "Volume inclus : 1h de rush = 15 min de vidéo finale (ratio par format)",
      "Rush excédentaire : 100€ HT / heure supplémentaire, facturé avant démarrage",
      "Rushs non organisés : supplément derush appliqué automatiquement",
    ],
  },
  {
    title: "Suppléments",
    content: [
      "Version supplémentaire (après V3) — +80€ HT",
      "Rush excédentaire (hors volume inclus) — +100€ HT / heure",
      "Livraison express 24h — Tarif x2",
      "Corporate / institutionnel — Sur devis",
    ],
  },
];

const FAQ = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm text-primary font-semibold tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-xl px-6 border-border/50"
              >
                <AccordionTrigger className="text-base font-semibold hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {item.content.map((line, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">→</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
