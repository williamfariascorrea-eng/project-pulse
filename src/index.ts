import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { HISTORY_FILE, SNAPSHOT_FILE } from './config.js'
import { pingAll, type PingResult } from './pulse.js'

interface HistoryEntry {
  ts: string
  results: PingResult[]
}

async function loadHistory(): Promise<HistoryEntry[]> {
  try {
    const raw = await readFile(HISTORY_FILE, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

async function save() {
  const results = await pingAll()

  const snapshot = {
    generated: new Date().toISOString(),
    projects: results,
  }
  await writeFile(SNAPSHOT_FILE, JSON.stringify(snapshot, null, 2))
  console.log(`snapshot saved -> ${SNAPSHOT_FILE}`)

  const history = await loadHistory()
  history.push({ ts: snapshot.generated, results })
  const MAX = 168
  if (history.length > MAX) history.splice(0, history.length - MAX)
  await writeFile(HISTORY_FILE, JSON.stringify(history, null, 2))
  console.log(`history saved (${history.length} entries) -> ${HISTORY_FILE}`)

  const up = results.filter(r => r.status === 'up').length
  const total = results.length
  console.log(`${up}/${total} projects UP`)
}

save().catch(err => {
  console.error(err)
  process.exit(1)
})
