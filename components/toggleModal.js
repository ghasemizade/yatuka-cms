const modalElem = document.querySelector('#newcourse-modal')
const layerElem = document.querySelector('#layer')

function closeModal() {
    modalElem.classList.add('hidden')
    layerElem.classList.add('hidden')
}

function openModal() {
    modalElem.classList.remove('hidden')
    modalElem.classList.add('flex')
    layerElem.classList.remove('hidden')
}

document.addEventListener('keyup', (ev) => {
    if (ev.key === "Escape") {
        modalElem.classList.add('hidden')
        layerElem.classList.add('hidden')
    }
})