import { openImage } from './modal.js'
const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const elements = document.querySelector('.elements__cards');
import { getInitialCards } from './api.js';

function createCard(cardData) {
    const card = cardTemplate.cloneNode(true);
    const imageElement = card.querySelector('.card__image');

    imageElement.src = cardData.link;
    imageElement.alt = cardData.name;
    card.querySelector('.card__name').textContent = cardData.name;
    card.querySelector('.card__count-like')
    card.querySelector('.card__trash').addEventListener('click', handleDeleteCard);
    card.querySelector('.card__like').addEventListener('click', handleLikeClick);
    imageElement.addEventListener('click', () => openImage(cardData));

    return card;
}

function renderCard(cardData) {
    elements.prepend(createCard(cardData));
};

getInitialCards()
    .then((cardsData) => {
        cardsData.forEach(renderCard);
    })

function handleDeleteCard(event) {
    const cardElement = event.target.closest('.card');
    const confirmDeletePopup = document.querySelector('.popup_confirm');

    confirmDeletePopup.classList.add('popup_opened');

    const confirmButton = confirmDeletePopup.querySelector('.form__submit_confirm');
    confirmButton.addEventListener('click', () => {
        cardElement.remove();
        confirmDeletePopup.classList.remove('popup_opened');
    });
}

function handleLikeClick(event) {
    event.target.closest('.card__like').classList.toggle('card__like_active');
};

// postNewCard('ASDF', 'https://neva-transfer.ru/wp-content/uploads/2022/01/oreshek02.jpg').then(data => console.log(data)).catch(err => console.log(err));

export { renderCard }
