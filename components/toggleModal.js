const modalElem = document.querySelector('#newcourse-modal')
const layerElem = document.querySelector('#layer')

function closeModal() {
    modalElem.classList.add('hidden')
    layerElem.classList.add('hidden')
}

function openModal() {
    modalElem.classList.remove('hidden')
    layerElem.classList.remove('hidden')
}