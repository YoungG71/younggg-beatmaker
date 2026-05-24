# Analyse & Suggestions d'Amélioration — Site Young G

## Contexte
Site vitrine / e-commerce pour **Young G**, beatmaker West Coast. Stack : React 18 + Vite + Tailwind CSS 3 + React Router v7. Hébergé sur Netlify. Paiements via PayPal et Stripe.

---

## 1. 🚀 Performance

### 1.1 Lazy loading des routes React
**Problème :** Tous les composants sont importés statiquement dans `App.jsx` et chargés au démarrage, même les pages rarement visitées (Discography, BeatStore, etc.).

**Solution :** Utiliser `React.lazy()` et `Suspense` pour le code-splitting par route.

### 1.2 Images responsives
**Problème :** Les images utilisent un format WebP (bon point) mais pas de `srcset`/`sizes`. Sur mobile, les images Desktop sont chargées inutilement.

**Solution :** Ajouter des versions réduites et des balises `<picture>` avec `srcset`.

### 1.3 Optimisation des polices Google
**Problème :** 4 polices chargées (`UnifrakturMaguntia`, `Inter`, `Oswald`, `Cinzel`), soit ~300KB de CSS/fonts.

**Solution :** 
- Ajouter `&display=swap` déjà présent ✅
- Envisager de charger `Cinzel` uniquement sur la page Discographie
- Subsetter les polices pour réduire le poids

### 1.4 Canvas GoldParticles — throttling
**Problème :** L'animation canvas tourne à 60fps y compris quand l'onglet est inactif.

**Solution :** Utiliser `document.hidden` et `requestAnimationFrame` conditionnel.

### 1.5 Background — préchargement
**Problème :** `Background.jsx` change l'image de fond avec un délai de 300ms, mais l'image commence à charger seulement au moment du changement.

**Solution :** Précharger les images de fond avec `new Image()` au montage du composant.

---

## 2. 🎨 UI/UX

### 2.1 États de transition entre pages
**Problème :** Navigation entre routes sans aucun indicateur de chargement.

**Solution :** Ajouter un overlay de transition (fondu au noir / shimmer doré) lors des changements de route.

### 2.2 Lecteur audio personnalisé
**Problème :** La balise `<audio controls>` a un rendu différent selon le navigateur/OS, pas du tout dans le thème West Coast.

**Solution :** Créer un composant `<AudioPlayer>` custom avec skin G-Funk (or, noir, effets de glow).

### 2.3 Page 404 personnalisée
**Problème :** Route inconnue → rien d'affiché (page blanche).

**Solution :** Créer une page 404 avec le style du site et un bouton "Back to Home".

### 2.4 Bouton "Back to Top"
**Problème :** Sur mobile, les pages sont longues (surtout BeatStore) sans moyen rapide de remonter.

**Solution :** Ajouter un bouton flottant "↑" qui apparaît après un certain scroll.

### 2.5 Feedback visuel sur le formulaire de contact
**Problème :** Formspree redirige vers une page externe après soumission, cassant l'expérience.

**Solution :** Utiliser Formspree avec `fetch` AJAX pour afficher un message de succès/erreur sur place.

### 2.6 Menu mobile — animation de fermeture
**Problème :** `animate-in slide-in-from-top-5` à l'ouverture, mais aucune animation à la fermeture.

**Solution :** Ajouter une classe d'animation de sortie avant de retirer le DOM.

---

## 3. ♿ Accessibilité (A11Y)

### 3.1 Contraste des couleurs
**Problème :** Texte doré (`#FFD700`) sur fond noir (`#000`) — ratio de contraste ~3.2:1, insuffisant pour WCAG AA (4.5:1).

**Solution :** Utiliser une teinte plus claire pour les textes importants, ou ajouter un text-shadow plus prononcé (déjà présent sur certains éléments).

### 3.2 "Skip to Content"
**Problème :** Navigation impossible au clavier sans passer par tous les liens de la navbar.

**Solution :** Ajouter un lien "Skip to main content" caché mais focusable.

### 3.3 Labels de formulaire
**Problème :** Le formulaire Contact utilise `placeholder` comme seul indicateur visuel.

