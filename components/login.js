const getUsernameInput = document.querySelector('#username')
const getPasswordInput = document.querySelector('#password')
const getSubmitBtn = document.querySelector('#submit-btn')


getSubmitBtn.addEventListener('click', (ev) => {
    ev.preventDefault()
    
    let adminUsername = getUsernameInput.value
    let adminPassword = getPasswordInput.value

    fetch('http://localhost:3000/api/admins')
    .then(res => res.json())
    .then(admins => {
        console.log(admins);

        let isAdmin = admins.some(admin => {
            return admin.userName === adminUsername && admin.password === adminPassword
        })
    })
})