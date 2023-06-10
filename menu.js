const burgerBtn = document.querySelector('.burger')
const menu = document.querySelector('.nav-bar ul')

burgerBtn.addEventListener('click', ()=> {
    menu.classList.toggle('hidden')
})
