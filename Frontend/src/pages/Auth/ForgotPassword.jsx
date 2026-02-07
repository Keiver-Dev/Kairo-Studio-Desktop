import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/assets/icons/Logo";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setError("");
    if (!email) {
      setError("Enter your email address.");
      return;
    }
    // Simple format validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email.");
      return;
    }

    setSending(true);
    // Simulates a server call
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSubmit(e);
  };

  return (
    <main className="flex h-screen w-screen justify-center items-center overflow-hidden bg-[#0A0A0A]">
      <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full max-w-md px-6 py-8 sm:px-8 max-h-screen overflow-y-auto bg-linear-to-br from-[#171717] via-[#0A0A0A] to-[#0A0A0A] rounded-2xl border border-[#E5E5E5]/20 shadow-2xl shadow-black/20">
        {/* Logo */}
        <header className="flex flex-col gap-2 mb-6">
          <Logo className="text-[#0A0A0A] w-10 h-10 bg-[#E5E5E5] rounded-lg p-1 shadow-lg shadow-[#E5E5E5]/20" />
        </header>

        <article className="space-y-8">
          <div className="mb-4">
            <h2 className="text-3xl sm:text-2xl font-semibold text-[#E5E5E5] mb-2">
              Forgot your password?
            </h2>
            <p className="text-[#E5E5E5]/70 text-md">
              Enter the email associated with your account and we'll send you a link to reset it.
            </p>
          </div>

          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <label className="block">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Email address"
                  aria-label="Email address"
                  required
                  className="w-full px-0 py-3 border-0 border-b border-[#222222] text-[#E5E5E5] placeholder-[#E5E5E5]/40 focus:outline-none focus:border-[#E5E5E5] transition-all duration-300 bg-transparent"
                />
              </label>

              {error && (
                <p
                  role="alert"
                  aria-live="polite"
                  className="text-xs text-red-400"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className={`group w-full ${sending ? "opacity-70 cursor-wait" : ""} bg-[#E5E5E5] border-2 border-[#E5E5E5] text-[#0A0A0A] py-4 text-sm uppercase tracking-wider font-semibold rounded-lg shadow-lg shadow-[#E5E5E5]/20 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#E5E5E5]/30 mt-4`}
              >
                {sending ? "Sending..." : "Send reset link"}
              </button>

              <nav className="flex items-center justify-between pt-2">
                <Link
                  to="/login"
                  className="text-xs text-[#E5E5E5]/70 hover:text-[#E5E5E5] transition-colors duration-300"
                >
                  Back to sign in
                </Link>

                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="text-xs text-[#E5E5E5]/70 hover:text-[#E5E5E5] transition-colors duration-300"
                >
                  Go to home page
                </button>
              </nav>
            </form>
          ) : (
            <div className="space-y-6 text-center">
              <div className="px-4 py-6 bg-linear-to-br from-[#171717] to-[#0A0A0A] rounded-lg border border-[#E5E5E5]/20 shadow-lg shadow-[#E5E5E5]/5">
                <h3 className="text-lg font-medium text-[#E5E5E5] mb-2">Email sent</h3>
                <p className="text-sm text-[#E5E5E5]/70">
                  If an account associated with <span className="text-[#E5E5E5] font-semibold">{email}</span> exists, you will receive an email with instructions to reset your password.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => navigate("/login")}
                  className="flex-1 bg-[#E5E5E5] border-2 border-[#E5E5E5] text-[#0A0A0A] py-3 text-sm uppercase tracking-wider font-semibold rounded-lg shadow-lg shadow-[#E5E5E5]/20 transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl hover:shadow-[#E5E5E5]/30"
                >
                  Back to sign in
                </button>

                <button
                  onClick={() => { setSent(false); setEmail(""); }}
                  className="flex-1 border-2 border-[#222222] text-sm py-3 text-[#E5E5E5] font-semibold rounded-lg transition-all duration-300 hover:border-[#E5E5E5]/50 hover:bg-[#E5E5E5]/10"
                >
                  Send to another email
                </button>
              </div>
            </div>
          )}

          <footer className="text-center pt-6 border-t border-[#222222]/50">
            <p className="text-xs text-[#E5E5E5]/70">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#E5E5E5] hover:text-white transition-colors duration-300 font-semibold">
                Sign up
              </Link>
            </p>
          </footer>
        </article>
      </section>
    </main>
  );
};

export default ForgotPassword;