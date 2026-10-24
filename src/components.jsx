/* Small presentational pieces: icons, illustrations, QR, barcode, stars */

const ICONS = {
  grid: <><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" /><rect x="3" y="14" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" /></>,
  card: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3 10h18M7 15h4" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" /></>,
  hammer: <><path d="M14 4l6 6-3 3-6-6z" /><path d="M11 7L4 14l3 3 7-7" /><path d="M3 21h10" /></>,
  trend: <><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>,
  star: <path d="M12 3l2.7 5.6 6.1.8-4.5 4.3 1.1 6.1L12 16.9 6.6 19.8l1.1-6.1L3.2 9.4l6.1-.8z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3 8l9 6 9-6" /></>,
  pin: <><path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" fill="currentColor" stroke="none" /><circle cx="12" cy="10" r="2.6" fill="#d9f74f" stroke="none" /></>,
  arrow: <path d="M7 17L17 7M8 7h9v9" />,
  chevron: <path d="M9 5l7 7-7 7" />,
  box: <><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" /><path d="M4 7.5l8 4.5 8-4.5M12 12v9" /></>,
}

export function Icon({ name, size = 22 }) {
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  )
}

export function Smiley({ size = 40, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" aria-hidden="true">
      <circle cx="20" cy="20" r="17" />
      <circle cx="14" cy="16" r="1" fill={color} />
      <circle cx="26" cy="16" r="1" fill={color} />
      <path d="M11 24c3 5 15 5 18 0" />
    </svg>
  )
}

/* Stylised 3D-ish character, drawn in SVG */
export function Character({ variant }) {
  const isGreen = variant === 'jacket'
  return (
    <svg className="character" viewBox="0 0 300 300" preserveAspectRatio="xMidYMax slice" role="img"
      aria-label="Illustrated character">
      <defs>
        <radialGradient id={`skin-${variant}`} cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#ff9d88" />
          <stop offset="1" stopColor="#e5705c" />
        </radialGradient>
        <radialGradient id={`hair-${variant}`} cx="40%" cy="30%" r="75%">
          <stop offset="0" stopColor="#f2f8ff" />
          <stop offset="1" stopColor="#a9c6df" />
        </radialGradient>
      </defs>

      {/* body */}
      {isGreen ? (
        <g>
          <path d="M20 300c0-55 40-80 130-80s130 25 130 80z" fill="#d6f24a" />
          <path d="M20 300c0-40 14-62 40-72l22 10c-18 14-26 36-26 62z" fill="#16161a" />
          <path d="M280 300c0-40-14-62-40-72l-22 10c18 14 26 36 26 62z" fill="#16161a" />
          <rect x="50" y="228" width="8" height="72" fill="#fff" transform="rotate(-18 54 264)" />
          <path d="M110 205h80v40c-20 10-60 10-80 0z" fill="#101013" />
          <path d="M148 235v65" stroke="#16161a" strokeWidth="3" />
          <rect x="196" y="256" width="38" height="44" rx="4" fill="#0e0e10" />
        </g>
      ) : (
        <g>
          <path d="M0 300c0-60 50-95 150-95s150 35 150 95z" fill="#4a35e0" />
          <path d="M60 300c0-45 30-70 90-70s90 25 90 70z" fill="#5a45f0" />
          <circle cx="82" cy="262" r="16" fill="#f6c218" />
          <circle cx="210" cy="255" r="16" fill="#f6c218" />
          <circle cx="150" cy="285" r="16" fill="#f6c218" />
          <path d="M215 215l30 85" stroke="#2fa05a" strokeWidth="26" strokeLinecap="round" />
          <path d="M215 215l30 85" stroke="#f1f3ee" strokeWidth="14" strokeLinecap="round" />
        </g>
      )}

      {/* neck */}
      <rect x="132" y="170" width="36" height="48" rx="14" fill={`url(#skin-${variant})`} />
      {isGreen && <rect x="108" y="196" width="84" height="26" rx="13" fill="#0e0e10" />}

      {/* head */}
      <ellipse cx="150" cy="118" rx="62" ry="64" fill={`url(#skin-${variant})`} />

      {/* hair cloud */}
      <g fill={`url(#hair-${variant})`}>
        <circle cx="105" cy="78" r="26" /><circle cx="135" cy="58" r="28" />
        <circle cx="170" cy="56" r="28" /><circle cx="198" cy="78" r="26" />
        <circle cx="150" cy="78" r="34" /><circle cx="96" cy="104" r="14" />
        <circle cx="206" cy="104" r="14" />
      </g>

      {/* face */}
      <circle cx="124" cy="116" r="16" fill="#fff" /><circle cx="176" cy="116" r="16" fill="#fff" />
      <circle cx="127" cy="118" r="5.5" fill="#3a56c9" /><circle cx="173" cy="118" r="5.5" fill="#3a56c9" />
      <ellipse cx="150" cy="146" rx="9" ry="18" fill="#f2806e" />
    </svg>
  )
}

