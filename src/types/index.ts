export interface Project {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  image: string
  video?: string
  gallery?: string[]
  client?: string
  date: string
  technologies: string[]
  featured: boolean
  slug: string
  caseStudy?: {
    overview: string
    challenge: string
    solution: string
    results: string
    process: string[]
  }
}

export interface Design {
  id: string
  title: string
  category: 'ui-ux' | 'illustration' | '3d' | 'branding' | 'motion'
  image: string
  description: string
  tags: string[]
  featured: boolean
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface AnimationConfig {
  duration: number
  ease: string
  delay?: number
  stagger?: number
}

export interface ScrollTrigger {
  trigger: string
  start: string
  end: string
  scrub?: boolean
  pin?: boolean
  pinSpacing?: boolean
}

export interface ParallaxConfig {
  speed: number
  ease: string
  scrub?: boolean
}

export interface NavItem {
  label: string
  href: string
  icon?: string
}

export interface HeroData {
  title: string
  subtitle: string
  description: string
  backgroundVideo?: string
  backgroundImage?: string
  ctaText: string
  ctaLink: string
}

export interface AboutData {
  name: string
  title: string
  bio: string
  image: string
  stats: {
    label: string
    value: number
    suffix?: string
  }[]
  skills: string[]
  experience: number
  projects: number
  clients: number
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export interface FooterData {
  logo: string
  description: string
  socialLinks: SocialLink[]
  quickLinks: NavItem[]
  contact: {
    email: string
    phone: string
    address: string
  }
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    linkedin: string
    dribbble: string
    behance: string
  }
} 