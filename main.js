let min = 1;
let max = 10;
let guessCount = 3;

const guessInput = document.getElementById('guess-input').addEventListener('keydown', function(){
  
});


function generateRandom(lower, upper){
  return Math.ceil(Math.random()* ((upper - lower) + lower));

}

var rand = generateRandom(min, max);
