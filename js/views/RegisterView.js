import * as User from "../models/UserModel.js";

function registerView() {
  User.init();

  const registerButton = document.getElementById("registerButton");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const emailInput = document.getElementById("email");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const errorMessage = document.getElementById("msgRegister");

  registerButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const registerUsername = usernameInput.value;
    const registerPassword = passwordInput.value;
    const registerEmail = emailInput.value;
    const registerConfirmPassword = confirmPasswordInput.value;

    if (registerPassword !== registerConfirmPassword) {
      errorMessage.textContent = "Password and Confirm Password are not equal";
      return;
    }

    if (!registerFormIsValid()) {
      errorMessage.textContent = "Please fill in all the required fields";
      return;
    }

    try {
      await User.add(registerUsername, registerPassword, registerEmail);
      errorMessage.textContent = "";

      setTimeout(() => {
        window.location.replace("login.html");
      }, 1000);
    } catch (e) {
      errorMessage.textContent = e.message;
    }
  });

  function updateRegisterButtonState() {
    const isValid = registerFormIsValid();
    registerButton.disabled = !isValid;
  }

  usernameInput.addEventListener("input", updateRegisterButtonState);
  passwordInput.addEventListener("input", updateRegisterButtonState);
  emailInput.addEventListener("input", updateRegisterButtonState);
  confirmPasswordInput.addEventListener("input", updateRegisterButtonState);

  updateRegisterButtonState();
}

function registerFormIsValid() {
  const registerUsername = document.getElementById("username").value;
  const registerPassword = document.getElementById("password").value;
  const registerEmail = document.getElementById("email").value;
  const registerConfirmPassword = document.getElementById("confirmPassword").value;

  return (
    registerUsername !== "" &&
    registerPassword !== "" &&
    registerEmail !== "" &&
    registerConfirmPassword !== ""
  );
}

registerView();
