# WebSite Guide

Site web vitrine pour une activité de guide touristique.  
Le projet a pour objectif de présenter les services proposés, les visites disponibles et de fournir un point de contact clair, dans une interface moderne, multilingue et maintenable.

---

## 🎯 Objectifs du projet

- Présenter clairement les services proposés par le guide
- Mettre en avant les différentes visites (châteaux, thèmes, informations pratiques)
- Proposer un site multilingue
- Construire une base technique propre, lisible et évolutive
- Concevoir un site stable, destiné à peu évoluer dans le temps

Le contenu est volontairement **statique**, les visites proposées étant stables et peu sujettes à changement.

---

## 🧱 Stack technique

- **React**
- **TypeScript**
- **Vite** (initialisation React + TypeScript)
- **Tailwind CSS**
- **react-i18next** (internationalisation)
- **React Router** (prévu)

Le projet est **100 % frontend** et ne repose sur aucun backend ni base de données.

---

## 🗂️ Architecture & choix techniques

- Découpage en **composants React** (Hero, Navbar, Card, Questions, etc.)
- Utilisation de **TypeScript** pour améliorer la robustesse et la lisibilité du code
- Mise en place d’un **design system léger** (ex : composant `Button` avec variantes)
- Gestion centralisée des textes via l’internationalisation
- Contenu chargé **en statique** pour garantir simplicité, performance et stabilité
- Routing prévu afin de structurer les différentes pages du site (visites, à propos, contact…)

---

## 🌍 Internationalisation

Le site est conçu dès le départ pour être multilingue :

- 🇫🇷 Français
- 🇷🇺 Russe
- 🇬🇧 Anglais (prévu)

Les textes sont externalisés et gérés via `react-i18next`.

---

## 🚀 Lancement du projet

```bash
npm install
npm run dev
```

---

## 📌 État du projet

Projet en cours de développement.  
La structure globale est en place, les composants principaux sont définis et l’architecture est pensée pour rester simple, claire et maintenable.

---

## ✍️ Auteur

Projet développé par Arseni Ergin.
