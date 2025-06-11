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
    // Preloader страницы
const preloader = document.querySelector('.preloader');
const content = document.querySelector('.content');
if (preloader && content) {
    setTimeout(() => {
        // Скрываем прелоадер
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';

        // Показываем контент
       content.style.display = 'block';

        // Удаляем элемент из DOM
        preloader.remove();
    }, 1000); // Задержка 3 секунды
}

//задание 3.5 
const headerMenu = document.querySelector('.menu');
if (headerMenu){
        const menuData = {
            link1: {
                link: '#',
                title: 'Главная',
            },
            link2: {
                link: '#',
                title: 'Процесс обучения',
            },
            link3: {
                link: '#',
                title: 'Цены',
            },
            link3: {
                link: '#',
                title: 'Отзывы',
            },
            link3: {
                link: '#',
                title: 'Конакты',
            }
        }
        const createLink = (UrlLink, title) =>{
            const link = `
                <li class="menu__item">
                    <a class="menu__link" href="#">${title}</a>
                </li>
            `;
            return link;
        }
        for (const linkItem in menuData) {
            const link = menuData[linkItem];
            const linkIndex = createLink(link.UrlLink, link.title);
            headerMenu.insertAdjacentHTML('beforeend', linkIndex);
        }
        console.log('Навигацинное меню создано с помощью javascript!');
    }
// объявляем переменную sliders,куда помещаем элемент с классом swiper
const sliders = document.querySelector('.swiper');
//проверяем существует ли элемент
    if (sliders) {
        const swiper1 = new Swiper(sliders, {
            // Пагинация
            pagination: {
                el: '.swiper-pagination',
                type: "fraction",
            },
            // Навигационные стрелки
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        }); 
    }
    const dialogApplication = document.querySelector(".sign");
    const formApplication = document.querySelector("#formApplication"); 
// Проверяем, существует ли элемент formApplication
if (formApplication) {  
    // Добавляем обработчик события для отправки формы
   formApplication.addEventListener("submit", (event) => {
     event.preventDefault(); // Предотвращаем отправку формы
    // Объявляем переменные "username", "tel","email",   и помещаем в нее элементы с id из формы
     const username = formApplication.querySelector("#username").value;
     const tel = formApplication.querySelector("#tel").value;

     // Объявляем переменную modalMessage и помещаем в нее элемент для отображения сообщений о статусе заявки
const modalMessage = dialogApplication.querySelector("#application-message");
    
      // Проверка длины имени пользователя
      if (username.length < 3) {
         modalMessage.textContent = "Имя пользователя должно содержать не менее 3 символов";
         modalMessage.style.color = "black"; // Устанавливаем цвет сообщения об ошибке
         return;
      }
    
       // Проверка номера телефона
      if (!/^\d{10,}$/.test(tel)) {
          modalMessage.textContent = "Номер телефона должен содержать только цифры и быть не менее 10 символов";
          modalMessage.style.color = "black"; // Устанавливаем цвет сообщения
          return;
      }
    
      // Здесь можно добавить отправку данных на сервер
      modalMessage.textContent = "Заявка отправлена!";
      modalMessage.style.color = "green"; // Устанавливаем цвет сообщения для успешной отправки
    
      // Записываем данные в localStorage
      window.localStorage.setItem("username", username);
      window.localStorage.setItem("tel", tel);
});
}