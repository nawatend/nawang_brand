let btnViewProjects = document.getElementById('btnViewProjects');

let start = document.getElementById('start');
let darkMode = document.getElementsByClassName('dark__mode')[0];


darkMode.addEventListener('click', () => {

    darkMode.classList.toggle('dark__mode--on')
})

btnViewProjects.addEventListener('click', () => {
    console.log('view projects clicked');

});