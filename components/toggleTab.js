const $ = document
const getLiElems = $.querySelectorAll(".tab-li")
const getContentElems = $.querySelectorAll(".content")
const getLiWrapperElems = $.querySelector(".li-wrapper")


getLiWrapperElems.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG" | event.target.tagName === "H4" ) {
        // if click on other element
        const currentContentId = event.target.parentElement.dataset.id;
        const currentContent = $.querySelector(`#${currentContentId}`)
        getLiElems.forEach(btn => {
            btn.classList.remove('bg-gray-50')
        })
        event.target.parentElement.classList.add('bg-gray-50')
        getContentElems.forEach(content => {
            content.classList.add('hidden')
        })
        currentContent.classList.remove('hidden')

    } else {
        // if click on li element
        const currentContentId = event.target.dataset.id;
        const currentContent = $.querySelector(`#${currentContentId}`)
        getLiElems.forEach(btn => {
            btn.classList.remove('bg-gray-50')
        })
        event.target.classList.add('bg-gray-50')
        
        getContentElems.forEach(content => {
            content.classList.add('hidden')
        })
        currentContent.classList.remove('hidden')
    }
})