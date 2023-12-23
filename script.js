// Select the carousel track
const carouselTrack = document.querySelector('.carousel-track');

// Clone the skill images
const clone = carouselTrack.cloneNode(true);

// Append the cloned images to the track to double the content
carouselTrack.appendChild(clone);

// Determine the number of skill images after cloning
const totalSkills = document.querySelectorAll('.carousel-track .skill').length;

// Update the width of the carousel track based on the number of skills (original + cloned)
carouselTrack.style.width = `calc(100% * (${totalSkills} / 5))`;

// Now you need to update the keyframe animation to account for the duplicated images
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-item");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });
  
    function smoothScroll(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href").substring(1); // Remove the '#' from the href attribute
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth", // Smooth scrolling behavior
        });
      }
    }
  });



