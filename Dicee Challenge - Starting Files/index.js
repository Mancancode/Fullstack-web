//Dice1
var randomNumber1 = Math.floor(Math.random()*6) +1; //randm number between 1 & 6

var randomdiceImage = "dice" + randomNumber1 + ".png" ;//dice.png1 -png6
var randomimageSource ="images/" + randomdiceImage; // images/dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimageSource );

// Dice 2 
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomdiceImage = "dice"+ randomNumber2 + ".png";
var randomimageSource = "images/" + randomdiceImage;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimageSource);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 win";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else { 
    document.querySelector("h1").innerHTML = "Draw game";
}


