fetch("cloak.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("buttons-container");

    data.forEach((link) => {
      const img = document.createElement("img");
      img.className = "presets";
      img.style.width = "50px";
      img.style.height = "50px";
      img.style.borderRadius = "50%";
      img.style.objectFit = "cover";
      img.style.borderColor = "black";

      const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${link.favicon}`;
      img.src = link.favicon;

      // Check if the image failed to load, and fallback to link.favicon if it did
      img.onerror = () => {
        img.src = faviconUrl;
      };

      img.addEventListener("click", function () {
        setTitle(link.title);
        setFavicon(link.favicon);
      });
      container.appendChild(img);
    });
  });
