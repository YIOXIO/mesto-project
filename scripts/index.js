const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');

const elements = document.querySelector('.elements__cards');
const popupImage = document.querySelector('.popup_image-form');
const popupNameImage = popupImage.querySelector('.popup__caption');
const popupProfile = document.querySelector('.popup_profile-edit');
const popupAvatar = document.querySelector('.popup_profile-avatar')
const profileName = document.querySelector('.profile__name');
const profileDuty = document.querySelector('.profile__duty');
const popupNewCard = document.querySelector('.popup_new-place');
const editForm = document.querySelector('#edit-form');
const getInputProfileName = editForm.querySelector('.form__input_name');
const getInputProfileDuty = editForm.querySelector('.form__input_duty');
const cardForm = document.querySelector('#card-form');
const getInputCardUrl = cardForm.querySelector('.form__input_url');
const getInputCardName = cardForm.querySelector('.form__input_place');
const avatarForm = document.querySelector('#avatar-form')
const openPopupImage = document.querySelector('.popup__image');
const getInputAvatarUrl = avatarForm.querySelector('.form__input_avatar')
const profielAvatarImage = document.querySelector('.profile__avatar')


// Кнопики для открытия модальных окон
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupNewCard = document.querySelector('.profile__button');
const buttonOpenPopupAvatar = document.querySelector('.profile__overlay')

// Кнопки для закрытия модальных окон
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close-button_profile-edit');
const buttonClosePopupNewCard = popupNewCard.querySelector('.popup__close-button_popup_new-place');
const buttonClosePopupImage = popupImage.querySelector('.popup__close-button_popup_image')
const buttonClosePopupAvatar = popupAvatar.querySelector('.popup__close-button_popup_avatar')
// ___________________________________________________________________________________________


function openPopup(evt) {
    evt.classList.add('popup_opened');
}


function closePopup(evt) {
    evt.classList.remove('popup_opened');
}

// Открыть аватар
function handleSubmitFormAvatar(evt) {
    evt.preventDefault();
    profielAvatarImage.src = getInputAvatarUrl.value;
    closePopup(popupAvatar)
}

function openAvatar() {
    openPopup(popupAvatar)
}

buttonOpenPopupAvatar.addEventListener('click', openAvatar);
avatarForm.addEventListener('submit', handleSubmitFormAvatar)


// Открыть профиль
function openProfile() {
    openPopup(popupProfile);
    getInputProfileName.value = profileName.textContent;
    getInputProfileDuty.value = profileDuty.textContent;
};

buttonOpenPopupProfile.addEventListener('click', openProfile);
// _________________


// Редактировать профиль
function handleSubmitFormProfileEdit(evt) {
    evt.preventDefault();
    profileName.textContent = `${getInputProfileName.value}`;
    profileDuty.textContent = `${getInputProfileDuty.value}`;
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
};
// ________________________________________________________
// Открыть картинку 
function openImage(data) {
    openPopup(popupImage);
    openPopupImage.src = data.link;
    openPopupImage.alt = data.name;
    popupNameImage.textContent = data.name;
}
// ____________________________________________________________________________


buttonClosePopupImage.addEventListener('click', () => closePopup(popupImage));
buttonClosePopupNewCard.addEventListener('click', () => closePopup(popupNewCard));
buttonClosePopupProfile.addEventListener('click', () => closePopup(popupProfile));
buttonClosePopupAvatar.addEventListener('click', () => closePopup(popupAvatar))

// ____________________________________________________________________

// Добавить новую карточку
buttonOpenPopupNewCard.addEventListener('click',
    function () {
        openPopup(popupNewCard)
    }
)
function handleSubmitFormAddNewCard(evt) {
    evt.preventDefault()
    const newCard = {}
    newCard.name = getInputCardName.value,
        newCard.link = getInputCardUrl.value;
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

