// открываем бургер меню по нажатию на кнопку-бургер

const burgerMenu = document.querySelector('.burger')
const burgerClosedButton = document.querySelector('.header-nav__button--burger')
const burgerOpenedButton = document.querySelector(
  '.burger-nav__button--burger-opened'
)
const mainContainer = document.querySelector('.main-container')

function openBurgerMenu() {
  burgerMenu.classList.add('burger--active')
  mainContainer.classList.add('blur')
  document.addEventListener('click', handleOutsideClick)
}

function closeBurgerMenu() {
  burgerMenu.classList.remove('burger--active')
  mainContainer.classList.remove('blur')
  document.removeEventListener('click', handleOutsideClick)
}
function handleOutsideClick(event) {
  if (
    !burgerMenu.contains(event.target) &&
    !burgerClosedButton.contains(event.target)
  ) {
    closeBurgerMenu()
  }
}

export function initCloseOrOpenBurgerMenu() {
  burgerClosedButton.addEventListener('click', openBurgerMenu)
  burgerOpenedButton.addEventListener('click', closeBurgerMenu)
}
