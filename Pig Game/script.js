'use strict';

const roll = document.querySelector('.roll');
const hold = document.querySelector('.hold');
const newgame = document.querySelector('.newGame');
const randomDice = document.querySelector('.diceimg');
const finalMessage = document.querySelector('.buriBuri');

const currentPL1 = document.querySelector('#current--0');
const currentPL2 = document.querySelector('#current--1');

let currentScore = 0;
let finalScore = [0,0];
let flag = 0;
document.querySelector(`.side--${flag}`).style.backgroundColor = "rgba(255, 255, 255, 0.547)";
newgame.addEventListener('click',function(){
    reset();
});

roll.addEventListener('click', function(){
    const rand = Math.floor(Math.random()*6)+1;
    randomDice.classList.remove('hidden');
    randomDice.src = `/Pig Game/images/dice-${rand}.png`;

    if(rand!==1){
        currentScore +=rand;
        document.querySelector(`#current--${flag}`).textContent = currentScore;
    }
    else{
        currentScore = 0;
        document.querySelector(`#current--${flag}`).textContent = currentScore;

        switching();

    }
});

hold.addEventListener('click', function(){
    
    
    finalScore[flag] = finalScore[flag]+currentScore;
    document.querySelector(`.score--${flag}`).textContent = finalScore[flag];
    currentScore = 0;
    document.querySelector(`#current--${flag}`).textContent = currentScore;
    if(Number(document.querySelector(`.score--${flag}`).textContent) >= 20){
        message();
    }
    
    switching();    
});

const switching = function(){
    document.querySelector(`.side--${flag}`).style.backgroundColor = 'transparent';
    flag = flag === 0 ? 1 : 0;
    document.querySelector(`.side--${flag}`).style.backgroundColor = "rgba(255, 255, 255, 0.547)";
    document.querySelector(`.side--${flag}`).style.borderRadius = "25px";
};

const reset = function(){
    finalScore[0] = 0;
    finalScore[1] = 0;
    document.querySelector('.diceimg').classList.add('hidden');
    currentScore = 0;
    document.querySelector('#current--0','#current--1').textContent = currentScore;
    document.querySelector('.score--0').textContent = finalScore[0];
    document.querySelector('.score--1').textContent = finalScore[1];
};

const message = function(){
    finalMessage.classList.remove('hidden');
    document.querySelector('.finalMessage').textContent = `Player ${flag+1} won!`;
    
    document.querySelector('.cross').addEventListener('click', hide);
}

const hide = function(){
    finalMessage.classList.add('hidden');
}