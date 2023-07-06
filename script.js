'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //Cand nu alegi nimic
  if (!guess) {
    document.querySelector('.message').textContent =
      'Nu ai introdus un numar🥲';

    //Cand castiga jocul
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Ai ghicit numarul, yeee🫡';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    let highscore = score;
    document.querySelector('.highscore').textContent = highscore;

    //Cand numarul este mai mare
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Numarul tau este inferior👇';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game💥';
      document.querySelector('.score').textContent = 0;
    }
    //Cand numarul este mai mic
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Numarul tau este superior👍';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game💥';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//butonul de again

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Ghiceste din nou';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
