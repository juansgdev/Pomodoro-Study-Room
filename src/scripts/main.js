const loginButton = document.getElementById("login");
const registerButton = document.getElementById("register");
const formContainer = document.getElementById("form-container");

const alternateForm = (button1, button2) => {
    const pagePaths = [
        "src/pages/login/login.html",
        "src/pages/register/register.html"
    ];

    button1.disabled = true;
    button2.disabled = false;

    formContainer.innerHTML = "";
    const iframe = document.createElement("iframe");
    if (button1 == loginButton) {
        iframe.src = pagePaths[0];
    } else {
        iframe.src = pagePaths[1];
    }
    formContainer.appendChild(iframe);
};

loginButton.onclick = () => {
    alternateForm(loginButton, registerButton);
};

registerButton.onclick = () => {
    alternateForm(registerButton, loginButton);
};