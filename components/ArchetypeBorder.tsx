'use client'
import { useEffect, useRef, CSSProperties } from 'react'
import { Archetype } from '@/lib/types'
import { MantlingColors } from '@/lib/heraldry'

interface Props {
  archetype: Archetype
  m: MantlingColors
}

// ── Corner designs (80×80 viewBox) ───────────────────────────────────────────
function CornerDesign({ archetype, m }: { archetype: Archetype; m: MantlingColors }) {
  const s = m.secondary
  const p = m.primary

  if (archetype === 'Knight') {
    return (
      <>
        {/* Gothic L-bracket */}
        <path data-animated="true" d="M 5 75 L 5 5 L 75 5" stroke={s} strokeWidth="3" fill="none" strokeLinecap="square" />
        <path data-animated="true" d="M 12 68 L 12 12 L 68 12" stroke={s} strokeWidth="1" fill="none" opacity={0.4} />
        {/* Rivet bosses at corner */}
        <circle cx="5" cy="5" r="3.5" fill={s} />
        <circle cx="5" cy="5" r="1.5" fill={p} />
        {/* Chain links along horizontal bar */}
        <path data-animated="true" d="M 29 11 C 29 7 35 7 35 11 C 35 13 29 13 29 11 C 29 7 29 5 29 3 Z" fill="none" stroke={s} strokeWidth="1.2" opacity={0.75} />
        <path data-animated="true" d="M 44 3 C 44 1 50 1 50 3 C 50 7 50 11 50 11 C 50 13 44 13 44 11 C 44 7 44 5 44 3 Z" fill="none" stroke={s} strokeWidth="1.2" opacity={0.75} />
        {/* Chain links along vertical bar */}
        <path data-animated="true" d="M 3 29 C 1 29 1 35 3 35 C 7 35 11 35 11 35 C 13 35 13 29 11 29 C 7 29 5 29 3 29 Z" fill="none" stroke={s} strokeWidth="1.2" opacity={0.75} />
        <path data-animated="true" d="M 3 44 C 1 44 1 50 3 50 C 7 50 11 50 11 50 C 13 50 13 44 11 44 C 7 44 5 44 3 44 Z" fill="none" stroke={s} strokeWidth="1.2" opacity={0.75} />
      </>
    )
  }

  if (archetype === 'Bard') {
    return (
      <>
        {/* Twin ribbon along horizontal bar */}
        <path data-animated="true" d="M 0 6 C 14 3 22 11 36 7 C 50 3 58 11 72 7 L 80 6" stroke={s} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path data-animated="true" d="M 0 12 C 14 9 22 17 36 13 C 50 9 58 17 72 13 L 80 12" stroke={s} strokeWidth="1" fill="none" opacity={0.4} strokeLinecap="round" />
        {/* Twin ribbon along vertical bar */}
        <path data-animated="true" d="M 6 0 C 3 14 11 22 7 36 C 3 50 11 58 7 72 L 6 80" stroke={s} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path data-animated="true" d="M 12 0 C 9 14 17 22 13 36 C 9 50 17 58 13 72 L 12 80" stroke={s} strokeWidth="1" fill="none" opacity={0.4} strokeLinecap="round" />
        {/* Curling end spirals */}
        <path data-animated="true" d="M 72 6 C 76 4 79 5 78 8 C 77 11 74 10 75 7" fill="none" stroke={s} strokeWidth="1.5" strokeLinecap="round" />
        <path data-animated="true" d="M 6 72 C 4 76 5 79 8 78 C 11 77 10 74 7 75" fill="none" stroke={s} strokeWidth="1.5" strokeLinecap="round" />
        {/* Corner 8-point star */}
        <path data-animated="true" d="M 19 19 L 20 15 L 21 19 L 25 18 L 22 21 L 25 24 L 21 23 L 20 27 L 19 23 L 15 24 L 18 21 L 15 18 Z" fill={s} stroke={s} strokeWidth="0.5" opacity={0.85} />
        {/* Musical notes along bars */}
        <text x="28" y="10" fontSize="11" fill={s} opacity={0.85} fontFamily="Georgia, serif">♪</text>
        <text x="44" y="9" fontSize="10" fill={s} opacity={0.7} fontFamily="Georgia, serif">♩</text>
        <text x="9" y="30" fontSize="11" fill={s} opacity={0.85} fontFamily="Georgia, serif" transform="rotate(90 9 30)">♪</text>
        <text x="9" y="46" fontSize="10" fill={s} opacity={0.7} fontFamily="Georgia, serif" transform="rotate(90 9 46)">♩</text>
      </>
    )
  }

  if (archetype === 'Wizard') {
    return (
      <>
        {/* Bracket lines */}
        <path data-animated="true" d="M 8 5 L 8 72" stroke={s} strokeWidth="1.5" fill="none" opacity={0.6} />
        <path data-animated="true" d="M 5 8 L 72 8" stroke={s} strokeWidth="1.5" fill="none" opacity={0.6} />
        {/* Dashed quarter-circle arcs */}
        <path data-animated="true" d="M 8 72 A 64 64 0 0 1 72 8" fill="none" stroke={s} strokeWidth="1" strokeDasharray="4 5" opacity={0.55} />
        <path data-animated="true" d="M 8 60 A 52 52 0 0 1 60 8" fill="none" stroke={s} strokeWidth="0.8" strokeDasharray="2 6" opacity={0.3} />
        {/* 4-point compass star at corner */}
        <path data-animated="true" d="M 5 1 L 5 9 M 1 5 L 9 5 M 2 2 L 8 8 M 8 2 L 2 8" stroke={s} strokeWidth="1.2" opacity={0.9} />
        <circle cx="5" cy="5" r="2.8" fill="none" stroke={s} strokeWidth="1" opacity={0.8} />
        <circle cx="5" cy="5" r="1.2" fill={s} opacity={0.9} />
        {/* Star glyphs along bars */}
        <text x="17" y="9" fontSize="9" fill={s} opacity={0.75} fontFamily="Georgia, serif">✦</text>
        <text x="31" y="9" fontSize="9" fill={s} opacity={0.75} fontFamily="Georgia, serif">✦</text>
        <text x="46" y="9" fontSize="9" fill={s} opacity={0.75} fontFamily="Georgia, serif">✦</text>
        <text x="9" y="21" fontSize="9" fill={s} opacity={0.75} fontFamily="Georgia, serif" transform="rotate(90 9 21)">✦</text>
        <text x="9" y="36" fontSize="9" fill={s} opacity={0.75} fontFamily="Georgia, serif" transform="rotate(90 9 36)">✦</text>
        <text x="9" y="51" fontSize="9" fill={s} opacity={0.75} fontFamily="Georgia, serif" transform="rotate(90 9 51)">✦</text>
      </>
    )
  }

  if (archetype === 'Rogue') {
    return (
      <>
        {/* Rope braid along horizontal — two interlacing sine curves */}
        <path data-animated="true" d="M 0 6 C 8 3 14 11 22 8 C 30 5 36 13 44 10 C 52 7 58 15 66 12 C 72 10 76 8 80 6" stroke={s} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity={0.9} />
        <path data-animated="true" d="M 0 12 C 8 15 14 7 22 10 C 30 13 36 5 44 8 C 52 11 58 3 66 6 C 72 8 76 10 80 12" stroke={s} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity={0.55} />
        {/* Rope braid along vertical */}
        <path data-animated="true" d="M 6 0 C 3 8 11 14 8 22 C 5 30 13 36 10 44 C 7 52 15 58 12 66 C 10 72 8 76 6 80" stroke={s} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity={0.9} />
        <path data-animated="true" d="M 12 0 C 15 8 7 14 10 22 C 13 30 5 36 8 44 C 11 52 3 58 6 66 C 8 72 10 76 12 80" stroke={s} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity={0.55} />
        {/* Crossed daggers at corner */}
        <path data-animated="true" d="M 3 3 L 22 22" stroke={s} strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path data-animated="true" d="M 22 3 L 3 22" stroke={s} strokeWidth="2.2" fill="none" strokeLinecap="round" />
        {/* Dagger tips */}
        <path d="M 3 3 L 0.5 0.5 L 5.5 0.5 Z" fill={s} opacity={0.9} />
        <path d="M 22 3 L 19.5 0.5 L 24.5 0.5 Z" fill={s} opacity={0.9} />
        {/* Knot at crossing center */}
        <circle cx="12.5" cy="12.5" r="3.5" fill={p} stroke={s} strokeWidth="1.2" />
        <circle cx="12.5" cy="12.5" r="1.5" fill={s} opacity={0.7} />
      </>
    )
  }

  if (archetype === 'Viking') {
    return (
      <>
        {/* Double-line bracket */}
        <path data-animated="true" d="M 5 5 L 5 72" stroke={s} strokeWidth="2.5" fill="none" strokeLinecap="butt" />
        <path data-animated="true" d="M 5 5 L 72 5" stroke={s} strokeWidth="2.5" fill="none" strokeLinecap="butt" />
        <path data-animated="true" d="M 12 12 L 12 68" stroke={s} strokeWidth="1.2" fill="none" opacity={0.5} />
        <path data-animated="true" d="M 12 12 L 68 12" stroke={s} strokeWidth="1.2" fill="none" opacity={0.5} />
        {/* Corner interlace knot (two crossing oval loops) */}
        <path data-animated="true" d="M 10 22 C 10 13 20 11 22 17 C 24 23 16 27 18 21 C 20 15 30 17 28 23 C 26 29 16 27 16 22 C 16 17 24 15 24 20 C 24 25 18 26 18 22 Z" fill="none" stroke={s} strokeWidth="1.5" opacity={0.85} />
        {/* Dragon head at end of horizontal bar */}
        <path data-animated="true" d="M 60 3 C 65 2 70 3 72 6 C 74 9 72 11 69 10 L 67 12 L 64 10 L 62 11 L 60 8 Z" fill="none" stroke={s} strokeWidth="1.2" opacity={0.85} />
        <circle cx="69" cy="5.5" r="1" fill={s} opacity={0.9} />
        {/* Dragon head at end of vertical bar */}
        <path data-animated="true" d="M 3 60 C 2 65 3 70 6 72 C 9 74 11 72 10 69 L 12 67 L 10 64 L 11 62 L 8 60 Z" fill="none" stroke={s} strokeWidth="1.2" opacity={0.85} />
        <circle cx="5.5" cy="69" r="1" fill={s} opacity={0.9} />
        {/* Elder Futhark runes along horizontal bar */}
        <text x="18" y="9" fontSize="8" fill={s} opacity={0.8} fontFamily="Georgia, serif">ᚠ</text>
        <text x="28" y="9" fontSize="8" fill={s} opacity={0.8} fontFamily="Georgia, serif">ᚢ</text>
        <text x="38" y="9" fontSize="8" fill={s} opacity={0.8} fontFamily="Georgia, serif">ᚦ</text>
        <text x="48" y="9" fontSize="8" fill={s} opacity={0.8} fontFamily="Georgia, serif">ᚨ</text>
        {/* Runes along vertical bar */}
        <text x="9" y="25" fontSize="8" fill={s} opacity={0.8} fontFamily="Georgia, serif" transform="rotate(90 9 25)">ᚱ</text>
        <text x="9" y="35" fontSize="8" fill={s} opacity={0.8} fontFamily="Georgia, serif" transform="rotate(90 9 35)">ᚲ</text>
        <text x="9" y="45" fontSize="8" fill={s} opacity={0.8} fontFamily="Georgia, serif" transform="rotate(90 9 45)">ᚷ</text>
        <text x="9" y="55" fontSize="8" fill={s} opacity={0.8} fontFamily="Georgia, serif" transform="rotate(90 9 55)">ᚹ</text>
      </>
    )
  }

  // Fairy (default)
  return (
    <>
      {/* Organic vine stem — horizontal */}
      <path data-animated="true" d="M 0 7 C 10 5 16 11 26 7 C 36 3 42 10 52 7 C 62 4 68 10 80 7" stroke={p} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      {/* Organic vine stem — vertical */}
      <path data-animated="true" d="M 7 0 C 5 10 11 16 7 26 C 3 36 10 42 7 52 C 4 62 10 68 7 80" stroke={p} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      {/* Leaf pairs along horizontal vine */}
      <path data-animated="true" d="M 26 7 C 24 3 21 1 23 5 Z" fill={p} opacity={0.9} />
      <path data-animated="true" d="M 26 7 C 28 3 31 1 29 5 Z" fill={p} opacity={0.9} />
      <path data-animated="true" d="M 52 7 C 50 3 47 1 49 5 Z" fill={p} opacity={0.9} />
      <path data-animated="true" d="M 52 7 C 54 3 57 1 55 5 Z" fill={p} opacity={0.9} />
      {/* Leaf pairs along vertical vine */}
      <path data-animated="true" d="M 7 26 C 3 24 1 21 5 23 Z" fill={p} opacity={0.9} />
      <path data-animated="true" d="M 7 26 C 3 28 1 31 5 29 Z" fill={p} opacity={0.9} />
      <path data-animated="true" d="M 7 52 C 3 50 1 47 5 49 Z" fill={p} opacity={0.9} />
      <path data-animated="true" d="M 7 52 C 3 54 1 57 5 55 Z" fill={p} opacity={0.9} />
      {/* Mushroom at inner corner */}
      <path d="M 14 22 C 14 15 24 15 24 22 Z" fill={s} opacity={0.8} />
      <line x1="19" y1="22" x2="19" y2="28" stroke={s} strokeWidth="1.5" opacity={0.75} />
      {/* Fairy wing at corner tip */}
      <path data-animated="true" d="M 4 4 C 1 1 8 -1 9 3 C 8 6 5 6 4 4 Z" fill="none" stroke={s} strokeWidth="1.2" opacity={0.8} />
      <path data-animated="true" d="M 4 4 C 1 7 -1 13 3 11 C 6 9 5 6 4 4 Z" fill="none" stroke={s} strokeWidth="1.2" opacity={0.55} />
      {/* Berry cluster */}
      <circle cx="38" cy="5" r="2.2" fill={s} opacity={0.8} />
      <circle cx="42" cy="4" r="1.5" fill={s} opacity={0.65} />
      <circle cx="34" cy="4" r="1.5" fill={s} opacity={0.65} />
      {/* Tendril curls at bar ends */}
      <path data-animated="true" d="M 78 7 C 82 5 84 7 82 9 C 80 11 77 9 78 7 Z" fill="none" stroke={p} strokeWidth="1.2" />
      <path data-animated="true" d="M 7 78 C 5 82 7 84 9 82 C 11 80 9 77 7 78 Z" fill="none" stroke={p} strokeWidth="1.2" />
      {/* Firefly sparkle dots */}
      <path d="M 62 10 L 63.5 12 L 60.5 12 Z" fill={s} opacity={0.6} />
      <path d="M 10 62 L 12 63.5 L 12 60.5 Z" fill={s} opacity={0.6} />
      <circle cx="70" cy="4" r="1.2" fill={s} opacity={0.5} />
      <circle cx="4" cy="70" r="1.2" fill={s} opacity={0.5} />
    </>
  )
}

