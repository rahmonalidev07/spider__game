// const box = document.querySelector(".box");
//
// create document
//
// const form = document.createElement("form");
//
// const input = document.querySelector(".box-model");
//
// console.log(input);
const body = document.getElementsByTagName("body");

const spiderImage = document.querySelector("img");
const innerWidth = window.innerWidth - 50;
const innerHeight = window.innerHeight - 50;
const score = document.getElementById("score");
const inputOne = document.getElementById("input--one");
const inputTwo = document.getElementById("input--two");
const submitBtn = document.getElementById("modal__btn");
const modal = document.querySelector(".modal");
const easyBtn = document.getElementById("easy");
const normalBtn = document.getElementById("normal");
const hardBtn = document.getElementById("hard");
const select = document.querySelector(".select");
const spiderImg = document.getElementById("spider-image");
const box = document.querySelector(".box");
const stopBtn = document.getElementById("stop--btn");
const endScore = document.getElementById("end-score");
const endHide = document.querySelector(".endGame");
const spiderHide = document.querySelector(".spider-hide");

let counter = 0;
function normal() {
  setInterval(() => {
    let top = Math.random() * innerWidth;
    let left = Math.random() * innerHeight;

    spiderImage.style = `
      transition: 0.8s;
      position:absolute;
      left: ${top}px;
      top: ${left}px;
      `;
  }, 700);
}
function easy() {
  setInterval(() => {
    let top = Math.random() * innerWidth;
    let left = Math.random() * innerHeight;

    spiderImage.style = `
      transition: 0.8s;
      position:absolute;
      left: ${top}px;
      top: ${left}px;
      `;
  }, 1200);
}
function hard() {
  setInterval(() => {
    let top = Math.random() * innerWidth;
    let left = Math.random() * innerHeight;

    spiderImage.style = `
      transition: 0.8s;
      position:absolute;
      left: ${top}px;
      top: ${left}px;
      `;
  }, 400);
}
document.addEventListener("click", (e) => {
  if (e.target.getAttribute("id") == "spider-image") {
    counter += 1;
    score.textContent = `Score:${counter}`;
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let inputName = inputOne.value;
  let inputSurname = inputTwo.value;
  modal.style.display = "none";
  modal.style.transition = "0.5s";
  modal.style.transform = "translateY(-800px)";
  select.classList.remove("hide");
  localStorage.setItem("ism", `${inputName}`);
  localStorage.setItem("familiya", `${inputSurname}`);
});
easyBtn.addEventListener("click", () => {
  easy();
});
normalBtn.addEventListener("click", () => {
  normal();
});
hardBtn.addEventListener("click", () => {
  hard();
});
select.addEventListener("click", () => {
  select.classList.add("hide");
});

stopBtn.addEventListener("click", () => {
  spiderImg.style.display = "none";
  endScore.textContent = `${counter}ta ushlay oldingiz`;
  endHide.classList.remove("end-hide");
});
