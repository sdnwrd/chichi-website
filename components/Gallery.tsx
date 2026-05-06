'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PHOTOS = [
  { src: '/images/crowd.jpg', alt: 'The crowd' },
  { src: '/images/djwithcrowd.jpg', alt: 'DJ with crowd' },
  { src: '/images/dj.jpg', alt: 'DJ booth' },
  { src: '/images/crowd2.jpg', alt: 'Night vibes' },
  { src: '/images/girlholdingcup.jpg', alt: 'Club energy' },
  { src: '/images/eventflyer.jpg', alt: 'Event flyer' },
]

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const items = gridRef.current?.querySelectorAll('.gallery-item')
        if (!items) return

        gsap.from(items, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        })
      }, sectionRef)
      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative grain py-24 md:py-36 bg-[#080808] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="section-eyebrow mb-10 md:mb-14">The Vibe</p>

        {/* Desktop: masonry-style grid */}
        <div
          ref={gridRef}
          className="hidden md:grid gap-3 h-[500px]"
          style={{ gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '1fr 1fr' }}
        >
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              className={`gallery-item relative overflow-hidden ${i === 0 ? 'row-span-2' : ''}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 33vw, 400px"
              />
              <motion.div
                className="absolute inset-0"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile: 2-column grid */}
        <div className="grid md:hidden grid-cols-2 gap-2">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`gallery-item relative overflow-hidden h-40 ${i === 0 ? 'col-span-2 h-56' : ''}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>

        <div className="mt-6 text-right">
          <a
            href="https://www.instagram.com/chichilounge/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.2em] text-white/30 hover:text-white/60 transition-colors duration-300 uppercase"
          >
            @chichilounge on Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}
