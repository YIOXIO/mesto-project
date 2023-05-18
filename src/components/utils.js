function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.addEventListener('click', handleOverlayClosePopup);
    document.addEventListener('keydown', handleEscClosePopup);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.removeEventListener('click', handleOverlayClosePopup);
    document.removeEventListener('keydown', handleEscClosePopup);
}

function handleOverlayClosePopup(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target)
    }
}

function handleEscClosePopup(evt) {
    if (evt.key === "Escape") {
        closePopup(document.querySelector('.popup_opened'))
    }
}

const response = {
    then: function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(`Error: ${response.status}`);
    }
};


export { openPopup, closePopup, response }