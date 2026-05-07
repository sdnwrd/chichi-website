'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from(contentRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power2.out',
        })
      }, sectionRef)
      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [])

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="relative grain bg-[#020202] py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={contentRef}>
          <div
            className="font-black uppercase text-white/5 leading-none tracking-[0.06em] select-none mb-16 md:mb-20"
            style={{ fontSize: 'clamp(3rem, 12vw, 9rem)' }}
          >
            Chichi<br />Lounge
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16">
            <div>
              <p className="section-eyebrow mb-4">Find Us</p>
              <p className="text-white text-sm font-semibold tracking-wide">ChichiLounge</p>
              <p className="text-white/40 text-sm leading-relaxed mt-1">
                Fulda, Germany<br />
                Löherstrasse 39-31
              </p>
            </div>

            <div>
              <p className="section-eyebrow mb-4">Follow</p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/chichilounge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs tracking-[0.15em] uppercase text-white/50 border border-white/10 px-4 py-2 hover:border-white/30 hover:text-white transition-all duration-300 w-fit"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@chichilounge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs tracking-[0.15em] uppercase text-white/50 border border-white/10 px-4 py-2 hover:border-white/30 hover:text-white transition-all duration-300 w-fit"
                >
                  TikTok
                </a>
              </div>
            </div>

            <div>
              <p className="section-eyebrow mb-4">Contact</p>
              <a
                href="mailto:info@chichilounge.de"
                className="text-white/40 text-sm hover:text-white transition-colors duration-300"
              >
                IG: @chichilounge
              </a>
            </div>
          </div>

          <div className="mt-16 md:mt-20 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between gap-2 text-[0.65rem] tracking-[0.15em] text-white/15 uppercase">
            <span>© {new Date().getFullYear()} ChichiLounge by Yasin Coolak</span>
            <span>Fulda · Germany</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
