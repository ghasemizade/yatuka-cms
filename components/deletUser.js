const modalDeleteUser = document.querySelector('#popup-modal')
const getRemoveBtn = document.querySelector('#remove-btn')
const getLayer = document.querySelectorAll('#layer')[0]

let mainUserId

function showModal (userId) {
    mainUserId = userId
    modalDeleteUser.classList.remove('hidden')
    modalDeleteUser.classList.add('flex')
    getLayer.classList.remove('hidden')
}

function closeDeleteBtn () {
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