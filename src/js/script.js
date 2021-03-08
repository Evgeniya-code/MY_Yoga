'use strict';

const btn = document.querySelector('.navbar__btn'),
    modal = document.querySelector('.modal'),
    overlay = document.querySelector('.modal__overlay'),
    close = document.querySelector('.modal__close');

// humburger.addEventListener('click', () => {
//     modal.classList.add('active');
// });
btn.addEventListener('click', () => {
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

document.addEventListener('scroll', () => {
    setTimeout(closeModal, 300);
});

const swiper = new Swiper('.swiper-container', {
    // autoplay: {
    //     delay: 1000,
    // },
    speed: 1000,
    direction: 'horizontal',
    effect: 'coverflow',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
