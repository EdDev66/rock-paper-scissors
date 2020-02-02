let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

let visualScore = document.querySelector('.score');
let visualPcScore = document.querySelector('.pcScore');
const computerPicks = ['rock', 'paper', 'scissors'];
let compChoice;

let msg = document.querySelector('.msg');
let score = 0;
let pcScore = 0;

rock.addEventListener('click', () => {
   
    gameOn('rock');
});
paper.addEventListener('click', () => {
  
    gameOn('paper');
});
scissors.addEventListener('click', () => {
    
    gameOn('scissors');
});

function gameOn(choice){
    compChoice = computerPicks[rng()];
    if(choice == 'rock' && compChoice == 'scissors'){
        msg.innerHTML = 'Player wins vs Scissors!';
        score++;
        visualScore.innerHTML = 'Player = ' + score;
    }
     else if (choice == 'rock' && compChoice == 'paper') {
        msg.innerHTML = 'Player loses vs paper!';
        pcScore++;
        visualPcScore.innerHTML = 'Computer = ' + pcScore;

    }
     else if (choice == 'paper' && compChoice == 'scissors'){
        msg.innerHTML = 'Player loses vs scissors!';
        pcScore++;
        visualPcScore.innerHTML = 'Computer = ' + pcScore;
     }
     else if (choice == 'paper' && compChoice == 'rock'){
        msg.innerHTML = 'Player wins vs Rock!';
        score++;
        visualScore.innerHTML = 'Player = ' + score;
     }
     else if (choice == 'scissors' && compChoice == 'paper'){
        msg.innerHTML = 'Player wins vs paper!';
        score++;
        visualScore.innerHTML = 'Play = ' + score;
     }
     else if (choice == 'scissors' && compChoice == 'rock'){
        msg.innerHTML = 'Player loses vs rock!';
        pcScore++;
        visualPcScore.innerHTML = 'Computer = ' + pcScore;
     }
     else {
         msg.innerHTML = 'It\'s a draw!';
     }
}

function rng(rand) {
     rand = Math.floor(Math.random()*computerPicks.length);
    return rand;
}
