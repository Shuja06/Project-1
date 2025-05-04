const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle('ri-close-large-fill');
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]");
        hamburger.classList.toggle('ri-close-large-fill');
    })
})

// Show Scroll Up
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up")

    if(this.scrollY >= 250){
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    }
    else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}

window.addEventListener("scroll", scrollUp);


// Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }

});



// Scroll Section Active link
const activeLink = () => {
    const section = document.querySelectorAll("section");
    const navLink = document.querySelectorAll(".nav-link");

    let current = "home";

    section.forEach(section => {
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop - 60){
            current = section.getAttribute("id");
        }
    })

    navLink.forEach(item => {
        item.classList.remove("active");

        if(item.href.includes(current)){
            item.classList.add("active");
        }
    })
}

window.addEventListener("scroll", activeLink);


// Scroll Reveal Animation
/*

const sr = ScrollReveal({
    origin: "bottom",
    distance: "-60px",
    duration: 2500,
    delay: 300,
    reset: true
});

sr.reveal(`.home__data, .about__top, .restaurant__top, .reviews__top, .reviews__swipper, .footer_icon, .footer__content, .copy__right`);

sr.reveal(`.home__image`, {
    delay: 500, 
    scale: 0.5,
    afterReveal: function (el) {
        el.classList.add("animate-rotating")
    }
});
  

sr.reveal(`.service__card `, {interval: 100});
sr.reveal(`.restaurant__card `, {interval: 100});

sr.reveal(`.about__item__1-content , .about__item__2-img`, {origin: "right"});
sr.reveal(`.about__item__2-content , .about__item__1-img`, {origin: "left"});

sr.reveal(`.company__video, .map`, {delay: 500, scale: 0.5,});
sr.reveal(`.compamy__profile, .contact__form`, {origin: "right"});

*/

//Change dark theme
const toggle = document.getElementById('darkMode');
const html = document.documentElement; // <html> tag
const circle = document.getElementById("toggleCircle");

// Load theme from localStorage on page load
if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    circle.classList.add('translate-x-6');
}

toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    circle.classList.toggle('translate-x-6');
    // Save preference
    if (html.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
         // update button label
    } else {
        localStorage.setItem('theme', 'light');
        
    }
});
