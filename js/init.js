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

  // ROOMS
  if (!localStorage.rooms) {
    const rooms = [
      {
        name: "Room1",
        description: "This is Room 1",
      },
      {
        name: "Room2",
        description: "This is Room 2",
      },
    ];
    localStorage.setItem("rooms", JSON.stringify(rooms));
    console.log("Room data injected into localStorage.");
  }
}
