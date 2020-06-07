/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlaying;

init();

var lastDice;

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    hideDice();
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //change player if current player gets number 1
    roundScore = 0; //set score to 0
    //show in the UI the score 0
    document.getElementById('current-0').textContent = '0'; 
    document.getElementById('current-1').textContent = '0';
    
    //toggle active class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    hideDice(); //hide the dice for next player
    
}

function hideDice() {
    document.getElementById('dice-1').style.display = 'none'; //hide the dice for next player
    document.getElementById('dice-2').style.display = 'none'; //hide the dice for next player
};


//roll the dice button
document.querySelector('.btn-roll').addEventListener('click', () => {
    if(gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1; //random number
        var dice2 = Math.floor(Math.random() * 6) + 1; //random number
        
        document.getElementById('dice-1').style.display = 'block'; //show the dice;
        document.getElementById('dice-2').style.display = 'block'; //show the dice;
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png'; //show the dice with an image
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png'; //show the dice with an image
 

        if(dice1 !== 1 && dice2 !==1) { //update score if the rolled number was not a 1
            roundScore += dice1 + dice2; // same than roundScore = roundScore + dice
            document.querySelector('#current-' + activePlayer).textContent = roundScore; // set the value for what the dice returned
        } else {
            nextPlayer();
        };
    
    };
    
});

// hold button
document.querySelector('.btn-hold').addEventListener('click', () => {
    if(gamePlaying) {
        scores[activePlayer] += roundScore; //add current score to global score
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; //update the UI
        
        var input = document.querySelector('.final-score').value;
        var winningScore;
        //check if the input value is empty, undefined , null or ""
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        //check if player won the game
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            hideDice();
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
            
        } else{
            nextPlayer();
        }
    }
});

//new game button

document.querySelector('.btn-new').addEventListener('click', init);




