"use strict";

const $t = document.querySelector(".tBtn");
const $p = document.querySelector(".pBtn");
const $s = document.querySelector(".sBtn");
const $allItems = document.querySelectorAll(".content__item");
console.log($allItems);

$t.addEventListener("click", () => {
  activationType("t");
});

$p.addEventListener("click", () => {
  activationType("p");
});

$s.addEventListener("click", () => {
  activationType("s");
});
// active추가 or 삭제 함수 - 옷종류에따른
const activationType = (type) => {
  $allItems.forEach((item) => {
    if (item.classList[2] === type) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

const $blue = document.querySelector(".blueBtn");
const $yellow = document.querySelector(".yellowBtn");
const $pink = document.querySelector(".pinkBtn");

$blue.addEventListener("click", () => {
  activationColor("blue");
});

$yellow.addEventListener("click", () => {
  activationColor("yellow");
});

$pink.addEventListener("click", () => {
  activationColor("pink");
});

// 옷색깔에 따른 active 추가 or삭제 함수
const activationColor = (type) => {
  $allItems.forEach((item) => {
    if (item.classList[1] === type) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};
