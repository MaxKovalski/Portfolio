const borderElem = document.querySelectorAll(".border-elem");
// PROJECT - 1
const modalBtn = document.getElementById("modalBtn");
const modalX = document.getElementById("modalX");
const modal = document.getElementById("modal");

modalBtn.addEventListener("click", () => {
  modal.style.animation = "fadeIn 0.5s forwards";
  modal.style.display = "flex";
  if ((modal.style.display = "flex")) {
    modal2.style.display = "none";
  }
  for (let i = 0; i < 2; i++) {
    borderElem[i].style.border = "none";
  }
});

modalX.addEventListener("click", () => {
  modal.style.animation = "fadeOut 0.5s forwards";
  for (let i = 0; i < 2; i++) {
    borderElem[i].style.border = "2px solid #393e46";
  }

  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
});

// PROJECT - 2
const modalBtn2 = document.getElementById("modalBtn2");
const modalX2 = document.getElementById("modalX2");
const modal2 = document.getElementById("modal2");
modalBtn2.addEventListener("click", () => {
  modal2.style.animation = "fadeIn 0.5s forwards";
  modal2.style.display = "flex";
  if ((modal2.style.display = "flex")) {
    modal.style.display = "none";
  }
  for (let i = 1; i < 2; i++) {
    borderElem[i].style.border = "none";
  }
});

modalX2.addEventListener("click", () => {
  modal2.style.animation = "fadeOut 0.5s forwards";
  for (let i = 1; i < 2; i++) {
    borderElem[i].style.border = "2px solid #393e46";
  }

  setTimeout(() => {
    modal2.style.display = "none";
  }, 500);
});

// PROJECT  - 3
const modalBtn3 = document.getElementById("modalBtn3");
const modalX3 = document.getElementById("modalX3");
const modal3 = document.getElementById("modal3");
modalBtn3.addEventListener("click", () => {
  modal3.style.animation = "fadeIn 0.5s forwards";
  modal3.style.display = "flex";
  if ((modal3.style.display = "flex")) {
    modal.style.display = "none";
  }
  for (let i = 2; i < 3; i++) {
    borderElem[i].style.border = "none";
  }
});

modalX3.addEventListener("click", () => {
  modal3.style.animation = "fadeOut 0.5s forwards";
  for (let i = 2; i < 3; i++) {
    borderElem[i].style.border = "2px solid #393e46";
  }

  setTimeout(() => {
    modal3.style.display = "none";
  }, 500);
});
