var menu = document.querySelector('.menu');
var buttonBurguer = document.querySelector('.buttonBurguer');
buttonBurguer.addEventListener('click', menuRes);
function menuRes(){
    if(menu.classList.contains('open')){
        menu.classList.remove('open');
        buttonBurguer.classList.remove('active');
    } else{
        menu.classList.add('open');
        buttonBurguer.classList.add('active');
    }
}