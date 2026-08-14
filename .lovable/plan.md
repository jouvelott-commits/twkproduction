## Séparer les UGC/ADS dans l'onglet Verticale

### Objectif
Dans l'onglet **Verticale** du portfolio, afficher d'abord les 12 vidéos verticales classiques, puis un titre **UGC/ADS**, puis les 8 shorts UGC/ADS en dessous.

### Modifications prévues

#### 1. `src/pages/Portfolio.tsx` — logique d'affichage
- Conserver la structure actuelle des données : les 12 vidéos verticales classiques et les 8 shorts UGC/ADS restent tous en `category: "verticale"`.
- Lorsque `activeCategory === "verticale"`, séparer le rendu en deux blocs :
  - Bloc 1 : les vidéos dont le titre ne commence pas par `"UGC/ADS"` (les 12 verticales classiques).
  - Bloc 2 : les vidéos dont le titre commence par `"UGC/ADS"` (les 8 shorts).
- Entre les deux blocs, insérer un titre de section `<h3>` centré affichant **UGC/ADS**, avec une marge verticale cohérente (par exemple `mt-16 mb-8`).
- Les deux blocs conservent la même grille verticale (`grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`, `aspect-[9/16]`).
- Pour les autres catégories (`horizontale`, `podcast`, `miniature`), le rendu reste inchangé (une seule grille).

### Fichier modifié
- `src/pages/Portfolio.tsx`
