var navbar = document.querySelector('header .navbar');
var icons = document.querySelector('#menu-btn')
icons.addEventListener("click", ()=>{
    navbar.classList.toggle('active');
})

window.addEventListener("scroll", ()=>{
    navbar.classList.remove('active');
})