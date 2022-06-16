// alert("working")
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 =  "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage1;

var image1 =  document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomDiceImage2 =  "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomDiceImage2;

var image2 =  document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);


if (randomNumber1 > randomNumber2) {

  document.querySelector("h1").textContent = "🚩Player 1 Wins!";

}

if (randomNumber1 < randomNumber2) {

  document.querySelector("h1").textContent = "Player 2 Wins!🚩";

}

if (randomNumber1 == randomNumber2) {

  document.querySelector("h1").textContent = "Draw!";

}
