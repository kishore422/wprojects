'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { aboutData } from '@/lib/data'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section on scroll
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Stagger animation for content
      if (contentRef.current?.children) {
        gsap.fromTo(contentRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // Parallax effect for image (disabled for now)
      // gsap.to(imageRef.current, {
      //   yPercent: -10,
      //   ease: 'none',
      //   scrollTrigger: {
      //     trigger: sectionRef.current,
      //     start: 'top bottom',
      //     end: 'bottom top',
      //     scrub: true,
      //   },
      // })

      // Animate stats when in view
      const statsTrigger = ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 80%',
        onEnter: () => animateCounters(),
      })

      return () => {
        statsTrigger.kill()
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const animateCounters = () => {
    const duration = 2
    const steps = 60

    const animateCounter = (target: number, setter: (value: number) => void) => {
      let current = 0
      const increment = target / steps
      const interval = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(interval)
        }
        setter(Math.floor(current))
      }, duration * 1000 / steps)
    }

    animateCounter(aboutData.experience, (value) => 
      setCounters(prev => ({ ...prev, experience: value }))
    )
    animateCounter(aboutData.projects, (value) => 
      setCounters(prev => ({ ...prev, projects: value }))
    )
    animateCounter(aboutData.clients, (value) => 
      setCounters(prev => ({ ...prev, clients: value }))
    )
  }

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div 
              ref={imageRef}
              className="relative group"
            >
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl">
                {aboutData.image ? (
                  <img
                    src={aboutData.image}
                    alt={aboutData.name}
                    className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-[600px] bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl font-bold">{aboutData.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <p className="text-xl font-semibold">{aboutData.name}</p>
                    </div>
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl backdrop-blur-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">
                    {counters.experience}+
                  </div>
                  <div className="text-sm text-gray-300">Years</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-80" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-60" />
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="space-y-8">
            {/* Section Title */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
            </div>

            {/* Name and Title */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {aboutData.name}
              </h3>
              <p className="text-xl text-blue-300 font-medium">
                {aboutData.title}
              </p>
            </div>

            {/* Bio */}
            <p className="text-lg text-gray-300 leading-relaxed">
              {aboutData.bio}
            </p>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Skills & Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {aboutData.skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20 hover:bg-white/20 transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div 
              ref={statsRef}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {aboutData.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-300 rounded-full opacity-20 animate-pulse" />
      </div>
    </section>
  )
} 