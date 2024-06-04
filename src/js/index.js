import '../scss/style.scss'
import { initCloseOrOpenBurgerMenu } from './burger-button'
import { initBurgerMenu, initBurgerSelectLanguage } from './burger-menu'
import { closeAndOpenBrands } from './close-and-open-brands'
import { initDescriptionReadMore, initMainItems } from './description'
import { initSwiperOnMobile } from './init-swiper-on-mobile'
import { initCloseOrOpenModalCallMenu } from './modal-call'
import { initCloseOrOpenModalFeedbackMenu } from './modal-feedback'

document.addEventListener('DOMContentLoaded', () => {
  initMainItems()
  initDescriptionReadMore()
  initBurgerMenu()
  initBurgerSelectLanguage()
  initCloseOrOpenBurgerMenu()
  initCloseOrOpenModalFeedbackMenu()
  initCloseOrOpenModalCallMenu()
  initSwiperOnMobile()
  closeAndOpenBrands()
})
