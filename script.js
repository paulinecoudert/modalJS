'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//Function to drive the code use below on addEventListener
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Function to drive the code use below on addEventListener
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//array for each button open Modal
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal); //call function openModal
}

//Part close
btnCloseModal.addEventListener('click', closeModal); //call function closeModal
//part overlay
overlay.addEventListener('click', closeModal); //call function closeModal
