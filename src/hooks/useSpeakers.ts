import { useQuery } from '@tanstack/react-query'
import type { Speaker } from '../types'

// Artificial latency so the Loading / skeleton state is actually visible.
// Lower it (or set to 0) once you're done working on the loading UI.
const SIMULATED_DELAY_MS = 800

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const fetchSpeakers = async (forceError: boolean): Promise<Speaker[]> => {
  await delay(SIMULATED_DELAY_MS)

  if (forceError) {
    throw new Error('Failed to load speakers (error simulation is on)')
  }

  const response = await fetch('/speakers.json')
  if (!response.ok) {
    throw new Error(`Failed to load speakers: ${response.status}`)
  }

  return response.json()
}

// `forceError` is part of the query key, so toggling it re-runs the query
// (Loading → Error/Success) without any manual refetch call.
export const useSpeakers = (forceError = false) =>
  useQuery({
    queryKey: ['speakers', { forceError }],
    queryFn: () => fetchSpeakers(forceError),
  })
