'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Play, X, ArrowLeft, ArrowRight } from 'lucide-react'
import { projects } from '@/lib/data'
import { Project } from '@/types'

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

      // Stagger animation for project cards
      if (projectsRef.current?.children) {
        gsap.fromTo(projectsRef.current.children,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: projectsRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const openProject = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeProject = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedProject?.gallery) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery!.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject?.gallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery!.length - 1 : prev - 1
      )
    }
  }

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <>
      <section 
        ref={sectionRef}
        id="projects"
        className="relative py-20 md:py-32 bg-black"
      >
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of my most impactful work, featuring interactive experiences, 
              stunning visuals, and innovative solutions.
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div 
            ref={projectsRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onOpen={openProject}
                index={index}
              />
            ))}
          </div>

          {/* Other Projects */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              More Work
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onOpen={openProject}
                  index={index + featuredProjects.length}
                  compact
                />
              ))}
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-pulse" />
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={closeProject}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl glass">
            {/* Close Button */}
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Project Content */}
            <div className="flex flex-col lg:flex-row h-full">
              {/* Image/Video Section */}
              <div className="relative lg:w-2/3 h-96 lg:h-full">
                {selectedProject.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={selectedProject.video} type="video/mp4" />
                  </video>
                ) : selectedProject.gallery ? (
                  <div className="relative w-full h-full">
                    <img
                      src={selectedProject.gallery[currentImageIndex]}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Image Navigation */}
                    {selectedProject.gallery.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                        >
                          <ArrowLeft size={20} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                        >
                          <ArrowRight size={20} />
                        </button>
                        
                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                          {selectedProject.gallery.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Project Details */}
              <div className="lg:w-1/3 p-8 overflow-y-auto">
                <div className="space-y-6">
                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h3>

                  {/* Category & Date */}
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{selectedProject.category}</span>
                    <span>{new Date(selectedProject.date).toLocaleDateString()}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Client */}
                  {selectedProject.client && (
                    <div>
                      <span className="text-sm text-gray-400">Client:</span>
                      <p className="text-white font-medium">{selectedProject.client}</p>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm text-gray-400 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 rounded-full text-white text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <h4 className="text-sm text-gray-400 mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  {selectedProject.caseStudy && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Case Study</h4>
                      
                      <div>
                        <h5 className="text-sm text-gray-400 mb-2">Overview</h5>
                        <p className="text-gray-300 text-sm">{selectedProject.caseStudy.overview}</p>
                      </div>

                      <div>
                        <h5 className="text-sm text-gray-400 mb-2">Challenge</h5>
                        <p className="text-gray-300 text-sm">{selectedProject.caseStudy.challenge}</p>
                      </div>

                      <div>
                        <h5 className="text-sm text-gray-400 mb-2">Solution</h5>
                        <p className="text-gray-300 text-sm">{selectedProject.caseStudy.solution}</p>
                      </div>

                      <div>
                        <h5 className="text-sm text-gray-400 mb-2">Results</h5>
                        <p className="text-gray-300 text-sm">{selectedProject.caseStudy.results}</p>
                      </div>
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

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
  index: number
  compact?: boolean
}

function ProjectCard({ project, onOpen, index, compact = false }: ProjectCardProps) {
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
      onClick={() => onOpen(project)}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <div className="text-4xl mb-2">🎨</div>
              <p className="text-lg font-semibold">{project.title}</p>
            </div>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button for Videos */}
        {project.video && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Play size={24} className="text-white ml-1" />
            </div>
          </div>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className={`font-bold mb-2 ${compact ? 'text-lg' : 'text-xl'}`}>
          {project.title}
        </h3>
        <p className={`text-gray-300 mb-3 ${compact ? 'text-sm' : 'text-base'}`}>
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
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