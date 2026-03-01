'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export type ThemeFrameTheme = 'knight' | 'viking' | 'pirate' | 'fairy' | 'royal' | 'bard'

interface ThemeFrameProps {
  theme: ThemeFrameTheme
  onAnimationComplete?: () => void
}

const SIDE_W   = 'clamp(50px, 8vw, 130px)'
const WIDE_W   = 'clamp(80px, 12vw, 180px)'
const TALL_H   = 'clamp(200px, 65vh, 550px)'
const FULL_H   = '100vh'
const ROPE_W   = 'clamp(20px, 3vw, 45px)'
const ROPE_OFF = 'clamp(20px, 3vw, 50px)'

/* ─── Royal ──────────────────────────────────────────── */
function RoyalElements() {
  return <>
    <div data-frame="curtain-left"
      style={{ position:'absolute', top:0,
               left:'calc(-1 * clamp(60px, 10vw, 120px))',
               height:'110vh' }}>
      <Image src="/themes/royal/curtain_left.png" alt=""
        width={743} height={1024}
        style={{ height:'110vh', width:'auto', display:'block' }} />
    </div>
    <div data-frame="curtain-right"
      style={{ position:'absolute', top:0,
               right:'calc(-1 * clamp(60px, 10vw, 120px))',
               height:'110vh' }}>
      <Image src="/themes/royal/curtain_right.png" alt=""
        width={743} height={1024}
        style={{ height:'110vh', width:'auto', display:'block' }} />
    </div>
  </>
}
function animateRoyal(tl: gsap.core.Timeline, el: HTMLElement, dur: number) {
  const l = el.querySelector<HTMLElement>('[data-frame="curtain-left"]')
  const r = el.querySelector<HTMLElement>('[data-frame="curtain-right"]')
  gsap.set([l, r], { scaleY: 0, transformOrigin: '50% 0%' })
  tl.to(l, { scaleY:1, duration:dur, ease:'back.out(1.3)' })
    .to(r, { scaleY:1, duration:dur, ease:'back.out(1.3)' }, `-=${dur * 0.91}`)
}

/* ─── Viking ──────────────────────────────────────────── */
function VikingElements() {
  return <>
    <div data-frame="left"
      style={{ position:'absolute', left:0, top:'50%', transform:'translateY(-50%)',
               width:SIDE_W, height:TALL_H }}>
      <Image src="/borders/viking_left.png" alt="" fill style={{ objectFit:'contain' }} />
    </div>
    <div data-frame="right"
      style={{ position:'absolute', right:0, top:'50%', transform:'translateY(-50%)',
               width:SIDE_W, height:TALL_H }}>
      <Image src="/borders/viking_right.png" alt="" fill style={{ objectFit:'contain' }} />
    </div>
  </>
}
function animateViking(tl: gsap.core.Timeline, el: HTMLElement, dur: number) {
  const l = el.querySelector<HTMLElement>('[data-frame="left"]')
  const r = el.querySelector<HTMLElement>('[data-frame="right"]')
  gsap.set([l, r], { y: '110vh' })
  tl.to([l, r], { y:0, duration:dur*1.0, ease:'back.out(2.2)', stagger:0.1 })
}

/* ─── Pirate ──────────────────────────────────────────── */
function PirateElements() {
  return <>
    <div data-frame="left"
      style={{ position:'absolute', left:ROPE_OFF, top:0, width:ROPE_W, height:FULL_H }}>
      <Image src="/borders/rope_left.png" alt="" fill
        style={{ objectFit:'contain', objectPosition:'top center' }} />
    </div>
    <div data-frame="right"
      style={{ position:'absolute', right:ROPE_OFF, top:0, width:ROPE_W, height:FULL_H }}>
      <Image src="/borders/rope_right.png" alt="" fill
        style={{ objectFit:'contain', objectPosition:'top center' }} />
    </div>
  </>
}
function animatePirate(tl: gsap.core.Timeline, el: HTMLElement, dur: number) {
  const l = el.querySelector<HTMLElement>('[data-frame="left"]')
  const r = el.querySelector<HTMLElement>('[data-frame="right"]')
  gsap.set([l, r], { y: '-110vh' })
  tl.to(l, { y:0, duration:dur*0.7, ease:'bounce.out' })
    .to(r, { y:0, duration:dur*0.7, ease:'bounce.out' }, `-=${dur*0.5}`)
  if (dur > 0) {
    tl.to(l, { rotation:1.5,  transformOrigin:'top center', duration:2.2,
               ease:'sine.inOut', repeat:-1, yoyo:true }, '+=0.4')
    tl.to(r, { rotation:-1.5, transformOrigin:'top center', duration:2.5,
               ease:'sine.inOut', repeat:-1, yoyo:true }, `-=${2.0}`)
  }
}

