document.querySelectorAll('video').forEach(video => {
  // Start with controls hidden
  video.removeAttribute('controls');

  // Show controls on hover
  video.addEventListener('mouseenter', () => {
    video.setAttribute('controls', 'controls');
  });

  // Hide controls when not hovering
  video.addEventListener('mouseleave', () => {
    video.removeAttribute('controls');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById('Header');
  let lastScrollY = window.scrollY;

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 200 && currentScroll > lastScrollY) {
        // Scrolling down past 200px
        header.classList.add('hide');
      } else {
        // Scrolling up or near the top
        header.classList.remove('hide');
      }

      lastScrollY = currentScroll;
    });
  }
});
