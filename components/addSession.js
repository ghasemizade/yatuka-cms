const addSessionBtn = document.querySelector('#session-btn')
const getSessionName = document.querySelector('#session-name')
const getSessionTime = document.querySelector('#session-time')
const getSessionPrice = document.querySelector('#session-price')
const getSessionCategory = document.querySelector('#session-category')

addSessionBtn.addEventListener('click', ev => {
    
    let newSessionData = {
        title: getSessionName.value,
        time: getSessionTime.value,
        isFree: Boolean(Number(getSessionPrice.value)),
        course: getSessionCategory.value,
    }
    
    fetch('http://localhost:3000/api/sessions', {
        method: 'POST',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(newSessionData)
    })
    .then (res => console.log(res))
})
