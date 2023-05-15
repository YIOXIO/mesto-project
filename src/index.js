import './pages/index.css';
import { openAvatar, openProfile, handleSubmitFormAvatar, handleSubmitFormProfileEdit, handleSubmitFormAddNewCard } from './components/modal.js'
import { openPopup, closePopup } from './components/utils.js';
import { enableValidation } from './components/validation.js';

const popupImage = document.querySelector('.popup_image-form');
const popupNameImage = popupImage.querySelector('.popup__caption');
const popupProfile = document.querySelector('.popup_profile-edit');
const popupAvatar = document.querySelector('.popup_profile-avatar');
const profileName = document.querySelector('.profile__name');
const profileDuty = document.querySelector('.profile__duty');
const popupNewCard = document.querySelector('.popup_new-place');
const editForm = document.forms['profile-form'];
const getInputProfileName = editForm.querySelector('.form__input_name');
const getInputProfileDuty = editForm.querySelector('.form__input_duty');
const cardForm = document.forms['card-form'];
const getInputCardUrl = cardForm.querySelector('.form__input_url');
const getInputCardName = cardForm.querySelector('.form__input_place');
const avatarForm = document.forms['avatar-form'];
const openPopupImage = document.querySelector('.popup__image');
const getInputAvatarUrl = avatarForm.querySelector('.form__input_avatar');
const profielAvatarImage = document.querySelector('.profile__avatar');
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupNewCard = document.querySelector('.profile__button');
const buttonOpenPopupAvatar = document.querySelector('.profile__overlay');
const closeButtons = document.querySelectorAll('.popup__close-button')


enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input-error',
    errorClass: 'form__input-error_active'
});



buttonOpenPopupAvatar.addEventListener('click', openAvatar);
buttonOpenPopupProfile.addEventListener('click', openProfile);

avatarForm.addEventListener('submit', handleSubmitFormAvatar)
editForm.addEventListener('submit', handleSubmitFormProfileEdit);
cardForm.addEventListener('submit', handleSubmitFormAddNewCard)
buttonOpenPopupNewCard.addEventListener('click',
    function () {
        openPopup(popupNewCard)
    }
)


closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup))

})

export {
    popupImage,
    popupNameImage,
    popupProfile,
    popupAvatar,
    profileName,
    profileDuty,
    popupNewCard,
    editForm,
    getInputProfileName,
    getInputProfileDuty,
    cardForm,
    getInputCardUrl,
    getInputCardName,
    avatarForm,
    openPopupImage,
    getInputAvatarUrl,
    profielAvatarImage,
}