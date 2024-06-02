import '../scss/style.scss'
import { initCloseOrOpenBurgerMenu } from './burger-button'
import { initBurgerMenu, initBurgerSelectLanguage } from './burger-menu'
import { initDescriptionReadMore, initMainItems } from './description'

document.addEventListener('DOMContentLoaded', () => {
  initMainItems()
  initDescriptionReadMore()
  initBurgerMenu()
  initBurgerSelectLanguage()
  initCloseOrOpenBurgerMenu()
})
