const openModal = document.querySelectorAll('open-model');
const closeModal = document.querySelectorAll('close-model');
const overlay = document.querySelectorAll('overlay');

openModel.forEach(button => {
button.addEventListener('click', () => {

});
});

function Open(modal) {
    if(modal === null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function Close(modal) {
    if(modal === null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}
