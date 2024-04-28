const courseWrapper = document.querySelector('#course-wrapper')

function getCourse() {
    fetch('http://localhost:3000/api/users')
    .then(res => res.json())
    .then(users => {
        courseWrapper.innerHTML = ""
    })
}