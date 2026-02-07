import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "@/services/authService";
import Logo from "@/assets/icons/Logo";

/**
 * @component Login
 * @description User login page with email/password authentication.
 * Supports "Remember Me" functionality and stores authentication tokens.
 * 
 * @features
 * - Email and password validation
 * - Remember me option (localStorage vs sessionStorage)
 * - Automatic redirection on success
 * - Error handling and display
 * 
 * @navigation
 * - Success: Redirects to /home
 * - Register: Link to /register
 * - Forgot password: Link to /forgot-password
 */
const Login = () => {
  const navigate = useNavigate();

  // State management
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * @function handleSubmit
   * @description Handles login form submission with validation
   * 
   * @process
   * 1. Validates email format and password
   * 2. Calls authService.login()
   * 3. Stores token in localStorage (remember me) or sessionStorage
   * 4. Stores user data (without password)
   * 5. Redirects to /home
   * 
   * @important
   * - Uses rememberMe to decide storage type (localStorage vs sessionStorage)
   * - Removes password from user object before storing
   * - Uses navigate with replace: true to clear history
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) return; // Prevent multiple submissions

    setError(null);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (!password.trim()) {
      setError("Password is required.");
      return;
    }

    try {
      setIsLoading(true);

      const data = await authService.login(email, password, rememberMe);

      // Store token based on "remember me" option
      // localStorage: persists after browser close
      // sessionStorage: clears when browser closes
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem("token", data.token);

      // Store user data (excluding password for security)
      if (data.user) {
        const { password: _, ...safeUser } = data.user;
        storage.setItem("user", JSON.stringify(safeUser));
      }

      navigate("/home", { replace: true }); // replace: true clears history
    } catch (err) {
      // Error handling
      if (err.response) {
        setError(err.response.data?.message || "Invalid credentials.");
      } else if (err.request) {
        setError("Cannot connect to server. Please try again.");
      } else {
        setError("An unexpected error occurred.");
      }
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * @function handleKeyPress
   * @description Allows form submission with Enter key
   */
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSubmit(e);
  };

  return (
    <main className="flex h-screen w-screen justify-center items-center overflow-hidden bg-[#0A0A0A]">
      <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full max-w-md px-6 py-8 sm:px-8 max-h-screen overflow-y-auto bg-linear-to-br from-[#171717] via-[#0A0A0A] to-[#0A0A0A] rounded-2xl border border-[#E5E5E5]/20 shadow-2xl shadow-black/20">
        {/* Logo header */}
        <header className="flex flex-col justify-center gap-2 mb-5">
          <Logo className="text-[#0A0A0A] w-10 h-10 bg-[#E5E5E5] rounded-lg p-1 shadow-lg shadow-[#E5E5E5]/20" />
        </header>

        <article className="space-y-8">
          {/* Title section */}
          <div className="mb-10">
            <h2 className="text-3xl sm:text-2xl font-semibold text-[#E5E5E5] mb-2">
              Sign in
            </h2>
            <p className="text-[#E5E5E5]/70 text-md">
              Access your account and manage your projects and integrations.
            </p>
          </div>

          {/* Login form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Error message display */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 px-4 py-3 text-sm">
                {error}
              </div>
            )}

            {/* Email input */}
            <label className="block">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null); // Clear error on input change
                }}
                onKeyPress={handleKeyPress}
                placeholder="Email address"
                aria-label="Email address"
                className="w-full px-0 py-3 border-0 border-b border-[#222222] text-[#E5E5E5] placeholder-[#E5E5E5]/40 focus:outline-none focus:border-[#E5E5E5] transition-all duration-300 bg-transparent"
                disabled={isLoading}
              />
            </label>

            {/* Password input */}
            <label className="block">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Password"
                aria-label="Password"
                className="w-full px-0 py-3 border-0 border-b border-[#222222] text-[#E5E5E5] placeholder-[#E5E5E5]/40 focus:outline-none focus:border-[#E5E5E5] transition-all duration-300 bg-transparent"
                disabled={isLoading}
              />
            </label>

            {/* Remember me checkbox and forgot password link */}
            <nav className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  aria-label="Remember me"
                  className="w-4 h-4 border accent-[#E5E5E5] border-[#222222] rounded bg-transparent checked:bg-[#E5E5E5] transition-all duration-300"
                  disabled={isLoading}
                />
                <span className="text-xs text-[#E5E5E5]/70 group-hover:text-[#E5E5E5] transition-colors duration-300">Remember me</span>
              </label>

              <Link
                to="/forgot-password"
                className="text-xs text-[#E5E5E5]/70 hover:text-[#E5E5E5] transition-colors duration-300"
              >
                Forgot your password?
              </Link>
            </nav>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="group w-full bg-[#E5E5E5] border-2 border-[#E5E5E5] cursor-pointer text-[#0A0A0A] py-4 text-sm uppercase tracking-wider font-semibold rounded-lg shadow-lg shadow-[#E5E5E5]/20 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#E5E5E5]/30 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Footer with registration link */}
          <footer className="text-center pt-8 border-t border-[#222222]/50">
            <p className="text-xs text-[#E5E5E5]/70">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-[#E5E5E5] hover:text-white transition-colors duration-300 font-semibold"
              >
                Sign up
              </Link>
            </p>
          </footer>
        </article>
      </section>
    </main>
  );
};

/**
 * @exports Login
 * @default
 * 
 * @important
 * - Token storage depends on "remember me" checkbox
 * - User password is never stored in browser storage
 * - Navigation uses replace: true to prevent back button issues
 * 
 * @dependencies
 * - react-router-dom (navigation)
 * - authService (API authentication)
 * - Logo component
 */
export default Login;