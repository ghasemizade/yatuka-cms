const usersWrapper = document.querySelector('#users-wrapper')

function getUser () {
    fetch('http://localhost:3000/api/users')
    .then(res => res.json())
    .then(users => {
        usersWrapper.innerHTML = ""
        users.forEach(user => {
            usersWrapper.insertAdjacentHTML('beforeend', `
                <li class="flex justify-between items-center bg-gray-100 hover:bg-gray-200 rounded-lg p-2 mb-1.5">
                    <div class="flex justify-center items-center">
                        <img class="w-14 rounded-full" src="${user.profile}" alt="">
                        <div class="ml-4">
                            <span class="flex justify-start items-center sm:flex-row flex-col gap-y-2">
                                <h5 class="text-xs">${user.userName}</h5>
                                <p class="text-[12px] bg-[#2563eb] rounded-lg text-white text-center ml-1 p-0.5">${user.created_AT}</p>
                            </span>
                        </div>
                    </div>
                    <div class="flex gap-4 sm:flex-row flex-col">
                        <span onclick="showEditModal('${user._id}')" class="bg-[#2563eb] px-2 py-1 sm:px-8 rounded-lg flex justify-center items-center shadow hover:shadow-sm cursor-pointer">
                            <p class="text-white">Edit</p>
                        </span>
                        <span onclick="showDeleteModal('${user._id}')" id="remove-btn" class="bg-red-500 px-2 py-1 sm:px-8 rounded-lg flex justify-center items-center shadow hover:shadow-sm  cursor-pointer">
                            <p class="text-white">Remove</p>
                        </span>
                    </div>
                </li>
            `)
        });
    })
    .catch(err => err)
}

window.addEventListener('load', () => {

    let adminId = localStorage.getItem('loginId')
    if (!adminId) {
        location.replace('yatuka-cms/loginPage.html')
    }

    getUser()
    getCourse()
})