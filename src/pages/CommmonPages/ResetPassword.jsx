import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  LockKeyhole,
  Eye,
  EyeOff,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const passwordValid = password.length >= 8;
  const passwordsMatch =
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password === confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!passwordValid) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (!passwordsMatch) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      /*
       * BACKEND API
       *
       * Later replace this demo section with:
       *
       * const response = await fetch(
       *   `${import.meta.env.VITE_API_URL}/auth/reset-password`,
       *   {
       *     method: "POST",
       *     headers: {
       *       "Content-Type": "application/json",
       *     },
       *     body: JSON.stringify({
       *       token,
       *       password,
       *     }),
       *   }
       * );
       *
       * const data = await response.json();
       *
       * if (!response.ok) {
       *   throw new Error(data.message || "Unable to reset password");
       * }
       */

      // Demo delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccess(true);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- SUCCESS ---------------- */

  if (success) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10">
        {/* Background effects */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative w-full max-w-md">
          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-8 text-center shadow-2xl backdrop-blur-2xl sm:p-10">
            {/* Success Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/30">
              <CheckCircle2
                size={42}
                className="text-emerald-400"
              />
            </div>

            <h1 className="mt-7 text-3xl font-bold text-white">
              Password Reset
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Your password has been successfully updated. You can now use
              your new password to sign in to your POLARIS account.
            </p>

            <button
              onClick={() => navigate("/login")}
              className="mt-8 w-full rounded-xl bg-cyan-500 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Continue to Login
            </button>

            <Link
              to="/"
              className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
            >
              <ArrowLeft size={16} />
              Back to POLARIS
            </Link>
          </div>
        </div>
      </main>
    );
  }

  /* ---------------- RESET PAGE ---------------- */

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-8 sm:px-6">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-15%] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05),transparent_55%)]" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo / Brand */}
        <div className="mb-7 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to POLARIS
          </Link>

          <div className="mt-7 flex items-center justify-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-400/20">
              <ShieldCheck
                size={24}
                className="text-cyan-300"
              />
            </div>

            <div className="text-left">
              <p className="text-lg font-bold tracking-wide text-white">
                POLARIS
              </p>

              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                NCPOR · MoES
              </p>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 ring-1 ring-cyan-400/20">
              <LockKeyhole
                size={30}
                className="text-cyan-300"
              />
            </div>

            <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
              Reset your password
            </h1>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Create a new secure password for your POLARIS account.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-6 flex gap-3 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">
              <AlertCircle
                size={18}
                className="mt-0.5 shrink-0"
              />

              <p>{error}</p>
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-7 space-y-5"
          >
            {/* New Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                New password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter new password"
                  autoComplete="new-password"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-400/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-slate-200"
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {/* Password requirements */}
              <div className="mt-3 space-y-1.5">
                <div
                  className={`flex items-center gap-2 text-xs ${
                    passwordValid
                      ? "text-emerald-400"
                      : "text-slate-500"
                  }`}
                >
                  <CheckCircle2 size={14} />
                  At least 8 characters
                </div>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Confirm new password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Confirm new password"
                  autoComplete="new-password"
                  className={`w-full rounded-xl border bg-white/5 py-3.5 pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:ring-2 ${
                    confirmPassword.length > 0 && !passwordsMatch
                      ? "border-red-400/40 focus:border-red-400/60 focus:ring-red-400/10"
                      : "border-white/10 focus:border-cyan-400/60 focus:ring-cyan-400/10"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-slate-200"
                  aria-label={
                    showConfirm
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showConfirm ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {confirmPassword.length > 0 && (
                <div
                  className={`mt-2 flex items-center gap-2 text-xs ${
                    passwordsMatch
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  <CheckCircle2 size={14} />
                  {passwordsMatch
                    ? "Passwords match"
                    : "Passwords do not match"}
                </div>
              )}
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full overflow-hidden rounded-xl bg-cyan-500 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="relative z-10">
                {loading ? "Updating password..." : "Reset Password"}
              </span>
            </button>
          </form>

          {/* Security note */}
          <div className="mt-6 flex gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4">
            <ShieldCheck
              size={18}
              className="mt-0.5 shrink-0 text-cyan-400"
            />

            <p className="text-xs leading-5 text-slate-500">
              Choose a strong password that you do not use on other websites.
              Never share your password with anyone.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-600">
          © 2026 POLARIS · NCPOR · Ministry of Earth Sciences
        </p>
      </div>
    </main>
  );
}