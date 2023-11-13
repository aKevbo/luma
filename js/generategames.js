const container = document.getElementById("search");

fetch("/html/games/links.json")
  .then((response) => response.json())
  .then((data) => createGames(data));

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

        if (url.startsWith("http://") || url.startsWith("https://")) {
          // Check if there is an existing iframe and remove it along with the overlay
          const existingIframe = document.querySelector("iframe");

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
            border-radius: 10px;
            border-style: solid;
            border-color: #ffffff;
            border-width: 4px;
          `;
          iframe.innerHTML =`
          allow="fullscreen" 
          `;
          iframe.src = url;
          const fullscreenButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          fullscreenButton.innerHTML = `<path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>`;
          fullscreenButton.setAttribute("viewBox", "0 0 16 16");
          fullscreenButton.setAttribute("style", `
          position: absolute;
          fill: white;
          top: 1px;
          right: -45px;
          width: 30px;
          height: 30px;
          z-index: 10001;
          cursor: pointer;
          
          `);

          const newTabButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          
          fullscreenButton.setAttribute("title", "Fullscreen");

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