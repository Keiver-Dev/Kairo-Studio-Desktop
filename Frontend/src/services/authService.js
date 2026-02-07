/**
 * @file authService.js
 * @description
 * Authentication service that provides methods for user login, logout, and registration.
 * Uses a preconfigured Axios instance (`api`) to handle HTTP requests to the backend.
 */

import api from "./api";

/**
 * @namespace authService
 * @description
 * Collection of authentication-related API methods.
 * Each method communicates with the backend's `/auth` routes.
 */
export const authService = {
  /**
   * @async
   * @function login
   * @memberof authService
   * @description
   * Sends a login request to the backend with user credentials.
   * If successful, stores JWT token and user data in localStorage.
   *
   * @param {string} email - User's email address.
   * @param {string} password - User's password.
   * @param {boolean} rememberMe - Whether to remember the user's session.
   * @returns {Promise<Object>} The server response containing authentication data.
   *
   * @example
   * const data = await authService.login("user@example.com", "password123", true);
   */
  login: async (email, password, rememberMe) => {
    const response = await api.post("/auth/login", {
      email,
      password,
      rememberMe,
    });

    const { token, user } = response.data;

    // Store token and user data in localStorage
    if (token) {
      localStorage.setItem("token", token);
    }
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }

    return response.data;
  },

  /**
   * @async
   * @function logout
   * @memberof authService
   * @description
   * Sends a logout request to the backend and clears all authentication
   * and application data from localStorage.
   *
   * @returns {Promise<Object>} The server response confirming logout.
   *
   * @example
   * await authService.logout();
   */
  logout: async () => {
    const response = await api.post("/auth/logout");

    // Clear all authentication and app data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("currentWorkspaceId");

    // Clear any space-related localStorage keys
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("currentSpaceId_")) {
        localStorage.removeItem(key);
      }
    });

    return response.data;
  },

  /**
   * @async
   * @function register
   * @memberof authService
   * @description
   * Sends a registration request to create a new user account.
   * Returns server data, typically containing confirmation or authentication info.
   *
   * @param {string} name - Full name of the user.
   * @param {string} username - Username for the account.
   * @param {string} email - Email address of the user.
   * @param {string} password - Chosen password.
   * @param {string} confirmPassword - Confirmation of the chosen password.
   * @returns {Promise<Object>} The server response after registration.
   *
   * @example
   * const newUser = await authService.register("John Doe", "johndoe", "john@example.com", "pass1234", "pass1234");
   */
  register: async (name, username, email, password, confirmPassword) => {
    const response = await api.post("/auth/register", {
      name,
      username,
      email,
      password,
      confirmPassword,
    });
    return response.data;
  },

  /**
   * @function getToken
   * @memberof authService
   * @description
   * Retrieves the JWT token from localStorage.
   *
   * @returns {string|null} The JWT token or null if not found.
   *
   * @example
   * const token = authService.getToken();
   */
  getToken: () => {
    return localStorage.getItem("token");
  },

  /**
   * @function isAuthenticated
   * @memberof authService
   * @description
   * Checks if the user is authenticated by verifying if a token exists.
   *
   * @returns {boolean} True if authenticated, false otherwise.
   *
   * @example
   * if (authService.isAuthenticated()) {
   *   // User is logged in
   * }
   */
  isAuthenticated: () => {
    return !!authService.getToken();
  },

  /**
   * @function getCurrentUser
   * @memberof authService
   * @description
   * Retrieves the current user data from localStorage.
   *
   * @returns {Object|null} The user object or null if not found.
   *
   * @example
   * const user = authService.getCurrentUser();
   * console.log(user.name);
   */
  getCurrentUser: () => {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  },
};
