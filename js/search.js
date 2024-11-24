// Search feature for games on the games page.

const startSearch = () => {
  const input = document.getElementById("mySearch");
  const filter = input.value.toUpperCase();
  const ul = document.getElementById("search");
  const li = ul.getElementsByTagName("a");
  let firstMatch = null;

  for (let i = 0; i < li.length; i++) {
    const a = li[i].getElementsByTagName("h1")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      if (!firstMatch) {
        firstMatch = li[i];
      }
    } else {
      li[i].style.display = "none";
    }
  }

  // Scroll to the first match if there is one
  if (firstMatch) {
    firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};