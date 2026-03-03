

# Passer la direction artistique de orange a bleu

## Changement unique dans `src/index.css`

Remplacer toutes les teintes orange/rouge (hue ~0-20) par des teintes bleues dans les variables CSS :

- `--primary`: `0 72% 51%` → `217 91% 60%` (bleu vif)
- `--accent`: `0 72% 51%` → `217 91% 60%`
- `--ring`: `0 72% 51%` → `217 91% 60%`
- `--gradient-primary`: gradient de bleu (`hsl(217 91% 60%)` vers `hsl(199 89% 48%)`)
- `--shadow-glow`: glow bleu (`hsl(217 91% 60% / 0.3)`)

Le fond noir et toutes les couleurs neutres restent identiques. Seules les couleurs d'accent changent.

