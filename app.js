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
