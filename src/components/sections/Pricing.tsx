import { motion } from "framer-motion";
import { Mic, Play, Zap, Image, Video } from "lucide-react";

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
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
              <Mic className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-bold">Podcast vidéo</h3>
              <p className="text-xs text-muted-foreground">Multi-caméras, face cam, interviews, B-roll</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
            <PricingCard
              badge="Épisode seul"
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
            <PricingCard
              badge="Pack Podcast"
              badgeColor="purple"
              subtitle="Épisode + extras"
              price="750€"
              per="/ pack"
              featured
              features={[
                { text: "Montage podcast complet", included: true },
                { text: "1 miniature YouTube", included: true },
                { text: "3 shorts tirés du podcast", included: true },
                { text: "Sous-titres", included: true },
                { text: "Color grading", included: true },
                { text: "Jusqu'à la V3", included: true },
              ]}
            />
          </div>
        </motion.div>

        <div className="border-t border-border/50 my-8" />

        {/* YOUTUBE */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
              <Play className="w-4 h-4 text-primary" fill="currentColor" />
            </div>
            <div>
              <h3 className="text-base font-bold">YouTube — Vlog / Éducatif / Storytelling</h3>
              <p className="text-xs text-muted-foreground">Talking head, motion design, narration, B-roll</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
          <div className="mt-3 rounded-xl bg-amber-500/10 border border-amber-500/20 px-4 py-2.5">
            <p className="text-xs text-amber-300">
              ⚡ <span className="font-semibold">Avec motion design</span> (animations, effets visuels, graphiques dynamiques) — tarif multiplié par 2 sur n'importe quelle formule YouTube.
            </p>
          </div>
        </motion.div>

        <div className="border-t border-border/50 my-8" />

        {/* SHORT FORM */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-bold">Short form — Reels / TikTok / Shorts</h3>
              <p className="text-xs text-muted-foreground">Clips dédiés ou tirés d'une longue vidéo</p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <MiniCard badge="Simple" badgeColor="green" name="1 short simple" desc="Montage cut, rythme, sous-titres" price="80€" per="/ short" note="Jusqu'à la V3" />
            <MiniCard badge="Avancé" badgeColor="primary" name="1 short avancé" desc="Motion design, effets, sous-titres" price="150€" per="/ short" note="Jusqu'à la V3" featured />
            <MiniCard badge="Pack Simple x8" badgeColor="teal" name="8 shorts simples" desc="Idéal pour 2 shorts / semaine" price="560€" per="/ mois" note="Économie de 80€" />
            <MiniCard badge="Pack Avancé x8" badgeColor="purple" name="8 shorts avancés" desc="Motion design sur chaque short" price="1 000€" per="/ mois" note="Économie de 200€" />
          </div>
          <p className="text-xs text-muted-foreground mt-3 italic">
            Short tiré d'une vidéo longue déjà montée : -20€ par short (rushs déjà sélectionnés)
          </p>
        </motion.div>

        <div className="border-t border-border/50 my-8" />

        {/* MINIATURE + VSL */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Miniature */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Image className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-base font-bold">Miniature YouTube</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <MiniCard badge="Standard" badgeColor="purple" name="1 miniature" desc="Design optimisé CTR" price="60€" per="/ miniature" />
                <MiniCard badge="Pack x4" badgeColor="purple" name="4 miniatures" desc="Pour 1 mois de contenu" price="200€" per="/ mois" note="Économie de 40€" />
              </div>
            </div>

            {/* VSL */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Video className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-base font-bold">VSL (Video Sales Letter)</h3>
              </div>
              <div className="max-w-xs">
                <MiniCard badge="Sur devis" badgeColor="primary" name="VSL complète" desc="Script, montage, motion design, voix off" price="Devis" per="/ projet" note="Contactez-nous" />
              </div>
            </div>
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
    <div className={`rounded-xl p-4 glass ${featured ? "border-primary/60 ring-1 ring-primary/30" : ""}`}>
      <span className={`inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-md mb-3 ${badgeStyles[badgeColor] || badgeStyles.primary}`}>
        {badge}
      </span>
      <p className="text-[11px] text-muted-foreground mb-0.5">{subtitle}</p>
      <p className="text-2xl font-bold mb-3">
        {price} <span className="text-xs font-normal text-muted-foreground">{per}</span>
      </p>
      <ul className="space-y-1.5">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-xs">
            <span className={`w-1 h-1 rounded-full flex-shrink-0 ${f.included ? "bg-emerald-400" : "bg-muted-foreground/30"}`} />
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
    <div className={`rounded-xl p-3.5 glass ${featured ? "border-primary/60 ring-1 ring-primary/30" : ""}`}>
      <span className={`inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-md mb-2 ${badgeStyles[badgeColor] || badgeStyles.primary}`}>
        {badge}
      </span>
      <p className="text-xs font-semibold mb-0.5">{name}</p>
      <p className="text-[11px] text-muted-foreground mb-2">{desc}</p>
      <p className="text-xl font-bold">
        {price} <span className="text-[10px] font-normal text-muted-foreground">{per}</span>
      </p>
      {note && <p className="text-[10px] text-emerald-400 font-medium mt-1.5">{note}</p>}
    </div>
  );
}

export default Pricing;
