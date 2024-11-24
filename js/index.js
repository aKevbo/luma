// Retrieve the tab data from localStorage, which may include a custom title and icon URL
const tab = localStorage.getItem("tab");

// Parse the retrieved JSON string to get the tab data object, or default to an empty object if no data is found
const tabData = tab ? JSON.parse(tab) : {};

// Check if a custom title is stored in the tab data
if (tabData.title) {
  // If a title is present, set it as the document's title
  document.title = tabData.title;
}

// Check if a custom icon URL is stored in the tab data
if (tabData.icon) {
  // Find the existing favicon link element in the document
  const faviconLink = document.querySelector("link[rel='icon']");
  
  // Update the favicon link's href attribute to use the new icon URL
  faviconLink.href = tabData.icon;
}
