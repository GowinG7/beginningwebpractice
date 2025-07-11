const board = document.getElementById('board');
const cells = Array.from(board.children);
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
    const cell = e.target;
    cell.textContent = currentPlayer;
    cell.removeEventListener('click', handleClick, { once: true });

    if (checkWin(currentPlayer)) {
        setTimeout(() => {
            alert(`Player ${currentPlayer} wins!`);
            resetBoard();
        }, 100);
    } else if (checkDraw()) {
        setTimeout(() => {
            alert('It\'s a draw!');
            resetBoard();
        }, 100);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin(player) {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    return winningCombos.some(combo => {
        return combo.every(index => {
            return cells[index].textContent === player;
        });
    });
}

function checkDraw() {
    return [...cells].every(cell => {
        return cell.textContent !== '';
    });
}

function resetBoard() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.addEventListener('click', handleClick, { once: true });
    });
    currentPlayer = 'X';
}

resetButton.addEventListener('click', resetBoard);