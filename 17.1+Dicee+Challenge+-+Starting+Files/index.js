var number1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").src = "./images/dice" + number1 + ".png";

var number2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").src = "./images/dice" + number2 + ".png";

if (number1 > number2) {
  document.querySelector("h1").innerText = "Player 1 Wins!";
} else if (number1 < number2) {
  document.querySelector("h1").innerText = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerText = "Draw!";
}
