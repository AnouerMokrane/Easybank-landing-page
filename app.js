let toggle = document.querySelector("nav .toggle");
let menu = document.querySelector("header .links");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("overlay");
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    toggle.children[0].src = "./images/icon-close.svg";
  } else {
    toggle.children[0].src = "./images/icon-hamburger.svg";
  }
});
