//  =============== Variables ================= //

let display = document.querySelector('input')

let dragValue

const calculator = document.querySelector('.calculator')

const button = document.querySelectorAll('.grid-item')
const list = document.querySelector('ul')

const history = document.querySelector('.history')
const listItems = document.querySelectorAll('.history li')

const deleteButton = document.querySelector('.delete')
const clearButton = document.querySelector('.clear')
const closeButton = document.querySelector('.close')
const removeButton = document.querySelector('.history .removeButton')
const editButton = document.querySelector('.editButton')

const modal = document.querySelector('.modal-wraper')
const instructions = document.getElementById('instructions')
const nav = document.getElementById('nav')
const toggleNav = document.querySelector('.toggle-nav')

// =========== Functions =============== //

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
  },

  async remove(li) {
    await li.parentNode.remove()
    window.location.reload()
  }
}

const Calculation = {
  calc() {
    let dispalyString = display.value
    let item = document.createElement('li')
    item.innerHTML = `
    <div class='name' contentEditable="true">-----</div>
    <div class='result' contentEditable="true">${dispalyString} = ${eval(
      dispalyString
    )}</div>
     <div class='removeButton' onclick="Delete.remove(this)">X</div>`
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
    toggleNav.classList.toggle('closed')
  }
}

// ================== General click functions ================ //

calculator.onclick = () => {
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
  if (e.key == 'Escape') {
    Modal.toggle()
  }
})

display.addEventListener('keyup', e => {
  if (e.key == 'Delete') {
    Delete.clear()
  }
})

display.addEventListener('keydown', e => {
  if (e.key == 'Enter') {
    Calculation.calc()
  }
})

// ==================== Drag ===================== //

function move(element) {
  history.onmousedown = function () {
    dragValue = history
  }
}

document.onmouseup = function (e) {
  dragValue = null
}

document.onmousemove = function (e) {
  if (dragValue != null) {
    history.style.position = 'absolute'

    var x = e.pageX
    var y = e.pageY

    dragValue.style.left = x + 'px'
    dragValue.style.top = y + 'px'
  }
}
