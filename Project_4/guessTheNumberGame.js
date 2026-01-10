let random = parseInt(Math.random()*100+1);

let userInput = document.querySelector('#userInput');
const button = document.querySelector('#submit');
const prevGuess = document.querySelector('#prevGuess');
const remainingGuess = document.querySelector('#remainingGuess');
const res = document.querySelector('#answer');
const startOver = document.querySelector('.result')

const p = document.createElement('p');

let prev = [];
let remainGuess = 1;

let game = true;

if(game){
    button.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please Enter valid number`);
    } else if(guess < 1){
        alert(`Please Enter number greater than 1`);
    } else if(guess > 100){
        alert(`Please Enter number less than 100`);
    } else {
        prev.push(guess);
        if(remainGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === random){
        displayMessage(`Congratulation You Won the game`);
        endGame();
    } else if(guess < random){
        displayMessage(`Number is too Low`);
    } else if(guess > random){
        displayMessage(`Number is too High`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    prevGuess.innerHTML += `${guess}, `;
    remainGuess++;
    remainingGuess.innerHTML = `${11 - remainGuess}`;
}

function displayMessage(message){
    res.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    game = false;
    startGame();
}

function startGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        random = parseInt(Math.random() * 100 + 1);
        prev = [];
        remainGuess = 1;
        prevGuess.innerHTML = '';
        remainingGuess.innerHTML = `${11 - remainGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}

