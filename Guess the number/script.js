'use strict'

let rand = Math.floor(Math.random()*20)+1;
// document.querySelector('.number').textContent = rand;
let score = 20;
let highscore = 0;  
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;
document.querySelector('.check').addEventListener('click', function() {
    
    const userInput = Number(document.querySelector('.guess').value);
    
    if(!userInput){
        document.querySelector('.message').textContent = "Enter something ⚠️⚠️⚠️";
    }

    //Guess more than actual

    else if(score>0 && userInput !== rand){
        document.querySelector('body').style.backgroundColor = '#CD5050';

        document.querySelector('.message').textContent = userInput>rand ? 'Too High!' : 'Too Low!';
        score--;
        document.querySelector('.score').textContent = score;

    }
    //Player wins 

    else if(userInput === rand){
        document.querySelector('.number').style.width = "40%";
        document.querySelector('.number').textContent = rand;
        
        document.querySelector('body').style.backgroundColor = 'green';

        // document.querySelector('.message').textContent = "Correct answer!";
        message('.message','Correct');
        score++;
        document.querySelector('.score').textContent = score;

        if(score>highscore) highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
    else{
        document.querySelector('.message').textContent = "Game Lost";
    }
});


//Reload functionality

document.querySelector('.again').addEventListener('click', function(){
    
    score = 20;
    rand = Math.floor(Math.random()*20)+1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = ' ';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = "#222";
});

const message = function(str, str2){
    document.querySelector(str).textContent = str2;
}