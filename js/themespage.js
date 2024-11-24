// Code for the themes page.

let tabData = {};
const tab = localStorage.getItem("tab");

if (tab) {
  try {
    tabData = JSON.parse(tab);
  } catch (e) {
    console.log("Error parsing tab data from localStorage", e);
  }
}

const settingsDefaultTab = {
  title: "Settings | Luma",
  icon: "/img/lumalogo.png",
};

const setTitle = (title = "") => {
  document.title = title || settingsDefaultTab.title;
  if (title) {
    tabData.title = title;
  } else {
    delete tabData.title;
  }
  localStorage.setItem("tab", JSON.stringify(tabData));
};

const setFavicon = (url) => {
  const faviconLink = document.querySelector("link[rel='icon']");
  
  // Try to load the URL as an image
  const img = new Image();
  img.src = url;
  img.onload = () => {
    faviconLink.href = url;
    if (url) {
      tabData.icon = url;
    } else {
      delete tabData.icon;
    }
    localStorage.setItem("tab", JSON.stringify(tabData));
  };

  img.onerror = () => {
    // If the URL is not an image, use Google's Favicon API
    const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${url}`;
    faviconLink.href = faviconUrl || settingsDefaultTab.icon;
    if (url) {
      tabData.icon = faviconUrl;
    } else {
      delete tabData.icon;
    }
    localStorage.setItem("tab", JSON.stringify(tabData));
  };
};


const resetTab = () => {
  setTitle();
  setFavicon();
  document.getElementById("title").value = "";
  document.getElementById("icon").value = "";
  localStorage.setItem("tab", JSON.stringify({}));
};

if (tabData.title) {
  document.getElementById("title").value = tabData.title;
}

if (tabData.icon) {
  document.getElementById("icon").value = tabData.icon;
}

const dropdown = document.getElementById("drop");
    
      // add event listener to the dropdown
      dropdown.addEventListener("change", function() {
        const selectedValue = this.value;
        localStorage.setItem("selectedCDN", selectedValue);
      });
    
      // load previously selected value from local storage
      const selectedValue = localStorage.getItem("selectedCDN");
      if (selectedValue) {
        dropdown.value = selectedValue;
      }
      const buttons = document.querySelectorAll(".theme-button");
      const storageKey = "selectedTheme";

// Load the previously selected theme from local storage, if it exists
let selectedTheme = localStorage.getItem(storageKey);

// If no previously selected theme, set the default theme
if (!selectedTheme) {
  selectedTheme = "default";
  document.body.setAttribute("data-theme", selectedTheme);
  // Save the default theme to local storage
  localStorage.setItem(storageKey, selectedTheme);
} else {
  document.body.setAttribute("data-theme", selectedTheme);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.dataset.theme;
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem(storageKey, theme);
  });
});





