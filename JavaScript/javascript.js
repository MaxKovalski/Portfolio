const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
  header.classList.toggle("active");
});
document.querySelectorAll(".navbar a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
    header.classList.toggle("active");
  })
);
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});
$(document).ready(function () {
  let typed1 = new Typed(".change-text", {
    strings: ["Full Stack Developer", "IT Specialist"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
setTimeout(() => {
  let loader = document.getElementById("loader");
  loader.remove();
  document.body.style.overflow = "visible";
}, 3000);
document.body.style.overflow = "hidden";
