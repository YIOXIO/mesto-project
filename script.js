let minus = document.querySelectorAll('.card__trash');
minus.forEach((elem) => {
    elem.addEventListener('click', removeParent);
});
function removeParent() {
    let revDiv = this.parentElement;
    revDiv.remove();
}



let popup = document.querySelector('.popup'); // Фон попап окна
let openPopupButtons = document.querySelectorAll('.profile__edit-button'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.popup__close-button'); // Кнопка для скрытия окна
openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popup.classList.add('popup_opened'); // Добавляем класс 'active' для фона
    })
});
closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
    popup.classList.remove('popup_opened'); // Убираем активный класс с фона

});

// let cardsContainer = document.querySelector('.elements__cards')
// let cards = cardsContainer.querySelectorAll('.card')


// function addCard() {
//     cardsContainer.insertAdjacentHTML('afterbegin', '<li class="card"><img src="./images/Karachevsk.jpg" alt="Сентинский храм Карачаево-Черкесия" class="card__image"><div class="card__wrapper"><h2 class="card__name">Карачаево-Черкессия</h2><button type="button" aria-label="Поставить лайк" class="card__like"></button></div><button type="button" aria-label="Удалить" class="card__trash"></button></li>')
// }

let popupNewItem = document.querySelector('#new');
let popupOpen = document.querySelector('.profile__button');
popupOpen.addEventListener('click', () => {
    popupNewItem.classList.add('popup_opened')
});

