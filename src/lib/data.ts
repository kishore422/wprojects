import { Project, Design, AboutData, HeroData, SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Creative Studio',
  description: 'Cinematic, interactive portfolio showcasing creative projects and designs',
  url: 'https://yourportfolio.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/yourusername',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    dribbble: 'https://dribbble.com/yourusername',
    behance: 'https://behance.net/yourusername',
  },
}

export const heroData: HeroData = {
  title: 'Creative\nStudio',
  subtitle: 'Digital Design & Development',
  description: 'Crafting cinematic digital experiences that inspire and engage. From concept to execution, we bring ideas to life with stunning visuals and seamless interactions.',
  backgroundVideo: '/videos/hero-bg.mp4',
  backgroundImage: '/images/hero-bg.jpg',
  ctaText: 'Explore Work',
  ctaLink: '#projects',
}

export const aboutData: AboutData = {
  name: 'Alex Chen',
  title: 'Creative Director & Developer',
  bio: 'Passionate about creating digital experiences that blur the line between art and technology. With over 8 years of experience in design and development, I specialize in crafting immersive, interactive experiences that leave lasting impressions.',
  image: '/images/profile.jpg',
  stats: [
    { label: 'Years Experience', value: 8, suffix: '+' },
    { label: 'Projects Completed', value: 150, suffix: '+' },
    { label: 'Happy Clients', value: 80, suffix: '+' },
    { label: 'Awards Won', value: 12, suffix: '' },
  ],
  skills: ['UI/UX Design', 'Frontend Development', 'Motion Graphics', '3D Design', 'Brand Identity', 'Creative Direction'],
  experience: 8,
  projects: 150,
  clients: 80,
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Nebula - Interactive Web Experience',
    description: 'A visually rich web experience with smooth transitions and interactive storytelling.',
    category: 'Web Experience',
    tags: ['WebGL', 'Interactive', 'Storytelling'],
    image: '/images/projects/nebula.jpg',
    video: '/videos/projects/nebula.mp4',
    gallery: ['/images/projects/nebula.jpg'],
    client: 'Space Agency',
    date: '2024-01-15',
    technologies: ['React', 'GSAP', 'TypeScript'],
    featured: true,
    slug: 'nebula-interactive-web-experience',
    caseStudy: {
      overview: 'Nebula is a visually immersive web experience with smooth transitions and interactive elements.',
      challenge: 'Create a performant, interactive experience that works seamlessly across all devices.',
      solution: 'Used React and GSAP for smooth animations and transitions.',
      results: 'Achieved high performance and user engagement.',
      process: [
        'Concept Development',
        'UI/UX Design',
        'Development',
        'Testing & Launch'
      ]
    }
  },
  {
    id: '2',
    title: 'Echo - Brand Identity & Website',
    description: 'Brand identity redesign and website development for a modern startup.',
    category: 'Brand Identity',
    tags: ['Branding', 'Web Design'],
    image: '/images/projects/echo.jpg',
    gallery: ['/images/projects/echo.jpg'],
    client: 'Echo Fashion',
    date: '2023-11-20',
    technologies: ['Next.js', 'Tailwind CSS'],
    featured: true,
    slug: 'echo-brand-identity-website',
  },
  {
    id: '3',
    title: 'Pulse - Mobile App Design',
    description: 'A health and wellness mobile app with intuitive UI and smooth animations.',
    category: 'Mobile App',
    tags: ['Mobile Design', 'UI/UX'],
    image: '/images/projects/pulse.jpg',
    video: '/videos/projects/pulse.mp4',
    client: 'HealthTech Inc',
    date: '2023-09-10',
    technologies: ['React Native', 'Figma'],
    featured: false,
    slug: 'pulse-mobile-app-design',
  },
  {
    id: '4',
    title: 'Aurora - Motion Graphics',
    description: 'Cinematic motion graphics sequence for a brand launch.',
    category: 'Motion Graphics',
    tags: ['Motion Design', 'Typography'],
    image: '/images/projects/aurora.jpg',
    video: '',
    client: 'Luxury Motors',
    date: '2023-07-05',
    technologies: ['After Effects'],
    featured: false,
    slug: 'aurora-motion-graphics',
  },
  {
    id: '5',
    title: 'Zen - Meditation App',
    description: 'A minimalist meditation app with calming visuals and guided sessions.',
    category: 'Mobile App',
    tags: ['Wellness', 'Minimalist'],
    image: '/images/projects/zen.jpg',
    client: 'Mindful Tech',
    date: '2023-05-15',
    technologies: ['Flutter'],
    featured: false,
    slug: 'zen-meditation-app',
  },
  {
    id: '6',
    title: 'Quantum - Product Visualization',
    description: 'Interactive product configurator for a tech company.',
    category: 'Product Design',
    tags: ['Product Design', 'Interactive'],
    image: '/images/projects/quantum.jpg',
    video: '',
    client: 'TechCorp',
    date: '2023-03-20',
    technologies: ['React'],
    featured: true,
    slug: 'quantum-product-visualization',
  },
]

export const designs: Design[] = [
  {
    id: '1',
    title: 'Futuristic Dashboard UI',
    category: 'ui-ux',
    image: '/images/designs/dashboard-ui.jpg',
    description: 'Modern dashboard interface with dark theme and neon accents',
    tags: ['Dashboard', 'Dark Theme'],
    featured: true,
  },
  {
    id: '2',
    title: 'Abstract Geometric Illustration',
    category: 'illustration',
    image: '/images/designs/geometric-abstract.jpg',
    description: 'Complex geometric patterns with vibrant color gradients',
    tags: ['Geometric', 'Abstract'],
    featured: false,
  },
  {
    id: '3',
    title: 'Floating Island',
    category: '3d',
    image: '/images/designs/floating-island.jpg',
    description: 'Surreal 3D environment with floating islands and atmospheric lighting',
    tags: ['3D', 'Environment'],
    featured: true,
  },
  {
    id: '4',
    title: 'Fluid Motion Graphics',
    category: 'motion',
    image: '/images/designs/fluid-motion.jpg',
    description: 'Smooth liquid animations with organic movement patterns',
    tags: ['Motion', 'Fluid'],
    featured: true,
  },
]

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc',
    content: 'Working with this creative studio was an absolute pleasure. They delivered beyond our expectations and created a stunning digital experience that perfectly represents our brand.',
    avatar: '', // fallback to initials or generic avatar
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Creative Director',
    company: 'Design Agency',
    content: 'The attention to detail and innovative approach to design is unmatched. They transformed our vision into a reality that exceeded all our expectations.',
    avatar: '', // fallback to initials or generic avatar
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Marketing Manager',
    company: 'E-commerce Brand',
    content: 'The interactive elements and smooth animations they created for our website significantly improved user engagement and conversion rates.',
    avatar: '', // fallback to initials or generic avatar
    rating: 5,
  },
] 