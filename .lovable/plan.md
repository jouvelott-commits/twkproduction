
# Ajouter la categorie "Miniature" au portfolio

## Ce qui va changer

1. **Copier les 4 images** dans `src/assets/` (miniature-1.png a miniature-4.png)

2. **Modifier `src/pages/Portfolio.tsx`** :
   - Ajouter `"miniature"` au type `VideoCategory`
   - Ajouter les 4 miniatures dans le tableau `videos` avec `category: "miniature"`
   - Ajouter `{ id: "miniature", label: "Miniature" }` dans le tableau `categories`
   - Adapter la grille : pour la categorie "miniature", afficher une grille de 4 colonnes (`grid-cols-2 md:grid-cols-4`) avec les images directement (pas d'iframe YouTube), en utilisant des balises `<img>` au lieu des iframes

## Details techniques

- Les miniatures seront importees en tant qu'assets ES6 depuis `src/assets/`
- La structure de donnees des videos miniatures utilisera un champ `image` au lieu de `id` pour stocker le chemin de l'image
- Le rendu conditionnel dans la grille affichera soit un iframe YouTube, soit une image selon la categorie
- Le titre de section affichera "MINIATURES" quand cette categorie est active
