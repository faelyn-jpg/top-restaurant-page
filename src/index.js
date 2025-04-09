import './styles.css'
import './menu-styles.css'
import PageLoad from './page-load.js'
import DisplayMenu from './menu.js'

const homeButton = document.querySelector('#home')
const menuButton = document.querySelector('#menu')
;(function PageController() {
  let homeOpen = true
  let menuOpen = false
  const pageLoader = PageLoad()
  const menuLoader = DisplayMenu()
  pageLoader.addContent()

  menuButton.addEventListener('click', () => {
    if (homeOpen && !menuOpen) {
      pageLoader.removeContent()
      menuLoader.addMenu()
      homeOpen = !homeOpen
      menuOpen = !menuOpen
    }
  })

  homeButton.addEventListener('click', () => {
    if (!homeOpen) {
      menuLoader.removeMenu()
      pageLoader.addContent()
      homeOpen = !homeOpen
      menuOpen = !menuOpen
    }
  })
})()
