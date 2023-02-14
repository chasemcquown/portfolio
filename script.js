// STICKY HEADER LOGIC
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.style.background = "rgba(255, 255, 255, 0.65);"
  } else {
    header.classList.remove("sticky");
  }
}

// MOBILE MENU LOGIC
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}