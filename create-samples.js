const fs = require('fs');

// Create additional sample files
const additionalFiles = [
  // Project gallery images
  'public/images/projects/nebula-1.jpg',
  'public/images/projects/nebula-2.jpg', 
  'public/images/projects/nebula-3.jpg',
  'public/images/projects/echo-1.jpg',
  'public/images/projects/echo-2.jpg',
  'public/images/projects/echo-3.jpg',
  
  // More design images
  'public/images/designs/minimalist-brand.jpg',
  'public/images/designs/neon-cityscape.jpg',
  'public/images/designs/product-landing.jpg',
  'public/images/designs/organic-shapes.jpg',
  
  // Testimonial avatars
  'public/images/testimonials/sarah.jpg',
  'public/images/testimonials/michael.jpg',
  'public/images/testimonials/emily.jpg',
  
  // More project videos
  'public/videos/projects/aurora.mp4',
  'public/videos/projects/quantum.mp4'
];

additionalFiles.forEach(filePath => {
  const fileName = filePath.split('/').pop();
  const type = filePath.includes('videos') ? 'video' : 'image';
  const content = `# Sample ${type.toUpperCase()}: ${fileName}
# This is a placeholder for ${fileName}
# Replace with actual high-quality ${type} file
# Recommended: ${type === 'video' ? 'MP4 format, 1920x1080' : '1920x1080 or larger'}`;
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Created: ${filePath}`);
});

console.log('\n🎉 All sample files created successfully!');
console.log('📝 Replace these placeholder files with your actual content');
console.log('📁 Check the public/ directory for all sample files'); 