import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  LogOut,
  User,
  FolderOpen,
  MessageSquare,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function CustomerDashboard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/customer/login");
        return;
      }

      setEmail(user.email ?? "");
    }

    getUser();
  }, [navigate]);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/customer/login");
  }

  return (
    <main className="min-h-screen bg-[#FAFAF7]">
      {/* Header */}
      <header className="border-b border-ink/10 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111111]">
              <span className="font-display font-semibold text-[#F5C518]">
                AN
              </span>
            </div>

            <div>
              <p className="font-display text-lg font-semibold">AN Media</p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-ink/40">
                Client Portal
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2.5 text-sm font-medium transition-all hover:border-ink/30 hover:bg-[#111111] hover:text-white"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </header>

      {/* Dashboard */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D5A900]">
            Customer Dashboard
          </p>

          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Welcome
            <br />
            <span className="text-[#F5C518]">to AN Media.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4A4A46]">
            Your creative projects, communication and brand journey — all in
            one place.
          </p>
        </motion.div>

        {/* Account */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 rounded-3xl bg-[#111111] p-7 text-white md:p-10"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C518] text-[#111111]">
                <User size={24} />
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Signed in as
                </p>

                <p className="mt-2 text-sm font-medium text-white/80">
                  {email}
                </p>
              </div>
            </div>

            <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
              Secure Client Access
            </div>
          </div>
        </motion.div>

        {/* Dashboard cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            {
              icon: FolderOpen,
              title: "My Projects",
              text: "View your AN Media projects and creative work.",
            },
            {
              icon: MessageSquare,
              title: "Messages",
              text: "Stay connected with the AN Media team.",
            },
            {
              icon: User,
              title: "My Profile",
              text: "Manage your customer information.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.25 + index * 0.08,
                }}
                className="group rounded-2xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C518]/50 hover:shadow-[0_20px_50px_-25px_rgba(17,17,17,0.3)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F1F1F1] transition-colors group-hover:bg-[#F5C518]">
                    <Icon size={19} />
                  </div>

                  <ArrowRight
                    size={17}
                    className="text-ink/30 transition-transform group-hover:translate-x-1"
                  />
                </div>

                <h2 className="mt-10 font-display text-xl font-semibold">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-[#4A4A46]">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}