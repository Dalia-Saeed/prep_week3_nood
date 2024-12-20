import newDatabase from "./database.js";

// Change this boolean to true if you wish to keep your
// users between restart of your application
const isPersistent = false;
const database = newDatabase({ isPersistent });

// Create middlewares required for routes defined in app.js
// export const register = async (req, res) => {};

// You can also create helper functions in this file to help you implement logic
// inside middlewares

export const storeUser = (username, password) => {
  return database.create({ username, password });
};

export const findUserByUsername = (username) => {
  return database.getByUsername(username);
};

export const findUserById = (id) => {
  return database.getById(id);
};