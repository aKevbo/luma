function openRandomIframe() {
  const gameLinks = document.querySelectorAll('.game-link');
  const randomIndex = Math.floor(Math.random() * gameLinks.length);
  const randomLink = gameLinks[randomIndex];
  
  const url = randomLink.href;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    // Check if there is an existing iframe and remove it along with the overlay
    const existingIframe = document.querySelector("iframe");
    if (existingIframe) {
      document.body.removeChild(overlay);
      document.body.removeChild(existingIframe.parentNode);
    }

    // Create the new iframe and container div
    const container = document.createElement("div");
          container.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 85%;
            height: 85%;
            z-index: 10000;
          `;
          const iframe = document.createElement("iframe");
          iframe.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          `;
          iframe.src = url;
          const fullscreenButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          fullscreenButton.innerHTML = `<path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>`;
          fullscreenButton.setAttribute("viewBox", "0 0 16 16");
          fullscreenButton.setAttribute("style", `
          position: absolute;
          fill: var(--theme);
          top: 40px;
          right: -40px;
          width: 30px;
          height: 30px;
          z-index: 10001;
          cursor: pointer;
          `);

          const newTabButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          newTabButton.innerHTML = `<path d="M324.704,254.36H310.15v-14.554c0-9.479-7.711-17.191-17.188-17.191c-9.477,0-17.187,7.712-17.187,17.191v14.554H261.22 c-9.477,0-17.187,7.71-17.187,17.186c0,9.478,7.71,17.189,17.187,17.189h14.555v14.556c0,9.477,7.71,17.187,17.187,17.187 c9.478,0,17.188-7.71,17.188-17.187v-14.556h14.554c9.478,0,17.189-7.711,17.189-17.189 C341.893,262.07,334.182,254.36,324.704,254.36z"></path> <path d="M225.001,272.888H27.188V111.809h255.551v93.217c3.244-0.955,6.674-1.472,10.224-1.472c6.127,0,11.899,1.535,16.964,4.23 V30.478c0-5.006-4.057-9.063-9.063-9.063H9.063C4.057,21.415,0,25.473,0,30.478v260.537c0,5.004,4.057,9.061,9.063,9.061h229.818 C230.746,293.692,225.404,283.909,225.001,272.888z M264.026,49.892c8.251,0,14.941,6.69,14.941,14.94 c0,8.251-6.689,14.942-14.941,14.942c-8.253,0-14.941-6.691-14.941-14.942C249.085,56.581,255.773,49.892,264.026,49.892z M221.406,49.892c8.252,0,14.942,6.69,14.942,14.94c0,8.251-6.689,14.942-14.942,14.942c-8.251,0-14.941-6.691-14.941-14.942 C206.465,56.581,213.155,49.892,221.406,49.892z M30.959,51.088h141.672v27.49H30.959V51.088z"></path>`;
          newTabButton.setAttribute("viewBox", "0 0 341.893 341.893");
          newTabButton.setAttribute("style", `
          position: absolute;
          fill: var(--theme);
          top: 1px;
          right: -40px;
          width: 30px;
          height: 30px;
          z-index: 10001;
          cursor: pointer;
          `);
    fullscreenButton.setAttribute("title", "Fullscreen");
    newTabButton.setAttribute("title", "Open in New Tab");
    container.appendChild(iframe);
    container.appendChild(fullscreenButton);
    container.appendChild(newTabButton);
    document.body.appendChild(container);

    overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9999;
      backdrop-filter: blur(20px);
    `;
    overlay.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.removeChild(overlay);
      document.body.removeChild(container);
    });
    document.body.appendChild(overlay);
          fullscreenButton.addEventListener("click", () => {
            if (iframe.requestFullscreen) {
              iframe.requestFullscreen();
            } else if (iframe.webkitRequestFullscreen) { /* Safari */
            iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) { /* IE11 */
              iframe.msRequestFullscreen();
            }
          });
    newTabButton.addEventListener("click", function () {
      window.open(iframe.src, '_blank');
    });
  } else {
    // The URL is not valid, so display an error message
    alert("Invalid URL: " + url);
  }
}
