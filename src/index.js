import './pages/index.css';
import * as modal from './components/modal.js'
import './components/validation.js'

import { enableValidation } from './components/validation.js';



enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input-error',
    errorClass: 'form__input-error_active'
});


