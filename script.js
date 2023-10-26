"use strict";

const tabs = document.querySelectorAll(".tab-btn");
const tabsContainer = document.querySelector(".tabs-container");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab-btn");
  console.log(clicked.dataset.tab);

  //Guard clause
  if (!clicked) return;

  // remove the active class from all tabs
  if (clicked) tabs.forEach((tab) => tab.classList.remove("tab-btn-1-active"));
  clicked.classList.add(`tab-btn-1-active`);
  // add the active class
  document
    .querySelector(`.tab-btn-${clicked.dataset.tab}`)
    .classList.add("tab-btn-1-active");
});
