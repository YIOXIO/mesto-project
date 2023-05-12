function openPopup(evt) {
    evt.classList.add('popup_opened');
    evt.addEventListener('click', handleOverlayClosePopup);
    document.addEventListener('keydown', handleEscClosePopup);
}

function closePopup(evt) {
    evt.classList.remove('popup_opened');
    evt.removeEventListener('click', handleOverlayClosePopup);
    document.removeEventListener('keydown', handleEscClosePopup);

}

function handleOverlayClosePopup(evt) {
    if (evt.target === evt.target) {
        closePopup(evt.target)
    }
}

function handleEscClosePopup(evt) {
    if (evt.key === "Escape") {
        closePopup(document.querySelector('.popup_opened'))
    }
}

export { openPopup, closePopup }