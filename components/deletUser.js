const modalDeleteUser = document.querySelector('#popup-modal')
const getRemoveBtn = document.querySelector('#remove-btn')
const getLayer = document.querySelector('#layer')


function showModal () {
    modalDeleteUser.classList.remove('hidden')
    modalDeleteUser.classList.add('flex')
    getLayer.classList.remove('hidden')
}

function closeModal () {
    modalDeleteUser.classList.add('hidden')
    modalDeleteUser.classList.remove('flex')
    getLayer.classList.add('hidden')
}