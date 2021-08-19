const menuBtn = document.querySelector(".menu-btn");
const hamBurger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.navbar');
const menuNav = document.querySelector('.navbar_list');
const navItems = document.querySelectorAll('.nav-item');


let showMenu = false;

menuBtn.addEventListener('click', () => {
    if (!showMenu) {
        hamBurger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamBurger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));


        showMenu = false;
    }
});

navItems.forEach(item => item.addEventListener('click', () => {
    hamBurger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));
}));