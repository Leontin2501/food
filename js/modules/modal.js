function modal () {
    const openModal = document.querySelectorAll('[data-modal]'),
           modalParent = document.querySelector('.modal');
           
           
    
    openModal.forEach(item => {
        item.addEventListener('click', openM);
    });

    function closeM (){
        modalParent.style.display = 'none';
        document.body.style.overflow = '';
    }

    function openM () {
        modalParent.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearInterval(openTimer);
    }

    const openTimer = setTimeout (openM, 50000);
    

    // closeModal.addEventListener('click', closeM);

    modalParent.addEventListener ('click', (e) => {
    const target = e.target;
        if (target === modalParent || target.getAttribute('data-close') == ''){
            closeM();
        }   
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalParent.style.display == 'block') {
            closeM();
        }
    });

    // window.onscroll = function(ev) {
    //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //         openM();
    //     }
    // };

    function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openM();
            clearInterval(openTimer);
            window.removeEventListener('scroll',  showModalByScroll);
            }
        }
    
    window.addEventListener('scroll', showModalByScroll);
   
}

module.exports = modal;