const addCourseBtn = document.querySelector('#course-btn')
const getCourseTitle = document.querySelector('#course-title')
const getCourseDesc = document.querySelector('#course-desc')
const getCourseTime = document.querySelector('#course-time')
const getCoursePrice = document.querySelector('#course-price')
const getCourseStudent = document.querySelector('#course-students')
const getCourseCategory = document.querySelector('#course-category')



addCourseBtn.addEventListener('click', async (ev) => {
    ev.preventDefault()

    let newCourseData = {
        title: getCourseTitle.value,
        body: getCourseDesc.value,
        time: getCourseTime.value,
        price: getCoursePrice.value,
        students: getCourseStudent.value,
        category: getCourseCategory.value,
        cover: './assets/poster.jpg'
    }

    await fetch('http://localhost:3000/api/courses', {
        method: 'POST',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(newCourseData)
    })
    .then(res => {
        console.log(res);
        getCourse()
        closeNewCourseModal()
    })
})
