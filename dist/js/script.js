'use strict';

const humburger = document.querySelector('.navbar__humburger'),
    modal = document.querySelector('.modal'),
    overlay = document.querySelector('.modal__overlay'),
    close = document.querySelector('.modal__close');

humburger.addEventListener('click', () => {
    modal.classList.add('active');
});

const closeModal = function () {
    modal.classList.remove('active');
};

close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
