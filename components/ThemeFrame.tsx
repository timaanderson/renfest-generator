'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export type ThemeFrameTheme =
  | 'knight' | 'viking' | 'pirate' | 'fairy'
  | 'royal'  | 'bard'   | 'wizard' | 'rogue'

interface ThemeFrameProps {
  theme: ThemeFrameTheme
  onAnimationComplete?: () => void
}

// Content pane edges — persona page uses max-w-lg (512px) centered
const CL = 'calc(50vw - 256px)'   // left edge of content
const CR = 'calc(50vw + 256px)'   // right edge of content

/* ─── Royal ───────────────────────────────────────────────────────────────── */
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

/* ─── Knight ──────────────────────────────────────────────────────────────── */
// 55% content height · center of sword on content edge · vertically centered
function KnightElements() {
  const wrap: React.CSSProperties = {
    width: 'clamp(50px, 7vw, 110px)',
    height: 'clamp(250px, 55vh, 480px)',
    overflow: 'visible',
  }
  return <>
    <div style={{ position:'absolute', left:CL, top:'50%',
                  transform:'translate(-50%, -50%)', ...wrap }}>
      <div data-frame="sword-left" style={{ position:'absolute', inset:0 }}>
        <Image src="/borders/sword_left.png" alt="" fill
          style={{ objectFit:'contain' }} />
      </div>
      <div data-frame="blade-left"
        style={{ position:'absolute', inset:0, clipPath:'inset(100% 0 0 0)' }}>
        <Image src="/borders/knight_blade.png" alt="" fill
          style={{ objectFit:'contain' }} />
      </div>
    </div>
    <div style={{ position:'absolute', left:CR, top:'50%',
                  transform:'translate(-50%, -50%)', ...wrap }}>
      <div data-frame="sword-right" style={{ position:'absolute', inset:0 }}>
        <Image src="/borders/sword_right.png" alt="" fill
          style={{ objectFit:'contain' }} />
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

/* ─── Viking ──────────────────────────────────────────────────────────────── */
// 80% height · bottom-anchored · 15% onto content (ratio 580×2160 ≈ 0.27:1)
function VikingElements() {
  const wrap: React.CSSProperties = {
    width: 'clamp(80px, 13vw, 200px)',
    height: 'clamp(300px, 75vh, 650px)',
  }
  return <>
    {/* left rune: 15% onto content */}
    <div style={{ position:'absolute', left:CL, bottom:0,
                  transform:'translateX(-85%)', ...wrap }}>
      <div data-frame="rune-left" style={{ position:'absolute', inset:0 }}>
        <Image src="/borders/viking_left.png" alt="" fill
          style={{ objectFit:'contain', objectPosition:'bottom center' }} />
      </div>
    </div>
    {/* right rune: 15% onto content */}
    <div style={{ position:'absolute', left:CR, bottom:0,
                  transform:'translateX(-15%)', ...wrap }}>
      <div data-frame="rune-right" style={{ position:'absolute', inset:0 }}>
        <Image src="/borders/viking_right.png" alt="" fill
          style={{ objectFit:'contain', objectPosition:'bottom center' }} />
      </div>
    </div>
  </>
}
function animateViking(tl: gsap.core.Timeline, el: HTMLElement, dur: number) {
  const l = el.querySelector<HTMLElement>('[data-frame="rune-left"]')
  const r = el.querySelector<HTMLElement>('[data-frame="rune-right"]')
  gsap.set([l, r], { y: '110vh' })
  tl.to([l, r], { y:0, duration:dur*1.0, ease:'back.out(2.2)', stagger:0.1 })
}

/* ─── Pirate ──────────────────────────────────────────────────────────────── */
// Full height · center of rope PNG on content edge · drops and sways
function PirateElements() {
  const wrap: React.CSSProperties = {
    width: 'clamp(20px, 3vw, 45px)',
    height: '100vh',
  }
  return <>
    <div style={{ position:'absolute', left:CL, top:0,
                  transform:'translateX(-50%)', ...wrap }}>
      <div data-frame="rope-left" style={{ position:'absolute', inset:0 }}>
        <Image src="/borders/rope_left.png" alt="" fill
          style={{ objectFit:'contain', objectPosition:'top center' }} />
      </div>
    </div>
    <div style={{ position:'absolute', left:CR, top:0,
                  transform:'translateX(-50%)', ...wrap }}>
      <div data-frame="rope-right" style={{ position:'absolute', inset:0 }}>
        <Image src="/borders/rope_right.png" alt="" fill
          style={{ objectFit:'contain', objectPosition:'top center' }} />
      </div>
    </div>
  </>
}
function animatePirate(tl: gsap.core.Timeline, el: HTMLElement, dur: number) {
  const l = el.querySelector<HTMLElement>('[data-frame="rope-left"]')
  const r = el.querySelector<HTMLElement>('[data-frame="rope-right"]')
  gsap.set([l, r], { y: '-110vh' })
  tl.to(l, { y:0, duration:dur*0.7, ease:'bounce.out' })
    .to(r, { y:0, duration:dur*0.7, ease:'bounce.out' }, `-=${dur*0.5}`)
  if (dur > 0) {
    tl.to(l, { rotation: 1.5,  transformOrigin:'top center', duration:2.2,
               ease:'sine.inOut', repeat:-1, yoyo:true }, '+=0.4')
    tl.to(r, { rotation:-1.5,  transformOrigin:'top center', duration:2.5,
               ease:'sine.inOut', repeat:-1, yoyo:true }, `-=${2.0}`)
  }
}

/* ─── Fairy ───────────────────────────────────────────────────────────────── */
// Full height · center on edge · light-blue glow travels bottom→top
// Vine ratio 189×1230 ≈ 0.154:1
function FairyElements() {
  const wrap: React.CSSProperties = {
    width: 'clamp(80px, 10vw, 150px)',
    height: '100vh',
    overflow: 'visible',
  }
  return <>
    <div style={{ position:'absolute', left:CL, top:0,
                  transform:'translateX(-50%)', ...wrap }}>
      <div data-frame="vine-left" style={{ position:'absolute', inset:0, opacity:0 }}>
        <Image src="/borders/fairy_left.png" alt="" fill
          style={{ objectFit:'fill' }} />
      </div>
      {/* travelling glow — GSAP controls top + opacity */}
      <div data-frame="glow-left" style={{
        position:'absolute', left:'50%', transform:'translateX(-50%)',
        width:'100%', height:'28vh', opacity:0,
        background:'linear-gradient(to top, transparent 0%, rgba(147,210,255,0.55) 50%, transparent 100%)',
        filter:'blur(10px)',
      }} />
    </div>
    <div style={{ position:'absolute', left:CR, top:0,
                  transform:'translateX(-50%)', ...wrap }}>
      <div data-frame="vine-right" style={{ position:'absolute', inset:0, opacity:0 }}>
        <Image src="/borders/fairy_right.png" alt="" fill
          style={{ objectFit:'fill' }} />
      </div>
      <div data-frame="glow-right" style={{
        position:'absolute', left:'50%', transform:'translateX(-50%)',
        width:'100%', height:'28vh', opacity:0,
        background:'linear-gradient(to top, transparent 0%, rgba(147,210,255,0.55) 50%, transparent 100%)',
        filter:'blur(10px)',
      }} />
    </div>
  </>
}
function animateFairy(tl: gsap.core.Timeline, el: HTMLElement, dur: number) {
  const vl = el.querySelector<HTMLElement>('[data-frame="vine-left"]')
  const vr = el.querySelector<HTMLElement>('[data-frame="vine-right"]')
  const gl = el.querySelector<HTMLElement>('[data-frame="glow-left"]')
  const gr = el.querySelector<HTMLElement>('[data-frame="glow-right"]')
  gsap.set([vl, vr], { scaleY: 0, transformOrigin: 'bottom center', opacity: 0 })
  gsap.set([gl, gr], { top: '100vh', opacity: 0 })
  tl.to([vl, vr], { scaleY:1, opacity:1, duration:dur*1.2,
                    ease:'power2.out', stagger:0.15 })
    .to(gl, { opacity:1, duration:0.5 }, '+=0.3')
    .to(gr, { opacity:1, duration:0.5 }, '<')
  if (dur > 0) {
    const delay = dur * 1.2 + 0.8
    gsap.fromTo(gl, { top:'100vh' },
      { top:'-28vh', duration:3.5, ease:'sine.inOut', repeat:-1, repeatDelay:0.7, delay })
    gsap.fromTo(gr, { top:'100vh' },
      { top:'-28vh', duration:3.5, ease:'sine.inOut', repeat:-1, repeatDelay:0.7, delay: delay + 1.5 })
  }
}

/* ─── Bard ────────────────────────────────────────────────────────────────── */
// Quill (left): center on edge · 35% height · bottom-anchored  (182×1192, r≈0.153)
// Lute (right): 30% onto content · 60% height · bottom-anchored (369×1288, r≈0.286)
function BardElements() {
  return <>
    {/* Quill — left · center on content edge · bottom-anchored */}
    <div style={{
      position:'absolute', left:CL, bottom:0,
      transform:'translateX(-50%)',
      width:'clamp(35px, 4vw, 70px)', height:'clamp(120px, 32vh, 280px)',
      overflow:'visible',
    }}>
      <div data-frame="quill" style={{ position:'absolute', inset:0, opacity:0 }}>
        <Image src="/borders/quill.png" alt="" fill
          style={{ objectFit:'contain', objectPosition:'bottom center' }} />
      </div>
    </div>
    {/* Lute — right · 30% onto content · bottom-anchored */}
    <div style={{
      position:'absolute', left:CR, bottom:0,
      transform:'translateX(-30%)',
      width:'clamp(80px, 10vw, 150px)', height:'clamp(200px, 55vh, 480px)',
      overflow:'visible',
    }}>
      <div data-frame="lute" style={{ position:'absolute', inset:0, opacity:0 }}>
        <Image src="/borders/lute.png" alt="" fill
          style={{ objectFit:'contain', objectPosition:'bottom center' }} />
      </div>
    </div>
  </>
}
function animateBard(tl: gsap.core.Timeline, el: HTMLElement, dur: number) {
  const quill = el.querySelector<HTMLElement>('[data-frame="quill"]')
  const lute  = el.querySelector<HTMLElement>('[data-frame="lute"]')
  gsap.set([quill, lute], { y: 60, opacity: 0 })
  tl.to(quill, { y:0, opacity:1, duration:dur*0.8, ease:'back.out(1.4)' })
    .to(lute,  { y:0, opacity:1, duration:dur*0.9, ease:'back.out(1.3)' }, `-=${dur*0.5}`)
}

/* ─── Wizard ──────────────────────────────────────────────────────────────── */
// Staffs: 80% height · vertically centered · center on edge
// Left: blue animated sparkles at top
// Right: purple lightning zaps at top
// Staff ratios: left 146×1265 ≈ 0.115, right 156×1304 ≈ 0.120
function WizardElements() {
  const wrap: React.CSSProperties = {
    width: 'clamp(40px, 6vw, 90px)',
    height: 'clamp(300px, 75vh, 650px)',
    overflow: 'visible',
  }
  return <>
    {/* Left staff */}
    <div style={{ position:'absolute', left:CL, top:'50%',
                  transform:'translate(-50%, -50%)', ...wrap }}>
      <div data-frame="staff-left" style={{ position:'absolute', inset:0, opacity:0 }}>
        <Image src="/borders/wizard_left.png" alt="" fill
          style={{ objectFit:'contain' }} />
      </div>
      {/* Blue sparkles above the staff top */}
      <svg data-frame="sparkles" viewBox="-30 -30 60 30"
        style={{ position:'absolute', top:0, left:'50%',
                 transform:'translate(-50%, -100%)',
                 width:'70px', height:'60px', overflow:'visible', opacity:0 }}>
        <circle data-frame="spark-0" cx="0"   cy="-8"  r="3"   fill="#60a5fa" opacity="0" />
        <circle data-frame="spark-1" cx="14"  cy="-16" r="2"   fill="#93c5fd" opacity="0" />
        <circle data-frame="spark-2" cx="-12" cy="-12" r="2.5" fill="#3b82f6" opacity="0" />
        <circle data-frame="spark-3" cx="6"   cy="-22" r="1.5" fill="#bfdbfe" opacity="0" />
        <circle data-frame="spark-4" cx="-18" cy="-20" r="2"   fill="#60a5fa" opacity="0" />
      </svg>
    </div>
    {/* Right staff */}
    <div style={{ position:'absolute', left:CR, top:'50%',
                  transform:'translate(-50%, -50%)', ...wrap }}>
      <div data-frame="staff-right" style={{ position:'absolute', inset:0, opacity:0 }}>
        <Image src="/borders/wizard_right.png" alt="" fill
          style={{ objectFit:'contain' }} />
      </div>
      {/* Purple lightning zaps above the staff top */}
      <svg data-frame="lightning" viewBox="-25 -45 50 50"
        style={{ position:'absolute', top:0, left:'50%',
                 transform:'translate(-50%, -100%)',
                 width:'50px', height:'70px', overflow:'visible', opacity:0 }}>
        <polyline data-frame="bolt-main"
          points="0,-40 10,-24 -7,-17 13,0 0,16"
          stroke="#a855f7" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0" />
        <polyline data-frame="bolt-branch"
          points="10,-24 24,-13"
          stroke="#7c3aed" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0" />
      </svg>
    </div>
  </>
}
function animateWizard(tl: gsap.core.Timeline, el: HTMLElement, dur: number) {
  const staffL      = el.querySelector<HTMLElement>('[data-frame="staff-left"]')
  const staffR      = el.querySelector<HTMLElement>('[data-frame="staff-right"]')
  const sparkleSvg  = el.querySelector<SVGElement>('[data-frame="sparkles"]')
  const lightningSvg= el.querySelector<SVGElement>('[data-frame="lightning"]')
  const sparks      = Array.from(el.querySelectorAll<SVGCircleElement>('[data-frame^="spark-"]'))
  const bolts       = Array.from(el.querySelectorAll<SVGPolylineElement>('[data-frame^="bolt-"]'))
  gsap.set([staffL, staffR], { opacity: 0 })
  tl.to([staffL, staffR], { opacity:1, duration:dur*0.8, ease:'power2.out', stagger:0.1 })
    .to(sparkleSvg,   { opacity:1, duration:0.4 }, '+=0.2')
    .to(lightningSvg, { opacity:1, duration:0.4 }, '<')
  if (dur > 0) {
    // Continuous blue sparkles — each floats up and fades
    sparks.forEach((spark, i) => {
      const half = (0.75 + i * 0.15) / 2
      const loop = gsap.timeline({ repeat:-1, repeatDelay: 0.5 + i * 0.12, delay: i * 0.2 })
      loop.fromTo(spark, { y:0, opacity:0 },
                         { y:-(14 + i * 5), opacity:0.9, duration:half, ease:'power1.out' })
          .to(spark, { opacity:0, duration:half, ease:'power1.in' })
    })
    // Purple lightning — quick flash-flash effect
    const flashTl = gsap.timeline({ repeat:-1, repeatDelay:1.6 })
    flashTl.to(bolts, { opacity:1, duration:0.05, ease:'none' })
           .to(bolts, { opacity:0, duration:0.12 })
           .to(bolts, { opacity:0.8, duration:0.06 })
           .to(bolts, { opacity:0, duration:0.2 })
  }
}

/* ─── Rogue ───────────────────────────────────────────────────────────────── */
// Left dagger (229×1308, r≈0.175): center on edge · vertically centered · 40% height
// Right bow+quiver (428×1295, r≈0.331): bottom-anchored · 15% onto content
function RogueElements() {
  return <>
    {/* Dagger — left · center on content edge · vertically centered */}
    <div style={{
      position:'absolute', left:CL, top:'50%',
      transform:'translate(-50%, -50%)',
      width:'clamp(35px, 5vw, 80px)', height:'clamp(150px, 38vh, 330px)',
      overflow:'visible',
    }}>
      <div data-frame="dagger" style={{ position:'absolute', inset:0, opacity:0 }}>
        <Image src="/borders/rogue_left.png" alt="" fill
          style={{ objectFit:'contain' }} />
      </div>
    </div>
    {/* Bow & quiver — right · 15% onto content · bottom-anchored */}
    <div style={{
      position:'absolute', left:CR, bottom:0,
      transform:'translateX(-15%)',
      width:'clamp(80px, 11vw, 165px)', height:'clamp(200px, 50vh, 430px)',
      overflow:'visible',
    }}>
      <div data-frame="bow" style={{ position:'absolute', inset:0, opacity:0 }}>
        <Image src="/borders/rogue_right.png" alt="" fill
          style={{ objectFit:'contain', objectPosition:'bottom center' }} />
      </div>
    </div>
  </>
}
function animateRogue(tl: gsap.core.Timeline, el: HTMLElement, dur: number) {
  const dagger = el.querySelector<HTMLElement>('[data-frame="dagger"]')
  const bow    = el.querySelector<HTMLElement>('[data-frame="bow"]')
  gsap.set([dagger, bow], { opacity: 0 })
  tl.to(dagger, { opacity:1, duration:dur*0.6, ease:'power1.out' })
    .to(bow,    { opacity:1, duration:dur*0.6, ease:'power1.out' }, `-=${dur*0.3}`)
}

/* ─── Main component ──────────────────────────────────────────────────────── */
export default function ThemeFrame({ theme, onAnimationComplete }: ThemeFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const tlRef        = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    tlRef.current?.kill()
    const rafId = requestAnimationFrame(() => {
      if (!containerRef.current) return
      const tl  = gsap.timeline({ onComplete: onAnimationComplete })
      tlRef.current = tl
      const dur = prefersReduced ? 0 : 1
      const el  = containerRef.current
      if (theme === 'royal')  animateRoyal(tl, el, dur)
      if (theme === 'viking') animateViking(tl, el, dur)
      if (theme === 'pirate') animatePirate(tl, el, dur)
      if (theme === 'fairy')  animateFairy(tl, el, dur)
      if (theme === 'knight') animateKnight(tl, el, dur)
      if (theme === 'bard')   animateBard(tl, el, dur)
      if (theme === 'wizard') animateWizard(tl, el, dur)
      if (theme === 'rogue')  animateRogue(tl, el, dur)
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
      {theme === 'wizard' && <WizardElements />}
      {theme === 'rogue'  && <RogueElements />}
    </div>
  )
}
