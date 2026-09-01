export interface Project {
  name: string
  url: string
  category: 'app' | 'landing' | 'game' | 'portfolio' | 'wiki'
}

export const projects: Project[] = [
  { name: 'williamdev-hub',          url: 'https://williamdev-hub.vercel.app',                    category: 'portfolio' },
  { name: 'Fitmais+',                url: 'https://fitmais-ashen.vercel.app',                     category: 'landing' },
  { name: 'LinkTreeWilliam',         url: 'https://linktree-william.vercel.app',                  category: 'app' },
  { name: 'Meu-Portfolio',           url: 'https://meu-portfolio-sepia-seven.vercel.app',                 category: 'portfolio' },
  { name: 'finance-dashboard',       url: 'https://finance-dashboard-jqhp.onrender.com',          category: 'app' },
  { name: 'TeamBanks',               url: 'https://teambanks.onrender.com',                       category: 'landing' },
  { name: 'PaulinhoPereira',         url: 'https://paulinhopereira.onrender.com',                 category: 'landing' },
  { name: 'CabalRequiem',            url: 'https://cabalrequiem.onrender.com',                    category: 'wiki' },
  { name: 'Wiki-Cabal-Horizon',      url: 'https://cabal-online-wiki.onrender.com',               category: 'wiki' },
  { name: 'MemoryMatch',             url: 'https://memorymatch-me7b.onrender.com',                category: 'game' },
  { name: 'CalculadoraIMC',          url: 'https://calculadora-imc-one-sigma.vercel.app',                  category: 'app' },
  { name: 'PomodoroTimer',           url: 'https://pomodoro-timer-phi-ruby.vercel.app',                   category: 'app' },
  { name: 'BYTE',                    url: 'https://byte-studio-one.vercel.app',                        category: 'landing' },
]

export const HISTORY_FILE = 'pulse-history.json'
export const SNAPSHOT_FILE = 'pulse.json'
export const PING_TIMEOUT = 15_000
