const openBtn = document.querySelector(".menu-btn_open");
const closeBtn = document.querySelector(".menu-btn_close");
const overlay = document.querySelector(".overlay");
const listItems = document.querySelectorAll(".list");
const toggleBtn = document.querySelector(".toggle-button");
const toggleElement = document.querySelector(".toggle");

openBtn.addEventListener("click", () => {
    overlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("show");
});


listItems.forEach((listItem) => {
    listItem.addEventListener("click", () => {
        overlay.classList.remove("show");
    });
});

toggleBtn.addEventListener("click", () => {
    toggleElement.classList.toggle("show");
});

