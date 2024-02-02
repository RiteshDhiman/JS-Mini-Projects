'use strict';

const btns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closebtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const closingModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function(){
    modal.classList.remove('hidden');               //Removes class from an element
    overlay.classList.remove('hidden');             //Removes class from an element

}

for(let i = 0 ; i<btns.length; i++){
    btns[i].addEventListener('click', openModal);
}


closebtn.addEventListener('click', closingModal);
closebtn.addEventListener('mouseover', function(){
    closebtn.style.color = 'red';
});
closebtn.addEventListener('mouseleave', function(){
    closebtn.style.color = 'black';
});
overlay.addEventListener('click', closingModal);

document.addEventListener('keydown', function(event){
    // console.log(event);
    if(event.key === "Escape"){
        if(!modal.classList.contains('hidden')){
            closingModal();
        }
    }
})