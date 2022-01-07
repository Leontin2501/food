
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

export default modal;
export {closeM};
export {openM};
