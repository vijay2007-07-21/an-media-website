import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import logo from "../assets/brand/an-media-logo.png";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    if (!data.user) {
      alert("Unable to sign in.");
      setLoading(false);
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    if (profileError || profile?.role !== "admin") {
      await supabase.auth.signOut();

      alert("Access denied. This account is not an admin account.");
      setLoading(false);
      return;
    }

    navigate("/admin");
  }

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <section className="relative hidden overflow-hidden lg:flex">

          {/* Background */}
          <div className="absolute inset-0 bg-[#111111]" />

          {/* Decorative circles */}
          <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />
          <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#F5C518]/20" />

          <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full border border-white/10" />

          {/* Yellow glow */}
          <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5C518]/10 blur-[100px]" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">

            {/* BRAND */}
            <div>
              <img
                src={logo}
                alt="AN Media"
                className="h-10 w-auto object-contain brightness-0 invert"
              />

              <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
                Admin Portal
              </div>
            </div>

            {/* CENTER */}
            <div className="max-w-lg">

              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C518] text-[#111111]">
                <ShieldCheck size={27} />
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F5C518]">
                00:01 — Secure Access
              </p>

              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight xl:text-7xl">
                Welcome to
                <br />
                <span className="text-[#F5C518]">
                  AN Media.
                </span>
              </h1>

              <p className="mt-7 max-w-md text-sm leading-relaxed text-white/45">
                Manage client bookings, review project requests and keep
                everything moving from one place.
              </p>

            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-between border-t border-white/10 pt-6">

              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                AN Media © 2026
              </p>

              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                Private Area
              </p>

            </div>

          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="flex min-h-screen items-center justify-center bg-[#FAFAF7] px-6 py-12 text-[#111111] md:px-10">

          <div className="w-full max-w-md">

            {/* BACK */}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="group mb-12 flex items-center gap-2 text-sm font-medium text-[#111111]/60 transition-colors hover:text-[#111111]"
            >
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to AN Media
            </button>

            {/* MOBILE BRAND */}
            <div className="mb-10 lg:hidden">

              <img
                src={logo}
                alt="AN Media"
                className="h-9 w-auto object-contain"
              />

              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.25em] text-black/35">
                Admin Portal
              </p>

            </div>

            {/* HEADING */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D5A900]">
                Administrator Login
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Sign in to
                <br />
                your dashboard.
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-[#4A4A46]">
                Use your authorized AN Media administrator account to continue.
              </p>

            </motion.div>

            {/* FORM */}
            <motion.form
              onSubmit={handleLogin}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-10 space-y-5"
            >

              {/* EMAIL */}
              <div>

                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#4A4A46]">
                  Admin Email
                </label>

                <div className="relative">

                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black/35"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    required
                    autoComplete="email"
                    placeholder="admin@example.com"
                    className="h-14 w-full rounded-2xl border border-black/10 bg-white pl-11 pr-4 text-sm outline-none transition-all placeholder:text-black/25 focus:border-[#F5C518] focus:ring-4 focus:ring-[#F5C518]/10"
                  />

                </div>

              </div>

              {/* PASSWORD */}
              <div>

                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#4A4A46]">
                  Password
                </label>

                <div className="relative">

                  <LockKeyhole
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black/35"
                  />

                  <input
                    type="password"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    required
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="h-14 w-full rounded-2xl border border-black/10 bg-white pl-11 pr-4 text-sm outline-none transition-all placeholder:text-black/25 focus:border-[#F5C518] focus:ring-4 focus:ring-[#F5C518]/10"
                  />

                </div>

              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="group flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#111111] px-6 text-sm font-semibold text-white transition-all hover:bg-[#F5C518] hover:text-[#111111] disabled:cursor-not-allowed disabled:opacity-60"
              >

                {loading ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                    Verifying Admin...
                  </>
                ) : (
                  <>
                    Sign In to Dashboard

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}

              </button>

              {/* SECURITY NOTE */}
              <div className="flex items-start gap-3 rounded-2xl border border-black/8 bg-white p-4">

                <ShieldCheck
                  size={18}
                  className="mt-0.5 shrink-0 text-[#D5A900]"
                />

                <p className="text-[11px] leading-relaxed text-black/45">
                  This area is restricted to authorized AN Media
                  administrators. Customer accounts cannot access the
                  dashboard.
                </p>

              </div>

            </motion.form>

            {/* BOTTOM */}
            <div className="mt-10 border-t border-black/10 pt-6">

              <p className="text-center text-xs text-black/35">
                Client?
                {" "}
                <button
                  type="button"
                  onClick={() => navigate("/customer/login")}
                  className="font-semibold text-black underline underline-offset-4 transition-colors hover:text-[#D5A900]"
                >
                  Go to Client Login
                </button>
              </p>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}