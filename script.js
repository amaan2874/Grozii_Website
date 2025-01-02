document.addEventListener("DOMContentLoaded", () => {
    const logoImage = document.querySelector(".logo-image");
    logoImage.src = "images/Coming Soon.png"; // Replace with your image URL
  });
  

  // Select hamburger menu and nav links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle visibility on click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
