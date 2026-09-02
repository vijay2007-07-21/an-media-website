import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  Mail,
  Phone,
  User,
  Sparkles,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import logo from "../assets/brand/an-media-logo.png";

export default function CustomerRegister() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          full_name: name.trim(),
          phone: phone.trim(),
        },
      },
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setSuccess(true);
  }

  if (success) {
    return (
      <main className="min-h-screen overflow-hidden bg-[#FAFAF7]">
        <div className="grid min-h-screen lg:grid-cols-2">

          {/* Left premium panel */}
          <section className="relative hidden overflow-hidden bg-[#0B0B0B] lg:flex lg:min-h-screen lg:flex-col lg:justify-between">

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

            <div
              className="absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "55px 55px",
              }}
            />

            <div className="relative z-10 p-12 xl:p-16">
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
            </div>

            <motion.div
              className="relative z-10 px-12 pb-20 xl:px-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F5C518]">
                Welcome to AN Media
              </p>

              <h1 className="mt-6 max-w-xl font-display text-5xl font-semibold leading-[0.98] text-white xl:text-7xl">
                Let's create
                <br />
                something
                <br />
                <span className="text-[#F5C518]">remarkable.</span>
              </h1>

              <p className="mt-8 max-w-md text-base leading-relaxed text-white/40">
                Your creative journey with AN Media begins here.
              </p>
            </motion.div>

            <p className="absolute bottom-6 right-8 font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              AN Media · Client Portal
            </p>
          </section>

          {/* Success panel */}
          <section className="relative flex min-h-screen items-center justify-center px-6 py-12 sm:px-10">
            <motion.div
              className="w-full max-w-md text-center"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 120,
              }}
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F5C518]/15">
                <CheckCircle2
                  size={42}
                  strokeWidth={1.5}
                  className="text-[#D5A900]"
                />
              </div>

              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A8984]">
                Registration complete
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Check your
                <br />
                <span className="text-[#F5C518]">email.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#4A4A46]">
                We've sent a verification link to{" "}
                <strong>{email}</strong>. Please verify your email address
                before signing in to your AN Media account.
              </p>

              <motion.button
                type="button"
                onClick={() => navigate("/customer/login")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group mt-8 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#111111] text-sm font-semibold text-white transition-colors hover:bg-[#F5C518] hover:text-[#111111]"
              >
                Go to Login
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.button>

              <p className="mt-6 text-[10px] uppercase tracking-[0.12em] text-ink/30">
                Check your spam folder if you don't see the email.
              </p>
            </motion.div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#FAFAF7]">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* =====================================================
            LEFT PREMIUM PANEL
        ===================================================== */}

        <section className="relative hidden overflow-hidden bg-[#0B0B0B] lg:flex lg:min-h-screen lg:flex-col lg:justify-between">

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

          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />

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

          <motion.div
            className="relative z-10 px-12 pb-12 xl:px-16 xl:pb-16"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#F5C518]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F5C518]">
                Join AN Media
              </span>
            </div>

            <h1 className="max-w-2xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-white xl:text-7xl">
              Your vision.
              <br />
              Your brand.
              <br />
              <span className="text-[#F5C518]">Your story.</span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-relaxed text-white/45">
              Create your client account and get closer to the creative work
              that moves your brand forward.
            </p>

            <div className="mt-12 flex gap-10">
              <div>
                <p className="font-display text-2xl font-semibold text-white">
                  01
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Create Account
                </p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <p className="font-display text-2xl font-semibold text-white">
                  ∞
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Possibilities
                </p>
              </div>
            </div>
          </motion.div>

          <div className="absolute bottom-6 right-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              AN Media · Creative Studio
            </p>
          </div>
        </section>

        {/* =====================================================
            REGISTRATION FORM
        ===================================================== */}

        <section className="relative flex min-h-screen items-center justify-center px-6 py-12 sm:px-10">

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
            <Link
              to="/customer/login"
              className="mb-8 inline-flex items-center gap-2 text-sm text-ink/40 transition-colors hover:text-ink lg:hidden"
            >
              <ArrowLeft size={16} />
              Back to Login
            </Link>

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
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="flex items-center gap-2">
                <Sparkles size={13} className="text-[#F5C518]" />

                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A8984]">
                  Client Registration
                </p>
              </div>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Create your
                <br />
                <span className="text-[#F5C518]">account.</span>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#4A4A46]">
                Join the AN Media client portal.
              </p>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleRegister}
              className="mt-8 space-y-4"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink/60"
                >
                  Full name
                </label>

                <div className="group relative">
                  <User
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8984] transition-colors group-focus-within:text-[#F5C518]"
                  />

                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your full name"
                    required
                    autoComplete="name"
                    className="h-13 w-full rounded-xl border border-ink/10 bg-white pl-11 pr-4 text-sm shadow-sm outline-none transition-all duration-300 placeholder:text-ink/25 focus:border-[#F5C518] focus:shadow-[0_10px_35px_-15px_rgba(245,197,24,0.45)] focus:ring-2 focus:ring-[#F5C518]/10"
                  />
                </div>
              </div>

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
                    className="h-13 w-full rounded-xl border border-ink/10 bg-white pl-11 pr-4 text-sm shadow-sm outline-none transition-all duration-300 placeholder:text-ink/25 focus:border-[#F5C518] focus:shadow-[0_10px_35px_-15px_rgba(245,197,24,0.45)] focus:ring-2 focus:ring-[#F5C518]/10"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink/60"
                >
                  Phone number
                </label>

                <div className="group relative">
                  <Phone
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8984] transition-colors group-focus-within:text-[#F5C518]"
                  />

                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="Your phone number"
                    required
                    autoComplete="tel"
                    className="h-13 w-full rounded-xl border border-ink/10 bg-white pl-11 pr-4 text-sm shadow-sm outline-none transition-all duration-300 placeholder:text-ink/25 focus:border-[#F5C518] focus:shadow-[0_10px_35px_-15px_rgba(245,197,24,0.45)] focus:ring-2 focus:ring-[#F5C518]/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink/60"
                >
                  Password
                </label>

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
                    placeholder="At least 6 characters"
                    required
                    minLength={6}
                    autoComplete="new-password"
                    className="h-13 w-full rounded-xl border border-ink/10 bg-white pl-11 pr-4 text-sm shadow-sm outline-none transition-all duration-300 placeholder:text-ink/25 focus:border-[#F5C518] focus:shadow-[0_10px_35px_-15px_rgba(245,197,24,0.45)] focus:ring-2 focus:ring-[#F5C518]/10"
                  />
                </div>
              </div>

              {/* Confirm password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink/60"
                >
                  Confirm password
                </label>

                <div className="group relative">
                  <LockKeyhole
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8984] transition-colors group-focus-within:text-[#F5C518]"
                  />

                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(event) =>
                      setConfirmPassword(event.target.value)
                    }
                    placeholder="Re-enter your password"
                    required
                    minLength={6}
                    autoComplete="new-password"
                    className="h-13 w-full rounded-xl border border-ink/10 bg-white pl-11 pr-4 text-sm shadow-sm outline-none transition-all duration-300 placeholder:text-ink/25 focus:border-[#F5C518] focus:shadow-[0_10px_35px_-15px_rgba(245,197,24,0.45)] focus:ring-2 focus:ring-[#F5C518]/10"
                  />
                </div>
              </div>

              {/* Error */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
                >
                  {message}
                </motion.div>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.015 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="group relative mt-2 flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#111111] px-5 text-sm font-semibold text-white shadow-[0_15px_35px_-18px_rgba(17,17,17,0.6)] transition-all duration-300 hover:bg-[#F5C518] hover:text-[#111111] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="relative z-10">
                  {loading ? "Creating account..." : "Create customer account"}
                </span>

                {!loading && (
                  <ArrowRight
                    size={17}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </motion.button>
            </motion.form>

            {/* Login link */}
            <motion.div
              className="mt-7 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm text-ink/40">
                Already have an account?{" "}
                <Link
                  to="/customer/login"
                  className="font-semibold text-ink transition-colors hover:text-[#D5A900]"
                >
                  Sign in
                </Link>
              </p>
            </motion.div>

            <p className="mt-5 text-center text-[10px] uppercase tracking-[0.1em] text-ink/25">
              Secure authentication · AN Media
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}