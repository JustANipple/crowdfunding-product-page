const dropdownBtn = document.querySelector(".menu_dropdown_btn");
const dropdownMenu = document.querySelector(".menu_options");
const bookmarkBtn = document.querySelector(".button_bookmark");
const bookmarkText = document.querySelector(".bookmark_text");
const iconCircle = document.querySelector("circle");
const iconPath = bookmarkBtn.querySelector("path");
const navBar = document.querySelector(".nav_bar");
const backProjectBtn = document.querySelector(".button_back_project");
const selectRewardBtns = document.querySelectorAll(".footer_confirm_btn");
const modal = document.querySelector(".back_project");
const body = document.querySelector("body");
const projectBtn = document.querySelector(".button_back_project");
const radios = modal.querySelectorAll(".header_radio");
const closeModal = document.querySelector(".close_icon");
const options = document.querySelectorAll(".unShow");
const thanks = document.querySelector(".thanksgiving");
let donatedAmount = 0;

dropdownMenu.style.transition = "all .25s ease-in-out";
bookmarkBtn.style.transition = "all .25s ease-in-out";
iconCircle.style.transition = "all .25s ease-in-out";
backProjectBtn.style.transition = "all .25s ease-in-out";
for(const btn of selectRewardBtns) {
    btn.style.transition = "all .25s ease-in-out";
}
for(const option of options) {
    option.style.transition = "all .25s ease-in-out";
}

//Nav menu
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

//Bookmark
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

//Modal events
projectBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  body.classList.add("dark_overlay");
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  body.classList.remove("dark_overlay");
});

for(const radio of radios) {
    const component = radio.parentElement.parentElement.parentElement;
    const pledge = component.querySelector(".pledge");
    radio.addEventListener("change", () => {
        closePledge();
        pledge.classList.remove("unShow");
    });
}

function closePledge() {
    for(const radio of radios) {
        const component = radio.parentElement.parentElement.parentElement;
        const pledge = component.querySelector(".pledge");
        pledge.classList.add("unShow");
    }
}

const confirmPledge = document.querySelectorAll(".insertion_btn");
for(const btn of confirmPledge) {
    btn.addEventListener("click", () => {
        const input = btn.parentElement.querySelector(".insertion_input");
        let pledgeValue = btn.parentElement.parentElement.parentElement.querySelector(".price_value");
        if(!pledgeValue) {
            pledgeValue = 1;
            if(input.value >= pledgeValue) {
                modal.style.display = "none";
                thanks.style.display = "flex";
            }
        } else {
            if(input.value >= pledgeValue.textContent) {
                modal.style.display = "none";
                thanks.style.display = "flex";
                manageStats(input);
            }
        }
            
    });
}

const thanksBtn = document.querySelector(".thanksgiving_continue");
thanksBtn.addEventListener("click", () => {
    thanks.style.display = "none";
    body.classList.remove("dark_overlay");
})

const selectBtn = document.querySelectorAll(".reward_btn");
for(const btn of selectBtn) {
    btn.addEventListener("click", () => {
        modal.style.display = "flex";
        body.classList.add("dark_overlay");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function manageStats(input) {
    donatedAmount = parseInt(input.value);
    const backValues = document.querySelectorAll(".block_value");
    const backedAmount = backValues[0].textContent.split("$")[1].replace(",","");
    const backerAmount = backValues[1];
    console.log(parseFloat(backedAmount));
    backValues[0].textContent = `$${((backedAmount - donatedAmount) / 1000).toString.replace(".",",")}`;
}