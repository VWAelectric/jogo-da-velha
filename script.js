let currentPlayer = 'X';
let gameActive = true;
let gameState = Array(9).fill('');
let scoreX = 0;
let scoreO = 0;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function makeMove(cell, index) {
  if (cell.innerHTML === '' && gameActive) {
    cell.innerHTML = currentPlayer;
    gameState[index] = currentPlayer;
    if (checkWin()) {
      alert(`Jogador ${currentPlayer} ganhou!`);
      if (currentPlayer === 'X') {
        scoreX++;
        document.getElementById('scoreX').innerText = scoreX;
      } else {
        scoreO++;
        document.getElementById('scoreO').innerText = scoreO;
      }
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  return winningConditions.some(condition => {
    return condition.every(index => gameState[index] === currentPlayer);
  });
}

function restartGame() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.innerHTML = '';
  });
  gameState = Array(9).fill('');
  currentPlayer = 'X';
  gameActive = true;
  document.getElementById('message').innerText = '';
}

function resetScore() {
  scoreX = 0;
  scoreO = 0;
  document.getElementById('scoreX').innerText = scoreX;
  document.getElementById('scoreO').innerText = scoreO;
}