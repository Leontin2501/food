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

export default calc;