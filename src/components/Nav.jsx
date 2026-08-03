import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import logoImg from "../assets/logo.png";
import {
  FaSearch,
  FaBell,
  FaRegHeart,
  FaShoppingCart,
  FaTimes,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaUserPlus,
  FaSignInAlt,
  FaCheckCircle,
} from "react-icons/fa";

// Free shipping threshold used for the progress bar on the cart drawer.
const FREE_SHIPPING_THRESHOLD = 2000;

// Helper to safely turn a price (number or string like "R75.00") into a number
const parsePrice = (price) => {
  if (typeof price === "number") return price;
  if (typeof price === "string") {
    const cleaned = price.replace(/[^0-9.]/g, "");
    return parseFloat(cleaned) || 0;
  }
  return 0;
};

// Formats a number as "R75,00" (Rand style, comma decimal)
const formatRand = (amount) => {
  return `R${amount.toFixed(2).replace(".", ",")}`;
};

const Nav = () => {
  const { cart, removeFromCart } = useCart();
  const { user, login, register, logout } = useUser();

  // Drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState("auth"); // "auth" | "cart"

  // Auth tab: "login" | "register"
  const [authTab, setAuthTab] = useState("login");

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPass, setShowLoginPass] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Register form state
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [showRegPass, setShowRegPass] = useState(false);
  const [showRegConfirmPass, setShowRegConfirmPass] = useState(false);
  const [regError, setRegError] = useState("");

  // ── Handlers ──────────────────────────────────────────────
  const openAuthDrawer = (tab = "login") => {
    setAuthTab(tab);
    setDrawerContent("auth");
    setDrawerOpen(true);
    setLoginError("");
    setRegError("");
  };

  const openCartDrawer = () => {
    setDrawerContent("cart");
    setDrawerOpen(true);
  };

  const closeDrawer = () => setDrawerOpen(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");
    if (!loginEmail || !loginPassword) {
      setLoginError("Please fill in all fields.");
      return;
    }
    login(loginEmail, loginPassword);
    setLoginEmail("");
    setLoginPassword("");
    closeDrawer();
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setRegError("");
    if (!regName || !regEmail || !regPassword || !regConfirmPassword) {
      setRegError("Please fill in all fields.");
      return;
    }
    if (regPassword !== regConfirmPassword) {
      setRegError("Passwords do not match.");
      return;
    }
    if (regPassword.length < 6) {
      setRegError("Password must be at least 6 characters.");
      return;
    }
    register(regEmail, regPassword, regName);
    setRegName("");
    setRegEmail("");
    setRegPassword("");
    setRegConfirmPassword("");
    closeDrawer();
  };

  // Cart calculations
  const subtotal = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * (item.quantity || 1),
    0
  );
  const amountLeftForFreeShipping = Math.max(
    FREE_SHIPPING_THRESHOLD - subtotal,
    0
  );
  const shippingProgress = Math.min(
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
    100
  );

  // ── Render ─────────────────────────────────────────────────
  return (
    <>
      {/* ─── Inline styles for auth drawer animations ─── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .auth-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(4px);
          z-index: 40;
          transition: opacity 0.3s ease;
        }
        .auth-drawer-overlay.hidden-ov {
          opacity: 0;
          pointer-events: none;
        }
        .auth-drawer-overlay.visible-ov {
          opacity: 1;
          pointer-events: auto;
        }

        .auth-drawer-panel {
          position: fixed;
          top: 0;
          right: 0;
          height: 100%;
          width: 420px;
          max-width: 100vw;
          z-index: 50;
          background: #fff;
          box-shadow: -8px 0 40px rgba(0,0,0,0.18);
          display: flex;
          flex-direction: column;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          font-family: 'Inter', sans-serif;
          overflow-y: auto;
        }
        .auth-drawer-panel.closed {
          transform: translateX(100%);
        }
        .auth-drawer-panel.open {
          transform: translateX(0);
        }

        /* Tab pill */
        .auth-tab-bar {
          display: flex;
          background: #f3f4f6;
          border-radius: 999px;
          padding: 4px;
          margin: 0 24px 24px 24px;
        }
        .auth-tab-btn {
          flex: 1;
          padding: 10px 0;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #6b7280;
          background: transparent;
        }
        .auth-tab-btn.active {
          background: #ff6a00;
          color: #fff;
          box-shadow: 0 2px 12px rgba(255,106,0,0.35);
        }

        /* Input group */
        .auth-input-group {
          position: relative;
          margin-bottom: 16px;
        }
        .auth-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          font-size: 14px;
          pointer-events: none;
        }
        .auth-input {
          width: 100%;
          padding: 13px 16px 13px 40px;
          border: 1.5px solid #e5e7eb;
          border-radius: 12px;
          font-size: 14px;
          color: #111827;
          background: #f9fafb;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .auth-input:focus {
          border-color: #ff6a00;
          box-shadow: 0 0 0 3px rgba(255,106,0,0.12);
          background: #fff;
        }
        .auth-input-right-btn {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
        }
        .auth-input-right-btn:hover { color: #ff6a00; }

        /* Submit button */
        .auth-submit-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #ff6a00 0%, #ee0979 100%);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          letter-spacing: 0.3px;
          box-shadow: 0 4px 18px rgba(255,106,0,0.3);
          margin-top: 6px;
        }
        .auth-submit-btn:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }
        .auth-submit-btn:active { transform: scale(0.98); }

        /* Google button */
        .auth-google-btn {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid #e5e7eb;
          border-radius: 12px;
          background: #fff;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: background 0.2s, border-color 0.2s;
          margin-bottom: 20px;
        }
        .auth-google-btn:hover { background: #f9fafb; border-color: #d1d5db; }

        /* Divider */
        .auth-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: #d1d5db;
          font-size: 12px;
        }
        .auth-divider::before, .auth-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e5e7eb;
        }

        /* Error */
        .auth-error {
          background: #fff1f2;
          border: 1px solid #fca5a5;
          color: #dc2626;
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 13px;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Label */
        .auth-label {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: #374151;
          margin-bottom: 6px;
        }

        /* Drawer header */
        .auth-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px 20px 24px;
          border-bottom: 1px solid #f3f4f6;
          margin-bottom: 24px;
        }
        .auth-close-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f3f4f6;
          border: none;
          border-radius: 8px;
          padding: 8px 14px;
          font-size: 13px;
          color: #374151;
          cursor: pointer;
          transition: background 0.2s;
        }
        .auth-close-btn:hover { background: #e5e7eb; }

        /* Brand accent */
        .auth-brand-strip {
          height: 4px;
          background: linear-gradient(90deg, #ff6a00, #ee0979, #ff6a00);
          background-size: 200% 100%;
          animation: gradientMove 3s linear infinite;
        }
        @keyframes gradientMove {
          0%   { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }

        /* Welcome illustration area */
        .auth-welcome {
          padding: 0 24px 8px 24px;
          margin-bottom: 20px;
        }
        .auth-welcome-title {
          font-size: 22px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 4px 0;
        }
        .auth-welcome-sub {
          font-size: 13px;
          color: #6b7280;
          margin: 0;
        }

        /* Password strength */
        .pass-strength-bar {
          height: 3px;
          border-radius: 999px;
          margin-top: 6px;
          transition: width 0.3s, background 0.3s;
        }

        /* Checkbox */
        .auth-check-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          margin-top: 4px;
        }
        .auth-check-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #6b7280;
          cursor: pointer;
        }
        .auth-forgot-link {
          font-size: 13px;
          color: #ff6a00;
          text-decoration: none;
          cursor: pointer;
        }
        .auth-forgot-link:hover { text-decoration: underline; }

        /* Switch prompt */
        .auth-switch-prompt {
          text-align: center;
          font-size: 13px;
          color: #6b7280;
          margin-top: 20px;
        }
        .auth-switch-link {
          color: #ff6a00;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
        }
        .auth-switch-link:hover { text-decoration: underline; }

        /* My Account drawer */
        .account-avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6a00, #ee0979);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          font-weight: 700;
          box-shadow: 0 4px 18px rgba(255,106,0,0.3);
          margin: 0 auto 12px auto;
        }
      `}</style>

      {/* ─── Navbar ─────────────────────────────────────────── */}
      <nav className="bg-black shadow-md">
        <div className="max-w-full mx-auto px-4 lg:px-6 py-2">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <Link to="/">
                <img
                  src={logoImg}
                  alt="Logo"
                  className="h-24 lg:h-24 w-full object-contain cursor-pointer"
                />
              </Link>
            </div>

            {/* Search */}
            <div className="w-full lg:w-2/4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search For Computer Accessories"
                  className="w-full py-3 pl-4 pr-20 border border-gray-300 rounded-full outline-none focus:border-blue-500 bg-white"
                />
                <button className="absolute right-0 top-0 h-full w-16 bg-[#ff6a00] rounded-r-full flex items-center justify-center hover:bg-orange-600">
                  <FaSearch className="text-white text-lg" />
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-5 text-white">

              {/* Login / Register  →  opens drawer */}
              <div className="flex items-center gap-2 font-bold text-lg">
                {user ? (
                  <button
                    onClick={() => openAuthDrawer("login")}
                    className="hover:text-yellow-300 flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#ff6a00] flex items-center justify-center text-sm font-bold">
                      {user.username ? user.username[0].toUpperCase() : "U"}
                    </div>
                    <span>Hi, {user.username}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => openAuthDrawer("login")}
                    className="hover:text-[#ff6a00] cursor-pointer transition-colors flex items-center gap-2"
                  >
                    <FaUser className="text-lg" />
                    <span>Login / Register</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 cursor-pointer">
                <FaRegHeart className="text-xl" />
              </div>

              <div className="relative cursor-pointer">
                <FaBell className="text-2xl" />
                <span className="absolute -top-2 -right-2 bg-[#ff6a00] text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  0
                </span>
              </div>

              <div className="relative cursor-pointer" onClick={openCartDrawer}>
                <FaShoppingCart className="text-2xl" />
                <span className="absolute -top-2 -right-2 bg-[#ff6a00] text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cart.length}
                </span>
              </div>

              <div className="flex items-center gap-2 cursor-pointer">
                <a href="#"><span>R0.00</span></a>
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* ─── Overlay ─────────────────────────────────────────── */}
      <div
        onClick={closeDrawer}
        className={`auth-drawer-overlay ${drawerOpen ? "visible-ov" : "hidden-ov"}`}
      />

      {/* ─── Drawer Panel ─────────────────────────────────────── */}
      <div className={`auth-drawer-panel ${drawerOpen ? "open" : "closed"}`}>

        {/* Animated brand strip at top */}
        <div className="auth-brand-strip" />

        {/* ── AUTH DRAWER (Login / Register) ── */}
        {drawerContent === "auth" && (
          <>
            {user ? (
              /* ── My Account View ── */
              <>
                <div className="auth-drawer-header">
                  <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", margin: 0 }}>
                    My Account
                  </h2>
                  <button className="auth-close-btn" onClick={closeDrawer}>
                    <FaTimes size={14} />
                    Close
                  </button>
                </div>

                <div style={{ padding: "0 24px 24px 24px", textAlign: "center" }}>
                  <div className="account-avatar">
                    {user.username ? user.username[0].toUpperCase() : "U"}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 4 }}>
                    {user.username}
                  </h3>
                  <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 28 }}>
                    {user.email}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "#10b981", fontSize: 13, marginBottom: 28 }}>
                    <FaCheckCircle />
                    <span>Account verified</span>
                  </div>

                  <Link
                    to="/my-account"
                    onClick={closeDrawer}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "13px",
                      background: "linear-gradient(135deg,#ff6a00,#ee0979)",
                      color: "#fff",
                      fontWeight: 700,
                      borderRadius: 12,
                      textDecoration: "none",
                      marginBottom: 12,
                      fontSize: 15,
                      boxShadow: "0 4px 18px rgba(255,106,0,0.3)",
                      transition: "opacity 0.2s",
                      boxSizing: "border-box",
                    }}
                  >
                    Go to Dashboard
                  </Link>
                  <button
                    onClick={() => { logout(); closeDrawer(); }}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "2px solid #ef4444",
                      color: "#ef4444",
                      fontWeight: 600,
                      borderRadius: 12,
                      background: "transparent",
                      cursor: "pointer",
                      fontSize: 14,
                      transition: "background 0.2s, color 0.2s",
                    }}
                    onMouseEnter={e => { e.target.style.background = "#ef4444"; e.target.style.color = "#fff"; }}
                    onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#ef4444"; }}
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              /* ── Login / Register Tabs ── */
              <>
                <div className="auth-drawer-header">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", margin: 0 }}>
                      {authTab === "login" ? "Welcome Back 👋" : "Create Account 🚀"}
                    </h2>
                  </div>
                  <button className="auth-close-btn" onClick={closeDrawer}>
                    <FaTimes size={14} />
                    Close
                  </button>
                </div>

                {/* Tab pills */}
                <div className="auth-tab-bar">
                  <button
                    className={`auth-tab-btn ${authTab === "login" ? "active" : ""}`}
                    onClick={() => { setAuthTab("login"); setLoginError(""); setRegError(""); }}
                  >
                    <FaSignInAlt size={13} />
                    Login
                  </button>
                  <button
                    className={`auth-tab-btn ${authTab === "register" ? "active" : ""}`}
                    onClick={() => { setAuthTab("register"); setLoginError(""); setRegError(""); }}
                  >
                    <FaUserPlus size={13} />
                    Register
                  </button>
                </div>

                {/* ── LOGIN FORM ── */}
                {authTab === "login" && (
                  <div style={{ padding: "0 24px 24px 24px" }}>
                    {/* Google */}
                    <button type="button" className="auth-google-btn">
                      <FaGoogle style={{ color: "#4285F4", fontSize: 16 }} />
                      Continue with Google
                    </button>

                    <div className="auth-divider">or sign in with email</div>

                    <form onSubmit={handleLogin}>
                      {loginError && (
                        <div className="auth-error">
                          <FaTimes size={12} />
                          {loginError}
                        </div>
                      )}

                      {/* Email */}
                      <label className="auth-label">
                        Email address <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <div className="auth-input-group">
                        <FaEnvelope className="auth-input-icon" />
                        <input
                          type="email"
                          className="auth-input"
                          placeholder="you@example.com"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          required
                        />
                      </div>

                      {/* Password */}
                      <label className="auth-label">
                        Password <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <div className="auth-input-group">
                        <FaLock className="auth-input-icon" />
                        <input
                          type={showLoginPass ? "text" : "password"}
                          className="auth-input"
                          placeholder="Enter your password"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          required
                          style={{ paddingRight: 44 }}
                        />
                        <button
                          type="button"
                          className="auth-input-right-btn"
                          onClick={() => setShowLoginPass((s) => !s)}
                        >
                          {showLoginPass ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
                        </button>
                      </div>

                      {/* Remember / Forgot */}
                      <div className="auth-check-row">
                        <label className="auth-check-label">
                          <input type="checkbox" style={{ accentColor: "#ff6a00" }} />
                          Remember me
                        </label>
                        <span className="auth-forgot-link">Forgot password?</span>
                      </div>

                      <button type="submit" className="auth-submit-btn">
                        <FaSignInAlt size={15} />
                        Sign In
                      </button>

                      <p className="auth-switch-prompt">
                        Don't have an account?{" "}
                        <span
                          className="auth-switch-link"
                          onClick={() => setAuthTab("register")}
                        >
                          Create one
                        </span>
                      </p>
                    </form>
                  </div>
                )}

                {/* ── REGISTER FORM ── */}
                {authTab === "register" && (
                  <div style={{ padding: "0 24px 24px 24px" }}>
                    {/* Google */}
                    <button type="button" className="auth-google-btn">
                      <FaGoogle style={{ color: "#4285F4", fontSize: 16 }} />
                      Continue with Google
                    </button>

                    <div className="auth-divider">or register with email</div>

                    <form onSubmit={handleRegister}>
                      {regError && (
                        <div className="auth-error">
                          <FaTimes size={12} />
                          {regError}
                        </div>
                      )}

                      {/* Full Name */}
                      <label className="auth-label">
                        Full Name <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <div className="auth-input-group">
                        <FaUser className="auth-input-icon" />
                        <input
                          type="text"
                          className="auth-input"
                          placeholder="John Doe"
                          value={regName}
                          onChange={(e) => setRegName(e.target.value)}
                          required
                        />
                      </div>

                      {/* Email */}
                      <label className="auth-label">
                        Email address <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <div className="auth-input-group">
                        <FaEnvelope className="auth-input-icon" />
                        <input
                          type="email"
                          className="auth-input"
                          placeholder="you@example.com"
                          value={regEmail}
                          onChange={(e) => setRegEmail(e.target.value)}
                          required
                        />
                      </div>

                      {/* Password */}
                      <label className="auth-label">
                        Password <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <div className="auth-input-group">
                        <FaLock className="auth-input-icon" />
                        <input
                          type={showRegPass ? "text" : "password"}
                          className="auth-input"
                          placeholder="Min. 6 characters"
                          value={regPassword}
                          onChange={(e) => setRegPassword(e.target.value)}
                          required
                          style={{ paddingRight: 44 }}
                        />
                        <button
                          type="button"
                          className="auth-input-right-btn"
                          onClick={() => setShowRegPass((s) => !s)}
                        >
                          {showRegPass ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
                        </button>
                      </div>

                      {/* Password strength bar */}
                      {regPassword && (
                        <div
                          className="pass-strength-bar"
                          style={{
                            width: regPassword.length < 4 ? "30%" : regPassword.length < 7 ? "65%" : "100%",
                            background: regPassword.length < 4 ? "#ef4444" : regPassword.length < 7 ? "#f59e0b" : "#10b981",
                            marginBottom: 12,
                          }}
                        />
                      )}

                      {/* Confirm Password */}
                      <label className="auth-label">
                        Confirm Password <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <div className="auth-input-group">
                        <FaLock className="auth-input-icon" />
                        <input
                          type={showRegConfirmPass ? "text" : "password"}
                          className="auth-input"
                          placeholder="Re-enter password"
                          value={regConfirmPassword}
                          onChange={(e) => setRegConfirmPassword(e.target.value)}
                          required
                          style={{ paddingRight: 44 }}
                        />
                        <button
                          type="button"
                          className="auth-input-right-btn"
                          onClick={() => setShowRegConfirmPass((s) => !s)}
                        >
                          {showRegConfirmPass ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
                        </button>
                      </div>

                      <button type="submit" className="auth-submit-btn" style={{ marginTop: 8 }}>
                        <FaUserPlus size={15} />
                        Create Account
                      </button>

                      <p className="auth-switch-prompt">
                        Already have an account?{" "}
                        <span
                          className="auth-switch-link"
                          onClick={() => setAuthTab("login")}
                        >
                          Sign in
                        </span>
                      </p>
                    </form>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* ── CART DRAWER ── */}
        {drawerContent === "cart" && (
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            {/* Header */}
            <div className="auth-drawer-header">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", margin: 0 }}>
                Shopping Cart
              </h2>
              <button className="auth-close-btn" onClick={closeDrawer}>
                <FaTimes size={14} />
                Close
              </button>
            </div>

            {/* Cart items */}
            <div style={{ flex: 1, overflowY: "auto", padding: "0 24px" }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: "center", padding: "48px 0", color: "#9ca3af" }}>
                  <FaShoppingCart size={40} style={{ marginBottom: 12, opacity: 0.3 }} />
                  <p style={{ fontSize: 14 }}>Your cart is empty.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={`cart-${item.id}`}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "16px 0",
                      borderBottom: "1px solid #f3f4f6",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: 64, height: 64, borderRadius: 10, objectFit: "cover", background: "#f3f4f6" }}
                    />
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: 13, fontWeight: 600, color: "#111827", marginBottom: 4 }}>
                        {item.title}
                      </h3>
                      {item.sku && (
                        <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>
                          SKU: {item.sku}
                        </p>
                      )}
                      <p style={{ fontSize: 13 }}>
                        <span style={{ color: "#9ca3af" }}>{item.quantity || 1} × </span>
                        <span style={{ color: "#ff6a00", fontWeight: 700 }}>
                          {formatRand(parsePrice(item.price))}
                        </span>
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart && removeFromCart(item.id)}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "#d1d5db", padding: 4 }}
                      onMouseEnter={e => e.target.style.color = "#ef4444"}
                      onMouseLeave={e => e.target.style.color = "#d1d5db"}
                    >
                      <FaTimes size={14} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Cart footer */}
            {cart.length > 0 && (
              <div style={{ borderTop: "1px solid #f3f4f6", padding: "20px 24px" }}>
                {/* Subtotal */}
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                  <span style={{ fontWeight: 700, color: "#111827" }}>Subtotal:</span>
                  <span style={{ color: "#ff6a00", fontWeight: 700, fontSize: 17 }}>
                    {formatRand(subtotal)}
                  </span>
                </div>

                {/* Free shipping progress */}
                {amountLeftForFreeShipping > 0 ? (
                  <div style={{ marginBottom: 16 }}>
                    <p style={{ fontSize: 12, color: "#6b7280", marginBottom: 8 }}>
                      Add <strong style={{ color: "#ff6a00" }}>{formatRand(amountLeftForFreeShipping)}</strong> for free shipping!
                    </p>
                    <div style={{ height: 6, background: "#f3f4f6", borderRadius: 999, overflow: "hidden" }}>
                      <div
                        style={{
                          height: "100%",
                          width: `${shippingProgress}%`,
                          background: "linear-gradient(90deg, #ff6a00, #ee0979)",
                          borderRadius: 999,
                          transition: "width 0.3s",
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <p style={{ fontSize: 13, color: "#10b981", fontWeight: 600, marginBottom: 16 }}>
                    🎉 You've qualified for free shipping!
                  </p>
                )}

                <button
                  style={{
                    width: "100%",
                    padding: 13,
                    background: "#f3f4f6",
                    border: "none",
                    borderRadius: 12,
                    fontWeight: 600,
                    color: "#111827",
                    cursor: "pointer",
                    marginBottom: 10,
                    fontSize: 14,
                  }}
                >
                  View Cart
                </button>
                <button
                  className="auth-submit-btn"
                  style={{ marginTop: 0 }}
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;