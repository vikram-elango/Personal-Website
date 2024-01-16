const carouselTrack = document.querySelector('.carousel-track');

const clone = carouselTrack.cloneNode(true);

carouselTrack.appendChild(clone);

const totalSkills = document.querySelectorAll('.carousel-track .skill').length;

carouselTrack.style.width = `calc(100% * (${totalSkills} / 5))`;

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const headerOffset = document.querySelector('.navbar').offsetHeight; // Height of header plus some extra space
      const targetId = e.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const elementRect = targetElement.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - headerOffset;

        window.scrollBy({
          top: middle - window.pageYOffset + 100,
          behavior: 'smooth'
        });
      }
    });
  });
});






  const track = document.querySelector('.carousel-track');
  const interval = 4000; 
  
  function shiftItem() {
    const firstItem = track.querySelector('.skill');
    track.appendChild(firstItem);
  }
  
  setInterval(shiftItem, interval);
  

  