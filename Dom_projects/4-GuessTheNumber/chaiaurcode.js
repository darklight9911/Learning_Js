const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');//peragraph inserted in the resultParas div

let prevGuess = [];
let numGuess = 0;

let playGame = true;//allow to play the game

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
        
    });
}

function validateGuess(guesses){
    //range validation
    if(isNaN(guesses)){
        alert('Please enter a valid number');
        }
    else if(guesses < 1 || guesses > 100){
        alert('Please enter a number between 1 and 100');
    }
    else if(prevGuess.includes(guesses)){
        alert('You already guessed that number. Try again!');
    }
    else {
        prevGuess.push(guesses);//append in array
        //console.log(prevGuess);
        if(numGuess === 10){
            displayGuess(guesses);
            displayMessage(`Game Over! You have used all your attempts.Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guesses);
            // displayMessage(`You have ${11 - numGuess} attempts left`);
            //remaining.innnerHTML = `${11 - numGuess}`;
            checkGuess(guesses);
        }
    }
}

function checkGuess(guess) {
    //check if the guess is correct
    if(guess === randomNumber){
        displayMessage(`Congratulations! ${guess} is the correct number!`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage('Last guess was too low!');
        //lowOrHi.textContent = 'Last guess was too low!';
    } else {
        displayMessage('Last guess was too high!');
        //lowOrHi.textContent = 'Last guess was too high!';
    }
}

function displayGuess(guess) {
    //display the cleanup guess in the guesses div
    // console.log(guess);
    userInput.value = '';
    guessSlot.innerHTML += `${guess},`;//append the guess in the guesses div
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(msg){
    //dom manupulation
    //display the message in the resultParas div
    lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame(){
    playGame = false;
    // userInput.disabled = true;
    // submit.disabled = true;
    userInput.value = '';
    userInput.setAttribute('disabled', 'disabled');
    submit.setAttribute('disabled', 'disabled');
    remaining.innerHTML = 0;
    p.classList.add('button');
    p.innerHTML = `<button class="button" id="newGame">Start new game</button>`;
    startOver.appendChild(p);

    newGame();
    

}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        //firstly reset all values
        numGuess = 0;
        prevGuess = [];
        randomNumber = parseInt(Math.random() * 100 + 1);
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10 - numGuess}`;
        lowOrHi.innerHTML = '';
        //remove the disabled attribute from the input and button
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        // p.remove();
        startOver.removeChild(p);
        //finally reset the playGame variable to true
        playGame = true;

    });

}

