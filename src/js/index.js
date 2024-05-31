import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.scss'
import '../scss/style.scss'
console.log('Works!')

const burger = document.querySelector('.header-nav__item--burger')
const burgerAside = document.querySelector('.burger')
const openedBurger = document.querySelector('.burger-nav__item--burger-opened')
const main = document.querySelector('.main-container')

burger.addEventListener('click', () => {
  burgerAside.classList.add('burger--opened')
  main.classList.add('main-container--opened')
})

openedBurger.addEventListener('click', () => {
  burgerAside.classList.remove('burger--opened')
  main.classList.remove('main-container--opened')
})

document.addEventListener('click', (event) => {
  const isClickInside =
    burger.contains(event.target) || burgerAside.contains(event.target)

  if (!isClickInside) {
    burgerAside.classList.remove('burger--opened')
    main.classList.remove('main-container--opened')
  }
})

const widthMediaQueryTablet = window.matchMedia(
  '(width >= 768px) and (width < 1102px)'
)
const widthMediaQueryDesktop = window.matchMedia('(min-width: 1102px)')
const readMore = document.querySelector('.read-more')
const readMoreButton = readMore.querySelector('.read-more__button')
const swiperSlide = document.querySelectorAll('.swiper-slide')
const hiddenClass = document.querySelector('.hidden')

function swiperInit() {
  new Swiper('.swiper', {
    breakpoints: {
      0: {
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
swiperInit()

widthMediaQueryTablet.addEventListener('change', () => {
  if (!widthMediaQueryTablet.matches) {
    swiperInit()
  }
})

widthMediaQueryDesktop.addEventListener('change', function checkMedia() {
  if (widthMediaQueryTablet.matches) {
    for (let i = 6; i < swiperSlide.length; i++) {
      swiperSlide[i].classList.add('hidden')
    }
  }
  if (widthMediaQueryDesktop.matches) {
    for (let i = 6; i < 8; i++) {
      swiperSlide[i].classList.remove('hidden')
    }
    for (let i = 8; i < swiperSlide.length; i++) {
      swiperSlide[i].classList.add('hidden')
    }
  }
})

// checkMedia()

readMoreButton.addEventListener('click', () => {
  readMoreButton.classList.toggle('read-more__button--active')
  checkContains()
  checkCountInterations()
})

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
checkContains()
// const widthMediaQueryTablet = window.matchMedia(
//   '(min-width: 768px) and (max-width: 1101px)'
// )
// const widthMediaQueryDesktop = window.matchMedia('(min-width: 1102px)')
// const readMore = document.querySelector('.read-more')
// const readMoreButton = readMore.querySelector('.read-more__button')
// const swiperSlides = document.querySelectorAll('.swiper-slide')

// // Инициализация Swiper
// function swiperInit() {
//   new Swiper('.swiper', {
//     breakpoints: {
//       0: {
//         enabled: true,
//         freeMode: true,
//         slidesPerView: 'auto',
//         breakpointsBase: 'container',
//         spaceBetween: 0,
//         pagination: {
//           el: '.swiper-pagination',
//           clickable: true
//         }
//       },
//       768: {
//         enabled: false
//       }
//     }
//   })
// }

// // Проверка медиазапросов и применение стилей
// function checkMedia() {
//   if (widthMediaQueryDesktop.matches) {
//     for (let i = 6; i < swiperSlides.length; i++) {
//       if (i < 8) {
//         swiperSlides[i].classList.remove('hidden')
//       } else {
//         swiperSlides[i].classList.add('hidden')
//       }
//     }
//   } else {
//     for (let i = 6; i < swiperSlides.length; i++) {
//       swiperSlides[i].classList.add('hidden')
//     }
//     swiperInit()
//   }
// }

// widthMediaQueryTablet.addEventListener('change', checkMedia)
// widthMediaQueryDesktop.addEventListener('change', checkMedia)
// checkMedia() // Изначальная проверка медиазапросов

// // Обработчик клика по кнопке "Показать все/Скрыть"
// readMoreButton.addEventListener('click', () => {
//   readMoreButton.classList.toggle('read-more__button--active')
//   checkContains()
//   toggleSlidesVisibility()
// })

// // Функция для показа/скрытия слайдов
// function toggleSlidesVisibility() {
//   const countIteration = widthMediaQueryDesktop.matches ? 8 : 6
//   for (let i = countIteration; i < swiperSlides.length; i++) {
//     swiperSlides[i].classList.toggle('hidden')
//   }
// }

// // Функция для проверки состояния кнопки и изменения текста
// function checkContains() {
//   const haveActiveClass = readMoreButton.classList.contains(
//     'read-more__button--active'
//   )
//   readMoreButton.textContent = haveActiveClass ? 'Скрыть' : 'Показать все'
// }