/* Rotating-text ring with flower mark */
export function CircleBadge() {
  const word = 'MORE CASES'
  return (
    <svg className="ring" viewBox="0 0 300 300" role="img" aria-label="More cases">
      <defs>
        <path id="ringPath" d="M150,150 m-110,0 a110,110 0 1,1 220,0 a110,110 0 1,1 -220,0" />
      </defs>
      <g className="ring-spin">
        <text className="ring-text">
          <textPath href="#ringPath" startOffset="0" textLength="685" lengthAdjust="spacing">
            {`${word}  •  ${word}  •  ${word}  •  ${word}  •  `}
          </textPath>
        </text>
      </g>
      <circle cx="150" cy="150" r="82" fill="none" stroke="#d9f74f" strokeWidth="2" />
      <g fill="none" stroke="#fff" strokeWidth="1.8" transform="translate(150 150)">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse key={i} cx="0" cy="-28" rx="13" ry="26" transform={`rotate(${i * 45})`} />
        ))}
        <circle r="9" fill="#121212" />
        <path d="M-4 -1c2 4 6 4 8 0" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export function Medal() {
  return (
    <svg viewBox="0 0 60 80" width="58" height="76" aria-hidden="true">
      <path d="M14 44l-8 30 14-6 8 10 6-30z" fill="#c9ccd1" />
      <path d="M46 44l8 30-14-6-8 10-6-30z" fill="#e8eaed" />
      <circle cx="30" cy="28" r="25" fill="#f3f4f6" />
      <circle cx="30" cy="28" r="19" fill="#17171a" />
      <path d="M30 15l3.9 8 8.8 1.2-6.4 6.1 1.6 8.7-7.9-4.2-7.9 4.2 1.6-8.7-6.4-6.1 8.8-1.2z" fill="#f3f4f6" />
    </svg>
  )
}

export function Barcode() {
  const widths = [3,1,2,1,4,1,1,3,2,1,3,1,2,4,1,1,2,3,1,2,1,1,4,2,1,3,1,2,1,3,1,1,2,4,1,2,3,1,1,2,1,3,2,1,4,1,2,1,3,1,1,2,3,1,2,1,4,1,1,3]
  let x = 0
  const bars = widths.map((w, i) => {
    const bar = i % 2 === 0 ? <rect key={i} x={x} y="0" width={w} height="60" fill="#fff" /> : null
    x += w + 1
    return bar
  })
  return (
    <svg className="barcode" viewBox={`0 0 ${x} 60`} preserveAspectRatio="none" aria-hidden="true">
      {bars}
    </svg>
  )
}

export function Qr() {
  const n = 21
  let s = 7
  const rnd = () => ((s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff)
  const inFinder = (x, y) => (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13)
  const cells = []
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++)
      if (!inFinder(x, y) && rnd() > 0.5) cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />)
  const finder = (x, y) => (
    <g key={`f${x}${y}`} transform={`translate(${x} ${y})`}>
      <rect width="7" height="7" /><rect x="1" y="1" width="5" height="5" fill="#d9f74f" /><rect x="2" y="2" width="3" height="3" />
    </g>
  )
  return (
    <svg className="qr" viewBox={`0 0 ${n} ${n}`} fill="#101010" shapeRendering="crispEdges" role="img" aria-label="QR code">
      {cells}{finder(0, 0)}{finder(14, 0)}{finder(0, 14)}
    </svg>
  )
}

export function Stars({ value = 4.5 }) {
  return (
    <div className="stars" role="img" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, value - i))
        return (
          <svg key={i} viewBox="0 0 24 24" width="30" height="30">
            <defs>
              <linearGradient id={`sg${i}`}>
                <stop offset={`${fill * 100}%`} stopColor="#d9f74f" />
                <stop offset={`${fill * 100}%`} stopColor="#d9f74f" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z"
              fill={`url(#sg${i})`} stroke="#d9f74f" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
        )
      })}
    </div>
  )
}
