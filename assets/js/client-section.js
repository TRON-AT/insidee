// Client section JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Back to top button functionality
  const backToTop = document.querySelector('.back-to-top');
  
  if (backToTop) {
    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTop.style.opacity = '1';
        backToTop.style.pointerEvents = 'auto';
      } else {
        backToTop.style.opacity = '0';
        backToTop.style.pointerEvents = 'none';
      }
    });
  }

  // Optional: Add hover effects for client boxes
  const clientBoxes = document.querySelectorAll('.client-box');
  clientBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    box.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});
