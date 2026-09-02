import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  LogOut,
  Menu,
  RefreshCw,
  Search,
  X,
  XCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

type BookingStatus = "pending" | "accepted" | "rejected";

type Booking = {
  id: string;
  customer_id: string;
  full_name: string;
  email: string;
  phone: string;
  service: string;
  booking_date: string;
  booking_time: string;
  message: string | null;
  status: BookingStatus;
  created_at: string;
};

const STATUS_STYLES: Record<BookingStatus, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  accepted: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | BookingStatus
  >("all");
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    checkAdminAndLoadBookings();
  }, []);

  async function checkAdminAndLoadBookings() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      navigate("/admin/login");
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profileError || profile?.role !== "admin") {
      alert("Access denied. Admin account required.");
      await supabase.auth.signOut();
      navigate("/admin/login");
      return;
    }

    await loadBookings();

    setLoading(false);
  }

  async function loadBookings() {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    setBookings((data ?? []) as Booking[]);
  }

  async function handleRefresh() {
    setRefreshing(true);
    await loadBookings();
    setRefreshing(false);
  }

  async function updateBookingStatus(
    bookingId: string,
    status: BookingStatus
  ) {
    setUpdatingId(bookingId);

    const { error } = await supabase
      .from("bookings")
      .update({ status })
      .eq("id", bookingId);

    if (error) {
      console.error(error);
      alert(error.message);
      setUpdatingId(null);
      return;
    }

    setBookings((current) =>
      current.map((booking) =>
        booking.id === bookingId
          ? { ...booking, status }
          : booking
      )
    );

    setUpdatingId(null);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/admin/login");
  }

  const stats = useMemo(() => {
    return {
      total: bookings.length,
      pending: bookings.filter(
        (booking) => booking.status === "pending"
      ).length,
      accepted: bookings.filter(
        (booking) => booking.status === "accepted"
      ).length,
      rejected: bookings.filter(
        (booking) => booking.status === "rejected"
      ).length,
    };
  }, [bookings]);

  const filteredBookings = useMemo(() => {
    const query = search.trim().toLowerCase();

    return bookings.filter((booking) => {
      const matchesStatus =
        statusFilter === "all" ||
        booking.status === statusFilter;

      const matchesSearch =
        !query ||
        booking.full_name.toLowerCase().includes(query) ||
        booking.email.toLowerCase().includes(query) ||
        booking.phone.toLowerCase().includes(query) ||
        booking.service.toLowerCase().includes(query);

      return matchesStatus && matchesSearch;
    });
  }, [bookings, search, statusFilter]);

  function formatDate(date: string) {
    return new Date(`${date}T00:00:00`).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  }

  function formatTime(time: string) {
    const [hours, minutes] = time.split(":").map(Number);

    const date = new Date();
    date.setHours(hours, minutes, 0, 0);

    return date.toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
    });
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0B0B0B] text-white">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C518] text-black">
            <RefreshCw
              size={23}
              className="animate-spin"
            />
          </div>

          <p className="mt-5 text-sm text-white/50">
            Loading AN Media Dashboard...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F4F4EF] text-[#111111]">

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col bg-[#0B0B0B] text-white transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >

        {/* BRAND */}
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">

          <div>
            <p className="font-display text-xl font-semibold">
              AN<span className="text-[#F5C518]">.</span>
            </p>

            <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
              Media Admin
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X size={20} />
          </button>

        </div>

        {/* SIDEBAR CONTENT */}
        <div className="flex flex-1 flex-col px-4 py-6">

          <p className="px-3 font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">
            Workspace
          </p>

          <nav className="mt-4 space-y-1">

            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-xl bg-[#F5C518] px-4 py-3 text-sm font-semibold text-black"
            >
              <CalendarDays size={17} />
              Bookings
            </button>

          </nav>

          {/* INFO */}
          <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4">

            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
              Admin Panel
            </p>

            <p className="mt-2 text-sm font-medium">
              Manage client requests
            </p>

            <p className="mt-2 text-xs leading-relaxed text-white/40">
              Review incoming bookings and update their status.
            </p>

          </div>

          {/* LOGOUT */}
          <button
            type="button"
            onClick={handleLogout}
            className="mt-4 flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
          >
            <LogOut size={17} />
            Logout
          </button>

        </div>
      </aside>

      {/* MAIN AREA */}
      <div className="lg:pl-[270px]">

        {/* TOP BAR */}
        <header className="sticky top-0 z-30 border-b border-black/10 bg-[#F4F4EF]/90 backdrop-blur-xl">

          <div className="flex h-20 items-center justify-between px-5 md:px-8">

            <div className="flex items-center gap-4">

              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 lg:hidden"
              >
                <Menu size={19} />
              </button>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40">
                  00:01 — Dashboard
                </p>

                <h1 className="mt-1 font-display text-xl font-semibold md:text-2xl">
                  Booking Overview
                </h1>
              </div>

            </div>

            <button
              type="button"
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm font-medium transition hover:border-black/30 disabled:opacity-50"
            >
              <RefreshCw
                size={15}
                className={
                  refreshing ? "animate-spin" : ""
                }
              />

              <span className="hidden sm:inline">
                Refresh
              </span>
            </button>

          </div>

        </header>

        {/* CONTENT */}
        <section className="px-5 py-8 md:px-8 md:py-10">

          {/* WELCOME */}
          <div className="mb-8">

            <p className="text-sm text-black/50">
              Welcome back, Admin.
            </p>

            <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Let's manage your bookings.
            </h2>

          </div>

          {/* STAT CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {/* TOTAL */}
            <StatCard
              label="Total Bookings"
              value={stats.total}
              icon={<CalendarDays size={20} />}
              dark
            />

            {/* PENDING */}
            <StatCard
              label="Pending"
              value={stats.pending}
              icon={<Clock3 size={20} />}
            />

            {/* ACCEPTED */}
            <StatCard
              label="Accepted"
              value={stats.accepted}
              icon={<CheckCircle2 size={20} />}
            />

            {/* REJECTED */}
            <StatCard
              label="Rejected"
              value={stats.rejected}
              icon={<XCircle size={20} />}
            />

          </div>

          {/* BOOKINGS */}
          <div className="mt-8 rounded-3xl border border-black/10 bg-white shadow-[0_25px_70px_-40px_rgba(0,0,0,0.25)]">

            {/* TABLE HEADER */}
            <div className="border-b border-black/10 p-5 md:p-6">

              <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/35">
                    Client Requests
                  </p>

                  <h3 className="mt-2 font-display text-xl font-semibold">
                    Recent Bookings
                  </h3>
                </div>

                {/* SEARCH */}
                <div className="flex flex-col gap-3 sm:flex-row">

                  <div className="relative">

                    <Search
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-black/35"
                    />

                    <input
                      type="text"
                      value={search}
                      onChange={(event) =>
                        setSearch(event.target.value)
                      }
                      placeholder="Search client or service..."
                      className="h-11 w-full rounded-xl border border-black/10 bg-[#F7F7F3] pl-10 pr-4 text-sm outline-none transition focus:border-[#F5C518] sm:w-[270px]"
                    />

                  </div>

                  <select
                    value={statusFilter}
                    onChange={(event) =>
                      setStatusFilter(
                        event.target.value as
                          | "all"
                          | BookingStatus
                      )
                    }
                    className="h-11 rounded-xl border border-black/10 bg-[#F7F7F3] px-4 text-sm outline-none focus:border-[#F5C518]"
                  >
                    <option value="all">
                      All Status
                    </option>
                    <option value="pending">
                      Pending
                    </option>
                    <option value="accepted">
                      Accepted
                    </option>
                    <option value="rejected">
                      Rejected
                    </option>
                  </select>

                </div>

              </div>

            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden overflow-x-auto md:block">

              <table className="w-full min-w-[900px]">

                <thead>
                  <tr className="border-b border-black/10 text-left">

                    <th className="px-6 py-4 font-mono text-[9px] uppercase tracking-[0.15em] text-black/40">
                      Client
                    </th>

                    <th className="px-6 py-4 font-mono text-[9px] uppercase tracking-[0.15em] text-black/40">
                      Service
                    </th>

                    <th className="px-6 py-4 font-mono text-[9px] uppercase tracking-[0.15em] text-black/40">
                      Schedule
                    </th>

                    <th className="px-6 py-4 font-mono text-[9px] uppercase tracking-[0.15em] text-black/40">
                      Status
                    </th>

                    <th className="px-6 py-4 text-right font-mono text-[9px] uppercase tracking-[0.15em] text-black/40">
                      Action
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {filteredBookings.length === 0 ? (

                    <tr>
                      <td
                        colSpan={5}
                        className="px-6 py-20 text-center"
                      >
                        <CalendarDays
                          size={30}
                          className="mx-auto text-black/20"
                        />

                        <p className="mt-4 text-sm font-medium">
                          No bookings found
                        </p>

                        <p className="mt-1 text-xs text-black/40">
                          New client booking requests will appear here.
                        </p>
                      </td>
                    </tr>

                  ) : (

                    filteredBookings.map((booking) => (

                      <tr
                        key={booking.id}
                        className="border-b border-black/5 transition-colors hover:bg-[#FAFAF7]"
                      >

                        {/* CLIENT */}
                        <td className="px-6 py-5">

                          <div>
                            <p className="text-sm font-semibold">
                              {booking.full_name}
                            </p>

                            <p className="mt-1 text-xs text-black/45">
                              {booking.email}
                            </p>

                            <p className="mt-1 text-xs text-black/45">
                              {booking.phone}
                            </p>
                          </div>

                        </td>

                        {/* SERVICE */}
                        <td className="px-6 py-5">

                          <p className="max-w-[190px] text-sm font-medium">
                            {booking.service}
                          </p>

                          {booking.message && (
                            <p className="mt-1 max-w-[220px] truncate text-xs text-black/40">
                              {booking.message}
                            </p>
                          )}

                        </td>

                        {/* DATE */}
                        <td className="px-6 py-5">

                          <p className="text-sm font-medium">
                            {formatDate(booking.booking_date)}
                          </p>

                          <p className="mt-1 text-xs text-black/45">
                            {formatTime(booking.booking_time)}
                          </p>

                        </td>

                        {/* STATUS */}
                        <td className="px-6 py-5">

                          <span
                            className={`inline-flex rounded-full px-3 py-1.5 text-[11px] font-semibold capitalize ${
                              STATUS_STYLES[booking.status]
                            }`}
                          >
                            {booking.status}
                          </span>

                        </td>

                        {/* ACTIONS */}
                        <td className="px-6 py-5">

                          <div className="flex justify-end gap-2">

                            <button
                              type="button"
                              disabled={
                                updatingId === booking.id ||
                                booking.status === "accepted"
                              }
                              onClick={() =>
                                updateBookingStatus(
                                  booking.id,
                                  "accepted"
                                )
                              }
                              className="flex items-center gap-1.5 rounded-full bg-[#111111] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#F5C518] hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
                            >
                              <CheckCircle2 size={13} />
                              Accept
                            </button>

                            <button
                              type="button"
                              disabled={
                                updatingId === booking.id ||
                                booking.status === "rejected"
                              }
                              onClick={() =>
                                updateBookingStatus(
                                  booking.id,
                                  "rejected"
                                )
                              }
                              className="flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-2 text-xs font-medium transition hover:border-red-300 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                              <XCircle size={13} />
                              Reject
                            </button>

                          </div>

                        </td>

                      </tr>

                    ))

                  )}

                </tbody>

              </table>

            </div>

            {/* MOBILE CARDS */}
            <div className="space-y-4 p-4 md:hidden">

              {filteredBookings.length === 0 ? (

                <div className="py-16 text-center">

                  <CalendarDays
                    size={30}
                    className="mx-auto text-black/20"
                  />

                  <p className="mt-4 text-sm font-medium">
                    No bookings found
                  </p>

                  <p className="mt-1 text-xs text-black/40">
                    New requests will appear here.
                  </p>

                </div>

              ) : (

                filteredBookings.map((booking) => (

                  <div
                    key={booking.id}
                    className="rounded-2xl border border-black/10 bg-[#FAFAF7] p-5"
                  >

                    <div className="flex items-start justify-between gap-3">

                      <div>
                        <p className="font-semibold">
                          {booking.full_name}
                        </p>

                        <p className="mt-1 text-xs text-black/45">
                          {booking.email}
                        </p>
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-semibold capitalize ${
                          STATUS_STYLES[booking.status]
                        }`}
                      >
                        {booking.status}
                      </span>

                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-4">

                      <div>
                        <p className="text-[9px] font-mono uppercase tracking-wider text-black/35">
                          Service
                        </p>

                        <p className="mt-1 text-sm font-medium">
                          {booking.service}
                        </p>
                      </div>

                      <div>
                        <p className="text-[9px] font-mono uppercase tracking-wider text-black/35">
                          Schedule
                        </p>

                        <p className="mt-1 text-sm font-medium">
                          {formatDate(booking.booking_date)}
                        </p>

                        <p className="text-xs text-black/45">
                          {formatTime(booking.booking_time)}
                        </p>
                      </div>

                    </div>

                    {booking.message && (
                      <div className="mt-5 rounded-xl bg-white p-3">
                        <p className="text-[9px] font-mono uppercase tracking-wider text-black/35">
                          Message
                        </p>

                        <p className="mt-1 text-xs leading-relaxed text-black/60">
                          {booking.message}
                        </p>
                      </div>
                    )}

                    <div className="mt-5 flex gap-2">

                      <button
                        type="button"
                        disabled={
                          updatingId === booking.id ||
                          booking.status === "accepted"
                        }
                        onClick={() =>
                          updateBookingStatus(
                            booking.id,
                            "accepted"
                          )
                        }
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#111111] px-3 py-2.5 text-xs font-medium text-white transition hover:bg-[#F5C518] hover:text-black disabled:opacity-30"
                      >
                        <CheckCircle2 size={13} />
                        Accept
                      </button>

                      <button
                        type="button"
                        disabled={
                          updatingId === booking.id ||
                          booking.status === "rejected"
                        }
                        onClick={() =>
                          updateBookingStatus(
                            booking.id,
                            "rejected"
                          )
                        }
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-black/10 px-3 py-2.5 text-xs font-medium transition hover:border-red-300 hover:bg-red-50 disabled:opacity-30"
                      >
                        <XCircle size={13} />
                        Reject
                      </button>

                    </div>

                  </div>

                ))

              )}

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  icon,
  dark = false,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        dark
          ? "border-[#111111] bg-[#111111] text-white"
          : "border-black/10 bg-white"
      }`}
    >
      <div className="flex items-start justify-between">

        <div>
          <p
            className={`text-xs ${
              dark ? "text-white/45" : "text-black/45"
            }`}
          >
            {label}
          </p>

          <p className="mt-3 font-display text-4xl font-semibold">
            {value}
          </p>
        </div>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            dark
              ? "bg-[#F5C518] text-black"
              : "bg-[#F4F4EF]"
          }`}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}