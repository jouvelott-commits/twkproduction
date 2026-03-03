

# Modifications demandees

## 1. SocialProof : Remplacer des createurs et corriger le defilement

**Dans `src/components/sections/SocialProof.tsx`** :

- **Supprimer** "Impact Trading" (ligne 11) et "Kasper Trading" (ligne 14) du tableau `creators`
- **Ajouter** "Max Bellona" avec la photo uploadee (image-9.png copiee dans `src/assets/max-bellona.png`), 480K abonnes, 5M vues
- **Placer Micode a cote de MS** dans l'ordre du tableau (juste avant ou apres MS)
- **Corriger le defilement** : remplacer le scroll qui se reset par un defilement CSS infini continu. Technique : dupliquer la liste des createurs dans le DOM et utiliser une animation CSS `@keyframes` avec `translateX` pour un defilement sans interruption (marquee infini). Supprimer le `useEffect` avec `scrollLeft` et `requestAnimationFrame`.

## 2. Portfolio : Remplacer des videos

**Dans `src/pages/Portfolio.tsx`** :

- **Entrepreneuriat** : Remplacer `k5EHtBpIhq4` (4eme video) par `tuuAb1A8CkY`
- **Verticale** : Remplacer `mOvu0uOxu8U` par `pZy98t8qhiE`, et `ooCtIyO8RU0` par `PyZZc9x7xtc`

## 3. Portfolio : Bouton CTA redirection

- Le bouton "Reserver un appel decouverte" dans le CTA du portfolio redirige deja vers `/#contact`. Verifier que ca fonctionne correctement avec react-router (utiliser `Link` ou `navigate` au lieu de `<a href>`).

## Details techniques

- L'animation de defilement infini utilisera une approche CSS pure avec deux copies de la liste cote a cote et `animation: scroll Xs linear infinite` sur le conteneur flex
- La photo de Max Bellona sera importee depuis `src/assets/max-bellona.png`

