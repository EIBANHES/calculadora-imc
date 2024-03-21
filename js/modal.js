export const Modal = { //object literal
  wapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  btnClose: document.querySelector('.modal button.close'),
  open() {
    Modal.wapper.classList.add('open')
  },
  close() {
    Modal.wapper.classList.remove('open')
  }
}

function handlerKeyDown(e) {
  if (e.key === 'Escape') Modal.close()
}

Modal.btnClose.onclick = () => Modal.close()

window.addEventListener('keydown', handlerKeyDown)