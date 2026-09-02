import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  LockKeyhole,
  Mail,
  Sparkles,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import logo from "../assets/brand/an-media-logo.png";

export default function CustomerLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    navigate("/customer/book");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#FAFAF7]">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* =====================================================
            PREMIUM LEFT PANEL
        ===================================================== */}

        <section className="relative hidden overflow-hidden bg-[#0B0B0B] lg:flex lg:min-h-screen lg:flex-col lg:justify-between">

          {/* Animated glow */}
          <motion.div
            className="absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-[#F5C518]/10 blur-[120px]"
            animate={{
              x: [0, 80, 0],
              y: [0, 60, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#F5C518]/8 blur-[120px]"
            animate={{
              x: [0, -70, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />

          {/* Floating circle */}
          <motion.div
            className="absolute right-24 top-32 h-24 w-24 rounded-full border border-[#F5C518]/20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating square */}
          <motion.div
            className="absolute bottom-40 left-20 h-16 w-16 rotate-12 rounded-2xl border border-white/10"
            animate={{
              y: [0, 20, 0],
              rotate: [12, 25, 12],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Top */}
          <motion.div
            className="relative z-10 p-12 xl:p-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-[#F5C518]"
            >
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to AN Media
            </Link>
          </motion.div>

          {/* Main content */}
          <motion.div
            className="relative z-10 px-12 pb-12 xl:px-16 xl:pb-16"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#F5C518]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F5C518]">
                Client Experience
              </span>
            </div>

            <h1 className="max-w-2xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-white xl:text-7xl">
              Your vision.
              <br />
              Our creativity.
              <br />
              <span className="text-[#F5C518]">One story.</span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-relaxed text-white/45">
              Access your AN Media client portal and stay connected with your
              creative projects, content and campaigns.
            </p>

            {/* Premium stats */}
            <div className="mt-12 flex gap-10">
              <div>
                <p className="font-display text-2xl font-semibold text-white">
                  01
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Client Portal
                </p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <p className="font-display text-2xl font-semibold text-white">
                  ∞
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Creative Possibilities
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom */}
          <div className="absolute bottom-6 right-8 z-10">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              AN Media · Creative Studio
            </p>
          </div>
        </section>

        {/* =====================================================
            LOGIN PANEL
        ===================================================== */}

        <section className="relative flex min-h-screen items-center justify-center px-6 py-12 sm:px-10">

          {/* Mobile background glow */}
          <motion.div
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#F5C518]/10 blur-[100px] lg:hidden"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative w-full max-w-md">

            {/* Mobile back */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                className="mb-10 inline-flex items-center gap-2 text-sm text-ink/40 transition-colors hover:text-ink lg:hidden"
              >
                <ArrowLeft size={16} />
                Back to website
              </Link>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 180,
              }}
            >
              <div className="flex h-16 w-fit items-center rounded-2xl border border-ink/10 bg-white px-5 shadow-[0_15px_40px_-20px_rgba(17,17,17,0.25)]">
                <img
                  src={logo}
                  alt="AN Media"
                  className="h-9 w-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="flex items-center gap-2">
                <Sparkles size={13} className="text-[#F5C518]" />

                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A8984]">
                  Client Portal
                </p>
              </div>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Welcome
                <br />
                <span className="text-[#F5C518]">back.</span>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#4A4A46]">
                Sign in to continue to your AN Media account.
              </p>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleLogin}
              className="mt-10 space-y-5"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink/60"
                >
                  Email address
                </label>

                <div className="group relative">
                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8984] transition-colors group-focus-within:text-[#F5C518]"
                  />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                    className="h-14 w-full rounded-xl border border-ink/10 bg-white pl-11 pr-4 text-sm shadow-sm outline-none transition-all duration-300 placeholder:text-ink/25 focus:border-[#F5C518] focus:shadow-[0_10px_35px_-15px_rgba(245,197,24,0.45)] focus:ring-2 focus:ring-[#F5C518]/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold uppercase tracking-wide text-ink/60"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-medium text-ink/40 transition-colors hover:text-[#F5C518]"
                    onClick={() =>
                      setMessage(
                        "Password reset will be added in the next step."
                      )
                    }
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="group relative">
                  <LockKeyhole
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8984] transition-colors group-focus-within:text-[#F5C518]"
                  />

                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    required
                    autoComplete="current-password"
                    className="h-14 w-full rounded-xl border border-ink/10 bg-white pl-11 pr-4 text-sm shadow-sm outline-none transition-all duration-300 placeholder:text-ink/25 focus:border-[#F5C518] focus:shadow-[0_10px_35px_-15px_rgba(245,197,24,0.45)] focus:ring-2 focus:ring-[#F5C518]/10"
                  />
                </div>
              </div>

              {/* Message */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="overflow-hidden rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
                >
                  {message}
                </motion.div>
              )}

              {/* Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.015 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="group relative flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#111111] px-5 text-sm font-semibold text-white shadow-[0_15px_35px_-18px_rgba(17,17,17,0.6)] transition-all duration-300 hover:bg-[#F5C518] hover:text-[#111111] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="relative z-10">
                  {loading ? "Signing in..." : "Sign in to client portal"}
                </span>

                {!loading && (
                  <ArrowRight
                    size={17}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}

                {/* Button shine */}
                {!loading && (
                  <motion.span
                    className="absolute -left-20 top-0 h-full w-16 skew-x-[-20deg] bg-white/20"
                    animate={{
                      x: [0, 420],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.button>
            </motion.form>

            {/* Divider */}
            <motion.div
              className="my-8 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="h-px flex-1 bg-ink/10" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/25">
                New client?
              </span>

              <div className="h-px flex-1 bg-ink/10" />
            </motion.div>

            {/* Register */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                to="/customer/register"
                className="group flex h-14 w-full items-center justify-center gap-2 rounded-xl border border-ink/10 bg-white px-5 text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F5C518] hover:shadow-[0_15px_35px_-20px_rgba(245,197,24,0.6)]"
              >
                Create customer account

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* Security */}
            <motion.div
              className="mt-8 flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[#F5C518]" />

              <p className="text-center text-[10px] uppercase tracking-[0.12em] text-ink/30">
                Secure client access · AN Media
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}