/* ─── Fairy ───────────────────────────────────────────── */
function FairyElements() {
  return <>
    <div data-frame="left"
      style={{ position:'absolute', left:0, bottom:0, width:SIDE_W, height:TALL_H,
               transformOrigin:'bottom center' }}>
      <Image src="/borders/fairy_left.png" alt="" fill
        style={{ objectFit:'contain', objectPosition:'bottom center' }} />
    </div>
    <div data-frame="right"
      style={{ position:'absolute', right:0, bottom:0, width:SIDE_W, height:TALL_H,
               transformOrigin:'bottom center' }}>
      <Image src="/borders/fairy_right.png" alt="" fill
        style={{ objectFit:'contain', objectPosition:'bottom center' }} />
    </div>
  </>
}
function animateFairy(tl: gsap.core.Timeline, el: HTMLElement, dur: number) {
  const l = el.querySelector<HTMLElement>('[data-frame="left"]')
  const r = el.querySelector<HTMLElement>('[data-frame="right"]')
  gsap.set([l, r], { scaleY: 0 })
  tl.to([l, r], { scaleY:1, duration:dur*1.2, ease:'power2.out', stagger:0.15 })
}

/* ─── Knight ──────────────────────────────────────────── */
function KnightElements() {
  const wrap: React.CSSProperties = {
    width: 'clamp(50px,7vw,110px)',
    height: 'clamp(250px,55vh,500px)',
  }
  return <>
    <div style={{ position:'absolute', left:0, top:'8%', ...wrap }}>
      <div data-frame="sword-left" style={{ position:'absolute', inset:0 }}>
        <Image src="/borders/sword_left.png" alt="" fill style={{ objectFit:'contain' }} />
      </div>
      <div data-frame="blade-left"
        style={{ position:'absolute', inset:0, clipPath:'inset(100% 0 0 0)' }}>
        <Image src="/borders/knight_blade.png" alt="" fill style={{ objectFit:'contain' }} />
      </div>
    </div>
    <div style={{ position:'absolute', right:0, top:'8%', ...wrap }}>
      <div data-frame="sword-right" style={{ position:'absolute', inset:0 }}>
        <Image src="/borders/sword_right.png" alt="" fill style={{ objectFit:'contain' }} />
      </div>
      <div data-frame="blade-right"
        style={{ position:'absolute', inset:0, clipPath:'inset(100% 0 0 0)' }}>
        <Image src="/borders/knight_blade.png" alt="" fill
          style={{ objectFit:'contain', transform:'scaleX(-1)' }} />
      </div>
    </div>
  </>
}
function animateKnight(tl: gsap.core.Timeline, el: HTMLElement, dur: number) {
  const bl = el.querySelector<HTMLElement>('[data-frame="blade-left"]')
  const br = el.querySelector<HTMLElement>('[data-frame="blade-right"]')
  tl.to([bl, br], { clipPath:'inset(70% 0 0 0)', duration:dur*0.8,
                    ease:'power2.out', stagger:0.1 })
    .to([bl, br], { opacity:0.6, duration:0.08, repeat:1, yoyo:true, stagger:0.05 })
}

