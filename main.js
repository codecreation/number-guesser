let min = 1;
let max = 10;
let guessCount = 3;
let rand = 5;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//UI min max
minNum.textContent = min;
maxNum.textContent = max;

//listening for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);




    if(isNaN(guess) || guess < min || guess > max){
      setMessage('Please enter a number between ' + min + ' and ' + max, 'red');
    }
    //check to win
    if(guess === rand){
      guessInput.disabled = true;
      guessInput.style.borderColor = 'green';
      setMessage('CORRECT! You win with ' + guessCount + ' attempts remaining', 'green');
    }else if(guess > rand && guess <= max){
      guessCount--;
        setMessage('Too high. You have ' + guessCount + ' attempts left.', 'orange');
      }else if(guess < rand && guess >= min){
          guessCount--;
          setMessage('Too low. You have ' + guessCount + ' attempts left.', 'orange');
      }
      if(guessCount === 0){
        guessInput.disabled = true;
        setMessage('You lose!');
      }
})

//set message

function setMessage(msg, color) {

  message.innerHTML = msg;
  message.style.color = color;
  setTimeout(clearMsg, 3500);

}

//clear msg

function clearMsg(){
  message.innerHTML = '';
}

//rand num generation

// function generateRandom(lower, upper){
//   return Math.ceil(Math.random()* ((upper - lower) + lower));
//
// }
//
// var rand = generateRandom(min, max);
