const nav = document.querySelector("nav");
let initial = window.scrollY;
  window.addEventListener("scroll", function() {
    if (window.scrollY > initial) {
      nav.style.top = "-10vh";
    } else {
      nav.style.top="0";
    }
    initial = window.scrollY; //reset scroll position
  });
