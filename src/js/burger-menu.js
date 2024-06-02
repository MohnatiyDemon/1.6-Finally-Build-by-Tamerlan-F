//Меняем активный класс у бургер-меню
export function initBurgerMenu() {
  const burgerItemsContainer = document.querySelector('.burger-menu')

  burgerItemsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('burger-menu__button')) {
      document.querySelectorAll('.burger-menu__button').forEach((button) => {
        button.classList.remove('burger-menu__button--active')
      })
      event.target.classList.add('burger-menu__button--active')
    }
  })
}

// Меняем активный класс у меню выбора языка
export function initBurgerSelectLanguage() {
  const burgerSelectLanguageContainer = document.querySelector(
    '.burger-select-language'
  )

  burgerSelectLanguageContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('burger-select-language__button')) {
      document
        .querySelectorAll('.burger-select-language__button')
        .forEach((button) => {
          button.classList.remove('burger-select-language__button--active')
        })
      event.target.classList.add('burger-select-language__button--active')
    }
  })
}
