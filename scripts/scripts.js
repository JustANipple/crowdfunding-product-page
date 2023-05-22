const dropdownBtn = document.querySelector(".menu_dropdown_btn");
const dropdownMenu = document.querySelector(".menu_options");
const bookmarkBtn = document.querySelector(".button_bookmark");
const bookmarkText = document.querySelector(".bookmark_text");
const iconCircle = bookmarkBtn.querySelector("circle");
const iconPath = bookmarkBtn.querySelector("path");
const navBar = document.querySelector(".nav_bar");
const backProjectBtn = document.querySelector(".button_back_project");
const selectRewardBtns = document.querySelectorAll(".footer_confirm_btn");

dropdownMenu.style.transition = "all .25s ease-in-out";
bookmarkBtn.style.transition = "all .25s ease-in-out";
iconCircle.style.transition = "all .25s ease-in-out";
backProjectBtn.style.transition = "all .25s ease-in-out";
for(const btn of selectRewardBtns) {
    btn.style.transition = "all .25s ease-in-out";
}

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

bookmarkBtn.addEventListener("mouseover", () => {
    iconCircle.style.filter = "brightness(1.5)";
});

bookmarkBtn.addEventListener("mouseout", () => {
    iconCircle.style.filter = "brightness(1)";
});

bookmarkBtn.addEventListener("click", () => {
    if(bookmarkText.classList.contains("bookmarkedText")) {
        iconCircle.classList.remove("bookmarkedCircle");
        iconPath.classList.remove("bookmarkedPath");
        bookmarkText.classList.remove("bookmarkedText");
        bookmarkText.textContent = "Bookmark";
    } else {
        iconCircle.classList.add("bookmarkedCircle");
        iconPath.classList.add("bookmarkedPath");
        bookmarkText.classList.add("bookmarkedText");
        bookmarkText.textContent = "Bookmarked";
    }
});

