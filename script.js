const carouselTrack = document.querySelector('.carousel-track');

const clone = carouselTrack.cloneNode(true);

carouselTrack.appendChild(clone);

const totalSkills = document.querySelectorAll('.carousel-track .skill').length;

carouselTrack.style.width = `calc(100% * (${totalSkills} / 5))`;

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-item");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });
  
    function smoothScroll(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href").substring(1); 
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth", 
        });
      }
    }
  });



  const track = document.querySelector('.carousel-track');
  const interval = 4000; 
  
  function shiftItem() {
    const firstItem = track.querySelector('.skill');
    track.appendChild(firstItem);
  }
  
  setInterval(shiftItem, interval);
  