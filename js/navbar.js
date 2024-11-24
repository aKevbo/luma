// Navigation bar, the thing on the left that appears on every page, yeah, that.


const style = document.createElement("style");
style.textContent = `
  ::-webkit-scrollbar {
    width: 4px;
    background: var(--theme);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--text);
    -webkit-border-radius: 1ex;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
  }

  ::-webkit-scrollbar-corner {
    background: var(--theme);
  }

  /* Adjust the body margin for the updated sidebar width */
  body {
    margin-left: 120px; /* Adjusted margin to match the new sidebar width (100px + some padding) */
    transition: margin-left 0.4s ease;
  }

  /* Adjust margin further when sidebar expands */
  .sidebar:hover ~ body {
    margin-left: 280px; /* Adjusted margin for the expanded sidebar width (260px + some padding) */
  }
`;
document.head.appendChild(style);

window.addEventListener('DOMContentLoaded', function() {
  var navbar = document.createElement('div');
  navbar.id = 'navbar';
  navbar.innerHTML = `
  
    <link rel="stylesheet" href="/css/navbar.css">

    <aside class="sidebar">
  <div class="sidebar-header">

<a href="https://www.youtube.com/watch?v=mAOLyi_4AbQ" target="_blank" class="img-button">
  <img src="/img/websiteutility/LumaCircleWhite.png" alt="logo" style="width:65px;height:65px">
</a>

    <a class="navigationtext">Luma</a>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  </div>
  <ul class="sidebar-links">
    <h4><div class="menu-separator"></div></h4>
    <li><a href="/index.html"><span class="material-symbols-outlined">cottage</span>Home</a></li>
    <li><a href="/pages/games/index.html"><span class="material-symbols-outlined">stadia_controller</span>Games</a></li>
    <li><a href="/pages/themes.html"><span class="material-symbols-outlined">palette</span>Themes</a></li>
    <li><a href="/pages/update.html"><span class="material-symbols-outlined">update</span>Updates</a></li>
    <li><a href="/pages/contact.html"><span class="material-symbols-outlined">outgoing_mail</span>Contact Me</a></li>
  </ul>
</aside>


  `;

  document.body.insertBefore(navbar, document.body.firstChild);

  var navigationLinks = navbar.getElementsByTagName('a');

  for (var i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function(event) {
      var target = event.target.getAttribute('href');
      console.log('Navigating to:', target);
      // Add your navigation logic here
    });
  }

  document.body.style.marginTop = "30px";
});
