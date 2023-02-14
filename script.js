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

// MODAL LOGIC
function showModal() {
  document.getElementById('id01').style.display='block'
  
};

showModal();