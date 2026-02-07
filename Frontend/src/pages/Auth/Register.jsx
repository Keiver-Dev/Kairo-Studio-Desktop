import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "@/services/authService";
import Logo from "@/assets/icons/Logo";

/**
 * @component Register
 * @description User registration page that allows new users to create an account.
 * Includes client-side validation, communication with the authentication service,
 * and automatic redirection to login page upon successful registration.
 *
 * @features
 * - Client-side form validation
 * - Real-time error handling
 * - Loading states during registration
 * - Keyboard navigation support (Enter key)
 *
 * @navigation
 * - Success: Redirects to /login
 * - Already registered: Link to /login
 * - Terms link: /terms
 * - Privacy link: /privacy
 */
const Register = () => {
  const navigate = useNavigate();

  // Form field states
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * @function handleSubmit
   * @description Handles registration form submission with validation and API call
   *
   * @process
   * 1. Validates all input fields (name, email format, password length, match, terms)
   * 2. Calls authService.register() with user data
   * 3. On success: redirects to login page with replace flag
   * 4. On error: displays appropriate error message
   *
   * @important
   * - Email must match regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   * - Password minimum 8 characters
   * - Passwords must match
   * - Terms must be accepted
   * - Uses navigate replace: true to prevent back navigation
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (isLoading) return; // Prevents multiple submissions

    // Validations
    if (!name.trim()) return setError("Name is required.");

    if (!username.trim()) return setError("Username is required.");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) return setError("Email is required.");
    if (!emailRegex.test(email))
      return setError("Please enter a valid email address.");

    if (!password.trim()) return setError("Password is required.");
    if (password.length < 8)
      return setError("Password must be at least 8 characters.");
    if (password !== confirmPassword)
      return setError("Passwords do not match.");
    if (!acceptTerms)
      return setError("You must accept the terms and conditions.");

    try {
      setLoading(true);

      const data = await authService.register(
        name,
        username,
        email,
        password,
        confirmPassword
      );

      // Automatic redirection to login after registration
      navigate("/login", { replace: true });
    } catch (err) {
      // Error handling based on failure type
      if (err.response) {
        setError(err.response.data?.message || "Invalid credentials.");
      } else if (err.request) {
        setError("Cannot connect to server. Please try again.");
      } else {
        setError("An unexpected error occurred.");
      }
      console.error("Register error:", err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * @function handleKeyPress
   * @description Allows form submission by pressing Enter key
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
              Create your account
            </h2>
            <p className="text-[#E5E5E5]/70 text-md">
              Join our developer community and turn your project ideas into
              reality
            </p>
          </div>

          {/* Registration form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error message display */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 px-4 py-3 text-sm">
                {error}
              </div>
            )}

            {/* Full name input */}
            <label className="block">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Full name"
                aria-label="Full name"
                disabled={isLoading}
                className="w-full px-0 py-3 border-0 border-b border-[#222222] text-[#E5E5E5] placeholder-[#E5E5E5]/40 focus:outline-none focus:border-[#E5E5E5] transition-all duration-300 bg-transparent"
              />
            </label>

            {/* Username input */}
            <label className="block">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Username"
                aria-label="Username"
                disabled={isLoading}
                className="w-full px-0 py-3 border-0 border-b border-[#222222] text-[#E5E5E5] placeholder-[#E5E5E5]/40 focus:outline-none focus:border-[#E5E5E5] transition-all duration-300 bg-transparent"
              />
            </label>

            {/* Email input */}
            <label className="block">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Email address"
                aria-label="Email address"
                disabled={isLoading}
                className="w-full px-0 py-3 border-0 border-b border-[#222222] text-[#E5E5E5] placeholder-[#E5E5E5]/40 focus:outline-none focus:border-[#E5E5E5] transition-all duration-300 bg-transparent"
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
                disabled={isLoading}
                className="w-full px-0 py-3 border-0 border-b border-[#222222] text-[#E5E5E5] placeholder-[#E5E5E5]/40 focus:outline-none focus:border-[#E5E5E5] transition-all duration-300 bg-transparent"
              />
            </label>

            {/* Confirm password input */}
            <label className="block">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Confirm password"
                aria-label="Confirm password"
                disabled={isLoading}
                className="w-full px-0 py-3 border-0 border-b border-[#222222] text-[#E5E5E5] placeholder-[#E5E5E5]/40 focus:outline-none focus:border-[#E5E5E5] transition-all duration-300 bg-transparent"
              />
            </label>

            {/* Terms and conditions checkbox */}
            <label className="flex items-start gap-2 cursor-pointer group pt-2">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                aria-label="Accept terms"
                disabled={isLoading}
                className="w-4 h-4 mt-0.5 border accent-[#E5E5E5] border-[#222222] rounded bg-transparent checked:bg-[#E5E5E5] transition-all duration-300"
              />
              <span className="text-xs text-[#E5E5E5]/70 leading-snug group-hover:text-[#E5E5E5] transition-colors duration-300">
                I accept the{" "}
                <Link
                  to="/terms"
                  className="text-[#E5E5E5] hover:text-white transition-colors duration-300 font-semibold"
                >
                  terms and conditions{" "}
                </Link>
                and the{" "}
                <Link
                  to="/privacy"
                  className="text-[#E5E5E5] hover:text-white transition-colors duration-300 font-semibold"
                >
                  privacy policy
                </Link>
              </span>
            </label>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="group w-full bg-[#E5E5E5] border-2 border-[#E5E5E5] cursor-pointer text-[#0A0A0A] py-4 text-sm uppercase tracking-wider font-semibold rounded-lg shadow-lg shadow-[#E5E5E5]/20 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#E5E5E5]/30 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating account..." : "Create account"}
            </button>
          </form>

          {/* Footer with login link */}
          <footer className="text-center pt-8 border-t border-[#222222]/50">
            <p className="text-xs text-[#E5E5E5]/70">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#E5E5E5] hover:text-white transition-colors duration-300 font-semibold"
              >
                Sign in
              </Link>
            </p>
          </footer>
        </article>
      </section>
    </main>
  );
};

/**
 * @exports Register
 * @default
 *
 * @important
 * - All validations run client-side before API call
 * - Navigation uses replace: true to clear history
 * - Terms and privacy links required for legal compliance
 *
 * @dependencies
 * - react-router-dom (navigation)
 * - authService (API registration)
 * - Logo component
 */
export default Register;
