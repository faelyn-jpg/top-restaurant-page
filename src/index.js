import './styles.css'
import './menu-styles.css'
import './about.css'
import PageLoad from './page-load.js'
import DisplayMenu from './menu.js'
import DisplayAbout from './about.js'

const homeButton = document.querySelector('#home')
const menuButton = document.querySelector('#menu')
const aboutButton = document.querySelector('#about')
;(function PageController() {
  const pageLoader = PageLoad()
  const menuLoader = DisplayMenu()
  const aboutLoader = DisplayAbout()
  pageLoader.addContent()
  let homeOpen = true
  let menuOpen = false
  let aboutOpen = false
  const toggleOpen = (opened, from) => {
    homeOpen = opened === 'home' ? !homeOpen : homeOpen
    menuOpen = opened === 'menu' ? !menuOpen : menuOpen
    aboutOpen = opened === 'about' ? !aboutOpen : aboutOpen
    homeOpen = from === 'home' ? !homeOpen : homeOpen
    menuOpen = from === 'menu' ? !menuOpen : menuOpen
    aboutOpen = from === 'about' ? !aboutOpen : aboutOpen
  }
  const toggle = toggleOpen()
  menuButton.addEventListener('click', () => {
    if (homeOpen && !menuOpen) {
      pageLoader.removeContent()
      menuLoader.addMenu()
      toggleOpen('menu', 'home')
    } else if (aboutOpen && !menuOpen) {
      aboutLoader.removeContent()
      menuLoader.addMenu()
      toggleOpen('menu', 'about')
    }
  })

  homeButton.addEventListener('click', () => {
    if (!homeOpen && menuOpen) {
      menuLoader.removeContent()
      pageLoader.addContent()
      toggleOpen('home', 'menu')
    } else if (!homeOpen && aboutOpen) {
      aboutLoader.removeContent()
      pageLoader.addContent()
      toggleOpen('home', 'about')
    }
  })

  aboutButton.addEventListener('click', () => {
    if (homeOpen && !aboutOpen) {
      pageLoader.removeContent()
      aboutLoader.addAbout()
      toggleOpen('about', 'home')
    } else if (menuOpen && !aboutOpen) {
      menuLoader.removeContent()
      aboutLoader.addAbout()
      toggleOpen('about', 'menu')
    }
  })
})()
