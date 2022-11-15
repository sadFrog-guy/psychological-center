const date = new Date()

let copyrightEl = document.querySelector('.footer_copyright');

const modalButton = document.querySelectorAll('.modal_button')
const modalEl = document.querySelector('.modal')
const emptyEl = document.querySelector('.empty')

let burgerEl = document.querySelector('.burger');
let burgerContentEl = document.querySelector('.burger_content');


// const isTrainingDateExpired = () => {
//     const trainingDateElems = document.querySelectorAll('.training_date__item')
//     const currentDate = [date.getDate(), date.getMonth(), date.getFullYear()].join('/')
//
//     for (const trainingDate of trainingDateElems) {
//         console.log(trainingDate.innerText < currentDate)
//
//         if(trainingDate.innerText < currentDate) {
//
//         }
//     }
// }

const copyrightCurrentYear = () => {
    const year = new Date().getFullYear();
    copyrightEl.innerHTML =  `@ ${year === 2022 ? year : '2022-' + year} Медицинский центр врача Ростовцевой`;
}

const burgerOnClick = () => {
    if(burgerContentEl.className.includes('active')) {
        burgerContentEl.className = 'burger_content'
    } else {
        burgerContentEl.className = burgerContentEl.className + ' active'
    }
};

const modalOnClick = () => {
    if(!modalEl.className.includes('active')) {
        modalEl.className += ' active'
    } else {
        modalEl.className = 'modal'
    }
}

const emptyFieldOnClick = () => {
    modalEl.className = 'modal'
}

window.addEventListener('load', copyrightCurrentYear)
window.addEventListener('load', isTrainingDateExpired)
burgerEl.addEventListener('click', burgerOnClick);
for (const button of modalButton) {
    button.addEventListener('click', modalOnClick)
}
emptyEl.addEventListener('click', emptyFieldOnClick)