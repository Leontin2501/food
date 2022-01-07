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

export default slider;