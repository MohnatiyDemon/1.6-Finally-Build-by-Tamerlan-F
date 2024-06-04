const modalCallMenu = document.querySelector('.modal-call')
const modalCallCloseButton = document.querySelector('.modal-call__close-button')
const modalCallOpenButtonHeader = document.querySelector(
  '.header-nav__button--call'
)
const modalCallOpenButtonBurger = document.querySelector(
  '.burger-footer__button--call'
)
const mainContainer = document.querySelector('.main-container')

function openModalCallMenu() {
  modalCallMenu.classList.add('modal-call--active')
  mainContainer.classList.add('blur')
  modalCallMenu.classList.add('modal-call--shadow')
  document.addEventListener('click', handleOutsideClickModalCall)
}

function closeModalCallMenu() {
  modalCallMenu.classList.remove('modal-call--active')
  mainContainer.classList.remove('blur')
  modalCallMenu.classList.remove('modal-call--shadow')
  document.removeEventListener('click', handleOutsideClickModalCall)
}
function handleOutsideClickModalCall(event) {
  if (
    !modalCallMenu.contains(event.target) &&
    !modalCallOpenButtonHeader.contains(event.target) &&
    !modalCallOpenButtonBurger.contains(event.target) &&
    !modalCallCloseButton.contains(event.target)
  ) {
    closeModalCallMenu()
  }
}

export function initCloseOrOpenModalCallMenu() {
  modalCallOpenButtonHeader.addEventListener('click', openModalCallMenu)
  modalCallOpenButtonBurger.addEventListener('click', openModalCallMenu)
  modalCallCloseButton.addEventListener('click', closeModalCallMenu)
}
