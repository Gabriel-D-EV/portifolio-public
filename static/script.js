/* menu mobile */

const ham = document.querySelector(".menu-ham");
const body = document.querySelector("body");

/* 
? = if
: = else
*/
ham.addEventListener("click", () => {
    ham.classList.contains("bi-list")
    ? ham.classList.replace("bi-list", "bi-x")
    : ham.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-active");
})

/*
Fecha o menu quando clica em alguma list
*/

const nav = document.querySelectorAll(".nav-item");

nav.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-active")) {
            body.classList.remove("menu-active")
            ham.classList.replace("bi-x", "bi-list");
        }
    })   
})





/*
Animação
*/

const observer = new IntersectionObserver((ent) => {
    ent.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => observer.observe(element))


//botao enviar email

const btnE = document.querySelector('#btn-')
const btnL = document.querySelector('#btn-loading')

btnE.addEventListener('click', () => {
    btnE.style.display = 'none';
    btnL.style.display = 'block'
})

setTimeout(() =>{
    document.querySelector('#alerta').style.display = 'none';

}, 2000)