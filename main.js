let min = 1;
let max = 30;
let guessCount = 3;
let rand = generateRandom(min, max);



const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//UI min max
minNum.textContent = min;
maxNum.textContent = max;

//play again event
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

//listening for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);


    if(isNaN(guess) || guess < min || guess > max){
      setMessage('Please enter a number between ' + min + ' and ' + max, 'red');
    }
    //check to win
    if(guess === rand){
      gameOver(true, 'CORRECT! You win with ' + guessCount + (guessCount===1?(' attempt remaining'):(' attempts remaining')));

    }else if(guess > rand && guess <= max){
      guessCount--;
        setMessage('Too high. You have ' + guessCount + (guessCount===1?(' attempt left'):(' attempts left')), 'orange');
      }else if(guess < rand && guess >= min){
          guessCount--;
          setMessage('Too low. You have ' + guessCount + (guessCount===1?(' attempt left'):(' attempts left')), 'orange');
      }
      if(guessCount === 0){
        gameOver(false, 'You lose! The number was ' + rand);

      }
})



//game over
function gameOver(won, msg){
  let color;
  won === true? color = 'green': color = 'red';
  guessInput.disabled = true;
  guessBtn.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

//set message

function setMessage(msg, color){

  message.innerHTML = msg;
  message.style.color = color;
}

//rand num generation

function generateRandom(lower, upper){

  return Math.floor(Math.random()*(upper - lower + 1) + lower);

}
