// started second stage
/*=============== SHOW MENU-for small screens ===============*/
const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");

// MENU SHOW- go the css and add the show-menu class css

// check if contant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// MENU HIDDEN
// check if the contant exist
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE- this will hide the Menu item when an item is clicked ===============*/
// Get all the links in the menu
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  // This will hide the menu when an item is clicked
  navMenu.classList.remove("show-menu");
};

// Loop through each link and add a click event listener
navLink.forEach((n) => n.addEventListener("click", linkAction));

// second stage ends here

/*=============== SWIPER PROJECTS ===============*/
var swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  //  check if user has entered value in the input boxes
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    // add and remove color from the input fields
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");
    // show message error or success
    contactMessage.textContent = "All fields are required ⚠️";
  } else {
    // signin to your emailjs account
    // click on add service
    // click on gmail
    // click on connect account
    // click on create service
    // copy the service id and paste it
    // then click on the Email templates
    // create a template and edit or use existing templates
    // apply and save. then copy the template id and paste it
    // get the form id from your html and paste it
    // go back to the emailjs, account, copy the public key and paste it
    // serviceID - templateID -#form - publicKey
    emailjs
      .sendForm(
        "service_0robiar",
        "template_ibmahqv",
        "#contact-form",
        "EEYUf-35hxpfQxxxP"
      )
      .then(
        () => {
          // show success message and add color
          contactMessage.classList.add("color-blue");
          contactMessage.textContent = "Message sent successfully ✅";

          // remove message after 5 seconds
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPS! SOMETHING WRONG HAPPENED...", error);
        }
      );
    // clear input fields
    contactName.value = "";
    contactEmail.value = "";
    contactProject.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// this will be used to scroll between the headersection, projects, etc

// get the ids of all the sections
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight, // Corrected typo here
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionLink = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]" // Corrected the selector
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionLink.classList.add("active-link");
    } else {
      sectionLink.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previuosly selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// we obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// we validate if the user previously chose a topic
if (selectedTheme) {
  // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}
// activate / dectivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // add or remove the dark/icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // we have the theme and the current icon that the user use
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header');
  
  // When the scroll is greater than 50 viewport height, add or remove the class
  window.scrollY >= 50 
    ? header.classList.add('bg-header') 
    : header.classList.remove('bg-header');
};

window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: '2500',
  delay: 400,
  reset: true //animations repeat
})

sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.skills__content:nth-child(3)`, {origin: 'left'})
sr.reveal(`.skills__content:nth-child(4)`, {origin: 'right'})
sr.reveal(`.qualification__content, .services__card`, {interval: 100})