// тоглим доп карточки в меню с брендами и техникой
const openAndCloseBrandsButton = document.querySelector(
  '.read-more__button--brands'
)
const openAndCloseTechButton = document.querySelector(
  '.read-more__button--tech'
)

export function closeAndOpenBrands() {
  toggleButton(openAndCloseBrandsButton, '.swiper-slide--brands')
  toggleButton(openAndCloseTechButton, '.swiper-slide--tech')
}

function toggleButton(button, slideClass) {
  button.addEventListener('click', () => {
    button.classList.toggle('read-more__button--active')
    checkContains(button)
    const slides = document.querySelectorAll(slideClass)
    slides.forEach((slide) => slide.classList.toggle('show'))
  })
}

function checkContains(button) {
  button.classList.contains('read-more__button--active')
    ? (button.textContent = 'Скрыть')
    : (button.textContent = 'Показать все')
}
//
