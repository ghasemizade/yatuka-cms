const getFnamInput = document.querySelector('#fname')
const getLnamInput = document.querySelector('#lname')
const getUsernameInput = document.querySelector('#username')
const getEmailInput = document.querySelector('#email')


window.addEventListener('load', () => {
    let LoginAdminId = localStorage.getItem('loginId')

    fetch(`http://localhost:3000/api/admins/${LoginAdminId}`)
    .then(res => res.json())
    .then(mainAdmin => {

        getFnamInput.value = mainAdmin.firstName
        getLnamInput.value = mainAdmin.lastName
        getUsernameInput.value = mainAdmin.userName
        getEmailInput.value = mainAdmin.email
    })
})