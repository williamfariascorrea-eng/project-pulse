const grid = document.getElementById('project-grid')
const countUp = document.getElementById('count-up')
const countDown = document.getElementById('count-down')
const countTotal = document.getElementById('count-total')
const lastUpdate = document.getElementById('last-update')
const uptimeBadge = document.getElementById('uptime-badge')
const footerTime = document.getElementById('footer-time')

let allProjects = []

function fmtTime(iso) {
  const d = new Date(iso)
  return d.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
}

function render(filter) {
  const filtered = filter === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === filter)

  grid.innerHTML = filtered.map(p => {
    const isUp = p.status === 'up'
    return `
      <a class="project-card" href="${p.url}" target="_blank" rel="noopener">
        <div class="card-left">
          <span class="status-dot ${isUp ? 'up' : 'down'}"></span>
          <div>
            <div class="card-name">${p.name}</div>
            <span class="card-category">${p.category}</span>
          </div>
        </div>
        <div class="card-right">
          ${p.latency ? `<div class="card-latency">${p.latency}ms</div>` : ''}
          ${p.code ? `<div class="card-code">${p.code}</div>` : ''}
          ${p.error ? `<div class="card-error" title="${p.error}">${p.error}</div>` : ''}
        </div>
      </a>
    `
  }).join('')

  const up = allProjects.filter(p => p.status === 'up').length
  const down = allProjects.filter(p => p.status === 'down').length
  countUp.textContent = up
  countDown.textContent = down
  countTotal.textContent = allProjects.length

  const pct = allProjects.length ? Math.round((up / allProjects.length) * 100) : 0
  uptimeBadge.textContent = `${pct}% UP`
}

async function load() {
  try {
    const res = await fetch('pulse.json' + '?t=' + Date.now())
    const data = await res.json()
    allProjects = data.projects
    lastUpdate.textContent = 'Atualizado: ' + fmtTime(data.generated)
    footerTime.textContent = fmtTime(data.generated)
    render('all')
  } catch (err) {
    grid.innerHTML = '<p style="color:var(--red);text-align:center;padding:2rem;">Erro ao carregar status</p>'
  }
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    render(btn.dataset.filter)
  })
})

load()
