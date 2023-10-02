const btn = document.querySelector('.burger__menu')
const header = document.querySelector('.header')

btn.addEventListener('click', ()=>{
    header.classList.toggle('header--active')
})