# Project Pulse

Monitor de saude para os projetos de William Correa.

A cada 30 minutos uma GitHub Action pinga todos os deploys (Render + Vercel + GitHub Pages) e salva o resultado em `pulse.json`. A pagina `index.html` consome esse JSON e mostra o dashboard.

## Projetos monitorados

| Projeto | URL | Categoria |
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

## Rodar localmente

```bash
npm ci
npm run pulse
```

O comando gera `pulse.json` e `pulse-history.json` na raiz do projeto. Abra `index.html` no navegador para ver o dashboard.

## GitHub Pages

1. Settings > Pages > Source: GitHub Actions
2. Ou deploy manual da branch `main` na raiz
