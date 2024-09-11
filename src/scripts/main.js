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
    iframe.setAttribute("id", "login-register");
    if (button1 == loginButton) {
        iframe.src = pagePaths[0];
    } else {
        iframe.src = pagePaths[1];
    }
    formContainer.appendChild(iframe);
};

const redirect = () => {
    const iframe = document.getElementById("login-register");
    iframe.onload = () => {
        const iframeDoc = iframe.contentDocument;
        iframeDoc.getElementById("submit-button").onclick = () => {
            const inputs = iframeDoc.getElementsByTagName("input");
            
            if (inputs[0].value === "juan" && inputs[1].value === "123") {
                window.location.replace("http://127.0.0.1:5500/src/pages/dashboard/dashboard.html")
            }
        };
    };
};

redirect();

loginButton.onclick = () => {
    alternateForm(loginButton, registerButton);
    redirect();
};

registerButton.onclick = () => {
    alternateForm(registerButton, loginButton);
};