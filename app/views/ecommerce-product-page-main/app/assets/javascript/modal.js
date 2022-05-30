let modalBtn = document.querySelector('.button')
let modalBg = document.querySelector('.modal-bg')
let modalClose = document.querySelector('.modal-close')

modalBtn.addEventListener('click', function() {
    modalBg.classList.add('visible')
})
modalClose.addEventListener('click', function() {
    modalBg.classList.remove('visible')
})