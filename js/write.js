var userGuess = document.getElementById('guess-field');
var guessButton = document.querySelector('.guess-button');

var clearButton = document.querySelector('.clear-button');
var lastGuess = document.getElementById('last-guess');

var tooLowHigh = document.getElementById('too-high-low');
var resButton = document.querySelector('.res-button');

var ranNum = Math.floor(Math.random() * 100 + 1);

clearButton.addEventListener('click',function(){
  console.log('PIZZZA');
  // document.getElementById('guess-field').value;
  clearMe();
});


function clearMe() {
  return userGuess.value= "";
};
///test
// if (answer < randomNum) - display "That is too low"
// if(answer > randomNum) - display "That is too high"
// if (answer == randomNum) - display "BOOM!"
// return false;

//clickEventListener for guessbutton

//clickEventListener for clear button

//clickeventlistener for reset button
