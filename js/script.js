const burger = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLi = document.querySelector('.menu__list > li');

burger.addEventListener("click", function (event) {
    menuBody.classList.toggle('__invisible');
})

menuLi.addEventListener("click", function (e) {
    menuLi.classList.toggle('__active');
})
