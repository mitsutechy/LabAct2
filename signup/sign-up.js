const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let valid = true;

    // Get values
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Clear previous messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    // Clear previous borders
    document.getElementById("username").classList.remove("error-border", "success-border");
    document.getElementById("email").classList.remove("error-border", "success-border");
    document.getElementById("password").classList.remove("error-border", "success-border");
    document.getElementById("confirmPassword").classList.remove("error-border", "success-border");

    // Username validation
    if (username === "") {
        document.getElementById("usernameError").textContent = "Username is required.";
        document.getElementById("username").classList.add("error-border");
        valid = false;
    }

    // Email validation
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        document.getElementById("email").classList.add("error-border");
        valid = false;
    } else {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Invalid email format.";
            document.getElementById("email").classList.add("error-border");
            valid = false;
        }
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
        document.getElementById("password").classList.add("error-border");
        valid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        document.getElementById("password").classList.add("error-border");
        valid = false;
    }

    // Confirm password validation
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent = "Confirm Password is required.";
        document.getElementById("confirmPassword").classList.add("error-border");
        valid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        document.getElementById("confirmPassword").classList.add("error-border");
        valid = false;
    }

    if (valid) {
        alert("Registration Successful!");
        window.location.href = "../login/log-in.html";
    }

});

// Show/Hide Password
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }
});

// Show/Hide Confirm Password
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const confirmPasswordField = document.getElementById("confirmPassword");

toggleConfirmPassword.addEventListener("click", function () {
    if (confirmPasswordField.type === "password") {
        confirmPasswordField.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    } else {
        confirmPasswordField.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }
});