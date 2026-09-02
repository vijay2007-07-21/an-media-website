import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Work from "./components/sections/Work";
import WhyUs from "./components/sections/WhyUs";
import Team from "./components/sections/Team";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

import CustomerLogin from "./pages/CustomerLogin";
import CustomerRegister from "./pages/CustomerRegister";
import BookSlot from "./pages/BookSlot";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function HomePage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <WhyUs />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* MAIN WEBSITE */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* CUSTOMER */}
        <Route
          path="/customer/login"
          element={<CustomerLogin />}
        />

        <Route
          path="/customer/register"
          element={<CustomerRegister />}
        />

        <Route
          path="/customer/book"
          element={<BookSlot />}
        />

        {/* ADMIN */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}