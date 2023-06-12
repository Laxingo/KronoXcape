import * as User from "../models/UserModel.js";

function ProfileView() {
  User.init();

  document.getElementById("logoutButton").addEventListener("click", function(event) {
    event.preventDefault();
    User.logout();
    setTimeout(function() {
      window.location.replace("../html/login.html");
    }, 500);
  });
}

ProfileView();
