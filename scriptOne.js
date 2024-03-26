/*
Background Gradients From -- 
https://uigradients.com
*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');


window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');
		
		if (top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*= ' + id + ' ]').classList.add('active')
			})
		}
	})
}

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const skillsContainer = document.querySelector('.skills-container');

    skillsContainer.addEventListener('scroll', () => {
        const skills = document.querySelectorAll('.skill');
        skills.forEach(skill => {
            const progress = parseInt(skill.dataset.progress);
            const progressBar = skill.querySelector('.progress-bar');
            progressBar.style.width = `${progress}%`;
        });
    });
});


/*window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('#skills');
    const progressBar = document.querySelector('.progress-bar');
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPosition < windowHeight) {
        progressBar.style.animation = 'progress-animation 1s ease-out forwards';
    }
}); 

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = '-100vh';
    }, 2300);
  }, 0); // Ensure the setTimeout runs after DOMContentLoaded event
});

*/

window.addEventListener('scroll', reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }
	
function updateProgressBars() {
  const skillsSection = document.getElementById('skills');
  const skillsContainer = document.querySelector('.skills-container');
  const progressBarHTML = document.querySelector('.progress-bar.html');
  const progressBarCSS = document.querySelector('.progress-bar.css');
  const progressBarJS = document.querySelector('.progress-bar.js');
  const progressBarPython = document.querySelector('.progress-bar.python');
  
  const scrollTop = window.scrollY || window.pageYOffset;
  const skillsSectionTop = skillsSection.offsetTop;
  const windowHeight = window.innerHeight;

  if (scrollTop >= skillsSectionTop - windowHeight && scrollTop <= skillsSectionTop + skillsSection.offsetHeight) {
    // Update progress bars based on scroll position
    progressBarHTML.style.setProperty('--progress-width', '50%');
    progressBarCSS.style.setProperty('--progress-width', '35%');
    progressBarJS.style.setProperty('--progress-width', '20%');
    progressBarPython.style.setProperty('--progress-width', '15%');
  }
}

// Event listener for scroll events
window.addEventListener('scroll', updateProgressBars);


function goBack() {
    window.location.href = "index.html"; // Replace "main.html" with your main page URL
}











