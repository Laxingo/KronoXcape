let users = [];

export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

export function add(username, password) {
  if (users.some((user) => user.username === username)) {
    throw Error(`User with username "${username}" already exists!`);
  } else {
    users.push(new User(username, password));
    localStorage.setItem("users", JSON.stringify(users));
  }
}

export function login(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    return true;
  } else {
    throw Error("Invalid login!");
  }
}

export function logout() {
  sessionStorage.removeItem("loggedUser");
}

export function isLogged() {
  return sessionStorage.getItem("loggedUser") ? true : false;
}

export function getUserLogged() {
  return JSON.parse(sessionStorage.getItem("loggedUser"));
}

export function getUsers() {
  return users;
}

export class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}
