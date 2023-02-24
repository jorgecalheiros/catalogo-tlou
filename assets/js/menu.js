const menu = document.querySelector("#menu-icon");
menu.addEventListener("click", () => {
  const classHiddenNavBar = "hidden-navbar";
  const navbarmenu = document.querySelector("#navbarmenu");
  if (!navbarmenu.classList.contains(classHiddenNavBar)) {
    navbarmenu.classList.add(classHiddenNavBar);
  } else {
    navbarmenu.classList.remove(classHiddenNavBar);
  }
});
