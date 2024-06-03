// открываем бургер меню по нажатию на кнопку-бургер

const burgerMenu = document.querySelector('.burger')
const burgerOpenButton = document.querySelector('.header-nav__button--burger')
const burgerCloseButton = document.querySelector(
  '.burger-nav__button--burger-opened'
)
const mainContainer = document.querySelector('.main-container')

function openBurgerMenu() {
  burgerMenu.classList.add('burger--active')
  mainContainer.classList.add('blur')
  burgerMenu.classList.add('burger--shadow')
  document.addEventListener('click', handleOutsideClick)
}

function closeBurgerMenu() {
  burgerMenu.classList.remove('burger--active')
  mainContainer.classList.remove('blur')
  burgerMenu.classList.remove('burger--shadow')
  document.removeEventListener('click', handleOutsideClick)
}
function handleOutsideClick(event) {
  if (
    !burgerMenu.contains(event.target) &&
    !burgerOpenButton.contains(event.target)
  ) {
    closeBurgerMenu()
  }
}

export function initCloseOrOpenBurgerMenu() {
  burgerOpenButton.addEventListener('click', openBurgerMenu)
  burgerCloseButton.addEventListener('click', closeBurgerMenu)
}