// ── Top center ornament (200×55 viewBox, centered at top of card) ─────────────
function TopOrnamentDesign({ archetype, m }: { archetype: Archetype; m: MantlingColors }) {
  const s = m.secondary
  const p = m.primary

  if (archetype === 'Knight') {
    return (
      <>
        {/* Crossed swords */}
        <path data-animated="true" d="M 72 50 L 128 5" stroke={s} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity={0.85} />
        <path data-animated="true" d="M 128 50 L 72 5" stroke={s} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity={0.85} />
        {/* Hilt crossbar */}
        <path data-animated="true" d="M 85 31 L 115 31" stroke={s} strokeWidth="3.5" fill="none" strokeLinecap="round" opacity={0.9} />
        {/* Pommel caps */}
        <circle cx="72" cy="50" r="4" fill={s} opacity={0.85} />
        <circle cx="128" cy="50" r="4" fill={s} opacity={0.85} />
        {/* Crenellation band across top */}
        <path data-animated="true" d="M 91 3 L 91 9 L 95 9 L 95 3 L 100 3 L 100 9 L 105 9 L 105 3 L 109 3 L 109 9 L 113 9 L 113 3" stroke={s} strokeWidth="1.5" fill="none" opacity={0.5} strokeLinecap="square" />
      </>
    )
  }

  if (archetype === 'Bard') {
    return (
      <>
        {/* Comedy mask (left) */}
        <ellipse cx="80" cy="28" rx="18" ry="20" fill="none" stroke={s} strokeWidth="1.5" opacity={0.9} />
        <path data-animated="true" d="M 72 34 Q 80 42 88 34" fill="none" stroke={s} strokeWidth="2" strokeLinecap="round" opacity={0.95} />
        <circle cx="75" cy="23" r="2.5" fill={s} opacity={0.75} />
        <circle cx="85" cy="23" r="2.5" fill={s} opacity={0.75} />
        {/* Tragedy mask (right) */}
        <ellipse cx="120" cy="28" rx="18" ry="20" fill="none" stroke={s} strokeWidth="1.5" opacity={0.9} />
        <path data-animated="true" d="M 112 36 Q 120 28 128 36" fill="none" stroke={s} strokeWidth="2" strokeLinecap="round" opacity={0.95} />
        <circle cx="115" cy="23" r="2.5" fill={s} opacity={0.75} />
        <circle cx="125" cy="23" r="2.5" fill={s} opacity={0.75} />
        {/* Center divider ribbon */}
        <path data-animated="true" d="M 100 5 C 98 15 102 25 100 35 C 98 45 100 50 100 50" stroke={s} strokeWidth="1" fill="none" opacity={0.4} strokeDasharray="2 3" />
      </>
    )
  }

  if (archetype === 'Wizard') {
    return (
      <>
        {/* Moon phase sequence: new → crescent → half → full → waning */}
        {/* New moon */}
        <circle cx="50" cy="28" r="13" fill={p} stroke={s} strokeWidth="1.2" opacity={0.8} />
        {/* Waxing crescent */}
        <circle cx="75" cy="28" r="13" fill="none" stroke={s} strokeWidth="1.5" opacity={0.9} />
        <path d="M 75 15 C 82 15 88 21 88 28 C 88 35 82 41 75 41 C 72 41 72 15 75 15 Z" fill={p} />
        {/* Half moon */}
        <circle cx="100" cy="28" r="13" fill="none" stroke={s} strokeWidth="1.5" opacity={0.9} />
        <path d="M 100 15 A 13 13 0 0 1 100 41 Z" fill={s} opacity={0.9} />
        {/* Full moon */}
        <circle cx="125" cy="28" r="13" fill={s} opacity={0.75} />
        <circle cx="125" cy="28" r="9" fill="none" stroke={p} strokeWidth="0.8" opacity={0.35} />
        {/* Waning crescent */}
        <circle cx="150" cy="28" r="13" fill="none" stroke={s} strokeWidth="1.5" opacity={0.9} />
        <path d="M 150 15 C 143 15 137 21 137 28 C 137 35 143 41 150 41 C 153 41 153 15 150 15 Z" fill={p} />
      </>
    )
  }

  if (archetype === 'Rogue') {
    return (
      <>
        {/* Guild mark: outer rope ring */}
        <ellipse cx="100" cy="28" rx="33" ry="23" fill="none" stroke={s} strokeWidth="1.2" opacity={0.5} strokeDasharray="4 3" />
        {/* Eye outline */}
        <ellipse cx="100" cy="28" rx="18" ry="13" fill="none" stroke={s} strokeWidth="1.8" opacity={0.95} />
        {/* Iris and pupil */}
        <circle cx="100" cy="28" r="7" fill={s} opacity={0.85} />
        <circle cx="100" cy="28" r="3.5" fill={p} />
        <circle cx="100" cy="28" r="1.5" fill={s} opacity={0.6} />
        {/* Emanating lines (eye rays) */}
        <path data-animated="true" d="M 100 15 L 100 5" stroke={s} strokeWidth="1.2" opacity={0.65} />
        <path data-animated="true" d="M 100 41 L 100 51" stroke={s} strokeWidth="1.2" opacity={0.65} />
        <path data-animated="true" d="M 82 28 L 72 28" stroke={s} strokeWidth="1.2" opacity={0.65} />
        <path data-animated="true" d="M 118 28 L 128 28" stroke={s} strokeWidth="1.2" opacity={0.65} />
        {/* Corner dagger hints */}
        <path data-animated="true" d="M 68 12 L 78 22" stroke={s} strokeWidth="1.5" fill="none" opacity={0.55} />
        <path data-animated="true" d="M 132 12 L 122 22" stroke={s} strokeWidth="1.5" fill="none" opacity={0.55} />
        <path d="M 68 12 L 65 9 L 71 9 Z" fill={s} opacity={0.75} />
        <path d="M 132 12 L 129 9 L 135 9 Z" fill={s} opacity={0.75} />
      </>
    )
  }

  if (archetype === 'Viking') {
    // Vegvisir-style 8-point compass
    const arms = Array.from({ length: 8 }, (_, i) => {
      const rad = (i * 45 * Math.PI) / 180
      const x2 = (100 + Math.cos(rad) * 28).toFixed(1)
      const y2 = (28 + Math.sin(rad) * 22).toFixed(1)
      const isCardinal = i % 2 === 0
      return { x2, y2, isCardinal }
    })
    return (
      <>
        {arms.map(({ x2, y2, isCardinal }, i) => (
          <path
            key={i}
            data-animated="true"
            d={`M 100 28 L ${x2} ${y2}`}
            stroke={s}
            strokeWidth={isCardinal ? '2.2' : '1.2'}
            fill="none"
            opacity={0.88}
          />
        ))}
        <circle cx="100" cy="28" r="6" fill="none" stroke={s} strokeWidth="2" opacity={0.9} />
        <circle cx="100" cy="28" r="2.5" fill={s} opacity={0.95} />
        {/* Rune band below */}
        <text x="54" y="52" fontSize="12" fill={s} opacity={0.75} fontFamily="Georgia, serif" letterSpacing="5">ᚠ ᚢ ᚦ ᚨ ᚱ</text>
      </>
    )
  }

  // Fairy — fairy ring of 7 mushrooms
  const mushrooms = Array.from({ length: 7 }, (_, i) => {
    const angle = ((i * 360) / 7 - 90) * (Math.PI / 180)
    const mx = (100 + Math.cos(angle) * 22).toFixed(1)
    const my = (28 + Math.sin(angle) * 17).toFixed(1)
    return { mx, my }
  })
  return (
    <>
      {mushrooms.map(({ mx, my }, i) => (
        <g key={i} transform={`translate(${mx} ${my})`}>
          {/* Mushroom cap */}
          <path d="M -5 0 C -5 -7 5 -7 5 0 Z" fill={s} opacity={0.8} />
          {/* Stem */}
          <line x1="0" y1="0" x2="0" y2="5" stroke={s} strokeWidth="1.2" opacity={0.75} />
          {/* Cap highlight */}
          <circle cx="0" cy="-3" r="1" fill="white" opacity={0.25} />
        </g>
      ))}
      {/* Center sparkle / will-o-wisp */}
      <path data-animated="true" d="M 100 28 L 100 21 M 100 28 L 100 35 M 100 28 L 93 28 M 100 28 L 107 28 M 100 28 L 95 23 M 100 28 L 105 33 M 100 28 L 95 33 M 100 28 L 105 23" stroke={s} strokeWidth="1.3" opacity={0.95} />
      {/* Floating sparkle dots */}
      <circle cx="76" cy="14" r="1.8" fill={s} opacity={0.7} />
      <circle cx="124" cy="14" r="1.8" fill={s} opacity={0.7} />
      <circle cx="70" cy="36" r="1.4" fill={s} opacity={0.55} />
      <circle cx="130" cy="36" r="1.4" fill={s} opacity={0.55} />
      <circle cx="100" cy="7" r="1.5" fill={s} opacity={0.6} />
    </>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ArchetypeBorder({ archetype, m }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const paths = containerRef.current.querySelectorAll('[data-animated]')
    paths.forEach((el, i) => {
      const path = el as SVGPathElement
      let len = 100
      try {
        const geoEl = path as SVGGeometryElement
        if (typeof geoEl.getTotalLength === 'function') {
          len = geoEl.getTotalLength()
        }
      } catch (_) { /* element does not support getTotalLength */ }
      path.setAttribute('stroke-dasharray', String(len))
      path.setAttribute('stroke-dashoffset', String(len))
      ;path.style.transition = `stroke-dashoffset 0.8s ease ${i * 0.12}s`
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          path.setAttribute('stroke-dashoffset', '0')
        })
      })
    })
  }, [archetype])

  const cornerStyle = (pos: 'tl' | 'tr' | 'bl' | 'br'): CSSProperties => {
    const transforms: Record<string, string> = {
      tl: 'none',
      tr: 'scaleX(-1)',
      bl: 'scaleY(-1)',
      br: 'scale(-1, -1)',
    }
    return {
      position: 'absolute',
      width: 80,
      height: 80,
      transform: transforms[pos],
      ...(pos.startsWith('t') ? { top: 0 } : { bottom: 0 }),
      ...(pos.endsWith('l') ? { left: 0 } : { right: 0 }),
    }
  }

  return (
    <div
      ref={containerRef}
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 10 }}
    >
      {/* Four mirrored corner pieces */}
      {(['tl', 'tr', 'bl', 'br'] as const).map(pos => (
        <svg
          key={pos}
          viewBox="0 0 80 80"
          width={80}
          height={80}
          style={cornerStyle(pos)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <CornerDesign archetype={archetype} m={m} />
        </svg>
      ))}

      {/* Top center ornament */}
      <svg
        viewBox="0 0 200 55"
        width={200}
        height={55}
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <TopOrnamentDesign archetype={archetype} m={m} />
      </svg>
    </div>
  )
}
