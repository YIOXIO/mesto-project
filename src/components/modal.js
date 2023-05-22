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

import { getUserInfo, patchProfile } from './api';

getUserInfo()

function handleSubmitFormAvatar(evt) {
    evt.preventDefault();
    profielAvatarImage.src = getInputAvatarUrl.value;
    avatarForm.reset()
    closePopup(popupAvatar)
}

function openAvatar() {
    openPopup(popupAvatar)
}

function openProfile() {
    openPopup(popupProfile);
    getInputProfileName.value = profileName.textContent;
    getInputProfileDuty.value = profileDuty.textContent;
};


function handleSubmitFormProfileEdit(evt) {
    evt.preventDefault();
    const nameValue = getInputProfileName.value;
    const dutyValue = getInputProfileDuty.value;
    patchProfile(nameValue, dutyValue)
        .then((res) => {
            profileName.textContent = res.name;
            profileDuty.textContent = res.about;
        })
        .catch((err) => console.log(err))

    closePopup(popupProfile)
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

