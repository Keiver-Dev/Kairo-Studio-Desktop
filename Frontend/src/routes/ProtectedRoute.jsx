import { Navigate } from "react-router-dom";

/**
 * A component that protects private routes by checking for a valid token.
 * If a token exists in localStorage, the route renders normally.
 * Otherwise, the user is redirected to the login page.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - The child components (private page/route) to render if authenticated.
 * @returns {React.ReactNode} The child components if authenticated, or a <Navigate> to "/login" if not.
 *
 * @example
 * <Route
 *   path="/dashboard"
 *   element={
 *     <ProtectedRoute>
 *       <Dashboard />
 *     </ProtectedRoute>
 *   }
 * />
 */
export default function ProtectedRoute({ children }) {
  /** @type {string | null} token - JWT token retrieved from localStorage */
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
