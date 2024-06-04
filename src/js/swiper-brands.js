import Swiper from 'swiper'

const widthMediaQuery = window.matchMedia(
  '(min-width: 768px) and (max-width: 1102px)'
)
const widthMediaQueryDesktop = window.matchMedia('(min-width: 1102px)')
const readMore = document.querySelector('.read-more')
const readMoreButton = readMore.querySelector('.read-more__button')
const swiperSlide = document.querySelectorAll('.swiper-slide')

function swiperInit() {
  new Swiper('.swiper', {
    breakpoints: {
      0: {
        loop: true,
        enabled: true,
        freeMode: true,
        slidesPerView: 'auto',
        breakpointsBase: 'container',
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      768: {
        enabled: false
      }
    }
  })
}

widthMediaQuery.addEventListener('change', () => {
  if (!widthMediaQuery.matches && !widthMediaQueryDesktop.matches) {
    swiperInit()
    console.log('swiper inited!')
  }
})

widthMediaQueryDesktop.addEventListener('change', checkMedia)

function checkCountInterations() {
  let countIteration = widthMediaQueryDesktop.matches ? 8 : 6
  for (let i = countIteration; i < swiperSlide.length; i++) {
    swiperSlide[i].classList.toggle('hidden')
  }
}

function checkContains() {
  const haveActiveClass = document.querySelector('.read-more__button--active')
  readMore.contains(haveActiveClass)
    ? (readMoreButton.textContent = 'Скрыть')
    : (readMoreButton.textContent = 'Показать все')
}

function checkMedia() {
  if (widthMediaQuery.matches) {
    for (let i = 6; i < swiperSlide.length; i++) {
      swiperSlide[i].classList.add('hidden')
    }
  } else if (widthMediaQueryDesktop.matches) {
    for (let i = 6; i < 8; i++) {
      swiperSlide[i].classList.remove('hidden')
    }
    for (let i = 8; i < swiperSlide.length; i++) {
      swiperSlide[i].classList.add('hidden')
    }
  }
}

function setupReadMoreButton() {
  readMoreButton.addEventListener('click', () => {
    readMoreButton.classList.toggle('read-more__button--active')
    checkContains()
    checkCountInterations()
  })
}

export {
  checkContains,
  checkCountInterations,
  checkMedia,
  setupReadMoreButton,
  swiperInit
}
