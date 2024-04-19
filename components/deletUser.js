const modalDeleteUser = document.querySelector('#popup-modal')
const getRemoveBtn = document.querySelector('#remove-btn')
const getLayer = document.querySelector('#layer')

let mainUserId

function showModal (userId) {
    mainUserId = userId
    modalDeleteUser.classList.remove('hidden')
    modalDeleteUser.classList.add('flex')
    getLayer.classList.remove('hidden')
}

function closeModal () {
    modalDeleteUser.classList.add('hidden')
    modalDeleteUser.classList.remove('flex')
    getLayer.classList.add('hidden')
}

function deleteUser () {
    fetch(`http://localhost:3000/api/users/${mainUserId}`, {
        method: 'DELETE'
    }).then(res => {
        closeModal()
        getUser()
    })
}