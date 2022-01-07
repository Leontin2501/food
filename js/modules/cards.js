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

    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
       
        return await res.json();
    };

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

module.exports = cards;