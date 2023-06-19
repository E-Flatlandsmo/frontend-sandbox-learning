// function toggleVerticalNavbar() {
//     var showVertNavbarDisplay = document.getElementById("vertical-navbar-id").style.display;
//     if(showVertNavbarDisplay == "none"){
//         document.getElementById("vertical-navbar-id").style.display = "block"
//     } else {
//         document.getElementById("vertical-navbar-id").style.display = "none" 
//     }
// }

const menuToggle = document.querySelector('.menu-toggle');
const verticalMenu = document.querySelector('.vertical-navbar');

menuToggle.addEventListener('click', function() {
    verticalMenu.classList.toggle('open');
    console.log(verticalMenu)
});