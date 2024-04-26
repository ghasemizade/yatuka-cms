const sessionWrapper = document.querySelector('#session-wrapper')

function getSession() {
    fetch('http://localhost:3000/api/sessions')
    .then(res => res.json())
    .then(session => {
        sessionWrapper.innerHTML = ""
        session.forEach(sess => {
            sessionWrapper.insertAdjacentHTML('beforeend', 
            `
                <li class="flex justify-between items-center bg-gray-100 hover:bg-gray-200 rounded-lg p-2 mb-1.5">
                    <div class="flex justify-center items-center">
                        <div class="ml-4">
                            <span class="flex justify-start items-center sm:flex-row flex-col gap-y-2">
                                <h5 class="text-xs">${sess.course}</h5>
                                <p class="text-[12px] px-2 bg-[#ebd725] rounded-lg text-white text-center ml-1 p-0.5">${sess.title}</p>
                            </span>
                        </div>
                    </div>
                    <div class="flex gap-4 sm:flex-row flex-col justify-center items-center">
                        <span class="">${sess.time}</span>
                        <span id="session-price" class="bg-[#407eda] text-white px-2 py-1 sm:px-8 rounded-full flex justify-center items-center shadow hover:shadow-sm">
                            <p class="">${sess.isFree === false ? "perimium" : "free"}</p>
                        </span>
                    </div>
                </li>
            `
        )
        });
    })
}

getSession()