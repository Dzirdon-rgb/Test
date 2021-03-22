let searchBtn = document.querySelector('.nav__search')
let header = document.querySelector('.header')
let searchHelp = document.querySelector('.search-help')
let cross = document.querySelector('#cross')
let cross2 = document.querySelector('#cross2')
let enter = document.querySelector('.enter')
let modalAuth = document.querySelector('.modal__auth')
let modalReg = document.querySelector('.modal__reg')
let formAuthIn = document.querySelector('.form-auth__in')
let main = document.querySelector('.main')
let openModal = false;
let counter = 0;
let openSearch =false;

console.log(header.offsetHeight)


searchBtn.addEventListener('click', function () {
    if (openSearch) {
        openSearch = false;
        searchHelp.style.display = 'none'
        header.style.height = header.clientHeight/2+'px';
    } else {
        header.style.height = 2*header.clientHeight+'px';
        searchHelp.style.display = 'flex'
        openSearch = true;
    }

})

enter.addEventListener('click', function () {
    modalAuth.style.display = 'block'
    openModal = true;
    offScroll();
})
cross.addEventListener('click' , function () {
    modalAuth.style.display = 'none'
    openModal = false
    document.body.style.overflow = 'auto'
})

formAuthIn.addEventListener('click' , function () {
    modalAuth.style.display = 'none'
    modalReg.style.display = 'block'
    openModal = true
    offScroll();
})

cross2.addEventListener('click' , function () {
    modalReg.style.display = 'none'
    openModal = false
    document.body.style.overflow = 'auto'
})

main.style.top = header.style.height

window.addEventListener('scroll', function (){
    let y = pageYOffset;
    if (y > header.style.height + 30) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll')
    }
})

function offScroll () {
    document.body.style.overflow = "hidden";
}