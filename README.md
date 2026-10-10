# 🚀 AlgoVisualizer - Interactive Sorting & Code Visualizer

> Une application web moderne et interactive développée pour visualiser en temps réel le fonctionnement des algorithmes de tri, associée à un suivi du code source en direct et un système de suggestion par e-mail.

![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)

---

### 🌐 Lien de Déploiement
Testez l'application en direct ici : 👉 **[AlgoVisualizer Live Demo](https://algo-visualizer-two-teal.vercel.app/)**

---

### ✨ Fonctionnalités Principales

- **Visualisation Dynamique :** Regardez les barres s'animer pas à pas (comparaisons en jaune, échanges en rouge, éléments triés en vert).
- **Suivi du Code Source en Direct :** Un panneau affiche le véritable code Python de l'algorithme, avec un curseur qui surligne la ligne active en temps réel, exactement comme un débogueur.
- **Contrôles Complets (VCR) :** Lancez, mettez en pause, réinitialisez, ou ajustez la vitesse de l'animation à la volée grâce à un curseur intuitif.
- **Algorithmes Multiples :** 
  - 🟡 *Bubble Sort* (Tri à bulles)
  - 🔵 *Selection Sort* (Tri par sélection)
  - 🟢 *Insertion Sort* (Tri par insertion)
- **Système de Recommandation par E-mail :** Un formulaire de contact intégré qui envoie de vrais e-mails directement à l'administrateur via *EmailJS* pour suggérer de nouveaux algorithmes.
- **Design Moderne & Dark Mode :** Interface épurée conçue avec *Tailwind CSS*.

---

### 🛠️ Stack Technique

- **Frontend :** React, TypeScript, Vite
- **Styling :** Tailwind CSS
- **Icônes :** Lucide React
- **Services tiers :** EmailJS (Gestion des e-mails sans backend)
- **Hébergement :** Vercel

---

### 📦 Installation et Lancement Local

Si vous souhaitez exécuter ce projet sur votre machine :

1. Clonez le dépôt :
  ```bash
   git clone https://github.com/ssalmarezgui/algo-visualizer.git
  ```
2. Installez les dépendances :
  ```bash 
  npm install
  ```
3. Créez un fichier .env à la racine basé sur .env.exemple et ajoutez vos clés EmailJS :
  ```bash
  VITE_EMAILJS_SERVICE_ID=votre_service_id
  VITE_EMAILJS_TEMPLATE_ID=votre_template_id
  VITE_EMAILJS_PUBLIC_KEY=votre_public_key
  ```
4. Lancez le serveur de développement :
  ```bash
  npm run dev
  ```

---
### 👩‍💻 Auteure
Développé avec ❤️ par **Salma Rezgui**.

---

### 🚀 Pousser les modifications sur GitHub :

Une fois que tu as sauvegardé ton `README.md` dans VS Code, retourne dans ton terminal et tape ces 3 commandes pour mettre à jour ton dépôt GitHub :

```bash
git add README.md
git commit -m "docs: add a professional README with live demo link"
git push origin main
```