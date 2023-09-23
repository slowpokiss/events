import goblinPNG from "../../img/goblinPNG.png";

export default class timeOut {
  constructor() {
    this.mainField = document.querySelector('.main_field')
    this.field = document.querySelectorAll(".field");
    this.goblinPNG = goblinPNG;

    this.miss = 0;
  }

  intervalFunc() {
    let currNumb = 0;
    const goblin = `<img src='${goblinPNG}' class="goblin" alt="goblin"></img>`;
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
    clearInterval(this.intervalId)
  }
}