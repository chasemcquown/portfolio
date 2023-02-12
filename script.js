var header = document.getElementById("header");
var sticky = header.offsetTop;

let oldScrollY = window.scrollY;


window.onscroll = function(e) {
  if (oldScrollY < window.scrollY) {
    header.classList.remove("sticky");
  } else {
    console.log(window.pageYOffset)
    header.classList.add("sticky");
    document.querySelector(".header").style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
  }
  oldScrollY = window.scrollY;
}