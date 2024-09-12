'use strict';

/*
document.querySelector('.message').textContent;
document.querySelector('.message').textContent = 'Correct Number!😊';

document.querySelector('.number').textContent = '?';
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 10;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  guess = Number(guess);
  console.log(guess, typeof guess);

  //daca nu am introdus nimic
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
  ///cand castigam
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number🙌!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30 rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    //verificam daca scorul e inca peste 0 altfel pierdem
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15 rem';
});
