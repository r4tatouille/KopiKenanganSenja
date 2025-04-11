// Toggle class active
const navbarnav = document.querySelector(".navbar-nav");

// Ketika menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

//Klik di luar side bar untuk menghilangkan navbar pada tampilah mobile

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
