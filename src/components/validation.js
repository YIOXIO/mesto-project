function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add('form__input_error');
    errorElement.classList.add('form__input-error_active');
    errorElement.textContent = errorMessage;
};

function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove('form__input_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
};

function checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
};

function toggleButtonState(inputList, buttonElement) {
    const hasInvalid = hasInvalidInput(inputList);

    buttonElement.classList.toggle('form__submit_inactive', hasInvalid);
    buttonElement.disabled = false;
};

function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.form__input'));
    const buttonElement = formElement.querySelector('.form__submit');

    toggleButtonState(inputList, buttonElement)
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });

};

function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.form'));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => evt.preventDefault());

        setEventListeners(formElement);
    });
};


export { enableValidation };