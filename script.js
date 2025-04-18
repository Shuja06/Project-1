const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger");
const rmHam = document.getElementById("remove-hamburger");

hamburger.addEventListener("click", () => {
    const isOpen = navMenu.classList.contains("left-[0]");

    if (isOpen) {
        // Menu is open — close it
        navMenu.classList.remove("left-[0]");
        navMenu.classList.add("left-[-100%]");
        hamburger.classList.remove("ri-close-large-fill");
        hamburger.classList.add("ri-menu-4-line");
    } else {
        // Menu is closed — open it
        navMenu.classList.remove("left-[-100%]");
        navMenu.classList.add("left-[0]");
        hamburger.classList.remove("ri-menu-4-line");
        hamburger.classList.add("ri-close-large-fill");
    }
});

