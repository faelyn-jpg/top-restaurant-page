export default function PageLoad() {
  const main = document.querySelector('#content')

  const addContent = () => {
    const container = document.createElement('main-container')
    const background = document.createElement('div')
    const hero = document.createElement('div')
    const info = document.createElement('div')
    const p = document.createElement('p')
    const address = document.createElement('div')
    const map = document.createElement('div')
    const openHours = document.createElement('div')
    container.classList.add('container')
    background.classList.add('background')
    hero.classList.add('hero')
    info.classList.add('info')
    address.classList.add('format', 'address')
    map.classList.add('format', 'map')
    openHours.classList.add('format', 'open-hours')
    p.textContent =
      'This is a cool restaurant that you should definitely check out!'
    address.textContent = "Here's the address info"
    map.textContent = "There's meant to be a map here"
    openHours.textContent = 'Opening Hours:'
    main.appendChild(container)
    container.append(background, info)
    background.appendChild(hero)
    hero.appendChild(p)
    info.append(address, map, openHours)
  }

  const removeContent = () => {
    const container = document.querySelector('.container')
    container.remove()
  }

  return { addContent, removeContent }
}
