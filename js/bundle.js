/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc () {
    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;

    if (localStorage.getItem('sex')){
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
    }


    if (localStorage.getItem('ratio')){
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
    }

    function rememberData (selector, active) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(item => {
            item.classList.remove(active);
            if (localStorage.getItem('sex') === item.getAttribute('id')) {
                item.classList.add(active);
            } 
            if (localStorage.getItem('ratio') === item.getAttribute('data-ratio')) {
                item.classList.add(active);
            }
        });
    }

    rememberData('#gender div', 'calculating__choose-item_active');
    rememberData('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcResult() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '___';
            return;
        }

        if (sex ==='female') {
            result.textContent =  Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age) * ratio));
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age) * ratio));
        }
    }

    function getStatic  (parent, active) {
        const elements = document.querySelectorAll(`${parent} div`);

            elements.forEach(item => {
                item.addEventListener ('click', (e) => {
    
                if (e.target.getAttribute('data-ratio')) {
                    ratio = e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
                
            elements.forEach(item => {
                item.classList.remove(active);
                
            });
             e.target.classList.add(active);

             console.log(sex,ratio);

             calcResult();
            });  
        });
    }

    getStatic('#gender', 'calculating__choose-item_active');
    getStatic('.calculating__choose_big', 'calculating__choose-item_active');
    


    function getDinamic (number) {
        const input = document.querySelector(number);

        input.addEventListener('input', () => {
            if (input.value.match(/\D/g)){
                input.style.border = '1px solid red';
            } else {
                input.style.border = '1px solid green';
            }

            switch(input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    console.log(height);
                    break;
                case 'weight':
                    weight = +input.value;
                    console.log(weight);
                    break;
                case 'age':
                    age = +input.value;
                    console.log(age);
                    break;
            } 

            calcResult();
        });
    }

    getDinamic('#height');
    getDinamic('#weight');
    getDinamic('#age');

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards (){
    class MenuItem {
        constructor(img, title, descr, price, selectorItem, ...classes) {
            this.selectorItem = document.querySelector(selectorItem);
            this.img = img;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            
                element.innerHTML = `
                
                <img src="${this.img}" alt="vegy">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.selectorItem.append(element);
        }
    }

    

    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({img, title, descr, price}) =>{
    //             new MenuItem(img, title, descr, price, '.menu .container').render();
    //         });
    //     });

    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({img, title, descr, price}) =>{
                 new MenuItem(img, title, descr, price, '.menu .container').render();
             });
        });
   

    // new MenuItem(
    //     '.menu .container',
    //     'img/slider/paprika.jpg', 
    //     'Меню "ожирение"', 
    //     'нужно хавать пицу чтобы быть жирним', 
    //     100,
    //     )
    //     .render();

    // new MenuItem(
    //     '.menu .container',
    //     'img/slider/paprika.jpg', 
    //     'Меню "похудение"', 
    //     'не нужно хавать пицу чтобы быть жирним', 
    //     100,
    //     'menu__item'
    //     )
    //     .render();

    // new MenuItem(
    //     '.menu .container',
    //     'img/slider/paprika.jpg', 
    //     'Меню "похуй"', 
    //     'роби шо хочеш', 
    //     100,
    //     'menu__item'
    //     )
    //     .render();

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");




function forms (formSelector, openTimer) {
    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/spinner.svg',
        succes: 'Ok',
        failure: 'Error'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
           
            form.insertAdjacentElement('afterend', statusMessage);

            // const request = new XMLHttpRequest();
            // request.open('POST', 'js/sercer.php');

        

            // request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);

            

            const json = JSON.stringify(Object.fromEntries(formData.entries()));



            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)(' http://localhost:3000/requests', json)
            // .then(data => data.text())
            .then(data => {
                console.log(data);
                showThanksModal(message.succes);
                form.reset();
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() =>{
                form.reset();
            });

            // request.send(formData);
            // request.send(json);

            // request.addEventListener('load', () => {
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         showThanksModal(message.succes);
            //         form.reset();
            //         statusMessage.remove();
            //     } else {
            //         showThanksModal(message.failure);
            //     }
                
                
            // });
        });
    }

    //     showItem() {
    //         const shablon = document.querySelector('.menu__item'),
    //               img = shablon.querySelector('img'),
    //               title = shablon.querySelector('.menu__item-subtitle'),
    //               text = shablon.querySelector('.menu__item-descr'),
    //               price = shablon.querySelector('.menu__item-total');
            
    //         img.src = this.img;
    //         title.innerHTML = this.title;
    //         text.innerHTML = this.text;
    //         price.innerHTML = `<span>${this.price}</span> грн/день`;
            
    //     }
    // }

    // const div = new MenuItem('', 'img/slider/paprika.jpg', 'ожирение', 'нужно хавать пицу', '100' );
    // div.showItem();

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.style.display = "none";
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openM)('.modal', openTimer);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close">&times;</div>
            <div calss="modal__title">${message}</div> 
        </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.style.display = 'block';
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeM)('.modal');
        }, 4000);
    }

    fetch('http://localhost:3000/menu')
    .then(data => data.json())
    .then(res => console.log(res));

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "closeM": () => (/* binding */ closeM),
/* harmony export */   "openM": () => (/* binding */ openM)
/* harmony export */ });

    function closeM (modalSelector){
        const modalParent = document.querySelector(modalSelector);

        modalParent.style.display = 'none';
        document.body.style.overflow = '';
    }

    function openM (modalSelector, openTimer) {
        const modalParent = document.querySelector(modalSelector);

        modalParent.style.display = 'block';
        document.body.style.overflow = 'hidden';

        console.log(openTimer);
        if (openTimer){
            clearInterval(openTimer);
        }

    }

function modal (triggerSelector, modalSelector, openTimer) {
    const openModal = document.querySelectorAll(triggerSelector),
           modalParent = document.querySelector(modalSelector, openTimer);
           
           
    
    openModal.forEach(item => {
        item.addEventListener('click', () => openM(modalSelector));
    });


    

    // closeModal.addEventListener('click', closeM);

    modalParent.addEventListener ('click', (e) => {
    const target = e.target;
        if (target === modalParent || target.getAttribute('data-close') == ''){
            closeM(modalSelector);
        }   
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalParent.style.display == 'block') {
            closeM(modalSelector);
        }
    });

    // window.onscroll = function(ev) {
    //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //         openM();
    //     }
    // };

    function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openM(modalSelector, openTimer );
            clearInterval(openTimer);
            window.removeEventListener('scroll',  showModalByScroll);
            }
        }
    
    window.addEventListener('scroll', showModalByScroll);
   
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);




/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider ({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {

                        // 1)

    // const slides = document.querySelectorAll('.offer__slide'),
    //       btnNext = document.querySelector('.offer__slider-next'),
    //       btnPrev = document.querySelector('.offer__slider-prev'),
    //       current = document.getElementById('current'),
    //       total = document.getElementById('total');
    
    // let sl = 0;
    
    

    // showSlide(sl);

    // function hideSlide() {
    //     slides.forEach(item => {
    //         item.style.display = 'none';
    //     });
    // }
    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }
    

    // function showSlide(i) {
    //     if (i > slides.length - 1){
    //         sl = 0;
    //     }
    //     if (i < 0) {
    //         sl = slides.length - 1;
    //     }
    //     hideSlide();  
    //     slides[sl].style.display = 'block'; 
    //     if (slides.length < 10) {
    //         current.textContent = `0${sl + 1}`;
    //     } else { 
    //         current.textContent = sl + 1;
    //     }

    // }

    // btnNext.addEventListener('click', () => {
    //     showSlide(sl += 1); 
    
    // });

    // btnPrev.addEventListener('click', () => {
    //     showSlide(sl -= 1);
       
    // });



                        // 2)

                        const slides = document.querySelectorAll(slide),
                        slider = document.querySelector(container),
                        next = document.querySelector(nextArrow),
                        prev = document.querySelector(prevArrow),
                        current = document.getElementById(currentCounter),
                        total = document.getElementById(totalCounter),
                        slidesWrapper = document.querySelector(wrapper),
                        slidesField = document.querySelector(field),
                        width = window.getComputedStyle(slidesWrapper).width,
                        widthRepl = +width.replace(/\D/g, '');
                  
                  let slideIndex = 1;
                  let offset = 0;
              
              
                  if (slides.length < 10) {
                      total.textContent = `0${slides.length}`;
                      current.textContent = `0${slideIndex}`;
                  } else {
                      total.textContent = slides.length;
                      current.textContent = slideIndex;
                  }
              
              
              
                  slidesField .style.width = 100 * slides.length + '%';
                  slidesField.style.display = 'flex';
                  slidesField.style.transition = '0.5s all';
              
                  slidesWrapper.style.overflow = 'hidden';
              
                  slides.forEach(slide => {
                      slide.style.width = width;
                  });
              
                  slider.style.position = 'relative';
              
                  const indicators = document.createElement('ol'),
                        dots = [];
              
                  indicators.classList.add('carousel-indicators');
                  slider.append(indicators);
              
                  for (let i = 0; i < slides.length; i++){
                      const dot = document.createElement('li');
                      dot.setAttribute('data-slide-to', i + 1);
                      dot.classList.add('dot');
                      if ( i == 0) {
                          dot.style.opacity = 1;
                      }
                      indicators.append(dot);
                      dots.push(dot);
              
                  }
              
                  next.addEventListener('click', () => {
                      if (offset == widthRepl * (slides.length - 1)){
                          offset = 0;
                      } else {
                          offset += widthRepl;
                      }
              
                      slidesField.style.transform = `translateX(-${offset}px)`;
              
                      if(slideIndex == slides.length) {
                          slideIndex = 1;
                      } else {
                          slideIndex++;
                      }
              
                      if (slides.length < 10) {
                          current.textContent = `0${slideIndex}`;
                      } else {
                          current.textContent = slideIndex;
                      }
              
                      dots.forEach(dot => dot.style.opacity = '.5');
                      dots[slideIndex - 1].style.opacity = 1; 
                  });
              
                  prev.addEventListener('click', () => {
                      if (offset == 0){
                          offset = widthRepl * (slides.length - 1);
                      } else {
                          offset -= widthRepl;
                      }
              
                      slidesField.style.transform = `translateX(-${offset}px)`;
              
                      if(slideIndex == 1) {
                          slideIndex = slides.length;
                      } else {
                          slideIndex--;
                      }
              
                      if (slides.length < 10) {
                          current.textContent = `0${slideIndex}`;
                      } else {
                          current.textContent = slideIndex;
                      }
              
              
                      dots.forEach(dot => dot.style.opacity = '.5');
                      dots[slideIndex - 1].style.opacity = 1;
                  });
              
                  dots.forEach(dot => {
                      dot.addEventListener('click', (e) => {
                          const slideTo = e.target.getAttribute('data-slide-to');
              
                          slideIndex = slideTo;
                          
                          offset = widthRepl * (slideTo - 1);
                          
                          slidesField.style.transform = `translateX(-${offset}px)`;
              
                          if (slides.length < 10) {
                              current.textContent = `0${slideIndex}`;
                          } else {
                              current.textContent = slideIndex;
                          }
              
                          dots.forEach(dot => dot.style.opacity = '.5');
                          dots[slideIndex - 1].style.opacity = 1;
                      });
                  });
                  
                  slidesWrapper.addEventListener('click', (e) => {
                      
              
                      if(e.layerX >=0 && e.layerX < 120) {
                          if (offset == 0){
                              offset = widthRepl * (slides.length - 1);
                          } else {
                              offset -= widthRepl;
                          }
                  
                          slidesField.style.transform = `translateX(-${offset}px)`;
                  
                          if(slideIndex == 1) {
                              slideIndex = slides.length;
                          } else {
                              slideIndex--;
                          }
                  
                          if (slides.length < 10) {
                              current.textContent = `0${slideIndex}`;
                          } else {
                              current.textContent = slideIndex;
                          }
                  
                  
                          dots.forEach(dot => dot.style.opacity = '.5');
                          dots[slideIndex - 1].style.opacity = 1;
                      }
                      if(e.layerX <=650 && e.layerX > 530) {
                          if (offset == widthRepl * (slides.length - 1)){
                              offset = 0;
                          } else {
                              offset += widthRepl;
                          }
                  
                          slidesField.style.transform = `translateX(-${offset}px)`;
                  
                          if(slideIndex == slides.length) {
                              slideIndex = 1;
                          } else {
                              slideIndex++;
                          }
                  
                          if (slides.length < 10) {
                              current.textContent = `0${slideIndex}`;
                          } else {
                              current.textContent = slideIndex;
                          }
                  
                          dots.forEach(dot => dot.style.opacity = '.5');
                          dots[slideIndex - 1].style.opacity = 1; 
                      }
                  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs (tabsSelector, tabsContentSelector, tabsParentSelector, activeClass){
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent(0);

    tabsParent.addEventListener('click', (e) =>{
        const target = e.target;

        if(target && target.classList.contains(tabsSelector.slice(1))){
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer (id, deadLine) {


    function getTimeRemainig(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / 1000 / 60 / 60 / 24),
              hours = Math.floor(t / 1000 / 60 / 60 % 24),
              minutes = Math.floor(t / 1000 / 60 % 60),
              seconds =  Math.floor(t / 1000 % 60);
        return {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function getZero (num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemainig(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadLine);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "getResource": () => (/* binding */ getResource)
/* harmony export */ });
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: data
    });

    return await res.json();
};

const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
   
    return await res.json();
};






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
          
          
          
          
          
          
          

window.addEventListener('DOMContentLoaded', () => {
    const openTimer = setTimeout (() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openM)('.modal', openTimer), 50000);
    
          

    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal');
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])('.timer', '2022-01-25');
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])('form', openTimer);
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        totalCounter: 'total',
        currentCounter: 'current',
        wrapper: '.offer__slider-wrapper', 
        field: '.offer__slider-inner'

    });
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])();
});




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map