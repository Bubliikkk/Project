'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});
const intensiveImg = document.querySelector(".answers__title");
intensiveImg.addEventListener('mouseenter', () => {
    console.log('Мышка наведена на изображение, показываем текст');
});

