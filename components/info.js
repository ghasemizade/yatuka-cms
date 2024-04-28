const getFnamInput = document.querySelector('#fname')
const getLnamInput = document.querySelector('#lname')
const getUsernameInput = document.querySelector('#username')
const getEmailInput = document.querySelector('#email')
const getPasswordInput = document.querySelector('#password')
const getNewPasswordInput = document.querySelector('#new-password') 
const getConfirmPasswordInput = document.querySelector('#confirm-password') 

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

function updateInformation() {

    if (getNewPasswordInput.value === getConfirmPasswordInput.value) {
        let mainAdminId = localStorage.getItem('loginId')
        let newInfoAdmin = {
            firstName: getFnamInput.value,
            lastName: getLnamInput.value,
            userName: getUsernameInput.value,
            password: getConfirmPasswordInput.value,
            email: getEmailInput.value
        }

        fetch(`http://localhost:3000/api/admins/${mainAdminId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newInfoAdmin)
        })
        .then(res => console.log(res))
        
    } else {
        alert("new password it is not the same !!!")
    }

}