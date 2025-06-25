// Font Awesome initialization (if not already loaded)
document.addEventListener('DOMContentLoaded', function() {
  // Check if Font Awesome is already loaded
  if (!document.querySelector('script[src*="fontawesome"]')) {
    const faScript = document.createElement('script');
    faScript.src = 'https://kit.fontawesome.com/your-code-here.js';
    faScript.crossOrigin = 'anonymous';
    document.head.appendChild(faScript);
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Simple animation for timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, { threshold: 0.1 });
  
  timelineItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    if (item.classList.contains('timeline-item:nth-child(odd)')) {
      item.style.transform = 'translateX(-50px)';
    } else {
      item.style.transform = 'translateX(50px)';
    }
    observer.observe(item);
  });
});