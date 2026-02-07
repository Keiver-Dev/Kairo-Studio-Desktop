/**
 * @file errorHandler.js
 * @description Centralized error handling for API requests
 * Provides user-friendly error messages based on HTTP status codes
 */

/**
 * Handle API errors and return user-friendly messages
 * @param {Error} error - Error object from API request
 * @returns {string} User-friendly error message
 */
export const handleApiError = (error) => {
  // Network error - backend not running
  if (!error.response) {
    return "Error de conexión. Verifica que el backend esté corriendo.";
  }

  const status = error.response.status;
  const data = error.response.data;

  // Authentication error - token expired or invalid
  if (status === 401) {
    // Clear authentication data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to login page
    window.location.href = "/login";

    return "Sesión expirada. Por favor inicia sesión nuevamente.";
  }

  // Permission error - user doesn't have access
  if (status === 403) {
    return "No tienes permisos para realizar esta acción.";
  }

  // Validation error - invalid data sent to backend
  if (status === 400) {
    return (
      data.message || "Datos inválidos. Verifica la información ingresada."
    );
  }

  // Not found error
  if (status === 404) {
    return data.message || "Recurso no encontrado.";
  }

  // Server error
  if (status >= 500) {
    return data.message || "Error del servidor. Intenta nuevamente más tarde.";
  }

  // Generic error
  return data.message || "Ocurrió un error inesperado. Intenta nuevamente.";
};

/**
 * Log error details for debugging
 * @param {string} context - Context where error occurred (e.g., 'Creating workspace')
 * @param {Error} error - Error object
 */
export const logError = (context, error) => {
  console.error(`[${context}]`, {
    message: error.message,
    status: error.response?.status,
    data: error.response?.data,
    stack: error.stack,
  });
};
