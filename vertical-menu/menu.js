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
    const overlay = document.getElementById('overlay');
    verticalMenu.classList.toggle('menu-open');
});


// Simpler implementation?
// function toggleMenu() {
//     const menu = document.getElementById('menu');
//     const overlay = document.getElementById('overlay');
    // document.body.classList.toggle('menu-open');
//   }
  