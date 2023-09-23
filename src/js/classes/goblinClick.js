import timeOut from "./timeOut";

export default class goblinClick extends timeOut {
  constructor() {
    super();
    this.counter = document.querySelector(".counter");

    this.mainField.addEventListener("click", (ev) => {
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
