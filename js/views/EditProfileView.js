import * as User from "../models/UserModel.js";

function EditProfileView() {
  User.init();

  // Get the logged-in user from sessionStorage
  const loggedUserString = User.getUserLogged();
  const loggedUser = JSON.parse(loggedUserString);

  // Update user data in localStorage with information from form controls
  const saveButton = document.getElementById("saveButton");
  saveButton.addEventListener("click", () => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    const newUsername = usernameInput.value.trim();
    const newPassword = passwordInput.value.trim();
    const confirmNewPassword = confirmPasswordInput.value.trim();

    // Validate the new username and password
    if (newUsername === "" || newPassword === "" || newPassword !== confirmNewPassword) {
      // Display an error message or handle the validation as needed
      return;
    }

    // Get the users from localStorage
    const usersString = localStorage.getItem("users");
    const users = JSON.parse(usersString) || [];

    console.log("Users from localStorage:", users);

    if (users.length > 0) {
      // Update the user's data in localStorage
      users[0].username = newUsername;
      users[0].password = newPassword;
      localStorage.setItem("users", JSON.stringify(users));

      // Update the logged-in user's data in sessionStorage
      loggedUser.username = newUsername;
      loggedUser.password = newPassword;
      sessionStorage.setItem("loggedUser", JSON.stringify(loggedUser));

      console.log("User data updated successfully!");
    } else {
      console.log("No users found in the users array in localStorage.");
    }
  });
}

EditProfileView();

