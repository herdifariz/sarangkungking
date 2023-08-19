window.addEventListener("load", () => {
    const textElement = document.getElementById("typewriter");
    const words = [
        "Welcome to Sarangkungking",
        "Indonesia #1 Javanese Restaurant",
    ];

    let wordIndex = 0;
    let letterIndex = 0;

    function type() {
        if (letterIndex < words[wordIndex].length) {
            textElement.textContent += words[wordIndex][letterIndex];
            letterIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1500);
        }
    }

    function erase() {
        if (letterIndex > 0) {
            textElement.textContent = words[wordIndex].substring(
                0,
                letterIndex - 1
            );
            letterIndex--;
            setTimeout(erase, 50);
        } else {
            wordIndex++;
            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
            setTimeout(type, 300);
        }
    }

    type();
});

document.addEventListener("DOMContentLoaded", function () {
    const iconFood = document.querySelector(".collapsible-icon-food");
    const iconDrink = document.querySelector(".collapsible-icon-drink");
    const btnFood = document.querySelector(".btn-collapsible-food");
    const btnDrink = document.querySelector(".btn-collapsible-drink");
    btnFood.addEventListener("click", function () {
        if (btnFood.nextElementSibling.style.display === "none") {
            btnFood.nextElementSibling.style.display = "block";
            btnFood.classList.add("active");
            iconFood.innerText = "-";
        } else {
            btnFood.nextElementSibling.style.display = "none";
            btnFood.classList.remove("active");
            iconFood.innerText = "+";
        }
    });
    btnDrink.addEventListener("click", function () {
        if (btnDrink.nextElementSibling.style.display === "none") {
            btnDrink.nextElementSibling.style.display = "block";
            btnDrink.classList.add("active");
            iconDrink.innerText = "-";
        } else {
            btnDrink.nextElementSibling.style.display = "none";
            iconDrink.innerText = "+";
            btnDrink.classList.remove("active");
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
