/**
 * @file api.js
 * @description
 * Centralized Axios configuration for handling all HTTP requests to the backend.
 * Includes a base URL, default headers, and a request interceptor that automatically
 * attaches a JWT token (if present) to every outgoing request.
 */

import axios from "axios";

/**
 * @constant {string} API_URL
 * The base URL of the backend API for all HTTP requests.
 * Uses environment variable or defaults to localhost
 * @example "http://localhost:3000"
 */
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

/**
 * @constant {AxiosInstance} api
 * Axios instance configured with a base URL and default headers.
 */
const api = axios.create({
  baseURL: `${API_URL}/api`, // Root URL for all API endpoints
  headers: {
    "Content-Type": "application/json", // Send and receive data as JSON
  },
});

/**
 * @description
 * Request interceptor.
 * Automatically runs before every HTTP request is sent.
 * It retrieves a JWT token from `localStorage` and, if found,
 * adds it to the `Authorization` header of the request.
 *
 * @example
 * // Example resulting header:
 * Authorization: Bearer <token>
 */
api.interceptors.request.use((config) => {
  // Retrieve the token from browser storage
  const token = localStorage.getItem("token");

  // If a token exists, attach it to the Authorization header
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Return the modified request configuration
  return config;
});

export default api;
