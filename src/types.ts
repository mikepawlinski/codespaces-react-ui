export interface Speaker {
  id: number
  name: string
  /** Their current job title. */
  role: string
  track: 'Engineering' | 'Business' | 'Marketing'
  /** Their talk topic. May be an empty string when not yet announced — the card decides how to handle that. */
  topic: string
  /** Talk keywords / tags. */
  keywords: string[]
  featured: boolean
}
