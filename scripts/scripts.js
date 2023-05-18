const dropdownBtn = document.querySelector(".menu_dropdown_btn");
const dropdownMenu = document.querySelector(".menu_options");

dropdownMenu.style.transition = "all .25s ease-in-out";

dropdownBtn.addEventListener("click", () => {
    if(dropdownBtn.classList.contains("closeMenu")) {
        dropdownMenu.classList.remove("openMenu");
        dropdownBtn.classList.remove("closeMenu");
    } else {
        dropdownBtn.classList.add("closeMenu");
        dropdownMenu.classList.add("openMenu");
    }
});