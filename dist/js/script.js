'use strict';

const humburger = document.querySelector('.navbar__humburger'),
    modal = document.querySelector('.modal'),
    overlay = document.querySelector('.modal__overlay'),
    close = document.querySelector('.modal__close');

// humburger.addEventListener('click', () => {
//     modal.classList.add('active');
// });
humburger.addEventListener('click', () => {
    setTimeout(function () {
        modal.classList.add('active');
    }, 200);
});

const closeModal = function () {
    modal.classList.remove('active');
};

close.addEventListener('click', () => {
    setTimeout(closeModal, 300);
});

overlay.addEventListener('click', () => {
    setTimeout(closeModal, 300);
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
