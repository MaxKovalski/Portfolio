const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});
$(document).ready(function () {
  var typed1 = new Typed(".change-text", {
    strings: ["Full Stack Developer", "System-Administrator"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  document.querySelectorAll(".navbar a").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navbar.classList.remove("active");
    })
  );
  //   var typed2 = new Typed(".typing-2", {
  //     strings: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
  //     typeSpeed: 100,
  //     backSpeed: 60,
  //     loop: true,
  //   });
});
