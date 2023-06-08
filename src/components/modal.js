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

import { getUserInfo, patchAvatar, patchProfile, postNewCard } from './api';



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
    const profileNamApi = getInputProfileName.value;
    const profileDutyApi = getInputProfileDuty.value;
    patchProfile(profileNamApi, profileDutyApi)
        .then((res) => {
            profileName.textContent = res.name;
            profileDuty.textContent = res.about;
            closePopup(popupProfile)
        })
        .catch((err) => console.log(err))

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

    postNewCard(newCard.name, newCard.link)
        .then(data => {
            renderCard(data);
            closePopup(popupNewCard);
        })
        .catch(err => console.log(err));
    evt.target.reset()
}

function handleSubmitFormAvatar(evt) {
    evt.preventDefault();
    const profileAvatarApi = getInputAvatarUrl.value;
    patchAvatar(profileAvatarApi)
        .then((res) => {
            profielAvatarImage.src = res.avatar;
            avatarForm.reset();
            closePopup(popupAvatar);
        })
        .catch((err) => {
            console.log(err);
        });
}

getUserInfo()
    .then((res) => {
        profileName.textContent = res.name;
        profileDuty.textContent = res.about;
        profielAvatarImage.src = res.avatar;
    })
    .catch((err) => console.log(err))



export { openImage, handleSubmitFormAddNewCard, handleSubmitFormProfileEdit, handleSubmitFormAvatar, openProfile, openAvatar, openPopup }

