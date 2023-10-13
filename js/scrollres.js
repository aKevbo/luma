window.onbeforeunload = function() {
  sessionStorage.setItem('scrollPos', window.scrollY);
};

window.onload = function() {
  if (sessionStorage.getItem('scrollPos')) {
    const scrollPos = sessionStorage.getItem('scrollPos');
    sessionStorage.removeItem('scrollPos');

    window.requestAnimationFrame(function() {
      const start = window.scrollY;
      const end = parseInt(scrollPos);
      const duration = 300;
      const startTime = performance.now();

      function scroll(timestamp) {
        const timeElapsed = timestamp - startTime;
        const percentComplete = Math.min(timeElapsed / duration, 1);
        const scrollDistance = start + (end - start) * percentComplete;
        window.scrollTo(0, scrollDistance);
        if (timeElapsed < duration) {
          window.requestAnimationFrame(scroll);
        }
      }

      window.requestAnimationFrame(scroll);
    });
  }
};
