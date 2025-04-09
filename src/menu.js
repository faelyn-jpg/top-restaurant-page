export default function DisplayMenu() {
  const menu = {
    starters: [
      {
        name: 'Starter 1',
        desc: 'This is a yummy meal made of food and food and food.',
        price: '$15',
      },
      {
        name: 'Starter 2',
        desc: 'This is a yummy meal made of food and food and food.',
        price: '$15',
      },
      {
        name: 'Starter 3',
        desc: 'This is a yummy meal made of food and food and food.',
        price: '$15',
      },
    ],
    mains: [
      {
        name: 'Main 1',
        desc: 'This is a yummy meal made of food and food and food.',
        price: '$15',
      },
      {
        name: 'Main 2',
        desc: 'This is a yummy meal made of food and food and food.',
        price: '$15',
      },
      {
        name: 'Main 3',
        desc: 'This is a yummy meal made of food and food and food.',
        price: '$15',
      },
    ],
    desserts: [
      {
        name: 'Dessert 1',
        desc: 'This is a yummy meal made of food and food and food.',
        price: '$15',
      },
      {
        name: 'Dessert 2',
        desc: 'This is a yummy meal made of food and food and food.',
        price: '$15',
      },
      {
        name: 'Dessert 3',
        desc: 'This is a yummy meal made of food and food and food.',
        price: '$15',
      },
    ],
    kids: [
      {
        name: 'Kids meal 1',
        desc: 'This is a yummy meal made of food and food and food.',
        price: '$15',
      },
      {
        name: 'Kids meal 2',
        desc: 'This is a yummy meal made of food and food and food.',
        price: '$15',
      },
      {
        name: 'Kids meal 3',
        desc: 'This is a yummy meal made of food and food and food.',
        price: '$15',
      },
    ],
  }

  function capitalise(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1)
  }

  const addMenu = () => {
    const container = document.querySelector('#content')
    const menuContainer = document.createElement('menu-container')
    const menuHeading = document.createElement('h1')
    const menuDiv = document.createElement('div')

    menuContainer.classList.add('menu-container')
    menuDiv.classList.add('menu')
    menuHeading.textContent = 'Menu'
    container.appendChild(menuContainer)
    menuDiv.appendChild(menuHeading)
    menuContainer.append(menuDiv)

    Object.keys(menu).forEach(function (item, index) {
      const categoryDiv = document.createElement('div')
      const categoryHeading = document.createElement('h2')

      categoryHeading.textContent = capitalise(item)
      categoryDiv.classList.add('category', item)
      categoryHeading.classList.add('category-heading')
      menuDiv.appendChild(categoryDiv)
      categoryDiv.appendChild(categoryHeading)

      menu[item].forEach((meal) => {
        const menuItem = document.createElement('h3')
        const menuItemDesc = document.createElement('p')
        const menuItemPrice = document.createElement('span')

        menuItem.classList.add('menu-item')
        menuItemDesc.classList.add('desc')
        menuItemPrice.classList.add('price')

        menuItem.textContent = meal.name
        menuItemDesc.textContent = meal.desc
        menuItemPrice.textContent = meal.price

        categoryDiv.append(menuItem, menuItemDesc, menuItemPrice)
      })
    })
  }

  const removeMenu = () => {
    const menu = document.querySelector('.menu-container')
    menu.remove()
  }

  return { addMenu, removeMenu }
}
