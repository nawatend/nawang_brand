let menuBars = document.getElementsByClassName('menu__bars')[0];
let normalNavigation = document.getElementsByClassName('nav__right')[0];


//when resize
window.addEventListener('resize', function (event) {
    console.log(window.innerWidth);
    let widthInnerWindow = window.innerWidth;

    if (widthInnerWindow <= 1245) {
        menuBars.classList.remove('remove__element');
        normalNavigation.classList.add('remove__element');

    } else {
        menuBars.classList.add('remove__element');
        normalNavigation.classList.remove('remove__element');

    }
});


//onload 
console.log(window.innerWidth);
let widthInnerWindow = window.innerWidth;

if (widthInnerWindow <= 1245) {
    menuBars.classList.remove('remove__element');
    normalNavigation.classList.add('remove__element');

} else {
    menuBars.classList.add('remove__element');
    normalNavigation.classList.remove('remove__element');

}