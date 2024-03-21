import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notNumber } from "./utils.js"

const form = document.querySelector('form')
let inputWeight = document.querySelector('#weight')
let inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
form.onsubmit = (e) => {
  e.preventDefault();

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    inputWeight.value = ""
    inputHeight.value = ""
  } else {
    AlertError.close()
    const result = calculateIMC(weight, height)
    displayResultMessage(result)
  }
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`
  Modal.message.innerText = message
  Modal.open()
}