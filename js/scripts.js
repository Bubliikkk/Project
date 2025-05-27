'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});

const intensiveImg = document.querySelectorAll('.answers__title');

// Пройдемся по каждому элементу массива intensiveImg, с помощью цикла forEach.  Внутри функции 2 переменные: 
// item - текущее изображение, а index — его номер в массиве, начиная с 0
intensiveImg.forEach((item, index) => {

// Объявляем переменную intensiveText и сохраняем в нее все элементы с классом intensive__description, которые связаны с описаниями для изображений
    const intensiveText = document.querySelectorAll('.intensive__description');

// Когда курсор наводится на изображение (событие mouseenter), срабатывает обработчик события mouseenter:
    item.addEventListener('mouseenter', () => {
	// Делаем изображение полупрозрачным
      item.style.opacity = 0.5;
	// И удаляем атрибут hidden и текст становится видимым
      intensiveText[index].removeAttribute('hidden');
    });

// Когда курсор убираем с изображения (событие mouseleave), срабатывает обработчик события mouseleave:
    item.addEventListener('mouseleave', () => {
	// Изображение делаем непрозрачным
      item.style.opacity = 1;
	// И добавляем атрибут hidden и текст становится видимым
      intensiveText[index].setAttribute('hidden', true);
    });
});


