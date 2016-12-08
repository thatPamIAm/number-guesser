var userGuess = document.getElementById("guess-field");
var guessButton = document.querySelector(".guess-button");

var clearButton = document.querySelector(".clear-button");
var lastGuess = document.getElementById("last-guess");

var tooLowHigh = document.getElementById("too-high-low");
var yourLastGuess = document.getElementById("your-last-guess");

var resButton = document.querySelector(".res-button");
var ranNum = Math.floor(Math.random() * 100 + 1);

function emptyField(){
  userGuess.value="";
}

clearButton.addEventListener('click',function(){
  emptyField();
})

resButton.addEventListener('click', function(){
  location.reload();
});

guessButton.addEventListener('click', function (){
  var userNumber = parseInt(userGuess.value);
  emptyField();

  if (userNumber === ranNum){
    yourLastGuess.innerText="Your last guess was"
    lastGuess.innerText = userNumber;
    tooLowHigh.innerText = "Boom!";

}

else if (userNumber < ranNum){
  yourLastGuess.innerText="Your last guess was"
  lastGuess.innerText = userNumber;
  tooLowHigh.innerText = "That is too low!";
}

else if (userNumber > ranNum) {
  yourLastGuess.innerText="Your last guess was"
  lastGuess.innerText = userNumber;
  tooLowHigh.innerText = "That is too high!";
}
console.log(ranNum);
});
