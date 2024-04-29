const $ = document
const firstNameElem = $.querySelector('#fname'),
lastNameElem = $.querySelector('#lname'),
userNameElem = $.querySelector('#username'),
submitBtnElem = $.querySelector('#submit-btn'),
fnameValidMessage = $.querySelector('#fname-valid'),
lnameValidMessage = $.querySelector('#lname-valid'),
usernameValidMessage = $.querySelector('#username-valid');
let firstnameValid, lastnameValid, usernameValid = null


firstNameElem.addEventListener('keyup', ev => {
    firstNameElem.classList.remove('focus:outline-primary-500')
    if (ev.target.value.length < 3) {
        firstNameElem.classList.add("focus:outline-red-500")
        fnameValidMessage.classList.remove("hidden")
        firstnameValid = false
    } else {
        firstNameElem.classList.remove("focus:outline-red-500")
        firstNameElem.classList.add("focus:outline-primary-500")
        fnameValidMessage.classList.add("hidden")
        firstnameValid = true
    }
})

lastNameElem.addEventListener('keyup', ev => {
    lastNameElem.classList.remove('focus:outline-primary-500')
    if (ev.target.value.length < 3) {
        lastNameElem.classList.add("focus:outline-red-500")
        lnameValidMessage.classList.remove("hidden")
        lastnameValid = false
    } else {
        lastNameElem.classList.remove("focus:outline-red-500")
        lastNameElem.classList.add("focus:outline-primary-500")
        lnameValidMessage.classList.add("hidden")
        lastnameValid = true
    }
})

userNameElem.addEventListener('keyup', ev => {
    userNameElem.classList.remove('focus:outline-primary-500')
    if (ev.target.value.length < 8) {
        userNameElem.classList.add("focus:outline-red-500")
        usernameValidMessage.classList.remove("hidden")
        usernameValid = false
    } else {
        userNameElem.classList.remove("focus:outline-red-500")
        userNameElem.classList.add("focus:outline-primary-500")
        usernameValidMessage.classList.add("hidden")
        usernameValid = true
    }
})

submitBtnElem.addEventListener('click', ev => {
    ev.preventDefault()

    if (firstnameValid && lastnameValid && usernameValid) {
        
        let newUserObj = {
            firstName: firstNameElem.value,
            lastName: lastNameElem.value,
            userName: userNameElem.value,
            profile: '/assets/avatar.png',
        }
        fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUserObj)
        }).then(res => console.log(res))

        redirect()
    } else {
        alert("check inputs!")
    }
})

function redirect(){
    location.replace('' + '/index.html')
}