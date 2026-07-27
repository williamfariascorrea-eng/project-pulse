import { projects, PING_TIMEOUT, type Project } from './config.js'

export interface PingResult {
  name: string
  url: string
  category: Project['category']
  status: 'up' | 'down'
  code: number | null
  latency: number | null
  timestamp: string
  error?: string
}

export async function pingProject(p: Project): Promise<PingResult> {
  const start = performance.now()
  const ts = new Date().toISOString()

  try {
    const res = await fetch(p.url, {
      method: 'GET',
      signal: AbortSignal.timeout(PING_TIMEOUT),
      redirect: 'follow',
    })
    const latency = Math.round(performance.now() - start)
    return {
      name: p.name,
      url: p.url,
      category: p.category,
      status: res.ok ? 'up' : 'down',
      code: res.status,
      latency,
      timestamp: ts,
    }
  } catch (err) {
    const latency = Math.round(performance.now() - start)
    return {
      name: p.name,
      url: p.url,
      category: p.category,
      status: 'down',
      code: null,
      latency,
      timestamp: ts,
      error: err instanceof Error ? err.message : String(err),
    }
  }
}

export async function pingAll(): Promise<PingResult[]> {
  const results = await Promise.all(projects.map(pingProject))
  return results.sort((a, b) => a.name.localeCompare(b.name))
}
