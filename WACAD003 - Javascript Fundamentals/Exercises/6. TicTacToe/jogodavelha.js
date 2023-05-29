const squares = document.querySelectorAll('.square'); // filtra todos os componentes .square
let player = 'X'; // inicia com o X
let winner = null; // inicia sem nenhum vencedor

function handleClick(event) {
    const square = event.target;
    const squareIndex = parseInt(square.dataset.square);

    if (square.textContent !== '' || winner !== null) {
        return;
    }

    square.textContent = player;
    square.classList.add(player);

    // se a ultima jogada ocasionou em um criterio de ganho, anuncia o jogador vencedor
    if (checkForWinner()) {
        winner = player;
        document.getElementById('winner').textContent = `O jogador ${winner} venceu!`;
    // Se deu empate, anuncia o empate
    } else if (checkForTie()) {
        document.getElementById('winner').textContent = 'Empate!';
    
    // Se ainda nao acabou, passa a vez para o outro jogador
    } else {
        player = player === 'X' ? 'O' : 'X';
    }
}

// verifica as possibilidades de ganho, caso positivo retorna true, else falso
function checkForWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6]             // Diagonais
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (squares[a].textContent === player &&
            squares[b].textContent === player &&
            squares[c].textContent === player) {
            return true;
        }
    }
    return false;
}

// Se nenhum quadrado for "", quer dizer que todos os quadrados foram preenchidos, e sem nenhum veredito, obtem-se o empate
function checkForTie() {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].textContent === '') {
            return false;
        }
    }
    return true;
}

// insira um listener (ouvinte) em todos os quadrados, que ficara esperando o evento click, declarado la encima
squares.forEach(square => {
    square.addEventListener('click', handleClick);
});