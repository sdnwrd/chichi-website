'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { events } from '@/lib/events'

gsap.registerPlugin(ScrollTrigger)

export default function Events() {
  const sectionRef = useRef<HTMLElement>(null)
  const rowsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const rows = rowsRef.current?.querySelectorAll('.event-row')
        if (!rows) return

        gsap.from(rows, {
          scrollTrigger: {
            trigger: rowsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
        })
      }, sectionRef)
      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative grain py-24 md:py-36 overflow-hidden"
      style={{
        background: '#050505',
        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,0.012) 80px, rgba(255,255,255,0.012) 81px)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="section-eyebrow mb-10 md:mb-14">Upcoming Events</p>

        <div ref={rowsRef} className="flex flex-col gap-px">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`event-row group flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 md:px-6 py-5 md:py-6 border transition-colors duration-300 ${
                index === 0
                  ? 'border-white/15 bg-white/[0.04] hover:bg-white/[0.07]'
                  : 'border-white/5 bg-transparent hover:bg-white/[0.03]'
              }`}
            >
              <div className="flex items-center gap-5 md:gap-8">
                <div className="text-center min-w-[2.5rem] shrink-0">
                  <div className={`text-3xl font-black leading-none ${index === 0 ? 'text-white' : 'text-white/40'}`}>
                    {event.dayNumber}
                  </div>
                  <div className="text-[0.6rem] tracking-[0.2em] text-white/25 mt-1">
                    {event.month}
                  </div>
                </div>

                <div className="w-px h-10 bg-white/10 shrink-0" />

                <div>
                  <div className={`text-sm md:text-base font-bold tracking-[0.1em] uppercase ${index === 0 ? 'text-white' : 'text-white/40'}`}>
                    {event.name}
                  </div>
                  <div className="text-xs text-white/25 tracking-[0.08em] mt-1">
                    {event.dj} · {event.genre}
                  </div>
                </div>
              </div>

              <a
                href={event.rsvpUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`RSVP for ${event.name}`}
                className={`shrink-0 text-xs tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                  index === 0
                    ? 'border-white/30 text-white hover:bg-white hover:text-black'
                    : 'border-white/10 text-white/30 hover:border-white/25 hover:text-white/60'
                }`}
              >
                RSVP →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
