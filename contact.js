const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.className = "error";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.className = "error";
        return;
    }

    const phonePattern = /^[0-9]+$/;

    if (!phonePattern.test(phone)) {
        formMessage.textContent = "Phone number must contain only digits.";
        formMessage.className = "error";
        return;
    }

    formMessage.textContent = "Thank you! Your message has been sent.";
    formMessage.className = "success";
    form.reset();
});
