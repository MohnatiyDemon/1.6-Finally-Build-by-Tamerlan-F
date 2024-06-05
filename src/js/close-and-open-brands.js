// const openAndCloseBrandsButton = document.querySelector('.read-more__button')
// const openAndCloseTechButton = document.querySelector(
//   '.read-more__button--tech'
// )
// const swiperSlideArr = document.querySelectorAll('.swiper-slide')

// export function closeAndOpenBrands() {
//   openAndCloseTechButton.addEventListener('click', () => {
//     openAndCloseTechButton.classList.toggle('read-more__button--active')

//     checkContains()
//     swiperSlideArr.forEach((slide) => slide.classList.toggle('show'))
//   })
// }

// function checkContains() {
//   openAndCloseTechButton.classList.contains('read-more__button--active')
//     ? (openAndCloseTechButton.textContent = 'Скрыть')
//     : (openAndCloseTechButton.textContent = 'Показать все')
// }

const openAndCloseBrandsButton = document.querySelector(
  '.read-more__button--brands'
)
const openAndCloseTechButton = document.querySelector(
  '.read-more__button--tech'
)
const openAndCloseButton = document.querySelector('.read-more__button')

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

// export default closeAndOpenBrands
