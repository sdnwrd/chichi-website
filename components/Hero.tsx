'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { events } from '@/lib/events'

export default function Hero() {
  const headlineRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const pillRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.from(eyebrowRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.6,
        ease: 'power2.out',
      })

      const letters = headlineRef.current?.querySelectorAll('.letter')
      if (letters) {
        tl.from(letters, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          stagger: 0.04,
          ease: 'power3.out',
        }, '-=0.3')
      }

      tl.from([taglineRef.current, pillRef.current, scrollRef.current], {
        opacity: 0,
        y: 12,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      }, '-=0.2')
    })

    return () => ctx.revert()
  }, [])

  const splitLetters = (word: string) =>
    word.split('').map((ch, i) => (
      <span key={i} className="letter inline-block">{ch}</span>
    ))

  return (
    <section className="relative grain h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Video background — fallback to photo if autoplay blocked */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/djwithcrowd.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Fallback image (shown if video fails) */}
      <Image
        src="/images/djwithcrowd.jpg"
        alt="ChichiLounge atmosphere"
        fill
        priority
        className="object-cover object-center -z-10"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      {/* Vignette */}
      <div className="absolute inset-0 z-[2]" style={{
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)'
      }} />

      {/* Content */}
      <div className="relative z-[3] flex flex-col items-center text-center px-6">
        <div ref={eyebrowRef} className="section-eyebrow mb-6 md:mb-8">
          Fulda&apos;s Finest
        </div>

        <div
          ref={headlineRef}
          className="font-black uppercase leading-none tracking-[0.08em] text-white select-none"
          style={{ fontSize: 'clamp(3.5rem, 14vw, 11rem)' }}
          aria-label="ChichiLounge"
        >
          <div>{splitLetters('CHICHI')}</div>
          <div>{splitLetters('LOUNGE')}</div>
        </div>

        <div ref={taglineRef} className="mt-6 md:mt-8 section-eyebrow">
          Afrobeats · Hip-Hop · R&amp;B
        </div>

        <div ref={pillRef} className="mt-6">
          <span className="inline-block border border-white/30 text-white/80 text-xs tracking-[0.2em] uppercase px-5 py-2.5">
            Next Event: {events[0].day} {events[0].dayNumber} {events[0].month}
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2">
        <span className="section-eyebrow text-[0.55rem]">Scroll</span>
        <div className="w-px h-8 bg-white/20 animate-pulse" />
      </div>
    </section>
  )
}
