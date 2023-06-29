const modalBtn = document.getElementById("modalBtn");
const modalX = document.getElementById("modalX");
const borderElem = document.querySelectorAll(".border-elem");

modalBtn.addEventListener("click", () => {
  document.getElementById("modal").style.display = "block";
  borderElem.forEach((elem) => {
    elem.style.border = "none";
  });
});

modalX.addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
  borderElem.forEach((elem) => {
    elem.style.border = "2px solid #393e46";
  });
});
