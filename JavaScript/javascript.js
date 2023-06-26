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
    // prevent default link behavior
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

$(document).ready(function () {
  let typed1 = new Typed(".change-text", {
    strings: ["Full Stack Developer", "System-Administrator"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  //   var typed2 = new Typed(".typing-2", {
  //     strings: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
  //     typeSpeed: 100,
  //     backSpeed: 60,
  //     loop: true,
  //   });
});
// document.addEventListener("touchstart", function () {}, true);
// setTimeout(() => {
//   let test = document.getElementById("loader");
//   test.remove();
// }, 3000);
// document.addEventListener("touchstart", function () {}, true);