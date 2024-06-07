// тоглим и скрываем меню со обратной связью по клику на кнопку или вне меню

const modalFeedbackMenu = document.querySelector('.modal-feedback')
const modalFeedbackCloseButton = document.querySelector(
  '.modal-feedback__close-button'
)
const modalFeedBackOpenButtonHeader = document.querySelector(
  '.header-nav__button--chat'
)
const modalFeedBackOpenButtonBurger = document.querySelector(
  '.burger-footer__button--chat'
)
const mainContainer = document.querySelector('.main-container')

function openModalFeedbackMenu() {
  modalFeedbackMenu.classList.add('modal-feedback--active')
  mainContainer.classList.add('blur')
  modalFeedbackMenu.classList.add('modal-feedback--shadow')
  document.addEventListener('click', handleOutsideClickModalFeedback)
}

function closeModalFeedbackMenu() {
  modalFeedbackMenu.classList.remove('modal-feedback--active')
  mainContainer.classList.remove('blur')
  modalFeedbackMenu.classList.remove('modal-feedback--shadow')
  document.removeEventListener('click', handleOutsideClickModalFeedback)
}
function handleOutsideClickModalFeedback(event) {
  if (
    !modalFeedbackMenu.contains(event.target) &&
    !modalFeedBackOpenButtonHeader.contains(event.target) &&
    !modalFeedBackOpenButtonBurger.contains(event.target) &&
    !modalFeedbackCloseButton.contains(event.target)
  ) {
    closeModalFeedbackMenu()
  }
}

export function initCloseOrOpenModalFeedbackMenu() {
  modalFeedBackOpenButtonHeader.addEventListener('click', openModalFeedbackMenu)
  modalFeedBackOpenButtonBurger.addEventListener('click', openModalFeedbackMenu)
  modalFeedbackCloseButton.addEventListener('click', closeModalFeedbackMenu)
}
