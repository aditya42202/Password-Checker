function checkPassword() {

    let password = document.getElementById("password").value;

    let message = document.getElementById("message");

    if (password.length >= 8) {

        message.innerHTML = "Password is valid";
        message.style.color = "hwb(0 100% 0% / 0.712);";

    } else {

        message.innerHTML = "Password must be at least 8 characters";
        message.style.color = "orange";
    }
}