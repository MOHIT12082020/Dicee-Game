var randomnumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomDiceImage1 = "dice" + randomnumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource1 = "images/" + randomDiceImage1; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);


var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomnumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


if(randomnumber1 == randomnumber2){
  document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}
else if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Win!";
}
else{
  document.querySelector("h1").innerHTML = "Player 2 Win!🚩";
}
