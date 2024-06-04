import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

export function initSwiperOnMobile() {
  let swiperInstance = null

  const initSwiper = () => {
    swiperInstance = new Swiper('.swiper', {
      modules: [Pagination],
      loop: true,
      freeMode: true,
      slidesPerView: 'auto',
      breakpointsBase: 'container',
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    })
  }

  const checkAndInitSwiper = () => {
    if (window.innerWidth <= 768) {
      if (!swiperInstance) {
        initSwiper()
      }
    } else {
      if (swiperInstance) {
        swiperInstance.destroy(true, true)
        swiperInstance = null
      }
    }
  }

  checkAndInitSwiper()

  window.addEventListener('resize', checkAndInitSwiper)
}

export default initSwiperOnMobile
