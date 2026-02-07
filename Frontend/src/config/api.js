/**
 * @file api.js
 * @description API configuration and helper functions
 * Provides centralized API URL configuration and authentication headers
 */

/**
 * Base URL for the API
 * Uses environment variable or defaults to localhost:3000
 */
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000";

/**
 * Build a complete API URL from an endpoint
 * @param {string} endpoint - API endpoint (e.g., '/workspaces')
 * @returns {string} Complete API URL
 * @example
 * buildApiUrl('/workspaces') // 'http://localhost:3000/api/workspaces'
 */
export const buildApiUrl = (endpoint) => {
  return `${API_BASE_URL}/api${endpoint}`;
};

/**
 * Get authentication headers with JWT token
 * @returns {Object} Headers object with Content-Type and Authorization
 * @example
 * const headers = getAuthHeaders();
 * // { 'Content-Type': 'application/json', 'Authorization': 'Bearer <token>' }
 */
export const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};
