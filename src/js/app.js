import goblinPNG from "../img/goblinPNG.png";
const field = document.querySelectorAll(".field");

function intervalFunc() {
  let currNumb = 0;
  const goblin = `<img src='${goblinPNG}' class="goblin" alt="goblin"></img>`;
  const intervalId = setInterval(() => {
    let randNumb = Math.floor(Math.random() * field.length);
    field[currNumb].innerHTML = "";
    if (currNumb !== randNumb) {
      currNumb = randNumb;
      field[currNumb].insertAdjacentHTML("beforeend", goblin);
    } else {
      while (currNumb === randNumb) {
        randNumb = Math.floor(Math.random() * field.length);
      }
      currNumb = randNumb;
      field[currNumb].insertAdjacentHTML("beforeend", goblin);
    }

    const counter = document.querySelector(".counter");
    const goblinFinder = document.querySelector(".goblin");
    goblinFinder.addEventListener("click", () => {
      field[currNumb].innerHTML = "";
      counter.textContent++;

      if (counter.textContent === "5") {
        counter.textContent = "YOU WIN!";
        clearInterval(intervalId);
      }
    });
  }, 1000);
}

intervalFunc();
