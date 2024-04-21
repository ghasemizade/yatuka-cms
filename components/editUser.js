const modalEditUser = document.querySelector('#edit-modal')
const getUsername = document.querySelector('#edit-username')
const getFirstname = document.querySelector('#first-name')
const getLastname = document.querySelector('#last-name')
// const getUpdateBtn = document.querySelector('#update-btn')

function closeEditModal () {
    modalEditUser.classList.remove('flex')
    modalEditUser.classList.add('hidden')
    getLayer.classList.add('hidden')
}

function showEditModal (userId) {
    mainUserId = userId
    fetch(`http://localhost:3000/api/users/${mainUserId}`, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(user => {
        getUsername.value = user.userName
        getFirstname.value = user.firstName
        getLastname.value = user.lastName
    })

    modalEditUser.classList.remove('hidden')
    modalEditUser.classList.add('flex')
    getLayer.classList.remove('hidden')
}

function editUser (event) {
    event.preventDefault()

    let updateUserData = {
        firstName: getFirstname.value,
        lastName: getLastname.value,
        userName: getUsername.value,
        profile: '/assets/avatar.png',
    }

    fetch(`http://localhost:3000/api/users/${mainUserId}`, {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(updateUserData)
    })
    .then(() => {
        closeEditModal()
        getUser()
    })
}