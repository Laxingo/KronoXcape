init();

function init() {
  // USERS
  if (!localStorage.users) {
    const users = [
      {
        username: "user1",
        password: "pass1",
      },
      {
        username: "user2",
        password: "pass2",
      },
    ];
    localStorage.setItem("users", JSON.stringify(users));
    console.log("User data injected into localStorage.");
  }
}