'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X, ZoomIn, Filter } from 'lucide-react'
import { designs } from '@/lib/data'
import { Design } from '@/types'

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [filteredDesigns, setFilteredDesigns] = useState<Design[]>(designs)

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'ui-ux', label: 'UI/UX' },
    { id: 'illustration', label: 'Illustration' },
    { id: '3d', label: '3D Design' },
    { id: 'branding', label: 'Branding' },
    { id: 'motion', label: 'Motion' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section on scroll
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Animate gallery items
      gsap.fromTo(galleryRef.current?.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredDesigns(designs)
    } else {
      setFilteredDesigns(designs.filter(design => design.category === activeFilter))
    }
  }, [activeFilter])

  const openDesign = (design: Design) => {
    setSelectedDesign(design)
    document.body.style.overflow = 'hidden'
  }

  const closeDesign = () => {
    setSelectedDesign(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <section 
        ref={sectionRef}
        id="gallery"
        className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900"
      >
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display">
              Design Gallery
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A curated collection of visual designs, illustrations, and creative concepts 
              that showcase artistic vision and technical expertise.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div 
            ref={galleryRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredDesigns.map((design, index) => (
              <DesignCard 
                key={design.id} 
                design={design} 
                onOpen={openDesign}
                index={index}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredDesigns.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-2">No designs found</h3>
              <p className="text-gray-400">Try selecting a different category</p>
            </div>
          )}
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-pulse" />
        </div>
      </section>

      {/* Design Modal */}
      {selectedDesign && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={closeDesign}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl glass">
            {/* Close Button */}
            <button
              onClick={closeDesign}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Design Content */}
            <div className="flex flex-col lg:flex-row h-full">
              {/* Image Section */}
              <div className="lg:w-2/3 h-96 lg:h-full">
                <img
                  src={selectedDesign.image}
                  alt={selectedDesign.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Design Details */}
              <div className="lg:w-1/3 p-8 overflow-y-auto">
                <div className="space-y-6">
                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white">
                    {selectedDesign.title}
                  </h3>

                  {/* Category */}
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Category:</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {categories.find(c => c.id === selectedDesign.category)?.label}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {selectedDesign.description}
                  </p>

                  {/* Tags */}
                  <div>
                    <h4 className="text-sm text-gray-400 mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDesign.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 rounded-full text-white text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {selectedDesign.featured && (
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium">
                      Featured Design
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

interface DesignCardProps {
  design: Design
  onOpen: (design: Design) => void
  index: number
}

function DesignCard({ design, onOpen, index }: DesignCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
        }
      )
    }, cardRef)

    return () => ctx.revert()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-500"
      onClick={() => onOpen(design)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        {design.image ? (
          <img
            src={design.image}
            alt={design.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <div className="text-4xl mb-2">🎨</div>
              <p className="text-lg font-semibold">{design.title}</p>
            </div>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Zoom Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <ZoomIn size={20} className="text-white" />
          </div>
        </div>

        {/* Featured Badge */}
        {design.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="font-bold text-lg mb-1">
          {design.title}
        </h3>
        <p className="text-gray-300 text-sm mb-2">
          {design.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {design.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-colors duration-300" />
    </div>
  )
} 