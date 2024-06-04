import '../scss/style.scss'
import { initCloseOrOpenBurgerMenu } from './burger-button'
import { initBurgerMenu, initBurgerSelectLanguage } from './burger-menu'
import { initDescriptionReadMore, initMainItems } from './description'
import { initCloseOrOpenModalCallMenu } from './modal-call'
import { initCloseOrOpenModalFeedbackMenu } from './modal-feedback'
import {
  checkContains,
  checkCountInterations,
  checkMedia,
  setupReadMoreButton,
  swiperInit
} from './swiper-brands.js'

document.addEventListener('DOMContentLoaded', () => {
  initMainItems()
  initDescriptionReadMore()
  initBurgerMenu()
  initBurgerSelectLanguage()
  initCloseOrOpenBurgerMenu()
  initCloseOrOpenModalFeedbackMenu()
  initCloseOrOpenModalCallMenu()
  checkContains()
  checkCountInterations()
  checkMedia()
  setupReadMoreButton()
  swiperInit()
})
