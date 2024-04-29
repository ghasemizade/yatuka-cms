const getUsernameInput = document.querySelector('#username')
const getPasswordInput = document.querySelector('#password')
const getSubmitBtn = document.querySelector('#submit-btn')


getSubmitBtn.addEventListener('click', (ev) => {
    ev.preventDefault()
    
    let adminId = null
    let adminUsername = getUsernameInput.value
    let adminPassword = getPasswordInput.value

    fetch('http://localhost:3000/api/admins')
    .then(res => res.json())
    .then(admins => {

        let isAdmin = admins.some(admin => {
            if (admin.userName === adminUsername && admin.password === adminPassword) {
                adminId = admin._id
                return admin.userName === adminUsername && admin.password === adminPassword
            }
        })

        if (isAdmin) {
            localStorage.setItem('loginId', adminId)
            location.replace('/yatuka-cms/index.html')
        } else{
            alert("it is something wrong! check it out");
            clearLoginInput()
        }
    })
})


function clearLoginInput() {
    getUsernameInput.value = ''
    getPasswordInput.value = ''   
}