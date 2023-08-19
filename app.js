document.addEventListener("DOMContentLoaded", function () {
    const iconFood = document.querySelector(".collapsible-icon-food");
    const iconDrink = document.querySelector(".collapsible-icon-drink");
    const btnFood = document.querySelector(".btn-collapsible-food");
    const btnDrink = document.querySelector(".btn-collapsible-drink");
    btnFood.addEventListener("click", function () {
        if (btnFood.nextElementSibling.style.display === "none") {
            btnFood.nextElementSibling.style.display = "block";
            iconFood.innerText = "-";
        } else {
            btnFood.nextElementSibling.style.display = "none";
            iconFood.innerText = "+";
        }
    });
    btnDrink.addEventListener("click", function () {
        if (btnDrink.nextElementSibling.style.display === "none") {
            btnDrink.nextElementSibling.style.display = "block";
            iconDrink.innerText = "-";
        } else {
            btnDrink.nextElementSibling.style.display = "none";
            iconDrink.innerText = "+";
        }
    });
});

// Initialize Variables
const closePopup = document.querySelector(".popup-close");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const button = document.querySelector(".btn-submit");
const form = document.querySelector(".form-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll(
        "#name, #contact, #email, #guest, #date"
    );

    inputs.forEach((input) => {
        input.value = "";
    });
});

// Close Popup Event
closePopup.onclick = function () {
    overlay.style.display = "none";
    popup.style.display = "none";
    document.body.style.overflow = "auto";
};

// Show Overlay and Popup
button.onclick = function () {
    overlay.style.display = "flex";
    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
};
