const dropdownBtn = document.querySelector(".menu_dropdown_btn");
const dropdownMenu = document.querySelector(".menu_options");
const bookmarkBtn = document.querySelector(".button_bookmark");
const iconCircle = bookmarkBtn.querySelector("circle");
const iconPath = bookmarkBtn.querySelector("path");
const navBar = document.querySelector(".nav_bar");
const backProjectBtn = document.querySelector(".button_back_project");

dropdownMenu.style.transition = "all .25s ease-in-out";
bookmarkBtn.style.transition = "all .25s ease-in-out";
backProjectBtn.style.transition = "all .25s ease-in-out";

dropdownBtn.addEventListener("click", () => {
    if(dropdownBtn.classList.contains("closeMenu")) {
        navBar.classList.remove("darkLayer");
        dropdownMenu.classList.remove("openMenu");
        dropdownBtn.classList.remove("closeMenu");
    } else {
        navBar.classList.add("darkLayer");
        dropdownBtn.classList.add("closeMenu");
        dropdownMenu.classList.add("openMenu");
    }
});

