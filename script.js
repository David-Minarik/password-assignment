function onSubmit() {
    // we want user to enter these values:
    let correctUsername = "card holder";
    let correctPassword = "card";

    // these are the values that the user actually entered; let username
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");

    if (username === correctUsername && password === correctPassword) {
        // correct
        errorMessage.innerHTML = "Sign-in successful";
    } else {
        // wrong
        errorMessage.innerHTML = "Sign In Unsuccessful";
    }
}