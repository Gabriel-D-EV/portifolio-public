/* menu mobile */

const ham = document.querySelector(".hamb");
const body = document.querySelector("body");
const nav = document.querySelector(".nav");


//Animação


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


const btnE = document.querySelector('#btn-')
const btnL = document.querySelector('#btn-loading')

btnE.addEventListener('click', () => {
    btnE.style.display = 'none';
    btnL.style.display = 'block'
})

setTimeout(() =>{
    document.querySelector('#alerta').style.display = 'none';

}, 2000)

window.addEventListener('scroll', function() {
    let header = document.querySelector("#header")
    header.classList.toggle("newheader",window.scrollY > 100)
})

ham.addEventListener("click", () => nav.classList.toggle("active"));

const navlink = document.querySelector(".nav-list")


navlink.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
        nav.classList.remove("active");
    } else { nav.classList.add("active"); }
})

