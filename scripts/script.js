const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const elements = document.querySelector('.elements__cards');
const popupImage = document.querySelector('.popup_image-form');
const popupNameImage = popupImage.querySelector('.popup__caption');
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_profile-edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileDuty = document.querySelector('.profile__duty');
const closeButton = popup.querySelector('.popup__close-button');
const addButton = document.querySelector('.profile__button');
const popupNewCard = document.querySelector('.popup_new-place');
const editForm = document.querySelector('#edit-form');
const nameInput = editForm.querySelector('.popup__field_name');
const jobInput = editForm.querySelector('.popup__field_duty');
const cardForm = document.querySelector('#card-form');
const urlInput = cardForm.querySelector('.popup__field_url');
const placeInput = cardForm.querySelector('.popup__field_place');




// Открыть профиль
function openProfile() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileDuty.textContent;
};

profileEditButton.addEventListener('click', openProfile)
// _________________


// Редактировать профиль
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = `${nameInput.value}`;
    profileDuty.textContent = `${jobInput.value}`;
    popup.classList.remove('popup_opened')

}
editForm.addEventListener('submit', formSubmitHandler)
// ____________________________________

// Удалить карточку 
function deleteCard(event) {
    event.target.closest('.card').remove()
};
// 
// Поставить лайк
function HandleLikeClick(event) {
    event.target.closest('.card__like').classList.toggle('card__like_active');
}
// ________________________________________________________
// Открыть картинку 
function openImage(event) {
    popupImage.classList.add('popup_opened');
    const image = document.querySelector('.popup__image');
    image.src = event.target.src;
    image.alt = event.target.alt;
    const card = event.target.closest('.card');
    popupNameImage.textContent = card.querySelector('.card__name').textContent;
}
// ____________________________________________________________________________

// Функция закрытия PopUp 
function closePopup(element) {
    element.target.closest('.popup_opened').classList.remove('popup_opened');
};
popupImage.addEventListener('click', closePopup);
popupNewCard.querySelector('.popup__close-button').addEventListener('click', closePopup);
popupProfile.querySelector('.popup__close-button').addEventListener('click', closePopup);

// ____________________________________________________________________

// Добавить новую карточку
addButton.addEventListener('click',
    function () {
        popupNewCard.classList.add('popup_opened')
    }
)
function handleSubmitFormAddNewCard(evt) {
    evt.preventDefault()
    const newCard = {}
    newCard.name = placeInput.value,
        newCard.link = urlInput.value;
    renderCard(newCard);
    cardForm.reset()
    popupNewCard.classList.remove('popup_opened')

}

cardForm.addEventListener('submit', handleSubmitFormAddNewCard);
// __________________________________


// Карточки из массива
function createCard(data) {
    const card = cardTemplate.cloneNode(true);
    card.querySelector('.card__image').src = data.link;
    card.querySelector('.card__image').alt = data.name;
    card.querySelector('.card__name').textContent = data.name;
    card.querySelector('.card__trash').addEventListener('click', deleteCard)
    card.querySelector('.card__like').addEventListener('click', HandleLikeClick)
    card.querySelector('.card__image').addEventListener('click', openImage);

    return card;
}

function renderCard(data) {
    elements.prepend(createCard(data));
};

initialCards.forEach((data) => {
    renderCard(data);
});