**Solution :** Renforcer avec `aria-label` ou des `sr-only` labels.

### 3.4 Indicateurs de focus
**Problème :** Les styles `:focus` sont absents ou très minimalistes.

**Solution :** Ajouter des `focus-visible` ring styles (compatibles Tailwind).

### 3.5 Langue du document
**Problème :** `<html lang="en">` alors que l'artiste est français et qu'une partie du public est francophone.

**Solution :** Garder `en` (le site est en anglais), mais ajouter des tags `hreflang` si une version FR existe.

---

## 4. 🔍 SEO

### 4.1 Balises `hreflang`
**Problème :** Aucune balise pour indiquer la langue aux moteurs de recherche.

**Solution :** Ajouter `<link rel="alternate" hreflang="en" href="..." />`.

### 4.2 Images sans `alt` descriptifs
**Problème :** Certaines images ont des `alt` trop génériques ("Young G Album Volume 1").

**Solution :** Descriptions plus riches pour le SEO image.

### 4.3 Hiérarchie des titres (Discographie)
**Problème :** Les albums utilisent `<h2>` pour les années et `LazySpotifyEmbed` sans titre, ce qui crée une hiérarchie plate.

**Solution :** Structurer les niveaux de titre correctement.

---

## 5. 🧹 Qualité du code

### 5.1 Supprimer les champs inutilisés
**Problème :** `musicData.js` contient `cover: null` pour chaque album, jamais utilisé.

**Solution :** Nettoyer les données.

### 5.2 Inline styles vs Tailwind
**Problème :** `Contact.jsx` et certaines parties de `TheStash.jsx` utilisent des styles inline, ce qui crée de l'inconsistance.

**Solution :** Uniformiser avec Tailwind et classes CSS personnalisées.

### 5.3 Commentaires obsolètes
**Problème :** `artistData.js` contient `// Mis à jour à false` qui est un commentaire de développement.

**Solution :** Nettoyer les commentaires de debug.

### 5.4 Conditional Footer dans App.jsx
**Problème :** Deux `<Routes>` distincts (un pour le contenu, un pour le footer conditionnel) — approche fragile.

**Solution :** Déplacer la logique du footer dans un layout ou utiliser `useLocation()` dans Footer directement.

---

## 6. ✨ Nouvelles fonctionnalités potentielles

### 6.1 Compteur de visites / analytics
Ajouter un suivi basique (Google Analytics 4 ou Plausible) pour connaître les pages populaires et les conversions.

### 6.2 Bannière de cookies (RGPD)
Obligatoire si analytics ou tracking tiers.

### 6.3 Section "Latest Release" en home
Mettre en avant le dernier album sorti avec un design spécial.

### 6.4 Newsletter / mailing list
Formulaire d'inscription pour prévenir les fans des nouvelles sorties.

### 6.5 Aperçu des beats avec waveform
Au lieu du simple audio player, un waveform visualizer customiserait l'expérience.

---

## Priorisation suggérée

| Priorité | Catégorie | Amélioration | Effort | Impact |
|----------|-----------|-------------|--------|--------|
| 🔴 P0 | UX | Page 404 | Faible | Moyen |
| 🔴 P0 | UX | Feedback formulaire contact | Faible | Moyen |
| 🔴 P0 | A11Y | Skip to content + Focus | Faible | Élevé |
| 🟡 P1 | Perf | Lazy loading des routes | Moyen | Élevé |
| 🟡 P1 | UX | Audio player custom | Moyen | Élevé |
| 🟡 P1 | UX | Transition entre pages | Faible | Moyen |
| 🟢 P2 | Code | Nettoyage code mort | Faible | Faible |
| 🟢 P2 | Code | Uniformiser styles | Moyen | Moyen |
| 🟢 P2 | Perf | Préchargement backgrounds | Faible | Faible |
| 🔵 P3 | Feature | Analytics | Faible | Moyen |
| 🔵 P3 | Feature | Back to top | Faible | Faible |

---

*Analyse réalisée le 24/05/2026 par 🏗️ Agent Architect*
