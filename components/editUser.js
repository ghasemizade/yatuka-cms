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
        console.log(user.firstName);
        getUsername.value = user.userName
        getFirstname.value = user.firstName
        getLastname.value = user.lastName
    })

    modalEditUser.classList.remove('hidden')
    modalEditUser.classList.add('flex')
    getLayer.classList.remove('hidden')
}

// getUpdateBtn.addEventListener('click', () => {
//     modalEditUser.classList.remove('flex')
//     modalEditUser.classList.add('hidden')
//     getLayer.classList.add('hidden')
// })

function editUser (event) {
    event.preventDefault()

    let updateUserData = {
        firstName: getFirstname.value,
        lastName: getLastname.value,
        userName: getUsername.value,
        profile: '/assets/avatar.png',
    }

    // console.log(getFirstname.value);

    fetch(`http://localhost:3000/api/users/${mainUserId}`, {
        method: 'PUT',
        body: JSON.stringify(updateUserData)
    })
    .then(res => {
        console.log(res);
        closeEditModal()
        getUser()
    })
}