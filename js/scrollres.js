// Saves the user's scroll position before leaving or reloading the page
window.onbeforeunload = function() {
  // Store the current scroll position (vertical offset) in sessionStorage
  sessionStorage.setItem('scrollPos', window.scrollY);
};

// Restore the user's scroll position when the page loads
window.onload = function() {
  // Check if a previous scroll position exists in sessionStorage
  if (sessionStorage.getItem('scrollPos')) {
    // Retrieve the stored scroll position and remove it from sessionStorage
    const scrollPos = sessionStorage.getItem('scrollPos');
    sessionStorage.removeItem('scrollPos');

    // Use requestAnimationFrame to animate scrolling to the stored position
    window.requestAnimationFrame(function() {
      const start = window.scrollY; // Starting scroll position
      const end = parseInt(scrollPos); // Target scroll position
      const duration = 300; // Duration of the scroll animation in milliseconds
      const startTime = performance.now(); // Start time of the animation

      // Function to perform smooth scroll animation
      function scroll(timestamp) {
        const timeElapsed = timestamp - startTime; // Time elapsed since animation started
        const percentComplete = Math.min(timeElapsed / duration, 1); // Calculate progress (0 to 1)
        
        // Calculate intermediate scroll position based on progress
        const scrollDistance = start + (end - start) * percentComplete;
        window.scrollTo(0, scrollDistance); // Scroll to the calculated position

        // If the animation isn't complete, keep requesting the next frame
        if (timeElapsed < duration) {
          window.requestAnimationFrame(scroll);
        }
      }

      // Start the scroll animation
      window.requestAnimationFrame(scroll);
    });
  }
};
