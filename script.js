const cards = document.querySelector('.elements__cards');
const cardTemplate = document.querySelector('.card-template').content;
const popup = document.querySelector('.popup_profile-edit');
const buttonOpen = document.querySelector('.profile__edit-button');
const buttonClose = document.querySelector('.popup__close-button_profile-edit');
const getName = document.querySelector('.profile__name');
const getJob = document.querySelector('.profile__duty');
const editForm = document.querySelector('#edit-form');
let nameInput = editForm.querySelector('.popup__field_name');
let jobInput = editForm.querySelector('.popup__field_duty');
const getTitle = document.querySelector('.popup__title');
const getUrl = document.querySelector('.card__image');
const cardPopup = document.querySelector('.popup_new-place');
const cardForm = document.querySelector('#card-form');
let placeInput = cardForm.querySelector('.popup__field_place');
let urlInput = cardForm.querySelector('.popup__field_url');
const popupNewItem = document.querySelector('.popup_new-place');
const popupOpen = document.querySelector('.profile__button');
const closePopupButtonNewPlace = document.querySelector('.popup__close-button_popup_new-place');
const addButton = document.querySelector('.popup__button_popup_new-place');
const closeImage = document.querySelector('.popup__close-button_popup_image');
const popupImage = document.querySelector('.popup_image-form');
const openImagePop = document.querySelector('#open-image');




const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
initialCards.forEach(function (element) {
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.card__name').textContent = element.name;
    cardElement.querySelector('.card__image').src = element.link;
    cardElement.querySelector('.card__like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('card__like_active');
    });
    cards.append(cardElement);
})
// __________________________________________________________________________________
// Удаление карточек

let deleteCard = document.querySelectorAll('.card__trash');
deleteCard.forEach((element) => {
    element.addEventListener('click', removeCard);
});
function removeCard() {
    let revDiv = this.parentElement;
    revDiv.remove();
};

// _________________________________________________________________________
// Функции открытия и закрытия Pop-UP


function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = getName.textContent;
    jobInput.value = getJob.textContent;
};

function popupNewPlace() {
    popupNewItem.classList.add('popup_opened')

};

function OpenImage() {
    popupImage.classList.add('popup_opened')

};



function closePopup() {
    popupNewItem.classList.remove('popup_opened');
    popup.classList.remove('popup_opened'); ``
    popupImage.classList.remove('popup_opened')
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    getName.textContent = `${nameInput.value}`;
    getJob.textContent = `${jobInput.value}`;
    closePopup();
};
// __________________________________________________________________________

// Вызов функции Pop-Up
popupOpen.addEventListener('click', popupNewPlace);
closePopupButtonNewPlace.addEventListener('click', closePopup);
buttonOpen.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
editForm.addEventListener('submit', formSubmitHandler);
closeImage.addEventListener('click', closePopup)
openImagePop.addEventListener('click', OpenImage)

// _____________________________________________________________________

// Функиця добавления карточек

function formSubmitHandlerW(evt) {
    evt.preventDefault();
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__name').textContent = placeInput.value;
    cardElement.querySelector('.card__image').src = urlInput.value;
    cards.prepend(cardElement);
    closePopup()
    placeInput.value = ""
    urlInput.value = ""
}

cardForm.addEventListener('submit', formSubmitHandlerW);


