'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); 
console.log(btnsOpenModal);

for(let i = 0; i < btnsOpenModal.length; i++) 
//this line work through all three buttons. we need to add an event list (or event handler, they are the same).

//no braces {} to define the block. just like if...else statemen, i actually don't have to create the block to execute over & over again.

console.log(btnsOpenModal[i].textContent);


