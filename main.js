let display = document.querySelector('input')

const button = document.querySelectorAll('.grid-item')
const list = document.querySelector('ul')

const deleteButton = document.querySelector('.delete')
const clearButton = document.querySelector('.clear')

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
    item.textContent = `${dispalyString} = ${eval(dispalyString)}`
    list.appendChild(item)
  }
}

window.onclick = () => {
  display.focus()
}

deleteButton.addEventListener('click', () => Delete.delete())

clearButton.addEventListener('click', () => Delete.clear())

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