/* ─── Bard (inline SVG — no image assets) ─────────────── */
function BardElements() {
  return <>
    <svg data-frame="staff-left"
      style={{ position:'absolute', left:0, top:'15%',
               width:'clamp(40px,7vw,90px)', height:'clamp(150px,50vh,400px)', opacity:0 }}
      viewBox="0 0 60 300" fill="none">
      {[60,90,120,150,180].map((y,i) => (
        <line key={i} x1="8" y1={y} x2="52" y2={y} stroke="#c9a227" strokeWidth="1.5" />
      ))}
      <text x="10" y="55" fontSize="22" fill="#c9a227">𝄞</text>
      <text data-frame="note-0" x="14" y="88"  fontSize="16" fill="#e8c84a">♩</text>
      <text data-frame="note-1" x="30" y="128" fontSize="14" fill="#e8c84a">♪</text>
      <text data-frame="note-2" x="18" y="168" fontSize="18" fill="#e8c84a">♫</text>
    </svg>
    <svg data-frame="scroll-right"
      style={{ position:'absolute', right:0, top:'10%',
               width:'clamp(30px,5vw,70px)', height:'clamp(200px,60vh,450px)',
               opacity:0, transformOrigin:'top center' }}
      viewBox="0 0 50 300" fill="none">
      <rect x="6" y="10" width="38" height="280" rx="8"
        fill="#2a1f0e" stroke="#c9a227" strokeWidth="1.5" />
      <ellipse cx="25" cy="10"  rx="19" ry="8" fill="#3a2c12" stroke="#c9a227" strokeWidth="1.5" />
      <ellipse cx="25" cy="290" rx="19" ry="8" fill="#3a2c12" stroke="#c9a227" strokeWidth="1.5" />
      {[50,80,110,140,170,200,230].map((y,i) => (
        <line key={i} x1="12" y1={y} x2="38" y2={y}
          stroke="#c9a227" strokeWidth="0.8" strokeDasharray="3,4" />
      ))}
    </svg>
  </>
}
function animateBard(tl: gsap.core.Timeline, el: HTMLElement, dur: number) {
  const staff  = el.querySelector<HTMLElement>('[data-frame="staff-left"]')
  const scroll = el.querySelector<HTMLElement>('[data-frame="scroll-right"]')
  const notes  = Array.from(el.querySelectorAll<HTMLElement>('[data-frame^="note-"]'))
  gsap.set(staff,  { x: '-60px', opacity: 0 })
  gsap.set(scroll, { scaleY: 0,  opacity: 0 })
  gsap.set(notes,  { y: 0,       opacity: 0 })
  tl.to(staff,  { x:0, opacity:1, duration:dur*0.7, ease:'back.out(1.4)' })
    .to(scroll, { scaleY:1, opacity:1, duration:dur*0.9, ease:'back.out(1.2)' }, `-=${dur*0.4}`)
  if (dur > 0) {
    notes.forEach((note, i) => {
      tl.to(note, { y:-40, opacity:1, duration:0.5, ease:'power1.out' }, `+=${i*0.25}`)
        .to(note, { opacity:0, duration:0.35, ease:'power1.in' }, '+=0.15')
    })
  }
}

/* ─── Main component ──────────────────────────────────── */
export default function ThemeFrame({ theme, onAnimationComplete }: ThemeFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    tlRef.current?.kill()
    const rafId = requestAnimationFrame(() => {
      if (!containerRef.current) return
      const tl = gsap.timeline({ onComplete: onAnimationComplete })
      tlRef.current = tl
      const dur = prefersReduced ? 0 : 1
      const el = containerRef.current
      if (theme === 'royal')  animateRoyal(tl, el, dur)
      if (theme === 'viking') animateViking(tl, el, dur)
      if (theme === 'pirate') animatePirate(tl, el, dur)
      if (theme === 'fairy')  animateFairy(tl, el, dur)
      if (theme === 'knight') animateKnight(tl, el, dur)
      if (theme === 'bard')   animateBard(tl, el, dur)
    })
    return () => { cancelAnimationFrame(rafId); tlRef.current?.kill() }
  }, [theme, onAnimationComplete])

  return (
    <div ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 50 }} aria-hidden="true">
      {theme === 'royal'  && <RoyalElements />}
      {theme === 'viking' && <VikingElements />}
      {theme === 'pirate' && <PirateElements />}
      {theme === 'fairy'  && <FairyElements />}
      {theme === 'knight' && <KnightElements />}
      {theme === 'bard'   && <BardElements />}
    </div>
  )
}
