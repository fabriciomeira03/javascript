'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); 

const openModal = function () {
    console.log('Button clicked');
    modal.classList.remove('hidden'); 
    overlay.classList.remove('hidden'); 
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for(let i = 0; i < btnsOpenModal.length; i++) 
btnsOpenModal[i].addEventListener('click', openModal);    

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function(e) {
    console.log(e.key);

if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //means: if modal does not contain hidden class, then close the modal
    //IF the press key is 'escape' AND IF modal does not contain the 'hidden class' THEN execute this function to close the modal
    closeModal();
    }
});
  


/*
////// FIRST CODE. More intuitive, not better though.

btnsOpenModal[i].addEventListener('click', function() {
    console.log('Button clicked');
    modal.classList.remove('hidden'); 
    //no dot ~ '.hidden'
    overlay.classList.remove('hidden'); 
    //overlay is click outside to close
});

btnCloseModal.addEventListener('click', function() {
modal.classList.add('hidden');
overlay.classList.add('hidden');
})

*/

//CSS. display: none means not visible. if we wanted viile would be display: block