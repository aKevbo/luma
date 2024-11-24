// Loading screen "preloader" logic

window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    const overlay = document.querySelector('.loader-overlay');
    const body = document.querySelector('body');
    
    // Fade out the loader and overlay
    loader.style.opacity = '0';
    overlay.style.opacity = '0';
    
    // After fade-out, remove the loader and overlay, and fade in the page content
    setTimeout(() => {
      loader.style.display = 'none';
      overlay.style.display = 'none';
      body.classList.add('loaded'); // Adds 'loaded' class to trigger fade-in
    }, 1000); // 1-second fade-out time for loader
  });