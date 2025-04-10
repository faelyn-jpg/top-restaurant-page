export default function DisplayAbout() {
  const container = document.querySelector('#content')
  const addAbout = () => {
    const aboutContainer = document.createElement('div')
    const about = document.createElement('div')
    aboutContainer.classList.add('about-container')
    about.classList.add('about')
    about.textContent =
      'This is our lovely restaurant where we make food of cuisine type which is made locally and sustainably!'
    container.appendChild(aboutContainer)
    aboutContainer.appendChild(about)
  }

  const removeContent = () => {
    const aboutContainer = document.querySelector('.about-container')
    aboutContainer.remove()
  }

  return { addAbout, removeContent }
}
