import * as User from "../models/UserModel.js";

function RegisterView() {
  User.init();

  const registerForm = document.getElementById("registerForm");
  const errorMsg = document.getElementById("errorMsg");

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    try {
      // Validate username
      if (username.length < 3) {
        throw new Error("Username must be at least 3 characters long!");
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Invalid email address!");
      }

      // Validate password
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters long!");
      }

      // Validate confirmPassword
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match!");
      }

      // Check if the username is already being used
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = users.find((user) => user.username === username);
      if (existingUser) {
        throw new Error("That username is already being used!");
      }

      // Save new user data to localStorage using UserModel.js add function
      User.add(username, password);

      console.log("User registered successfully!");

      // Display success message using Bootstrap alert
      errorMsg.classList.remove("alert-danger");
      errorMsg.classList.add("alert-success");
      errorMsg.textContent = "User registered successfully!";
      errorMsg.classList.remove("d-none");

      // Delay the redirection by 2 seconds
      setTimeout(() => {
        window.location.replace("../html/login.html");
      }, 500);
    } catch (error) {
      console.error(error.message);

      // Display error message using Bootstrap alert
      errorMsg.classList.remove("alert-success");
      errorMsg.classList.add("alert-danger");
      errorMsg.textContent = error.message;
      errorMsg.classList.remove("d-none");
    }
  });
}

RegisterView();
