/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblinPNG.png
const goblinPNG_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/classes/timeOut.js

class timeOut {
  constructor() {
    this.mainField = document.querySelector('.main_field');
    this.field = document.querySelectorAll(".field");
    this.goblinPNG = goblinPNG_namespaceObject;
    this.miss = 0;
  }
  intervalFunc() {
    let currNumb = 0;
    const goblin = `<img src='${goblinPNG_namespaceObject}' class="goblin" alt="goblin"></img>`;
    this.intervalId = setInterval(() => {
      let randNumb = Math.floor(Math.random() * this.field.length);
      this.field[currNumb].innerHTML = "";
      if (this.miss === 5) {
        this.counter.textContent = "YOU LOSE!";
        this.clear();
      }
      if (currNumb !== randNumb) {
        currNumb = randNumb;
        this.field[currNumb].insertAdjacentHTML("beforeend", goblin);
      } else {
        while (currNumb === randNumb) {
          randNumb = Math.floor(Math.random() * this.field.length);
        }
        currNumb = randNumb;
        this.field[currNumb].insertAdjacentHTML("beforeend", goblin);
      }
      this.miss += 1;
    }, 1000);
  }
  clear() {
    clearInterval(this.intervalId);
  }
}
;// CONCATENATED MODULE: ./src/js/classes/goblinClick.js

class goblinClick extends timeOut {
  constructor() {
    super();
    this.counter = document.querySelector(".counter");
    this.mainField.addEventListener("click", ev => {
      const goblinFinder = this.mainField.querySelector(".goblin");
      if (ev.target === goblinFinder) {
        ev.target.parentElement.innerHTML = "";
        this.counter.textContent++;
        this.miss = 0;
        if (this.counter.textContent === "5") {
          this.counter.textContent = "YOU WIN!";
          this.clear();
        }
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const glb = new goblinClick();
glb.intervalFunc();
;// CONCATENATED MODULE: ./src/index.js


// TODO: write your code in app.js
/******/ })()
;