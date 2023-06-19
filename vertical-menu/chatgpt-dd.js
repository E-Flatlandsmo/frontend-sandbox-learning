const menuToggle = document.querySelector('.menu-toggle');
const verticalMenu = document.querySelector('.vertical-menu');

menuToggle.addEventListener('click', function() {
    verticalMenu.classList.toggle('open');
    console.log(verticalMenu)
});
// 