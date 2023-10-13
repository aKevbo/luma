function loadScripts() {
  const scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/core-js/3.31.1/minified.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ie-love/0.0.3/ie-love.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/minifill/0.0.4/minifill.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/js-polyfills/0.1.43/polyfill.min.js"
  ];

  for (const scriptSrc of scripts) {
    const scriptElement = document.createElement("script");
    scriptElement.src = scriptSrc;
    document.head.appendChild(scriptElement);
  }
}

loadScripts();
