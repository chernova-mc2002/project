'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});

/* 
*   Алгоритм
*
*   1. Начало.
*   2. Получаем все элементы изображений с описанием.
*   3. Для каждого изображения:
*       3.1. Проверка условия: мышка наведена.
*       3.1.1. Да: 
          3.1.1.1: Отображаем текст под картинкой.
*         3.1.2. Нет: Продолжаем
*       3.2. Проверка условия: мышка уходит с изображения.
*       3.2.1. Да: 
          3.2.1.1: Скрываем текст под картинкой.
*       3.2.2. Нет: Продолжаем
*   4. Конец
* 
*   Блок-схема: /images/block-schema.png
*/

const intensiveImg = document.querySelector(".prof__image img");

intensiveImg.addEventListener('mouseenter', () => {
    console.log('Мышка наведена на изображение, показываем текст');
    document.querySelectorAll('.alt-text').forEach(el => el.remove());
  const altText = intensiveImg.alt;
  
  if (altText) {
    const displayEl = document.createElement('div');
    displayEl.className = 'alt-text';
    displayEl.textContent = altText;
    
    intensiveImg.insertAdjacentElement('afterend', displayEl);
  }
});

intensiveImg.addEventListener('mouseleave', () => {
    console.log('Мышка убрана с изображения, скрываем текст');
    document.querySelectorAll('.alt-text').forEach(el => el.remove());
});


const intensiveEksImg = document.querySelector(".eks__image");

intensiveEksImg.addEventListener('mouseenter', () => {
    console.log('Мышка наведена на изображение, показываем текст');
    document.querySelectorAll('.alt-text').forEach(el => el.remove());
    const altText = intensiveEksImg.alt;
  
    if (altText) {
        const displayEl = document.createElement('div');
        displayEl.className = 'alt-text';
        displayEl.textContent = altText;
        
        intensiveEksImg.insertAdjacentElement('afterend', displayEl);
    }
});

intensiveEksImg.addEventListener('mouseleave', () => {
    console.log('Мышка убрана с изображения, скрываем текст');
    document.querySelectorAll('.alt-text').forEach(el => el.remove());
});


const ekspertContainer = document.querySelector(".eks__cards");

// проверяем существует ли элемент ekspertContainer, если он существует то переходим далее
  if (ekspertContainer) {
    const dataTitleEksperts= [
            "Мария Иванова",
            "Елена Петрова",
            "Анна Орлова",
        ];

//Объявляем переменную titleEkperts и сохраняем в нее все элементы на странице с классом ekp__subtitle (где должны стоять имена экспертов)
        const titleEksperts =ekspertContainer.querySelectorAll(".eks__subtitle");

// Проходим по каждому элементу массива titleEksperts с помощью цикла forEach. Внутри функции 2 переменные: item – текущий заголовок, а index — его индекс в массиве.
      titleEksperts.forEach((item, index) => {

//здесь обновляем значение текущего заголовка (textContent) на новое значение из массива dataTitleCards, используя индекс текущего заголовка.
      item.textContent = dataTitleEksperts[index];
           });
    }


//Задание 3.5 (заменено на динамическую загрузку из json-файла)
//Объявляем переменную headerMenu и сохраняем в нее header__menu
//const headerMenu = document.querySelector('.header__menu');
// Если такой элемент существует
//if (headerMenu){
//Объявляем переменную headerList и сохраняем в нее header__list, чтобы мы могли добавить новые элементы
//        const headerList = headerMenu.querySelector('.header__list');

//Создаем объект menuData, который содержит данные для трех ссылок меню.
/*         const menuData = {
// Каждая ссылка содержит link (адрес ссылки; если ссылка никуда не ведет, то можно оставить #) и title (текст ссылки).
           link1: {
                link: '#',
                title: 'Главная',
            },
            link2: {
                link: '#',
                title: 'История',
            },
            link3: {
                link: '#',
                title: 'Разделы',
            },
            link4: {
                link: '#',
                title: 'Термины',
            },
            link5: {
                link: '#',
                title: 'Ответы',
            }
        }
*/
//Создаем функцию createLink, которая будет добавлять ссылку в меню. Внутри функции 2 переменные: UrlLink – адрес, а title — текст ссылки.
//        const createLink = (UrlLink, title) =>{
// создаем переменную  link, которая будет содержать HTML-код ссылки и вставляем в него 2 переменные
//            const link = `
//            <li class="header__item"><a href="${UrlLink}" class="menu__link">${title}</a></li>
//            `;
//            return link;
//        }

// Создаем цикл for и проходим по всем элементам объекта menuData.
//        for (const linkItem in menuData) {
//Получаем данные для ссылки и сохраняем в переменную link.
//            const link = menuData[linkItem];
//Создаем переменную linkIndex и вызываем функцию createLink, куда передаем адрес и заголовок.
//            const linkIndex = createLink(link.UrlLink, link.title);
// С помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка headerList.
//            headerList.insertAdjacentHTML('beforeend', linkIndex);
//
//        }
//}


//Объявляем переменную cardsImages и сохраняем в нее элементы 
    const headerMenu = document.querySelector(".header__menu");
   //  проверяем существует ли элемент 
if (headerMenu) {
//Объявляем переменную и сохраняем в нее список
        const headerList = headerMenu.querySelector(".header__list");
// Пример URL для получения данных с сервера (откуда загружаются данные)
        const apiUrl = "data.json";
        // Функция для создания элемента
// объявляем функцию, принимает 3 параметра itemTitle, itemLink

        const createItem = (itemTitle, itemLink) => {
            const menuItem = `
            <li class="list__element"><a class="menu__link" href="${itemLink}">${itemTitle}</a></li>
        `;
 //возвращает строку, которая содержит HTML-код для меню
            return menuItem;
        };



        // Запрос к серверу с помощью метода fetch
        fetch(apiUrl)
        // После того как запрос выполнен, возвращается объект Response, где вызывается метод json(), который преобразует ответ в формат JSON
        .then((response) => response.json())
        //получение данных 
        .then((items) => {
            console.log(items); // Вывод данных в консоль
            console.log(typeof items); // Вывод в консоль Типа полученных данных

            items.forEach((item) => {
        // создается переменная cardElement, где для каждого элемента массива вызывается функция createCard и передаются параметры
                const menuElement = createItem(
                    item.title,
                    item.link
                );
        // Добавление карточки на страницу в список  с помощью метода insertAdjacentHTML beforeend указывает, что карточка должна быть добавлена в конец списка
                headerList.insertAdjacentHTML("beforeend", menuElement);
            });
            

        });

}


// Карусель (слайдер)
const slider = document.querySelector('.swiper');

if (slider) {
    const swiper = new Swiper(slider, {
        // Дополнительные параметры
        slidesPerView: 2, // Количество слайдов на экране
        spaceBetween: 30, // Расстояние между слайдами
        loop: true,  // Зацикливание слайдов

        // Пагинация
        pagination: {
            el: '.swiper-pagination',
        },

        // Навигационные стрелки
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}