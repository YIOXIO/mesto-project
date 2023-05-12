const popupImage = document.querySelector('.popup_image-form');
const popupNameImage = popupImage.querySelector('.popup__caption');
const popupProfile = document.querySelector('.popup_profile-edit');
const popupAvatar = document.querySelector('.popup_profile-avatar');
const profileName = document.querySelector('.profile__name');
const profileDuty = document.querySelector('.profile__duty');
const popupNewCard = document.querySelector('.popup_new-place');
const editForm = document.querySelector('#edit-form');
const getInputProfileName = editForm.querySelector('.form__input_name');
const getInputProfileDuty = editForm.querySelector('.form__input_duty');
const cardForm = document.querySelector('#card-form');
const getInputCardUrl = cardForm.querySelector('.form__input_url');
const getInputCardName = cardForm.querySelector('.form__input_place');
const avatarForm = document.querySelector('#avatar-form');
const openPopupImage = document.querySelector('.popup__image');
const getInputAvatarUrl = avatarForm.querySelector('.form__input_avatar');
const profielAvatarImage = document.querySelector('.profile__avatar');







import './pages/index.css';
import * as modal from './components/modal.js'

modal()
enableValidation();
