// Game Logic

document.addEventListener('DOMContentLoaded', () => {
  // Computer Random Selection
  const computerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissor'];

    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomWeapon = choices[randomIndex];
    return randomWeapon;
  };

  let playerScore = 0;
  let computerScore = 0;

  document.getElementById('rock').addEventListener('click', () => {
    document.getElementById('player-choice').innerHTML = 'Rock';
    const computer = (document.getElementById('computer-choice').innerHTML =
      computerChoice());

    if (computer === 'Rock') {
      document.getElementById('result').innerHTML = 'Tie!';
    } else if (computer === 'Paper') {
      document.getElementById('result').innerHTML = 'Computer Wins!';
      document.getElementById('computer-score').innerHTML = computerScore += 1;
    } else {
      document.getElementById('result').innerHTML = 'You Win!';
      document.getElementById('player-score').innerHTML = playerScore += 1;
    }

    if (playerScore === 5) {
      const modal = document.querySelector('.winner-modal');
      const winner = document.querySelector('.winner');

      winner.innerHTML = 'Congratulations, you win!';
      modal.classList.add('active');

      const playAgainButton = document.getElementById('play-again');
      playAgainButton.addEventListener('click', () => {
        location.reload();
      });
    }

    if (computerScore === 5) {
      const modal = document.querySelector('.winner-modal');
      const winner = document.querySelector('.winner');

      winner.innerHTML = 'Computer wins!';
      modal.classList.add('active');

      const playAgainButton = document.getElementById('play-again');
      playAgainButton.addEventListener('click', () => {
        location.reload();
      });
    }
  });

  document.getElementById('paper').addEventListener('click', () => {
    document.getElementById('player-choice').innerHTML = 'Paper';
    const computer = (document.getElementById('computer-choice').innerHTML =
      computerChoice());

    if (computer === 'Paper') {
      document.getElementById('result').innerHTML = 'Tie!';
    } else if (computer === 'Rock') {
      document.getElementById('result').innerHTML = 'You Win!';
      document.getElementById('player-score').innerHTML = playerScore += 1;
    } else {
      document.getElementById('result').innerHTML = 'Computer Wins!';
      document.getElementById('computer-score').innerHTML = computerScore += 1;
    }

    if (playerScore === 5) {
      const modal = document.querySelector('.winner-modal');
      const winner = document.querySelector('.winner');

      winner.innerHTML = 'Congratulations, you win!';
      modal.classList.add('active');

      const playAgainButton = document.getElementById('play-again');
      playAgainButton.addEventListener('click', () => {
        location.reload();
      });
    }

    if (computerScore === 5) {
      const modal = document.querySelector('.winner-modal');
      const winner = document.querySelector('.winner');

      winner.innerHTML = 'Computer wins!';
      modal.classList.add('active');

      const playAgainButton = document.getElementById('play-again');
      playAgainButton.addEventListener('click', () => {
        location.reload();
      });
    }
  });

  document.getElementById('scissor').addEventListener('click', () => {
    document.getElementById('player-choice').innerHTML = 'Scissor';
    const computer = (document.getElementById('computer-choice').innerHTML =
      computerChoice());

    if (computer === 'Scissor') {
      document.getElementById('result').innerHTML = 'Tie!';
    } else if (computer === 'Paper') {
      document.getElementById('result').innerHTML = 'You Win!';
      document.getElementById('player-score').innerHTML = playerScore += 1;
    } else {
      document.getElementById('result').innerHTML = 'Computer Wins!';
      document.getElementById('computer-score').innerHTML = computerScore += 1;
    }

    if (playerScore === 5) {
      const modal = document.querySelector('.winner-modal');
      const winner = document.querySelector('.winner');

      winner.innerHTML = 'Congratulations, you win!';
      modal.classList.add('active');

      const playAgainButton = document.getElementById('play-again');
      playAgainButton.addEventListener('click', () => {
        location.reload();
      });
    }

    if (computerScore === 5) {
      const modal = document.querySelector('.winner-modal');
      const winner = document.querySelector('.winner');

      winner.innerHTML = 'Computer wins!';
      modal.classList.add('active');

      const playAgainButton = document.getElementById('play-again');
      playAgainButton.addEventListener('click', () => {
        location.reload();
      });
    }
  });
});
