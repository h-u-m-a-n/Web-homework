let headerBurger = document.querySelector('.header__burger');

headerBurger.onclick = function(){
    headerBurger.classList.toggle('active');
    document.querySelector('.links').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
    document.querySelector('html').classList.toggle('lock');
}

let dropdown = document.querySelector('.dropdown');

dropdown.onclick = function(){
    document.querySelector('.dropdown-content').classList.toggle('active');
}