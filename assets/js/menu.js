const menu = document.querySelector("#menu-icon");
const header = document.querySelector("#header");
const colorWhite = "header-white";
const colorTransparent = "header-transparent";
menu.addEventListener("click", () => {
  const classHiddenNavBar = "hidden-navbar";
  const navbarmenu = document.querySelector("#navbarmenu");
  if (!navbarmenu.classList.contains(classHiddenNavBar)) {
    if (window.scrollY == 0) {
      header.classList.remove(colorWhite);
    }
    navbarmenu.classList.add(classHiddenNavBar);
  } else {
    navbarmenu.classList.remove(classHiddenNavBar);
    header.classList.add(colorWhite);
  }
});

window.addEventListener("scroll", () => {
  const Y = window.scrollY;

  if (Y == 0) {
    if (header.classList.contains(colorWhite)) {
      header.classList.remove(colorWhite);
    }
    if (!header.classList.contains(colorTransparent)) {
      header.classList.add(colorTransparent);
    }
  } else {
    if (header.classList.contains(colorTransparent)) {
      header.classList.remove(colorTransparent);
    }
    if (!header.classList.contains(colorWhite)) {
      header.classList.add(colorWhite);
    }
  }
});
