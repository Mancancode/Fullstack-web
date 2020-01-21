var randomNumber1 = Math.floor(Math.random()*6) +1; //andm number between 1 & 6

var randomdiceImage = "dice" + randomNumber1 + ".png" ;//dice.png1 -png6
var randomimageSource ="images/" + randomdiceImage; // images/dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimageSource );s

