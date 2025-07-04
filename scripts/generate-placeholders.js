const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const directories = [
  'public/images/projects',
  'public/images/designs',
  'public/images/testimonials',
  'public/videos/projects'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Project images
const projectImages = [
  'nebula.jpg',
  'nebula-1.jpg',
  'nebula-2.jpg',
  'nebula-3.jpg',
  'echo.jpg',
  'echo-1.jpg',
  'echo-2.jpg',
  'echo-3.jpg',
  'pulse.jpg',
  'aurora.jpg',
  'zen.jpg',
  'quantum.jpg'
];

// Design images
const designImages = [
  'dashboard-ui.jpg',
  'geometric-abstract.jpg',
  'floating-island.jpg',
  'minimalist-brand.jpg',
  'fluid-motion.jpg',
  'neon-cityscape.jpg',
  'product-landing.jpg',
  'organic-shapes.jpg'
];

// Testimonial images
const testimonialImages = [
  'sarah.jpg',
  'michael.jpg',
  'emily.jpg'
];

// Project videos
const projectVideos = [
  'nebula.mp4',
  'pulse.mp4',
  'aurora.mp4',
  'quantum.mp4'
];

// Generate placeholder files
const generatePlaceholder = (filePath, type) => {
  const content = `# This is a placeholder for ${type}
# Replace this with an actual ${type.split(' ')[0]} file
# Recommended: High-quality ${type} (${type.includes('video') ? 'MP4 format, 1920x1080' : '1920x1080 or larger'})`;
  
  fs.writeFileSync(filePath, content);
};

// Generate project images
projectImages.forEach(image => {
  generatePlaceholder(`public/images/projects/${image}`, 'project image');
});

// Generate design images
designImages.forEach(image => {
  generatePlaceholder(`public/images/designs/${image}`, 'design image');
});

// Generate testimonial images
testimonialImages.forEach(image => {
  generatePlaceholder(`public/images/testimonials/${image}`, 'testimonial avatar');
});

// Generate project videos
projectVideos.forEach(video => {
  generatePlaceholder(`public/videos/projects/${video}`, 'project video');
});

console.log('✅ Placeholder files generated successfully!');
console.log('📝 Replace these files with your actual images and videos');
console.log('📁 Check the public/ directory for all placeholder files'); 