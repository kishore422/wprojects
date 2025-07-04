# 🎨 Cinematic Portfolio - Creative Studio

A stunning, cinematic portfolio website inspired by modern creative agencies like Cuberto. Built with Next.js, TypeScript, GSAP animations, and Locomotive Scroll for smooth, interactive experiences.

## ✨ Features

- **Cinematic Animations**: GSAP-powered scroll animations and micro-interactions
- **Smooth Scrolling**: Locomotive Scroll for buttery-smooth scrolling experience
- **Glassmorphism Design**: Modern glass effects and backdrop blur
- **Responsive Design**: Fully responsive across all devices
- **Interactive Projects**: Modal-based project showcases with image galleries
- **Filterable Gallery**: Design showcase with category filters
- **Contact Form**: Animated form with validation
- **Performance Optimized**: Lazy loading, optimized images, and smooth animations

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock Animation Platform)
- **Smooth Scroll**: Locomotive Scroll
- **Forms**: React Hook Form + Yup validation
- **Icons**: Lucide React
- **Fonts**: Inter, Space Grotesk (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cinematic-portfolio.git
   cd cinematic-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Preloader.tsx        # Loading screen with progress
│   ├── Navbar.tsx           # Sticky navigation
│   ├── Hero.tsx             # Hero section with video background
│   ├── About.tsx            # About section with animated counters
│   ├── Projects.tsx         # Project showcase with modals
│   ├── Gallery.tsx          # Design gallery with filters
│   ├── Contact.tsx          # Contact form and info
│   ├── Footer.tsx           # Footer with social links
│   └── BackToTop.tsx        # Back to top button
├── lib/
│   ├── data.ts              # Sample data and content
│   └── utils.ts             # Utility functions
└── types/
    └── index.ts             # TypeScript type definitions
```

## 🎨 Customization

### 1. **Personal Information**
Update your personal information in `src/lib/data.ts`:
- Hero content
- About section
- Projects and designs
- Contact information
- Social media links

### 2. **Styling**
- Colors: Modify the color palette in `tailwind.config.js`
- Fonts: Update font imports in `src/app/globals.css`
- Animations: Customize GSAP animations in each component

### 3. **Content**
- Replace placeholder images in `public/images/`
- Add your own videos in `public/videos/`
- Update project data with your actual work

### 4. **SEO & Meta**
Update metadata in `src/app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter cards
- Favicon and icons

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎬 Animation Features

- **Preloader**: Animated loading screen with progress counter
- **Hero**: Parallax video background with staggered text animations
- **Scroll Animations**: GSAP ScrollTrigger for scroll-based animations
- **Hover Effects**: Micro-interactions on cards and buttons
- **Modal Transitions**: Smooth project modal animations
- **Counter Animations**: Animated statistics in About section

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any API keys or configuration:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
```

### Performance Optimization
- Images are optimized with Next.js Image component
- Videos are lazy-loaded
- Animations are hardware-accelerated
- Bundle is code-split and optimized

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Inspired by [Cuberto](https://cuberto.com/) and other creative agencies
- Built with modern web technologies and best practices
- Special thanks to the GSAP and Locomotive Scroll communities

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to:
- Open an issue on GitHub
- Contact me at hello@creativestudio.com

---

**Made with ❤️ by Creative Studio** 