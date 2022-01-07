import {closeM, openM} from './modal';
import {postData} from '../services/services';


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



            postData(' http://localhost:3000/requests', json)
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
        openM('.modal', openTimer);

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
            closeM('.modal');
        }, 4000);
    }

    fetch('http://localhost:3000/menu')
    .then(data => data.json())
    .then(res => console.log(res));

}
export default forms;