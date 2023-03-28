const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const elements = document.querySelector('.elements__cards');
const popupImage = document.querySelector('.popup_image-form');
const popupNameImage = popupImage.querySelector('.popup__caption');
const popupProfile = document.querySelector('.popup_profile-edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileDuty = document.querySelector('.profile__duty');
const addButton = document.querySelector('.profile__button');
const popupNewCard = document.querySelector('.popup_new-place');
const editForm = document.querySelector('#edit-form');
const nameInput = editForm.querySelector('.popup__field_name');
const jobInput = editForm.querySelector('.popup__field_duty');
const cardForm = document.querySelector('#card-form');
const urlInput = cardForm.querySelector('.popup__field_url');
const placeInput = cardForm.querySelector('.popup__field_place');
const image = document.querySelector('.popup__image');
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close-button_profile-edit');
const buttonClosePopupNewCard = popupNewCard.querySelector('.popup__close-button_popup_new-place');
const buttonClosePopupImage = popupImage.querySelector('.popup__close-button_popup_image')






function openPopup(evt) {
    evt.classList.add('popup_opened');
}


function closePopup(evt) {
    evt.classList.remove('popup_opened');
}

document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape')
        closePopup(popupImage);
    closePopup(popupNewCard);
    closePopup(popupProfile);

})



// Открыть профиль
function openProfile() {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileDuty.textContent;
};

profileEditButton.addEventListener('click', openProfile);
// _________________


// Редактировать профиль
function handleSubmitFormProfileEdit(evt) {
    evt.preventDefault();
    profileName.textContent = `${nameInput.value}`;
    profileDuty.textContent = `${jobInput.value}`;
    closePopup(popupProfile)

}
editForm.addEventListener('submit', handleSubmitFormProfileEdit);
// ____________________________________

// Удалить карточку 
function handleDeleteCard(evt) {
    evt.target.closest('.card').remove()
};
// 
// Поставить лайк
function handleLikeClick(evt) {
    evt.target.closest('.card__like').classList.toggle('card__like_active');
}
// ________________________________________________________
// Открыть картинку 
function openImage(data) {
    openPopup(popupImage);
    image.src = data.link;
    image.alt = data.name;
    popupNameImage.textContent = data.name;
}
// ____________________________________________________________________________


buttonClosePopupImage.addEventListener('click', () => closePopup(popupImage));
buttonClosePopupNewCard.addEventListener('click', () => closePopup(popupNewCard));
buttonClosePopupProfile.addEventListener('click', () => closePopup(popupProfile));

// ____________________________________________________________________

// Добавить новую карточку
addButton.addEventListener('click',
    function () {
        openPopup(popupNewCard)
    }
)
function handleSubmitFormAddNewCard(evt) {
    evt.preventDefault()
    const newCard = {}
    newCard.name = placeInput.value,
        newCard.link = urlInput.value;
    renderCard(newCard);
    cardForm.reset()
    closePopup(popupNewCard)

}

cardForm.addEventListener('submit', handleSubmitFormAddNewCard);
// __________________________________


// Карточки из массива
function createCard(data) {
    const card = cardTemplate.cloneNode(true);
    card.querySelector('.card__image').src = data.link;
    card.querySelector('.card__image').alt = data.name;
    card.querySelector('.card__name').textContent = data.name;
    card.querySelector('.card__trash').addEventListener('click', handleDeleteCard)
    card.querySelector('.card__like').addEventListener('click', handleLikeClick)
    card.querySelector('.card__image').addEventListener('click', () => openImage(data));

    return card;
}

function renderCard(data) {
    elements.prepend(createCard(data));
};

initialCards.forEach((data) => {
    renderCard(data);
});

