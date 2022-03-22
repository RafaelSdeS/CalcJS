let display = document.querySelector('input')
const button = document.querySelectorAll('.grid-item')
const deleteButton = document.querySelector('.delete')
const clearButton = document.querySelector('.clear')
const list = document.querySelector('ul')

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
    let parts = display.value.split('+')
    parts.forEach(part => {
      let item = document.createElement('li')
      item.textContent = part
      list.appendChild(item)
    })
  }
}

deleteButton.addEventListener('click', () => Delete.delete())

clearButton.addEventListener('click', () => Delete.clear())

document.addEventListener('keydown', e => {
  if (e.key == 'Backspace') {
    Delete.delete()
  }
  if (e.key == 'Delete') {
    Delete.delete()
  }

  if (e.key == 'c') {
    Delete.clear()
  }

  if (e.key == 'Enter') {
    Calculation.calc()
  }
})
