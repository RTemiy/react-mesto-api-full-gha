export const settingsFormValidator = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  activeButtonClass: 'popup__button-submit_activated',
  inputErrorClass: 'popup__input_type_error',
}

export function getHeaders() {
  const token = localStorage.getItem('jwt');
  return {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token,
  }
}