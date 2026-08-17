import { render, screen } from '@testing-library/react'
import { SpeakerCard } from './SpeakerCard'
import type { Speaker } from '../types'

// Minimal smoke test — proves Vitest + React Testing Library are wired up.
// Copy this as a template for your own tests. See TASK.md for the exercise.
const sampleSpeaker: Speaker = {
  id: 1,
  name: 'Amara Okafor',
  role: 'Senior Frontend Engineer',
  track: 'Engineering',
  topic: 'Scaling Design Systems Across Teams',
  keywords: ['JavaScript', 'TypeScript', 'React', 'CSS'],
  featured: true,
}

test('renders the speaker placeholder', () => {
  render(<SpeakerCard speaker={sampleSpeaker} />)
  expect(screen.getByText(/Amara Okafor/)).toBeInTheDocument()
})
