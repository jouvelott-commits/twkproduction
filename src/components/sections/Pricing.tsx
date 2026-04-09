import { motion } from "framer-motion";
import { Mic, Play, Zap, Image, Plus } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-semibold tracking-widest uppercase">Tarifs</span>
          <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">
            Grille <span className="text-gradient">tarifaire</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tarifs fixes · jusqu'à la V3 incluse · 5 jours ouvrés · miniature non incluse
          </p>
        </motion.div>

        {/* PODCAST */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Mic className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Podcast vidéo</h3>
              <p className="text-xs text-muted-foreground">Multi-caméras, face cam, interviews, B-roll</p>
            </div>
          </div>
          <div className="max-w-sm">
            <PricingCard
              badge="Tarif unique"
              badgeColor="primary"
              subtitle="Peu importe la durée"
              price="500€"
              per="/ épisode"
              features={[
                { text: "Montage multi-cam", included: true },
                { text: "Sous-titres", included: true },
                { text: "B-roll + motion design", included: true },
                { text: "Habillage (intro/outro)", included: true },
                { text: "Color grading", included: true },
                { text: "Jusqu'à la V3", included: true },
                { text: "Miniature non incluse", included: false },
              ]}
            />
          </div>
        </motion.div>

        <div className="border-t border-border/50 my-10" />

        {/* YOUTUBE */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Play className="w-5 h-5 text-primary" fill="currentColor" />
            </div>
            <div>
              <h3 className="text-lg font-bold">YouTube — Vlog / Éducatif / Storytelling</h3>
              <p className="text-xs text-muted-foreground">Talking head, motion design, narration, B-roll</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PricingCard
              badge="Essentiel"
              badgeColor="green"
              subtitle="Jusqu'à 15 min"
              price="500€"
              per="/ vidéo"
              features={[
                { text: "Montage cut + rythme", included: true },
                { text: "Sous-titres", included: true },
                { text: "Titres / transitions simples", included: true },
                { text: "Color grading", included: true },
                { text: "Jusqu'à la V3", included: true },
                { text: "Miniature non incluse", included: false },
                { text: "Motion design non inclus", included: false },
              ]}
            />
            <PricingCard
              badge="Pro"
              badgeColor="primary"
              subtitle="15 à 30 min"
              price="1 000€"
              per="/ vidéo"
              featured
              features={[
                { text: "Montage dynamique", included: true },
                { text: "Sous-titres", included: true },
                { text: "Color grading", included: true },
                { text: "Jusqu'à la V3", included: true },
                { text: "Miniature non incluse", included: false },
                { text: "Motion design non inclus", included: false },
              ]}
            />
            <PricingCard
              badge="Sur devis"
              badgeColor="purple"
              subtitle="30 min et +"
              price="Devis"
              per="/ vidéo"
              features={[
                { text: "Montage complet", included: true },
                { text: "Sous-titres", included: true },
                { text: "Derush inclus", included: true },
                { text: "Color grading", included: true },
                { text: "Jusqu'à la V3", included: true },
                { text: "Miniature non incluse", included: false },
                { text: "Motion design non inclus", included: false },
              ]}
            />
          </div>
          <div className="mt-4 rounded-xl bg-amber-500/10 border border-amber-500/20 px-5 py-3">
            <p className="text-sm text-amber-300">
              ⚡ <span className="font-semibold">Avec motion design</span> (animations, effets visuels, graphiques dynamiques) — tarif multiplié par 2 sur n'importe quelle formule YouTube.
            </p>
          </div>
        </motion.div>

        <div className="border-t border-border/50 my-10" />

        {/* SHORT FORM */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Short form — Reels / TikTok / Shorts</h3>
              <p className="text-xs text-muted-foreground">Clips dédiés ou tirés d'une longue vidéo</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MiniCard badge="Simple" badgeColor="green" name="1 short simple" desc="Montage cut, rythme, sous-titres" price="80€" per="/ short" note="Jusqu'à la V3" />
            <MiniCard badge="Avancé" badgeColor="primary" name="1 short avancé" desc="Motion design, effets, sous-titres" price="150€" per="/ short" note="Jusqu'à la V3" featured />
            <MiniCard badge="Pack Simple x8" badgeColor="teal" name="8 shorts simples" desc="Idéal pour 2 shorts / semaine" price="560€" per="/ mois" note="Économie de 80€ vs à l'unité" />
            <MiniCard badge="Pack Avancé x8" badgeColor="purple" name="8 shorts avancés" desc="Motion design sur chaque short" price="1 000€" per="/ mois" note="Économie de 200€ vs à l'unité" />
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Short tiré d'une vidéo longue déjà montée : -20€ par short (rushs déjà sélectionnés)
          </p>
        </motion.div>

        <div className="border-t border-border/50 my-10" />

        {/* MINIATURE */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Image className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Miniature YouTube</h3>
              <p className="text-xs text-muted-foreground">Option séparée à ajouter à n'importe quel forfait</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
            <MiniCard badge="Standard" badgeColor="purple" name="1 miniature" desc="Design optimisé CTR, format YouTube" price="60€" per="/ miniature" />
            <MiniCard badge="Pack x4" badgeColor="purple" name="4 miniatures" desc="Pour 1 mois de contenu" price="200€" per="/ mois" note="Économie de 40€" />
          </div>
        </motion.div>

        <div className="border-t border-border/50 my-10" />

        {/* SUPPLÉMENTS */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Plus className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Suppléments</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ExtraItem name="Version supplémentaire (après V3)" price="+80€" />
            <ExtraItem name="Rush excédentaire (hors volume inclus)" price="+100€ / heure" />
            <ExtraItem name="Livraison express 24h" price="Tarif x2" />
            <ExtraItem name="Corporate / institutionnel" price="Sur devis" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function PricingCard({
  badge, badgeColor, subtitle, price, per, features, featured,
}: {
  badge: string; badgeColor: string; subtitle: string; price: string; per: string;
  features: { text: string; included: boolean }[]; featured?: boolean;
}) {
  const badgeStyles: Record<string, string> = {
    primary: "bg-primary/20 text-primary",
    green: "bg-emerald-500/20 text-emerald-400",
    purple: "bg-violet-500/20 text-violet-400",
    teal: "bg-teal-500/20 text-teal-400",
  };
  return (
    <div className={`rounded-2xl p-6 glass ${featured ? "border-primary/60 ring-1 ring-primary/30" : ""}`}>
      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-md mb-4 ${badgeStyles[badgeColor] || badgeStyles.primary}`}>
        {badge}
      </span>
      <p className="text-xs text-muted-foreground mb-1">{subtitle}</p>
      <p className="text-3xl font-bold mb-5">
        {price} <span className="text-sm font-normal text-muted-foreground">{per}</span>
      </p>
      <ul className="space-y-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${f.included ? "bg-emerald-400" : "bg-muted-foreground/30"}`} />
            <span className={f.included ? "text-foreground/80" : "text-muted-foreground/50"}>{f.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MiniCard({
  badge, badgeColor, name, desc, price, per, note, featured,
}: {
  badge: string; badgeColor: string; name: string; desc: string; price: string; per: string;
  note?: string; featured?: boolean;
}) {
  const badgeStyles: Record<string, string> = {
    primary: "bg-primary/20 text-primary",
    green: "bg-emerald-500/20 text-emerald-400",
    purple: "bg-violet-500/20 text-violet-400",
    teal: "bg-teal-500/20 text-teal-400",
  };
  return (
    <div className={`rounded-2xl p-5 glass ${featured ? "border-primary/60 ring-1 ring-primary/30" : ""}`}>
      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-md mb-3 ${badgeStyles[badgeColor] || badgeStyles.primary}`}>
        {badge}
      </span>
      <p className="text-sm font-semibold mb-1">{name}</p>
      <p className="text-xs text-muted-foreground mb-3">{desc}</p>
      <p className="text-2xl font-bold">
        {price} <span className="text-xs font-normal text-muted-foreground">{per}</span>
      </p>
      {note && <p className="text-xs text-emerald-400 font-medium mt-2">{note}</p>}
    </div>
  );
}

function ExtraItem({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-secondary/50 px-5 py-3">
      <span className="text-sm text-foreground/80">{name}</span>
      <span className="text-sm font-bold text-foreground whitespace-nowrap ml-4">{price}</span>
    </div>
  );
}

export default Pricing;
