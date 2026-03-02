

# Ajouter une deuxieme ligne de miniatures

## Ce qui va changer

1. **Ajouter 4 nouvelles images** : Copier les 4 miniatures originales (celles du premier upload) dans `src/assets/` sous les noms `miniature-5.png` a `miniature-8.png`

2. **Modifier `src/pages/Portfolio.tsx`** :
   - Importer les 4 nouvelles images (`miniature-5` a `miniature-8`)
   - Ajouter 4 nouvelles entrees dans le tableau `videos` avec `category: "miniature"`, placees AVANT les 4 miniatures actuelles
   - Resultat : 8 miniatures au total, affichees en 2 lignes de 4 dans la grille `grid-cols-2 md:grid-cols-4`

## Ordre d'affichage

- **Ligne 1 (haut)** : Les 4 miniatures originales (premier upload : image.png, image-2.png, image-3.png, image-4.png)
- **Ligne 2 (bas)** : Les 4 miniatures actuelles (deuxieme upload, deja en place)

