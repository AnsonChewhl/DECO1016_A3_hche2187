// Nav-bar animation
// Create a variable to reference the toggle <button>
var navbarToggle = navbar.querySelector("#navbar-toggle");

// Create a variable to reference the nav menu container <div>
var navbarMenu = document.querySelector("#navbar-menu");

// Create a variable to reference the <ul> list of nav links
var navbarLinksContainer = navbarMenu.querySelector(".navbar-links");

// Add or remove the 'active' class on the toggle <button> when clicked
navbarToggle.addEventListener("click", () => {navbarToggle.classList.toggle('active')});

// Remove the 'active' class on the menu container <div> when clicked 
// This will close the menu if the user clicks outside the nav link <ul>
navbarMenu.addEventListener("click", () => {navbarToggle.classList.remove('active')});

// Stop clicks on the navbar links from toggling the menu (for when it's not mobile)
navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());




// Carousel animation
let slideIndex = 0;
let activeClass = " active-dot";
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length - 1) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  
  for (let i = 0; i < slides.length; i++) {
    if (i == slideIndex) {
      slides[slideIndex].style.display = "block";
      dots[slideIndex].className += activeClass;
    } 
    else {
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(activeClass, "");
    }
  }
}