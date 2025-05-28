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
// Кнопка прокрутки вверх
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    // Показываем кнопку при прокрутке вниз
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Прокрутка вверх при клике
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
//Объявляем переменную ReviewsContainer и сохраняем в нее элементы reviews
const TReviewsContainer = document.querySelector(".reviews");

//  проверяем существует ли элемент ReviewsContainer, если он существует то переходим далее
    if (TReviewsContainer) {
//далее создаем массив dataTitleReviews, который содержит строки с именами тренеров.(здесь уже пишем те значения, которые надо подставить вместо слова ученик 1, ученик 2)
        const dataTitleReviews = [
            "Ирина Лайм",
            "Марина Орлова",
            "Максим Петров",


        ];

//Объявляем переменную titleReviews и сохраняем в нее все элементы на странице с классом reviews__subtitle (где должны стоять имена)
        const titleReviews =
            TReviewsContainer.querySelectorAll(".reviews__subtitle");

// Проходим по каждому элементу массива titleTreners с помощью цикла forEach. Внутри функции 2 переменные: item – текущий заголовок, а index — его индекс в массиве.
            titleReviews.forEach((item, index) => {

//здесь обновляем значение текущего заголовка (textContent) на новое значение из массива dataTitleCards, используя индекс текущего заголовка.
            item.textContent = dataTitleReviews[index];
           });
    }


