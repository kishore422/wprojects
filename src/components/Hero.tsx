'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown, Play, ArrowRight } from 'lucide-react'
import { heroData } from '@/lib/data'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      const tl = gsap.timeline({ delay: 0.2 })

      tl.fromTo(titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
      )
      .fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo(descriptionRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      )
      .fromTo(ctaRef.current,
        { y: 15, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' },
        '-=0.2'
      )
      .fromTo(scrollIndicatorRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' },
        '-=0.1'
      )

      // Simple parallax effect for video (disabled for now)
      // if (videoRef.current) {
      //   gsap.to(videoRef.current, {
      //     yPercent: -20,
      //     ease: 'none',
      //     scrollTrigger: {
      //       trigger: heroRef.current,
      //       start: 'top bottom',
      //       end: 'bottom top',
      //       scrub: true,
      //     },
      //   })
      // }

      // Floating animation for scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        y: -10,
        duration: 1.2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.querySelector(heroData.ctaLink)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {heroData.backgroundVideo && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster={heroData.backgroundImage}
          >
            <source src={heroData.backgroundVideo} type="video/mp4" />
          </video>
        )}
        
        {/* Fallback Background */}
        {!heroData.backgroundVideo && (
          <div 
            className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-black"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)`
            }}
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-10xl font-bold text-white mb-6 font-display leading-none"
        >
          {heroData.title.split('\n').map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl text-blue-300 mb-6 font-light"
        >
          {heroData.subtitle}
        </p>

        {/* Description */}
        <p 
          ref={descriptionRef}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {heroData.description}
        </p>

        {/* CTA Button */}
        <a
          ref={ctaRef}
          href={heroData.ctaLink}
          onClick={handleCTAClick}
          className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <span>{heroData.ctaText}</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
        </a>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-300 rounded-full opacity-30 animate-pulse" />
      </div>

      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown size={24} className="animate-bounce" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
} 