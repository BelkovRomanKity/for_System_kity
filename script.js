document.addEventListener("DOMContentLoaded", () => {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const showPassword = document.getElementById("showPassword");
    const submitButton = document.getElementById("submitButton");

    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    const validateName = (value) => /^[A-ZА-ЯІЇЄҐ][a-zа-яіїєґ]+$/.test(value);
    const validateEmail = (value) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
    const validatePassword = (value) => 
        value.length >= 8 &&
        /[A-Z]/.test(value) &&
        /[a-z]/.test(value) &&
        /\d/.test(value) &&
        /[!@#$%^&*]/.test(value);

    const validateForm = () => {
        let isValid = true;

        if (!validateName(firstName.value)) {
            firstNameError.textContent = "Ім'я має починатися з великої літери.";
            firstNameError.classList.remove("hidden");
            isValid = false;
        } else {
            firstNameError.classList.add("hidden");
        }

        if (!validateName(lastName.value)) {
            lastNameError.textContent = "Прізвище має починатися з великої літери.";
            lastNameError.classList.remove("hidden");
            isValid = false;
        } else {
            lastNameError.classList.add("hidden");
        }

        if (!validateEmail(email.value)) {
            emailError.textContent = "Невірний формат email.";
            emailError.classList.remove("hidden");
            isValid = false;
        } else {
            emailError.classList.add("hidden");
        }

        if (!validatePassword(password.value)) {
            passwordError.textContent = "Пароль має містити великі та малі літери, цифри та спеціальні символи.";
            passwordError.classList.remove("hidden");
            isValid = false;
        } else {
            passwordError.classList.add("hidden");
        }

        submitButton.disabled = !isValid;
    };

    firstName.addEventListener("input", validateForm);
    lastName.addEventListener("input", validateForm);
    email.addEventListener("input", validateForm);
    password.addEventListener("input", validateForm);

    showPassword.addEventListener("change", () => {
        password.type = showPassword.checked ? "text" : "password";
    });

    document.getElementById("registrationForm").addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Реєстрація успішна!");
    });
});
