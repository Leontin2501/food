'use strict';

window.addEventListener('DOMContentLoaded', () => {
   
    const 
          tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          forms = require('./modules/forms'),
          cards = require('./modules/cards'),
          slider = require('./modules/slider'),
          calc = require('./modules/calc');

    tabs();
    modal();
    timer();
    forms();
    cards();
    slider();
    calc();
});



