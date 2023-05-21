import { openPopup, closePopup } from './utils'
import { renderCard } from './card.js'
import {
    popupImage,
    popupNameImage,
    popupProfile,
    popupAvatar,
    profileName,
    profileDuty,
    popupNewCard,
    getInputProfileName,
    getInputProfileDuty,
    getInputCardUrl,
    getInputCardName,
    avatarForm,
    openPopupImage,
    getInputAvatarUrl,
    profielAvatarImage,
} from '../index.js'

function handleSubmitFormAvatar(evt) {
    evt.preventDefault();
    profielAvatarImage.src = getInputAvatarUrl.value;
    avatarForm.reset()
    closePopup(popupAvatar)
}

function openAvatar() {
    openPopup(popupAvatar)
}

import { getUserInfo } from './api';

function openProfile() {
    openPopup(popupProfile);
    getUserInfo()
        .then(response => response.json())
        .then(data => {
            getInputProfileName.value = data.name;
            getInputProfileDuty.value = data.about;
        })
        .catch(error => console.error(error));
};


function handleSubmitFormProfileEdit(evt) {
    evt.preventDefault();
    profileName.textContent = `${getInputProfileName.value}`;
    profileDuty.textContent = `${getInputProfileDuty.value}`;
    closePopup(popupProfile)
    evt.target.reset()
}


function openImage(item) {
    openPopup(popupImage);
    openPopupImage.src = item.link;
    openPopupImage.alt = item.name;
    popupNameImage.textContent = item.name;
}


function handleSubmitFormAddNewCard(evt) {
    evt.preventDefault()
    const newCard = {}
    newCard.name = getInputCardName.value;
    newCard.link = getInputCardUrl.value;
    renderCard(newCard);
    evt.target.reset()
    closePopup(popupNewCard);
}



export { openImage, handleSubmitFormAddNewCard, handleSubmitFormProfileEdit, handleSubmitFormAvatar, openProfile, openAvatar, openPopup }

