const startSearch = () => {
  const input = document.getElementById("mySearch");
  const filter = input.value.toUpperCase();
  const ul = document.getElementById("search");
  const li = ul.getElementsByTagName("a");

  for (let i = 0; i < li.length; i++) {
    const a = li[i].getElementsByTagName("h1")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};
