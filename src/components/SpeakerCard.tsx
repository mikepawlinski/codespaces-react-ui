import type { Speaker } from '../types'

interface SpeakerCardProps {
  speaker: Speaker
}

/**
 * TODO: Build the speaker card. See TASK.md for the full brief and design spec.
 *
 * This is an intentionally empty starting point — no layout, states, or styling yet.
 * Use the design tokens in src/index.css. Nothing here is prescriptive; replace it all.
 */
export const SpeakerCard = ({ speaker }: SpeakerCardProps) => {
  return (
    <div
      style={{
        border: '1px dashed var(--border-strong)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-4)',
        color: 'var(--muted-foreground)',
      }}
    >
      TODO: build the card for {speaker.name}
    </div>
  )
}
