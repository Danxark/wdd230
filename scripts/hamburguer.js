const hamburguerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburguerElement.addEventListener('click', () =>{
    navElement.classList.toggle('open');
    hamburguerElement.classList.toggle('open');

});