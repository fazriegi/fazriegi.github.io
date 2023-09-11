// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNavbar = header.offsetTop;

  if (window.scrollY > fixedNavbar) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const toggleList = document.querySelector(".toggle-list");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != navMenu && e.target != hamburger) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});
