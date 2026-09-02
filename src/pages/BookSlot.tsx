import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Loader2,
  LogOut,
  Send,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { SERVICES } from "../data/services";

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];

export default function BookSlot() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [success, setSuccess] = useState(false);

  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/customer/login");
        return;
      }

      setUserId(user.id);
      setEmail(user.email ?? "");

      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name, phone")
        .eq("id", user.id)
        .single();

      if (profile) {
        setName(profile.full_name ?? "");
        setPhone(profile.phone ?? "");
      }

      setLoading(false);
    }

    checkUser();
  }, [navigate]);

  async function handleLogout() {
    setLoggingOut(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      alert(error.message);
      setLoggingOut(false);
      return;
    }

    navigate("/");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!userId) {
      navigate("/customer/login");
      return;
    }

    setSubmitting(true);
    setSuccess(false);

    const { error } = await supabase.from("bookings").insert({
      customer_id: userId,
      full_name: name.trim(),
      email,
      phone: phone.trim(),
      service,
      booking_date: bookingDate,
      booking_time: convertTimeTo24Hour(bookingTime),
      message: message.trim() || null,
      status: "pending",
    });

    if (error) {
      console.error(error);
      alert(error.message);
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
    setSuccess(true);

    setService("");
    setBookingDate("");
    setBookingTime("");
    setMessage("");
  }

  function convertTimeTo24Hour(time: string) {
    const [timePart, modifier] = time.split(" ");
    let [hours, minutes] = timePart.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    }

    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:00`;
  }

  const today = new Date().toISOString().split("T")[0];

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FAFAF7]">
        <Loader2 className="animate-spin" size={28} />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAFAF7]">
      {/* HEADER */}
      <header className="border-b border-ink/10 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">

          {/* BACK TO WEBSITE */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#F5C518]"
          >
            <ArrowLeft size={17} />
            Back to AN Media
          </button>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40 sm:block">
              Client Booking
            </span>

            {/* LOGOUT */}
            <button
              type="button"
              onClick={handleLogout}
              disabled={loggingOut}
              className="flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2.5 text-sm font-medium transition-all hover:border-[#F5C518] hover:bg-[#F5C518] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loggingOut ? (
                <Loader2 size={15} className="animate-spin" />
              ) : (
                <LogOut size={15} />
              )}

              {loggingOut ? "Logging out..." : "Logout"}
            </button>

          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D5A900]">
              00:10 — Book a Slot
            </p>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Let's create
              <br />
              <span className="text-[#F5C518]">something.</span>
            </h1>

            <p className="mt-7 max-w-md text-base leading-relaxed text-[#4A4A46]">
              Choose your preferred service, date and time. Our team will
              review your request and get back to you.
            </p>

            <div className="mt-10 space-y-4">

              {/* DATE */}
              <div className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5C518]">
                  <CalendarDays size={19} />
                </div>

                <div>
                  <p className="font-display font-semibold">
                    Choose your date
                  </p>

                  <p className="mt-1 text-sm text-[#4A4A46]">
                    Pick a convenient day for your project.
                  </p>
                </div>
              </div>

              {/* TIME */}
              <div className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#111111] text-white">
                  <Clock3 size={19} />
                </div>

                <div>
                  <p className="font-display font-semibold">
                    Choose your time
                  </p>

                  <p className="mt-1 text-sm text-[#4A4A46]">
                    Select an available preferred time.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* BOOKING FORM */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-ink/10 bg-white p-6 shadow-[0_25px_70px_-35px_rgba(17,17,17,0.25)] md:p-10"
          >

            {success ? (

              /* SUCCESS */
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5C518]">
                  <CheckCircle2 size={30} />
                </div>

                <h2 className="mt-7 font-display text-3xl font-semibold">
                  Booking received!
                </h2>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-[#4A4A46]">
                  Thank you for choosing AN Media. Your booking request has
                  been submitted successfully. Our team will contact you soon.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#F5C518] hover:text-ink"
                  >
                    Book Another Slot
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium transition-colors hover:bg-[#F1F1F1]"
                  >
                    Back to Website
                  </button>

                </div>
              </div>

            ) : (

              /* FORM */
              <>
                <div className="mb-8">

                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
                    Booking Request
                  </p>

                  <h2 className="mt-3 font-display text-3xl font-semibold">
                    Tell us what you need.
                  </h2>

                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* NAME + PHONE */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Full Name
                      </label>

                      <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-ink/10 bg-[#FAFAF7] px-4 py-3.5 text-sm outline-none transition focus:border-[#F5C518]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        required
                        placeholder="Your phone number"
                        className="w-full rounded-xl border border-ink/10 bg-[#FAFAF7] px-4 py-3.5 text-sm outline-none transition focus:border-[#F5C518]"
                      />
                    </div>

                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email
                    </label>

                    <input
                      type="email"
                      value={email}
                      readOnly
                      className="w-full cursor-not-allowed rounded-xl border border-ink/10 bg-[#F1F1F1] px-4 py-3.5 text-sm text-ink/60 outline-none"
                    />
                  </div>

                  {/* SERVICE */}
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Service
                    </label>

                    <select
                      value={service}
                      onChange={(event) => setService(event.target.value)}
                      required
                      className="w-full rounded-xl border border-ink/10 bg-[#FAFAF7] px-4 py-3.5 text-sm outline-none transition focus:border-[#F5C518]"
                    >
                      <option value="">Select a service</option>

                      {SERVICES.map((item) => (
                        <option key={item.code} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* DATE + TIME */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Preferred Date
                      </label>

                      <input
                        type="date"
                        value={bookingDate}
                        min={today}
                        onChange={(event) =>
                          setBookingDate(event.target.value)
                        }
                        required
                        className="w-full rounded-xl border border-ink/10 bg-[#FAFAF7] px-4 py-3.5 text-sm outline-none transition focus:border-[#F5C518]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Preferred Time
                      </label>

                      <select
                        value={bookingTime}
                        onChange={(event) =>
                          setBookingTime(event.target.value)
                        }
                        required
                        className="w-full rounded-xl border border-ink/10 bg-[#FAFAF7] px-4 py-3.5 text-sm outline-none transition focus:border-[#F5C518]"
                      >
                        <option value="">Select time</option>

                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Project Details
                    </label>

                    <textarea
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full resize-none rounded-xl border border-ink/10 bg-[#FAFAF7] px-4 py-3.5 text-sm outline-none transition focus:border-[#F5C518]"
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-4 text-sm font-medium text-white transition-all hover:bg-[#F5C518] hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={17} className="animate-spin" />
                        Sending Booking...
                      </>
                    ) : (
                      <>
                        Submit Booking
                        <Send
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] leading-relaxed text-ink/40">
                    Your booking request will be securely submitted to AN
                    Media.
                  </p>

                </form>
              </>
            )}

          </motion.div>
        </div>
      </section>
    </main>
  );
}