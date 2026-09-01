# Project Pulse

A lightweight uptime dashboard that monitors the health of William Corrêa's deployed projects.

A GitHub Action pings every deployment (**Render + Vercel + GitHub Pages**) every 30 minutes and stores the results in `pulse.json`. The `index.html` page reads that JSON and renders a live dashboard.

## 🔎 Monitored projects

| Project | URL | Category |
|---|---|---|
| williamdev-hub | https://williamdev-hub.vercel.app | portfolio |
| Fitmais+ | https://fitmais-ashen.vercel.app | landing |
| LinkTreeWilliam | https://linktree-william.vercel.app | app |
| Meu-Portfolio | https://buildbywilliam.onrender.com | portfolio |
| finance-dashboard | https://finance-dashboard-jqhp.onrender.com | app |
| TeamBanks | https://teambanks.onrender.com | landing |
| PaulinhoPereira | https://paulinhopereira.onrender.com | landing |
| CabalRequiem | https://cabalrequiem.onrender.com | wiki |
| Wiki-Cabal-Horizon | https://cabal-online-wiki.onrender.com | wiki |
| MemoryMatch | https://memorymatch-me7b.onrender.com | game |
| CalculadoraIMC | https://williamfariascorrea-eng.github.io/CalculadoraIMC/ | app |
| PomodoroTimer | https://williamfariascorrea-eng.github.io/PomodoroTimer/ | app |
| BYTE | https://byte-studio-one.vercel.app | landing |

## 🚀 Run locally

```bash
npm ci
npm run pulse
```

This generates `pulse.json` and `pulse-history.json` in the project root. Open `index.html` in your browser to view the dashboard.

## 🌐 GitHub Pages

1. Settings > Pages > Source: **GitHub Actions**
2. Or deploy the `main` branch manually (project root)

## 📄 License

MIT © William Corrêa