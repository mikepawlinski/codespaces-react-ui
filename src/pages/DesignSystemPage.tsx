import '../design-system-demo.css'

type Token = { name: string; value: string }
type SemanticToken = { name: string; ref: string }

// Primitives: the raw palette (hue + shade), no meaning attached.
const PRIMITIVE_TOKENS: Token[] = [
  { name: '--white', value: '#ffffff' },
  { name: '--slate-50', value: '#f8fafc' },
  { name: '--slate-100', value: '#f1f5f9' },
  { name: '--slate-200', value: '#e2e8f0' },
  { name: '--slate-300', value: '#cbd5e1' },
  { name: '--slate-400', value: '#94a3b8' },
  { name: '--slate-500', value: '#64748b' },
  { name: '--slate-900', value: '#0f172a' },
  { name: '--indigo-50', value: '#eef2ff' },
  { name: '--indigo-600', value: '#4f46e5' },
  { name: '--indigo-700', value: '#4338ca' },
  { name: '--red-600', value: '#dc2626' },
]

// Semantic tokens: what things mean. Each points at a primitive.
const SEMANTIC_TOKENS: SemanticToken[] = [
  { name: '--background', ref: '--white' },
  { name: '--foreground', ref: '--slate-900' },
  { name: '--card', ref: '--slate-50' },
  { name: '--muted', ref: '--slate-100' },
  { name: '--muted-foreground', ref: '--slate-500' },
  { name: '--subtle-foreground', ref: '--slate-500' },
  { name: '--border', ref: '--slate-200' },
  { name: '--border-strong', ref: '--slate-300' },
  { name: '--primary', ref: '--indigo-600' },
  { name: '--primary-hover', ref: '--indigo-700' },
  { name: '--primary-foreground', ref: '--white' },
  { name: '--accent', ref: '--indigo-50' },
  { name: '--destructive', ref: '--red-600' },
  { name: '--destructive-foreground', ref: '--white' },
]

const TEXT_SIZES: Token[] = [
  { name: '--text-xs', value: '12px' },
  { name: '--text-sm', value: '14px' },
  { name: '--text-base', value: '16px' },
  { name: '--text-lg', value: '18px' },
  { name: '--text-xl', value: '24px' },
]

const TEXT_COLORS: Token[] = [
  { name: '--foreground', value: '#0f172a' },
  { name: '--muted-foreground', value: '#64748b' },
  { name: '--subtle-foreground', value: '#64748b' },
]

const SPACING: Token[] = [
  { name: '--space-1', value: '4px' },
  { name: '--space-2', value: '8px' },
  { name: '--space-3', value: '12px' },
  { name: '--space-4', value: '16px' },
  { name: '--space-5', value: '24px' },
  { name: '--space-6', value: '32px' },
  { name: '--space-8', value: '48px' },
]

const RADIUS: Token[] = [
  { name: '--radius-sm', value: '4px' },
  { name: '--radius-md', value: '8px' },
  { name: '--radius-lg', value: '12px' },
  { name: '--radius-full', value: '9999px' },
]

const ELEVATION: Token[] = [
  { name: '--shadow-sm', value: '0 1px 2px rgba(15,23,42,0.06)' },
  { name: '--shadow-md', value: '0 4px 12px rgba(15,23,42,0.08)' },
]

export const DesignSystemPage = () => {
  return (
    <div className="ds-page">
      <header>
        <h1 className="ds-section__title">Design system</h1>
        <p className="ds-section__hint">
          A live preview of the tokens defined in <code>src/index.css</code>. Build against these.
        </p>
      </header>

      {/* Buttons */}
      <section className="ds-section">
        <h2 className="ds-section__title">Buttons</h2>
        <div className="ds-row" style={{ alignItems: 'center' }}>
          <button type="button" className="ds-btn ds-btn--primary">
            Primary action
          </button>
          <button type="button" className="ds-btn ds-btn--secondary">
            Secondary action
          </button>
          <button type="button" className="ds-btn ds-btn--primary" disabled>
            Disabled
          </button>
        </div>
      </section>

      {/* Color — primitives */}
      <section className="ds-section">
        <h2 className="ds-section__title">Color — primitives</h2>
        <p className="ds-section__hint">
          The raw palette. Named by hue + shade, no meaning attached — you don't reference these
          directly.
        </p>
        <div className="ds-swatches">
          {PRIMITIVE_TOKENS.map((token) => (
            <div key={token.name} className="ds-swatch">
              <div className="ds-swatch__chip" style={{ background: `var(${token.name})` }} />
              <span className="ds-swatch__name">{token.name}</span>
              <span className="ds-swatch__value">{token.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Color — semantic */}
      <section className="ds-section">
        <h2 className="ds-section__title">Color — semantic</h2>
        <p className="ds-section__hint">
          What things mean. Use these in components — each points at a primitive, so re-theming is
          a one-line swap.
        </p>
        <div className="ds-swatches">
          {SEMANTIC_TOKENS.map((token) => (
            <div key={token.name} className="ds-swatch">
              <div className="ds-swatch__chip" style={{ background: `var(${token.name})` }} />
              <span className="ds-swatch__name">{token.name}</span>
              <span className="ds-swatch__value">→ {token.ref}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="ds-section">
        <h2 className="ds-section__title">Typography</h2>
        <p className="ds-section__hint">Sizes</p>
        <div>
          {TEXT_SIZES.map((token) => (
            <div key={token.name} className="ds-type-row">
              <span className="ds-type-row__label">
                {token.name} · {token.value}
              </span>
              <span style={{ fontSize: `var(${token.name})` }}>The quick brown fox</span>
            </div>
          ))}
        </div>
        <p className="ds-section__hint">Text colors</p>
        <div>
          {TEXT_COLORS.map((token) => (
            <div key={token.name} className="ds-type-row">
              <span className="ds-type-row__label">{token.name}</span>
              <span style={{ color: `var(${token.name})` }}>
                Almost before we knew it, we had left the ground.
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing */}
      <section className="ds-section">
        <h2 className="ds-section__title">Spacing</h2>
        <div className="ds-row">
          {SPACING.map((token) => (
            <div key={token.name} className="ds-tile">
              <div
                className="ds-box"
                style={{ width: `var(${token.name})`, height: `var(${token.name})` }}
              />
              <span>{token.name}</span>
              <span>{token.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Radius */}
      <section className="ds-section">
        <h2 className="ds-section__title">Radius</h2>
        <div className="ds-row">
          {RADIUS.map((token) => (
            <div key={token.name} className="ds-tile">
              <div className="ds-radius-box" style={{ borderRadius: `var(${token.name})` }} />
              <span>{token.name}</span>
              <span>{token.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Elevation */}
      <section className="ds-section">
        <h2 className="ds-section__title">Elevation</h2>
        <div className="ds-row">
          {ELEVATION.map((token) => (
            <div key={token.name} className="ds-tile">
              <div className="ds-elevation-box" style={{ boxShadow: `var(${token.name})` }} />
              <span>{token.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
