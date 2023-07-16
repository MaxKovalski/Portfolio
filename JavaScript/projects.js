const borderElem = document.querySelectorAll(".border-elem");
// PROJECT - 1
const modalBtn = document.getElementById("modalBtn");
const modalX = document.getElementById("modalX");
const modal = document.getElementById("modal");

modalBtn.addEventListener("click", () => {
  modal.style.animation = "fadeIn 0.5s forwards";
  modal.style.display = "flex";

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
// PROJECT - 4
const modalBtn4 = document.getElementById("modalBtn4");
const modalX4 = document.getElementById("modalX4");
const modal4 = document.getElementById("modal4");
modalBtn4.addEventListener("click", () => {
  modal4.style.animation = "fadeIn 0.5s forwards";
  modal4.style.display = "flex";
  for (let i = 3; i < 4; i++) {
    borderElem[i].style.border = "none";
  }
});
modalX4.addEventListener("click", () => {
  modal4.style.animation = "fadeOut 0.5s forwards";
  for (let i = 3; i < 4; i++) {
    borderElem[i].style.border = "2px solid #393e46";
  }

  setTimeout(() => {
    modal4.style.display = "none";
  }, 500);
});
// PROJECT - 5
const modalBtn5 = document.getElementById("modalBtn5");
const modalX5 = document.getElementById("modalX5");
const modal5 = document.getElementById("modal5");
modalBtn5.addEventListener("click", () => {
  modal5.style.animation = "fadeIn 0.5s forwards";
  modal5.style.display = "flex";
  for (let i = 4; i < 5; i++) {
    borderElem[i].style.border = "none";
  }
});
modalX5.addEventListener("click", () => {
  modal5.style.animation = "fadeOut 0.5s forwards";
  for (let i = 4; i < 5; i++) {
    borderElem[i].style.border = "2px solid #393e46";
  }

  setTimeout(() => {
    modal5.style.display = "none";
  }, 500);
});
// PROJECT - 6
const modalBtn6 = document.getElementById("modalBtn6");
const modalX6 = document.getElementById("modalX6");
const modal6 = document.getElementById("modal6");
modalBtn6.addEventListener("click", () => {
  modal6.style.animation = "fadeIn 0.5s forwards";
  modal6.style.display = "flex";
  for (let i = 5; i < 6; i++) {
    borderElem[i].style.border = "none";
  }
});
modalX6.addEventListener("click", () => {
  modal6.style.animation = "fadeOut 0.5s forwards";
  for (let i = 5; i < 6; i++) {
    borderElem[i].style.border = "2px solid #393e46";
  }

  setTimeout(() => {
    modal6.style.display = "none";
  }, 500);
});

// PROJECT - 7
const modalBtn7 = document.getElementById("modalBtn7");
const modalX7 = document.getElementById("modalX7");
const modal7 = document.getElementById("modal7");
modalBtn7.addEventListener("click", () => {
  modal7.style.animation = "fadeIn 0.5s forwards";
  modal7.style.display = "flex";
  for (let i = 6; i < 7; i++) {
    borderElem[i].style.border = "none";
  }
});
modalX7.addEventListener("click", () => {
  modal7.style.animation = "fadeOut 0.5s forwards";
  for (let i = 6; i < 7; i++) {
    borderElem[i].style.border = "2px solid #393e46";
  }

  setTimeout(() => {
    modal7.style.display = "none";
  }, 500);
});
