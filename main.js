let pc = null;
let player = null;
let randomNumber = null;

let resultP = document.querySelector('.js-result');
let movesP = document.querySelector('.js-moves-chosen');

let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
    score = {
        wins : 0,
        loses :0,
        ties: 0,
    }
}

let scoreP = document.querySelector('.js-score');
scoreP.innerHTML = `Score: Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;



function pcChoice() {
                randomNumber = Math.random();
                if (randomNumber <= 0.3) {
                    pc = 'Rock';
                } else if (randomNumber > 0.3 && randomNumber <= 0.6 ) {
                    pc = 'Paper';
                } else {
                    pc = 'Scissors';
                }
                return pc;
            }

function resetScore () {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    scoreP.innerHTML = `Score: Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
    resultP.innerHTML = null;
    movesP.innerHTML = null;

}

function playGame(player) {

    pc = pcChoice();

    let result = null;

    if (player === 'Paper') {
        if (player == pc) {
            result = 'Its a tie';
            } else if (pc == 'Scissors') {
                result = 'Player Lose';
            } else {
                result = 'Player wons';
        }
    } else if (player === 'Scissors') {
        if (player == pc) {
            result = 'Its a tie';
            } else if (pc == 'Rock') {
                result = 'Player Lose';
            } else {
                result = 'Player wons';
            }
    } else {
        if (player == pc) {
                result = 'Its a tie';
            } else if (pc == 'Paper') {
                result = 'Player Lose';
            } else {
                result = 'Player wons';
            }
    }

    if (result==='Its a tie') {
        score.ties += 1;
    } else if (result==='Player wons') {
        score.wins += 1;
    } else {
        score.loses +=1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    resultP.innerHTML = result;

    let movesP = document.querySelector('.js-moves-chosen');
    movesP.innerHTML = 
                      ` You
                      <img class="move-icon" src="https://supersimple.dev/projects/rock-paper-scissors/images/${player.toLowerCase()}-emoji.png">
                      <img class="move-icon" src="https://supersimple.dev/projects/rock-paper-scissors/images/${pc.toLowerCase()}-emoji.png">
                        PC
                      `;

    scoreP.innerHTML = `Score: Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;

    /*alert(`You chose ${player}, pc chose ${pc}. ${result}. 
    Score: Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`)
    */
    

}

