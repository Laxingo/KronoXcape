import * as User from "../models/UserModel.js";

function LoginView() {
  User.init();

  const loginForm = document.getElementById("loginForm");
  const errorContainer = document.getElementById("msgLoginError");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value;
    const password = passwordInput.value;

    try {
      const loggedInUser = User.login(username, password);
      sessionStorage.setItem("loggedUser", JSON.stringify(loggedInUser));

      setTimeout(() => {
        window.location.replace("../html/index.html");
      }, 500);
    } catch (error) {
      console.error(error.message);
      errorContainer.innerText = error.message;
      errorContainer.style.display = "block";
    }
  });
}

LoginView();
