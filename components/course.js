const courseWrapper = document.querySelector('#course-wrapper')

function getCourse() {
    fetch('http://localhost:3000/api/courses')
    .then(res => res.json())
    .then(courses => {
        courseWrapper.innerHTML = ""
        courses.forEach(course => {
            courseWrapper.insertAdjacentHTML('beforeend', `
                <li class="flex justify-start items-stretch bg-gray-50 rounded-r-lg hover:bg-gray-100 mb-10 md:flex-row flex-col">
                    <img class="w-full sm:w-64 rounded-lg md:rounded-r-none" src="./assets/poster.jpg" alt="">
                    <div class="ml-2 my-1">
                        <div class="my-4">
                            <h2 class="text-2xl font-bold text-[#2563eb]">${course.title}</h2>
                            <p class="text-gray-500">${course.body}</p>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex justify-center items-center text-sm sm:text-base">
                                <span class="flex justify-center items-center mr-5">
                                    <img class="w-6" src="./assets/dollar-square-svgrepo-com.svg" alt="">
                                    <p>${course.price}</p>
                                </span>
                                <span class="flex justify-center items-center mr-5">
                                    <img class="w-6" src="./assets/folder-svgrepo-com.svg" alt="">
                                    <p>${course.category}</p>
                                </span>
                            </div>
                            <div>
                                <span class="flex justify-center items-center mr-5">
                                    <img class="w-6" src="./assets/users-group-rounded-svgrepo-com.svg" alt="">
                                    <p>${course.students}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
            `)
        });
    })
}


