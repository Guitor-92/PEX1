/* Show menu */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
/* VALIDA SE EXISTE AS VARIAVEIS */
  if (toggle && nav) {
    /* ADICIONA A CLASS SHOW-MENU NA DIV COM A CLASS NAV_MENU */
    toggle.addEventListener('click', () => {
        /* ADICIONA A CLASS SHOW-MENU NA DIV QUE TEM O ID NAV-MENU */
      nav.classList.toggle('show-menu')
    })
    }
}
showMenu('nav-toggle', 'nav')

/* Remove menu mobile */
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav')
    /* Quando um link ou o botao close for clicado a class show-menu sera removido*/
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Deixa o link clicado com a class active */
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l => l.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}
linkColor.forEach(l => l.addEventListener('click', colorLink))

/* MUDAR A COR DO HEADER */
function scrollHeader(){
    const scrollHeader = document.getElementById('header')
    if(this.scrollY >= 100) scrollHeader.classList.add('scroll-header'); else scrollHeader.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)