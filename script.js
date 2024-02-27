const submitButton = document.querySelector("#submit");
const resetButton = document.querySelector("#reset");
const game = document.getElementById("game_output");

function gameOn() {
  const num = document.getElementById("number").value;
  console.log(num);
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      let p = document.createElement("p");
      p.textContent += "FizzBuzz";
      game.appendChild(p);
    } else if (i % 3 === 0) {
      let p = document.createElement("p");
      p.textContent += "Fizz";
      game.appendChild(p);
    } else if (i % 5 === 0) {
      let p = document.createElement("p");
      p.textContent += "Buzz";
      game.appendChild(p);
    } else {
      let p = document.createElement("p");
      p.textContent += i;
      game.appendChild(p);
    }
  }
}

function reset() {
  console.log("reset");
  while (game.firstChild) {
    game.removeChild(game.lastChild);
  }
}

submitButton.addEventListener("click", gameOn);
resetButton.addEventListener("click", reset);
