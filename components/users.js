window.addEventListener('load', () => {
    fetch('http://localhost:3000/api/users')
    .then(res => res.json())
    .then(user => user)
    .catch(err => err)
})