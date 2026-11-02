import { identity } from '../data/profile'

// Brand marks from Dian's brand board, drawn as inline SVG so they stay sharp and use the theme colours.

const initials = `${identity.firstName[0]}${identity.lastName[0]}`

/** Small plane, nose to the right (24×24). */
const plane =
  'M22 12c0-.8-.7-1.5-1.5-1.5H15L10 3H8l2.5 7.5H5.5L4 8.5H2.5l1 3.5-1 3.5H4l1.5-2h5L8 21h2l5-7.5h5.5c.8 0 1.5-.7 1.5-1.5z'

/** Overlapping initials with a plane taking off. `tile` puts them on a burgundy square. */
export function Monogram({ tile = false, className = 'size-10' }: { tile?: boolean; className?: string }) {
  const ink = tile ? 'var(--c-paper)' : 'var(--c-accent)'
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {tile && <rect width="64" height="64" rx="14" fill="var(--c-accent)" />}
      <g fontFamily="var(--f-display)" fill={ink}>
        <text x="25" y="44" fontSize="42" textAnchor="middle">
          {initials[0]}
        </text>
        <text x="41" y="52" fontSize="34" textAnchor="middle">
          {initials[1]}
        </text>
      </g>
      <path d="M14 46c10 6 24 4 34-10" fill="none" stroke={ink} strokeWidth="1.2" strokeDasharray="2 2.5" opacity=".8" />
      <path d={plane} fill={ink} transform="translate(43 10) rotate(-35 6 6) scale(.5)" />
    </svg>
  )
}

/** Dashed flight path that loops into a heart and ends in a plane. */
export function FlightPath({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 80" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 66C40 74 72 64 96 48C84 40 82 30 88 26C92 23 96 26 96 30C96 26 100 23 104 26C110 30 108 40 96 48C120 60 148 46 164 28"
        stroke="var(--c-accent)"
        strokeWidth="1.6"
        strokeDasharray="4 5"
        strokeLinecap="round"
      />
      <path d={plane} fill="var(--c-accent)" transform="translate(164 4) rotate(-42 12 12) scale(1.15)" />
    </svg>
  )
}

/* Bougainvillea: each flower is three papery bracts around a small cream centre. */
const flowers: [x: number, y: number, size: number, turn: number, tone: number][] = [
  [36, 30, 1.25, 10, 0],
  [70, 18, 1, 40, 1],
  [58, 52, 1.1, 75, 2],
  [98, 40, 0.95, 20, 0],
  [22, 66, 0.9, 55, 1],
  [128, 22, 0.85, 80, 2],
  [90, 74, 0.8, 5, 1],
  [150, 50, 0.7, 35, 0],
  [46, 92, 0.7, 60, 0],
  [120, 66, 0.65, 15, 2],
]
const tones = ['#c2185b', '#a3124b', '#d9407a']
const leaves: [x: number, y: number, turn: number][] = [
  [14, 40, 200],
  [84, 4, -30],
  [112, 54, 30],
  [30, 84, 140],
  [140, 36, -10],
  [70, 90, 80],
]

export function Bougainvillea({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 110" className={className} aria-hidden="true">
      {leaves.map(([x, y, turn], i) => (
        <path key={i} d="M0 0C6-6 16-6 22 0C16 6 6 6 0 0Z" fill="#5d8a46" opacity=".85" transform={`translate(${x} ${y}) rotate(${turn})`} />
      ))}
      {flowers.map(([x, y, size, turn, tone], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${turn}) scale(${size})`}>
          {[0, 120, 240].map((r) => (
            <path key={r} d="M0 0C-8-4-10-15 0-19C10-15 8-4 0 0Z" fill={tones[tone]} transform={`rotate(${r})`} />
          ))}
          <circle r="2" fill="#fbe9c8" />
        </g>
      ))}
    </svg>
  )
}

/** Round stamp: name on the top arc, role on the bottom arc, monogram in the middle. */
export function Badge({ bottom, className = 'size-36' }: { bottom: string; className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <path id="badge-top" d="M20 100A80 80 0 0 1 180 100" />
        <path id="badge-bottom" d="M14 100A86 86 0 0 0 186 100" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke="var(--c-ink)" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="66" fill="none" stroke="var(--c-ink)" strokeWidth="1" opacity=".4" />
      <g fill="var(--c-ink)" fontFamily="var(--f-body)" fontSize="15" fontWeight="600" letterSpacing="4">
        <text>
          <textPath href="#badge-top" startOffset="50%" textAnchor="middle">
            {`${identity.firstName} ${identity.lastName}`.toUpperCase()}
          </textPath>
        </text>
        <text>
          <textPath href="#badge-bottom" startOffset="50%" textAnchor="middle">
            {bottom.toUpperCase()}
          </textPath>
        </text>
      </g>
      <svg x="58" y="56" width="84" height="84" viewBox="0 0 64 64" overflow="visible">
        <Monogram className="" />
      </svg>
    </svg>
  )
}
