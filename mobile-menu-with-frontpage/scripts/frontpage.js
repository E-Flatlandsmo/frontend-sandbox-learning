window.addEventListener('scroll', function() {
var scrollTop = window.scrollY;
var windowHeight = window.innerHeight;
var totalHeight = document.documentElement.scrollHeight;
var maxOpacity = 1;
console.log(totalHeight);

var opacity = 1 - (scrollTop / (totalHeight - windowHeight)) * maxOpacity;
document.getElementById('front-page-image').style.opacity = opacity.toFixed(2);
});

