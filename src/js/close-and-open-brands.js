const openAndCloseBrandsButton = document.querySelector('.read-more__button')
const swiperSlideArr = document.querySelectorAll('.swiper-slide')

export function closeAndOpenBrands() {
  openAndCloseBrandsButton.addEventListener('click', () => {
    openAndCloseBrandsButton.classList.toggle('read-more__button--active')

    checkContains()
    swiperSlideArr.forEach((slide) => slide.classList.toggle('show'))
  })
}

function checkContains() {
  openAndCloseBrandsButton.classList.contains('read-more__button--active')
    ? (openAndCloseBrandsButton.textContent = 'Скрыть')
    : (openAndCloseBrandsButton.textContent = 'Показать все')
}
