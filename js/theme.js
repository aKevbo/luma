const storageKey = "selectedTheme";

let selectedTheme = localStorage.getItem(storageKey);

if (!selectedTheme) {
  selectedTheme = "default";
  document.body.setAttribute("data-theme", selectedTheme);
  localStorage.setItem(storageKey, selectedTheme);
} else {
  document.body.setAttribute("data-theme", selectedTheme);
}
