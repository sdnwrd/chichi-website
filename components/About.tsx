'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from(textRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          x: -40,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        })

        gsap.from(lineRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          scaleX: 0,
          transformOrigin: 'left',
          duration: 0.8,
          delay: 0.3,
          ease: 'power2.out',
        })

        gsap.to(photoRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
          y: 60,
          ease: 'none',
        })
      }, sectionRef)
      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative grain py-24 md:py-36 overflow-hidden bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          <div ref={textRef}>
            <p className="section-eyebrow mb-6">Our Story</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight text-white">
              Where the<br />night begins.
            </h2>
            <div
              ref={lineRef}
              className="w-12 h-px bg-white my-8"
            />
            <p className="text-white/50 text-base leading-relaxed max-w-md">
              ChichiLounge is Fulda&apos;s home for Afrobeats, Hip-Hop, and R&B.
              Every Saturday night, we bring together the music, the people, and the energy that make this city come alive.
            </p>
            <p className="text-white/30 text-sm leading-relaxed max-w-md mt-4">
              From the first beat to last call — this is where memories are made.
            </p>
          </div>

          <div
            ref={photoRef}
            className="relative h-80 md:h-[500px] overflow-hidden order-first md:order-last"
          >
            <Image
              src="/images/dj.jpg"
              alt="ChichiLounge interior"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

        </div>
      </div>
    </section>
  )
}
