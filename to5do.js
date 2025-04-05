function validateForm() {
    var username = document.registrationForm.username.value;
    var email = document.registrationForm.email.value;
    var password = document.registrationForm.password.value;
    var confirmPassword = document.registrationForm.confirmPassword.value;

    if (username == "" || email == "" || password == "" || confirmPassword == "") {
        alert("All fields must be filled out");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}
