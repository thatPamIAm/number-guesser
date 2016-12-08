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

// Beginning code to disable clear and reset buttons
// when not needed.

//userGuess.addEventListener('keydown', function(){
//  if (userGuess.value.length === 0) {
//  clearButton.setAttribute('disabled', 'disabled');
//  console.log('disabled');

//userGuess.addEventListener('keyup', function(){
//if (userGuess.value.length > 0) {
//clearButton.removeAttribute('enabled');
//console.log('enabled');
//}});



guessButton.addEventListener('click', function (){
  var userNumber = parseInt(userGuess.value);
  emptyField();

  if (userNumber < 1 || userNumber > 100){
    console.log ("False");
    alert("Your number has to be between 1 and 100!")
    lastGuess.innerText = "not okay!";
  };

if (/\D/.test(userNumber)){
    console.log('This is not a number');
    alert("Your guess must be a number!")
  };

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
