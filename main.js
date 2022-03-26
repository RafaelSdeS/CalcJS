let display = document.querySelector('input')

const button = document.querySelectorAll('.grid-item')
const list = document.querySelector('ul')

const deleteButton = document.querySelector('.delete')
const clearButton = document.querySelector('.clear')
const closeButton = document.querySelector('.close')
const modal = document.querySelector('.modal-wraper')
const instructions = document.getElementById('instructions')
const nav = document.querySelector('nav')
const toggleNav = document.querySelector('.toggle-nav')

button.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.innerHTML
  })
})

const Delete = {
  delete() {
    let displaySplited = display.value.split('')
    displaySplited.splice(displaySplited.length - 1, 1)
    display.value = displaySplited.join('').toString()
  },

  clear() {
    display.value = ''
  }
}

const Calculation = {
  calc() {
    let dispalyString = display.value
    let item = document.createElement('li')
    item.innerHTML = `
    <div class='result'>${dispalyString} = ${eval(dispalyString)}</div>
     <div class='editButton'>E</div>
     <div class='removeButton'>X</div>`
    list.appendChild(item)
    display.value = eval(dispalyString)
  }
}

const Modal = {
  toggle() {
    modal.classList.toggle('active')
  }
}

const Nav = {
  toggle() {
    nav.classList.toggle('deactive')
  }
}

window.onclick = () => {
  display.focus()
}

deleteButton.addEventListener('click', () => Delete.delete())

clearButton.addEventListener('click', () => Delete.clear())

closeButton.addEventListener('click', () => {
  Modal.toggle()
})

instructions.addEventListener('click', () => {
  Modal.toggle()
})

toggleNav.addEventListener('click', () => {
  Nav.toggle()
})

document.addEventListener('keydown', e => {
  console.log(e.key)

  if (e.key == 'Escape') {
    Modal.toggle()
  }
})

display.addEventListener('keyup', e => {
  if (e.key == 'Delete') {
    Delete.clear()
  }
})

document.addEventListener('keydown', e => {
  if (e.key == 'Enter') {
    Calculation.calc()
  }
})
