const getSessionModal = document.querySelector('#session-modal')
const getLayerSessionModal = document.querySelectorAll('#layer')[2]

let MainSessionId

function showModalDeleteSession (sessionId) {
    MainSessionId = sessionId
    getSessionModal.classList.remove('hidden')
    getSessionModal.classList.add('flex')
    getLayerSessionModal.classList.remove('hidden')
}

function deleteSession () {
    fetch(`http://localhost:3000/api/sessions/${MainSessionId}`, {
        method: 'DELETE'
    }).then(() => {
        closeModalSessionBtn()
        getSession()
    })
}

function closeModalSessionBtn () {
    getLayerSessionModal.classList.add('hidden')
    getSessionModal.classList.add('hidden')
}