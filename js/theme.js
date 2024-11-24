// Saves the theme and makes sure it appears on all the other pages.

const storageKey = "selectedTheme";

let selectedTheme = localStorage.getItem(storageKey);

if (!selectedTheme) {
  selectedTheme = "default";
  document.body.setAttribute("data-theme", selectedTheme);
  localStorage.setItem(storageKey, selectedTheme);
} else {
  document.body.setAttribute("data-theme", selectedTheme);
}
