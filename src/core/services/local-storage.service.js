const AUTH_TOKEN = "auth_token";
const USER = "user";

export const getAuthToken = () => {
  return window.localStorage.getItem(AUTH_TOKEN);
};

export const saveAuthToken = (token) => {
  window.localStorage.setItem(AUTH_TOKEN, token);
};

export const destroyAuthToken = () => {
  window.localStorage.removeItem(AUTH_TOKEN);
};

export const getUser = () => {
  return JSON.parse(window.localStorage.getItem(USER));
};

export const saveUser = (user) => {
  window.localStorage.setItem(USER, JSON.stringify(user));
};

export const destroyUser = () => {
  window.localStorage.removeItem(USER);
};

export default {
  getAuthToken,
  saveAuthToken,
  destroyAuthToken,

  getUser,
  saveUser,
  destroyUser
};
