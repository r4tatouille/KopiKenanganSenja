// Toggle class active
const navbarnav = document.querySelector(".navbar-nav");

// Ketika menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};
