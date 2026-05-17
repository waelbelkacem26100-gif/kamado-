# Nexivo — Site vitrine agence web

Site officiel de [Nexivo](https://nexivo.fr), agence web française spécialisée en création de sites vitrine, boutiques Shopify et SaaS sur-mesure.

## Stack technique

- **Next.js 15** — App Router, export statique
- **TypeScript** — strict mode
- **Tailwind CSS v4**
- **Framer Motion v12** — animations, transitions de pages
- **next-themes** — mode clair / mode sombre
- **Lenis** — smooth scroll

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

## Structure

```
app/          Pages (/, /blog, /services, /projets)
components/   Layout + sections + UI
lib/          Données (blog, projets, services, constantes)
public/       Assets statiques (robots.txt, manifest.json)
```

## Déploiement

Compatible Vercel et IONOS (export statique via next build).
