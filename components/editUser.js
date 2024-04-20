const modalEditUser = document.querySelector('#edit-modal')



function closeEditModal () {
    modalEditUser.classList.remove('flex')
    modalEditUser.classList.add('hidden')
    getLayer.classList.add('hidden')
}

function showEditModal () {
    modalEditUser.classList.remove('hidden')
    modalEditUser.classList.add('flex')
    getLayer.classList.remove('hidden')
}