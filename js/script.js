window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedHeader = header.offsetTop;

  if (window.scrollY > fixedHeader) {
    header.classList.add("nav-scroll");
  } else {
    header.classList.remove("nav-scroll");
  }
};
