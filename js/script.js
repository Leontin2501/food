          import tabs  from './modules/tabs';
          import modal, { openM }  from './modules/modal';
          import timer  from './modules/timer';
          import forms  from './modules/forms';
          import cards  from './modules/cards';
          import slider  from './modules/slider';
          import calc  from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {
    const openTimer = setTimeout (() => openM('.modal', openTimer), 50000);
    
          

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal');
    timer('.timer', '2022-01-25');
    forms('form', openTimer);
    cards();
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        totalCounter: 'total',
        currentCounter: 'current',
        wrapper: '.offer__slider-wrapper', 
        field: '.offer__slider-inner'

    });
    calc();
});



