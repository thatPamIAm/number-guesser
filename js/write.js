var guess = document.getElementById('guess-field');
var box = document.getElementById('box');
var submitGuessButton = document.querySelector('.guess-button');
var SubmitClearButton = document.querySelector('.clear-button');
var SubmitResetButton = document.querySelector('.reset-button');

submitGuessButton.addEventListener('click', function(){
  var userGuess =
  box.innerText = guess.value;
})
// if (answer < randomNum) - display "That is too low"
// if(answer > randomNum) - display "That is too high"
// if (answer == randomNum) - display "BOOM!"
// return false;

//function for clearing fieldset

//function for resetting fieldset
