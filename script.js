'use strict';

const tabs = document.querySelectorAll('.tab-btn');
const tabsContainer = document.querySelector('.tabs-container');
const allContent = document.querySelectorAll('.content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.tab-btn');
  const tabNumber = clicked.dataset.tab;
  // console.log(tabNumber);

  //Guard clause
  if (!clicked) return;

  // remove the active classes from tabs & content
  if (clicked) tabs.forEach(tab => tab.classList.remove(`active`));
  allContent.forEach(c => c.classList.remove(`content-active`));

  // activate tab
  clicked.classList.add(`tab-btn-${tabNumber}-active`);

  // add the active class to tab
  document.querySelector(`.tab-btn-${tabNumber}`).classList.add(`active`);

  // show the active tab's content
  const content = document.querySelector(`.content__${tabNumber}`);
  content.classList.add(`content-active`);
});
