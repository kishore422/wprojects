'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    // Fallback timeout to ensure preloader doesn't get stuck
    const timeout = setTimeout(() => {
      setProgress(100)
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    // Hide preloader when progress reaches 100%
    if (progress >= 100) {
      const tl = gsap.timeline()
      
      tl.to('.preloader-content', {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.inOut',
      })
      .to('.preloader', {
        y: '-100%',
        duration: 1,
        ease: 'power3.inOut',
        delay: 0.2,
      }, '-=0.5')
      .call(() => {
        setIsVisible(false)
      })
    }
  }, [progress])

  if (!isVisible) return null

  return (
    <div className="preloader fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="preloader-content text-center">
        {/* Animated Logo */}
        <div className="mb-8">
          <div className="loading-logo mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 font-display">
            Creative Studio
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Loading Experience
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-80 mx-auto mb-6">
          <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Percentage */}
        <div className="text-2xl md:text-3xl font-bold text-white">
          {Math.round(progress)}%
        </div>

        {/* Loading Text */}
        <div className="mt-4 text-sm text-gray-500">
          {progress < 30 && 'Initializing...'}
          {progress >= 30 && progress < 60 && 'Loading assets...'}
          {progress >= 60 && progress < 90 && 'Preparing experience...'}
          {progress >= 90 && 'Almost ready...'}
        </div>
      </div>

      <style jsx>{`
        .preloader {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
        }
        
        .loading-logo {
          width: 80px;
          height: 80px;
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-top: 2px solid rgb(59, 130, 246);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .preloader-content {
          animation: fadeIn 0.5s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
} 