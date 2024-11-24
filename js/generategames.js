const container = document.getElementById("search");
let iframeOpen = false;

// Fetch game links
fetch("/pages/games/links.json")
  .then((response) => response.json())
  .then((data) => {
    createGames(data);
    // Check if there is a `game` parameter in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const gameFile = urlParams.get("game");
    if (gameFile) {
      openGameIframe(gameFile);
    }
  });

function createGames(data) {
  let tileCount = 0;

  for (const gamesList of data.links) {
    const section = document.createElement("section");
    section.className = "flex-container";

    for (const game of gamesList.games) {
      const link = document.createElement("a");
      const cdnUrl = localStorage.getItem("") || "";
      link.href = cdnUrl + game[2];
      link.className = "game-link container";

      const gameTile = document.createElement("div");
      gameTile.className = "game-tile";

      const icon = document.createElement("img");
      icon.className = "game-icon";
      icon.src = game[1];
      icon.loading = "lazy";

      const title = document.createElement("h1");
      title.className = "game-title";
      title.innerHTML = game[0];

      const gameDesc = document.createElement("p");
      gameDesc.className = "game-desc";
      gameDesc.innerHTML = game[3];

      gameTile.appendChild(icon);
      gameTile.appendChild(title);
      gameTile.appendChild(gameDesc);

      link.appendChild(gameTile);
      section.appendChild(link);
      tileCount++;

      link.addEventListener("click", (event) => {
        event.preventDefault();
        const url = link.href;

        if (game[4] && game[4] === "IgnoreIframe") {
          const popWidth = 1280;
          const popHeight = 720;
          const top = (window.screen.height - popHeight) / 2;
          const left = (window.screen.width - popWidth) / 2;
          window.open(url, "_blank", `width=${popWidth},height=${popHeight},top=${top},left=${left},resizable,scrollbars=yes`);
          return;
        }

        openGameIframe(url);
      });
    }

    const sectiontitle = document.createElement("h2");
    const sectiontitlec = document.createElement("span");
    sectiontitlec.innerHTML = gamesList.title;
    sectiontitle.appendChild(sectiontitlec);
    container.appendChild(sectiontitle);
    container.appendChild(section);
  }
  console.log("Generated " + tileCount + " game tiles.");
}

// Function to open the iframe with the specified game URL
function openGameIframe(url) {
  if (iframeOpen) {
    console.log("An iframe is already open.");
    return;
  }

  iframeOpen = true;

  const existingIframeContainer = document.querySelector(".iframe-container");
  if (existingIframeContainer) {
    existingIframeContainer.style.opacity = "0";
    existingIframeContainer.style.transform = "translate(-50%, -50%) scale(0.9)";
    setTimeout(() => {
      document.body.removeChild(existingIframeContainer);
    }, 300);
  }

  let isLarge = localStorage.getItem("iframeMode") === "fullscreen";
  const iframeContainer = document.createElement("div");
  iframeContainer.className = "iframe-container";
  iframeContainer.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.9);
    ${isLarge ? "width: 95vw; height: 95vh;" : "width: 75vw; height: 75vh;"}
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease, width 0.3s ease, height 0.3s ease;
  `;

  const iframe = document.createElement("iframe");
  iframe.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 11px;
    border-style: solid;
    border-color: #ffffff;
    border-width: 5px;
  `;
  iframe.src = url;

  const fullscreenButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  fullscreenButton.innerHTML = `<path d="M560-280h200v-200h-80v120H560v80ZM200-480h80v-120h120v-80H200v200Zm-40 320q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>`;
  fullscreenButton.setAttribute("viewBox", "0 -960 960 960");
  fullscreenButton.setAttribute("style", `
    position: absolute;
    fill: white;
    top: 40px;
    right: -38px;
    width: 30px;
    height: 30px;
    z-index: 10001;
    cursor: pointer;
  `);

  const closeButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  closeButton.innerHTML = `<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>`;
  closeButton.setAttribute("viewBox", "0 -960 960 960");
  closeButton.setAttribute("style", `
    position: absolute;
    fill: white;
    stroke: white;
    stroke-width: 2;
    top: 0px;
    right: -40px;
    width: 35px;
    height: 35px;
    z-index: 10001;
    cursor: pointer;
  `);

  closeButton.addEventListener("click", () => {
    iframeContainer.style.opacity = "0";
    iframeContainer.style.transform = "translate(-50%, -50%) scale(0.9)";
    overlay.style.opacity = "0";

    setTimeout(() => {
      document.body.removeChild(iframeContainer);
      document.body.removeChild(overlay);
      iframeOpen = false;
    }, 300);
  });

  fullscreenButton.addEventListener("click", () => {
    if (!isLarge) {
      iframeContainer.style.width = "95vw";
      iframeContainer.style.height = "95vh";
      localStorage.setItem("iframeMode", "fullscreen");
      isLarge = true;
    } else {
      iframeContainer.style.width = "75vw";
      iframeContainer.style.height = "75vh";
      localStorage.setItem("iframeMode", "normal");
      isLarge = false;
    }
  });

  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    backdrop-filter: blur(20px);
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
  document.body.appendChild(overlay);

  iframeContainer.appendChild(iframe);
  iframeContainer.appendChild(fullscreenButton);
  iframeContainer.appendChild(closeButton);
  document.body.appendChild(iframeContainer);

  setTimeout(() => {
    iframeContainer.style.opacity = "1";
    iframeContainer.style.transform = "translate(-50%, -50%) scale(1)";
    overlay.style.opacity = "1";
  }, 10);
}
