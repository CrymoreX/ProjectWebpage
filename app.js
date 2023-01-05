

/* HAMBURGER MENU */

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}



/* SEND A MESSAGE WHEN CLICK ON SUBMIT */ 

const buttonEl = document.querySelector('.button')

const contactformEl = document.querySelector(".contactform")

function messagetext(e) {
    e.preventDefault()
    contactformEl.innerHTML = "Your Message Successfully Sent!"
}

buttonEl.addEventListener('click', messagetext)
