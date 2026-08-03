import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import { useSearchParams } from "react-router-dom";
import {
  FaUser,
  FaShoppingBag,
  FaDownload,
  FaMapMarkerAlt,
  FaSignOutAlt,
  FaTachometerAlt,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaGoogle,
} from "react-icons/fa";

const MyAccount = () => {
  const { user, login, register, logout } = useUser();
  const [searchParams] = useSearchParams();
  const actionParam = searchParams.get("action");

  // Show register form toggle state
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  // Sync state with URL parameter ?action=register
  useEffect(() => {
    if (actionParam === "register") {
      setShowRegisterForm(true);
    } else {
      setShowRegisterForm(false);
    }
  }, [actionParam]);

  // Active tab state for logged in dashboard
  const [activeTab, setActiveTab] = useState("dashboard");

  // Tab views state (e.g. editing address)
  const [editingAddress, setEditingAddress] = useState(null); // 'billing' | 'shipping' | null

  // Alert message state
  const [alert, setAlert] = useState({ type: "", message: "" });

  // Form states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  // Address states
  const [billingAddress, setBillingAddress] = useState({
    firstName: "Taofeeq",
    lastName: "Khan",
    company: "",
    street: "12 Loop Street",
    city: "Cape Town",
    province: "Western Cape",
    postcode: "8001",
    country: "South Africa",
    phone: "082 123 4567",
  });

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "Taofeeq",
    lastName: "Khan",
    company: "",
    street: "12 Loop Street",
    city: "Cape Town",
    province: "Western Cape",
    postcode: "8001",
    country: "South Africa",
  });

  // Account details states
  const [accountDetails, setAccountDetails] = useState({
    firstName: "Taofeeq",
    lastName: "Khan",
    displayName: "Taofeeq Khan",
    email: user ? user.email : "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Mock order details drawer / view
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Mock Orders
  const [orders, setOrders] = useState([
    {
      id: "1024",
      date: "May 12, 2026",
      status: "Completed",
      total: "R1 250,00",
      items: [
        { name: "Wireless Mechanical Keyboard", qty: 1, price: "R750,00" },
        { name: "RGB Gaming Mouse", qty: 1, price: "R500,00" },
      ],
    },
    {
      id: "1085",
      date: "July 20, 2026",
      status: "Processing",
      total: "R3 499,00",
      items: [
        { name: "27\" 144Hz Gaming Monitor", qty: 1, price: "R3 499,00" },
      ],
    },
  ]);

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => {
      setAlert({ type: "", message: "" });
    }, 5000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      showAlert("error", "Please fill in all fields.");
      return;
    }
    const loggedInUser = login(loginEmail, loginPassword);
    if (loggedInUser) {
      setAccountDetails((prev) => ({ ...prev, email: loggedInUser.email }));
      showAlert("success", `Welcome back, ${loggedInUser.username}!`);
      setActiveTab("dashboard");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!registerEmail || !registerPassword) {
      showAlert("error", "Please fill in all fields.");
      return;
    }
    if (registerPassword.length < 6) {
      showAlert("error", "Password must be at least 6 characters.");
      return;
    }
    const registeredUser = register(registerEmail, registerPassword);
    if (registeredUser) {
      setAccountDetails((prev) => ({ ...prev, email: registeredUser.email }));
      showAlert("success", "Account created successfully!");
      setActiveTab("dashboard");
    }
  };

  const handleAddressSave = (type, e) => {
    e.preventDefault();
    showAlert("success", `${type === "billing" ? "Billing" : "Shipping"} address updated successfully.`);
    setEditingAddress(null);
  };

  const handleAccountDetailsSave = (e) => {
    e.preventDefault();
    if (accountDetails.newPassword && accountDetails.newPassword !== accountDetails.confirmPassword) {
      showAlert("error", "New passwords do not match.");
      return;
    }
    showAlert("success", "Account details updated successfully.");
    setAccountDetails((prev) => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));
  };

  return (
    <div className="bg-[#f6f5f8] min-h-screen py-10 px-4 md:px-8 font-sans">
      {/* Container */}
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb / Title */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-[#092143] tracking-tight mb-2">
            My Account
          </h1>
          <p className="text-sm text-gray-500">
            <span className="hover:text-orange-500 cursor-pointer">Home</span> / <span className="text-[#ff6a00]">My Account</span>
          </p>
        </div>

        {/* Global Alert */}
        {alert.message && (
          alert.type === "success" ? (
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl mb-8 shadow-sm bg-green-50 border border-green-200 text-green-800 transition-all duration-300">
              <FaCheckCircle className="text-xl shrink-0 text-green-600" />
              <span className="text-sm font-medium">{alert.message}</span>
            </div>
          ) : (
            <div className="bg-[#e21a1a] text-white px-5 py-4 rounded-lg flex items-center gap-3 mb-8 text-sm font-medium shadow-md transition-all duration-300">
              <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center font-bold text-[10px] text-white shrink-0">!</div>
              <div>{alert.message}</div>
            </div>
          )
        )}

        {!user ? (
          /* TWO-COLUMN LOGIN / REGISTER VIEW (MATCHING SCREENSHOT) */
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-12 hover:shadow-lg transition">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative">
              {/* Vertical divider line for desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

              {/* Left Column: LOGIN */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#092143] tracking-wide mb-6">
                  LOGIN
                </h2>
                <form onSubmit={handleLogin} className="space-y-5">
                  {/* Google button */}
                  <div>
                    <button
                      type="button"
                      className="flex items-center gap-3 border border-gray-300 rounded-md px-4 py-2.5 hover:bg-gray-50 transition-colors shadow-sm bg-white"
                    >
                      <FaGoogle className="text-lg text-[#4285F4]" />
                      <span className="text-sm font-semibold text-gray-700">
                        Sign in with Google
                      </span>
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Username or email address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full rounded-full border border-gray-300 px-4 py-3 text-sm focus:border-[#ff6a00] focus:ring-2 focus:ring-orange-500/20 outline-none transition shadow-sm bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showLoginPassword ? "text" : "password"}
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="w-full rounded-full border border-gray-300 px-4 py-3 text-sm pr-12 focus:border-[#ff6a00] focus:ring-2 focus:ring-orange-500/20 outline-none transition shadow-sm bg-white"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showLoginPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ff6a00] hover:bg-orange-600 text-white font-bold py-3.5 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    Log In
                  </button>

                  <div className="flex items-center justify-between pt-2">
                    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-[#ff6a00] focus:ring-[#ff6a00]"
                      />
                      Remember me
                    </label>
                    <a href="#" className="text-sm text-[#ff6a00] hover:underline font-semibold">
                      Lost your password?
                    </a>
                  </div>
                </form>
              </div>

              {/* Right Column: REGISTER */}
              <div className="space-y-6 flex flex-col justify-start">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-[#092143] tracking-wide mb-6">
                    REGISTER
                  </h2>
                </div>

                {!showRegisterForm ? (
                  <div className="flex flex-col items-center justify-center text-center space-y-6 flex-1 py-8">
                    <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                      Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
                    </p>
                    <button
                      type="button"
                      onClick={() => setShowRegisterForm(true)}
                      className="bg-[#f0f0f0] hover:bg-[#e0e0e0] text-gray-800 font-bold px-8 py-3 rounded-full border border-gray-200 transition-all text-sm shadow-sm cursor-pointer"
                    >
                      Register
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-5 flex-1">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        placeholder="Enter email address"
                        className="w-full rounded-full border border-gray-300 px-4 py-3 text-sm focus:border-[#ff6a00] focus:ring-2 focus:ring-orange-500/20 outline-none transition shadow-sm bg-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showRegisterPassword ? "text" : "password"}
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                          placeholder="Create password"
                          className="w-full rounded-full border border-gray-300 px-4 py-3 text-sm pr-12 focus:border-[#ff6a00] focus:ring-2 focus:ring-orange-500/20 outline-none transition shadow-sm bg-white"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showRegisterPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed">
                      Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                    </p>

                    <button
                      type="submit"
                      className="w-full bg-[#ff6a00] hover:bg-orange-600 text-white font-bold py-3.5 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                      Register
                    </button>

                    <div className="text-center pt-2">
                      <button
                        type="button"
                        onClick={() => setShowRegisterForm(false)}
                        className="text-xs text-gray-500 hover:underline hover:text-gray-700 font-semibold"
                      >
                        ← Back to description
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* LOGGED IN ACCOUNT DASHBOARD */
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                {/* User welcome header */}
                <div className="bg-slate-900 text-white p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#ff6a00] flex items-center justify-center text-xl font-bold mx-auto mb-3 shadow-md">
                    {user.username ? user.username[0].toUpperCase() : "U"}
                  </div>
                  <h3 className="font-semibold text-lg">{user.username}</h3>
                  <p className="text-xs text-gray-400 truncate">{user.email}</p>
                </div>

                {/* Nav Tabs */}
                <div className="flex flex-col text-sm">
                  <button
                    onClick={() => { setActiveTab("dashboard"); setEditingAddress(null); setSelectedOrder(null); }}
                    className={`flex items-center gap-3 px-6 py-4 font-semibold text-left border-b border-gray-100 transition-colors ${
                      activeTab === "dashboard"
                        ? "bg-[#ff6a00] text-white"
                        : "text-gray-700 hover:bg-orange-50 hover:text-[#ff6a00]"
                    }`}
                  >
                    <FaTachometerAlt className="text-lg" />
                    Dashboard
                  </button>

                  <button
                    onClick={() => { setActiveTab("orders"); setEditingAddress(null); setSelectedOrder(null); }}
                    className={`flex items-center gap-3 px-6 py-4 font-semibold text-left border-b border-gray-100 transition-colors ${
                      activeTab === "orders"
                        ? "bg-[#ff6a00] text-white"
                        : "text-gray-700 hover:bg-orange-50 hover:text-[#ff6a00]"
                    }`}
                  >
                    <FaShoppingBag className="text-lg" />
                    Orders
                  </button>

                  <button
                    onClick={() => { setActiveTab("downloads"); setEditingAddress(null); setSelectedOrder(null); }}
                    className={`flex items-center gap-3 px-6 py-4 font-semibold text-left border-b border-gray-100 transition-colors ${
                      activeTab === "downloads"
                        ? "bg-[#ff6a00] text-white"
                        : "text-gray-700 hover:bg-orange-50 hover:text-[#ff6a00]"
                    }`}
                  >
                    <FaDownload className="text-lg" />
                    Downloads
                  </button>

                  <button
                    onClick={() => { setActiveTab("addresses"); setEditingAddress(null); setSelectedOrder(null); }}
                    className={`flex items-center gap-3 px-6 py-4 font-semibold text-left border-b border-gray-100 transition-colors ${
                      activeTab === "addresses"
                        ? "bg-[#ff6a00] text-white"
                        : "text-gray-700 hover:bg-orange-50 hover:text-[#ff6a00]"
                    }`}
                  >
                    <FaMapMarkerAlt className="text-lg" />
                    Addresses
                  </button>

                  <button
                    onClick={() => { setActiveTab("account-details"); setEditingAddress(null); setSelectedOrder(null); }}
                    className={`flex items-center gap-3 px-6 py-4 font-semibold text-left border-b border-gray-100 transition-colors ${
                      activeTab === "account-details"
                        ? "bg-[#ff6a00] text-white"
                        : "text-gray-700 hover:bg-orange-50 hover:text-[#ff6a00]"
                    }`}
                  >
                    <FaUser className="text-lg" />
                    Account Details
                  </button>

                  <button
                    onClick={logout}
                    className="flex items-center gap-3 px-6 py-4 font-semibold text-left text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <FaSignOutAlt className="text-lg" />
                    Logout
                  </button>
                </div>
              </div>
            </div>

            {/* Dashboard Contents */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 h-full">
                {/* 1. DASHBOARD TAB */}
                {activeTab === "dashboard" && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#092143] mb-4">
                      Dashboard
                    </h2>
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      Hello <span className="font-bold text-[#ff6a00]">{user.username}</span> (not <span className="font-bold">{user.username}</span>?{" "}
                      <button onClick={logout} className="text-red-600 underline hover:text-red-700 font-semibold">
                        Log out
                      </button>
                      )
                    </p>

                    <p className="text-slate-700 mb-8 leading-relaxed">
                      From your account dashboard you can easily view your{" "}
                      <button onClick={() => setActiveTab("orders")} className="text-[#ff6a00] underline font-semibold">
                        recent orders
                      </button>
                      , manage your{" "}
                      <button onClick={() => setActiveTab("addresses")} className="text-[#ff6a00] underline font-semibold">
                        shipping and billing addresses
                      </button>
                      , and{" "}
                      <button onClick={() => setActiveTab("account-details")} className="text-[#ff6a00] underline font-semibold">
                        edit your password and account details
                      </button>
                      .
                    </p>

                    {/* Quick navigation cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div
                        onClick={() => setActiveTab("orders")}
                        className="border border-gray-100 rounded-xl p-6 bg-slate-50 hover:bg-orange-50 hover:border-orange-200 transition cursor-pointer text-center group"
                      >
                        <FaShoppingBag className="text-3xl text-slate-700 group-hover:text-[#ff6a00] mx-auto mb-3" />
                        <h4 className="font-bold text-slate-800 mb-1">Recent Orders</h4>
                        <p className="text-xs text-gray-500">Track and view history</p>
                      </div>

                      <div
                        onClick={() => setActiveTab("addresses")}
                        className="border border-gray-100 rounded-xl p-6 bg-slate-50 hover:bg-orange-50 hover:border-orange-200 transition cursor-pointer text-center group"
                      >
                        <FaMapMarkerAlt className="text-3xl text-slate-700 group-hover:text-[#ff6a00] mx-auto mb-3" />
                        <h4 className="font-bold text-slate-800 mb-1">Addresses</h4>
                        <p className="text-xs text-gray-500">Update billing & shipping</p>
                      </div>

                      <div
                        onClick={() => setActiveTab("account-details")}
                        className="border border-gray-100 rounded-xl p-6 bg-slate-50 hover:bg-orange-50 hover:border-orange-200 transition cursor-pointer text-center group"
                      >
                        <FaUser className="text-3xl text-slate-700 group-hover:text-[#ff6a00] mx-auto mb-3" />
                        <h4 className="font-bold text-slate-800 mb-1">Profile Details</h4>
                        <p className="text-xs text-gray-500">Change email & password</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. ORDERS TAB */}
                {activeTab === "orders" && !selectedOrder && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#092143] mb-6">
                      Orders
                    </h2>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200 text-slate-600 font-semibold text-sm">
                            <th className="py-4 px-2">Order</th>
                            <th className="py-4 px-2">Date</th>
                            <th className="py-4 px-2">Status</th>
                            <th className="py-4 px-2">Total</th>
                            <th className="py-4 px-2 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-slate-700">
                          {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                              <td className="py-4 px-2 font-semibold text-[#ff6a00]">
                                #{order.id}
                              </td>
                              <td className="py-4 px-2">{order.date}</td>
                              <td className="py-4 px-2">
                                <span
                                  className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${
                                    order.status === "Completed"
                                      ? "bg-green-100 text-green-700"
                                      : "bg-blue-100 text-blue-700"
                                  }`}
                                >
                                  {order.status}
                                </span>
                              </td>
                              <td className="py-4 px-2">{order.total}</td>
                              <td className="py-4 px-2 text-right">
                                <button
                                  onClick={() => setSelectedOrder(order)}
                                  className="bg-slate-900 hover:bg-[#ff6a00] text-white text-xs font-bold px-4 py-2 rounded-full transition"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* ORDER DETAIL SUB-VIEW */}
                {activeTab === "orders" && selectedOrder && (
                  <div>
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
                      <h3 className="text-xl font-bold text-slate-900">
                        Order Details: #{selectedOrder.id}
                      </h3>
                      <button
                        onClick={() => setSelectedOrder(null)}
                        className="text-xs text-gray-500 hover:text-slate-800 font-bold border border-gray-300 px-3 py-1.5 rounded-full"
                      >
                        ← Back to Orders
                      </button>
                    </div>

                    <div className="mb-6 p-4 bg-slate-50 rounded-xl flex flex-wrap gap-6 text-sm">
                      <p className="text-slate-600">
                        Date: <span className="font-semibold text-slate-900">{selectedOrder.date}</span>
                      </p>
                      <p className="text-slate-600">
                        Status:{" "}
                        <span className="font-semibold text-slate-900">{selectedOrder.status}</span>
                      </p>
                      <p className="text-slate-600">
                        Total: <span className="font-semibold text-[#ff6a00]">{selectedOrder.total}</span>
                      </p>
                    </div>

                    <h4 className="font-bold text-slate-800 mb-3 text-sm">Products</h4>
                    <div className="divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden mb-6 text-sm">
                      {selectedOrder.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between p-4 bg-white">
                          <div>
                            <span className="font-medium text-slate-900">{item.name}</span>
                            <span className="text-gray-400 ml-2 font-normal">x {item.qty}</span>
                          </div>
                          <span className="font-bold text-slate-900">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. DOWNLOADS TAB */}
                {activeTab === "downloads" && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#092143] mb-6">
                      Downloads
                    </h2>

                    <div className="space-y-4">
                      {/* Guide manual */}
                      <div className="flex items-center justify-between border border-gray-100 rounded-xl p-5 bg-slate-50">
                        <div>
                          <h4 className="font-bold text-slate-800 text-sm">IVOS Product User Guide Manual</h4>
                          <p className="text-xs text-gray-500 mt-1">PDF File (2.4 MB)</p>
                        </div>
                        <a
                          href="#"
                          onClick={(e) => { e.preventDefault(); showAlert("success", "Download started."); }}
                          className="bg-[#ff6a00] hover:bg-orange-600 text-white font-bold text-xs px-4 py-2.5 rounded-full transition shadow-sm"
                        >
                          Download
                        </a>
                      </div>

                      {/* Invoice download */}
                      <div className="flex items-center justify-between border border-gray-100 rounded-xl p-5 bg-slate-50">
                        <div>
                          <h4 className="font-bold text-slate-800 text-sm">Official Invoice - Order #1085</h4>
                          <p className="text-xs text-gray-500 mt-1">PDF File (156 KB)</p>
                        </div>
                        <a
                          href="#"
                          onClick={(e) => { e.preventDefault(); showAlert("success", "Download started."); }}
                          className="bg-[#ff6a00] hover:bg-orange-600 text-white font-bold text-xs px-4 py-2.5 rounded-full transition shadow-sm"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. ADDRESSES TAB */}
                {activeTab === "addresses" && !editingAddress && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#092143] mb-4">
                      Addresses
                    </h2>
                    <p className="text-sm text-gray-500 mb-8">
                      The following addresses will be used on the checkout page by default.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Billing Address Card */}
                      <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-4">
                            <h3 className="font-bold text-[#092143] text-lg">Billing address</h3>
                            <button
                              onClick={() => setEditingAddress("billing")}
                              className="text-xs text-[#ff6a00] font-bold hover:underline"
                            >
                              Edit
                            </button>
                          </div>
                          <p className="text-sm text-slate-700 leading-relaxed font-semibold">
                            {billingAddress.firstName} {billingAddress.lastName}
                          </p>
                          {billingAddress.company && (
                            <p className="text-sm text-slate-700">{billingAddress.company}</p>
                          )}
                          <p className="text-sm text-slate-600 mt-2">{billingAddress.street}</p>
                          <p className="text-sm text-slate-600">
                            {billingAddress.city}, {billingAddress.province}
                          </p>
                          <p className="text-sm text-slate-600">{billingAddress.postcode}</p>
                          <p className="text-sm text-slate-600 font-medium mt-1">
                            {billingAddress.country}
                          </p>
                          <p className="text-sm text-slate-600 mt-3 font-semibold">
                            Phone: {billingAddress.phone}
                          </p>
                        </div>
                      </div>

                      {/* Shipping Address Card */}
                      <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-4">
                            <h3 className="font-bold text-[#092143] text-lg">Shipping address</h3>
                            <button
                              onClick={() => setEditingAddress("shipping")}
                              className="text-xs text-[#ff6a00] font-bold hover:underline"
                            >
                              Edit
                            </button>
                          </div>
                          <p className="text-sm text-slate-700 leading-relaxed font-semibold">
                            {shippingAddress.firstName} {shippingAddress.lastName}
                          </p>
                          {shippingAddress.company && (
                            <p className="text-sm text-slate-700">{shippingAddress.company}</p>
                          )}
                          <p className="text-sm text-slate-600 mt-2">{shippingAddress.street}</p>
                          <p className="text-sm text-slate-600">
                            {shippingAddress.city}, {shippingAddress.province}
                          </p>
                          <p className="text-sm text-slate-600">{shippingAddress.postcode}</p>
                          <p className="text-sm text-slate-600 font-medium mt-1">
                            {shippingAddress.country}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* EDIT ADDRESS SUB-VIEW */}
                {activeTab === "addresses" && editingAddress && (
                  <div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
                      <h3 className="text-xl font-bold text-slate-900">
                        Edit {editingAddress === "billing" ? "Billing" : "Shipping"} Address
                      </h3>
                      <button
                        onClick={() => setEditingAddress(null)}
                        className="text-xs text-gray-500 hover:text-slate-800 font-bold border border-gray-300 px-3 py-1.5 rounded-full"
                      >
                        Cancel
                      </button>
                    </div>

                    <form
                      onSubmit={(e) => handleAddressSave(editingAddress, e)}
                      className="space-y-4 max-w-xl"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            First name *
                          </label>
                          <input
                            type="text"
                            value={
                              editingAddress === "billing"
                                ? billingAddress.firstName
                                : shippingAddress.firstName
                            }
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingAddress === "billing") {
                                setBillingAddress((prev) => ({ ...prev, firstName: val }));
                              } else {
                                setShippingAddress((prev) => ({ ...prev, firstName: val }));
                              }
                            }}
                            className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-[#ff6a00] outline-none"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Last name *
                          </label>
                          <input
                            type="text"
                            value={
                              editingAddress === "billing"
                                ? billingAddress.lastName
                                : shippingAddress.lastName
                            }
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingAddress === "billing") {
                                setBillingAddress((prev) => ({ ...prev, lastName: val }));
                              } else {
                                setShippingAddress((prev) => ({ ...prev, lastName: val }));
                              }
                            }}
                            className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-[#ff6a00] outline-none"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Company name (optional)
                        </label>
                        <input
                          type="text"
                          value={
                            editingAddress === "billing"
                              ? billingAddress.company
                              : shippingAddress.company
                          }
                          onChange={(e) => {
                            const val = e.target.value;
                            if (editingAddress === "billing") {
                              setBillingAddress((prev) => ({ ...prev, company: val }));
                            } else {
                              setShippingAddress((prev) => ({ ...prev, company: val }));
                            }
                          }}
                          className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-[#ff6a00] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Street address *
                        </label>
                        <input
                          type="text"
                          value={
                            editingAddress === "billing"
                              ? billingAddress.street
                              : shippingAddress.street
                          }
                          onChange={(e) => {
                            const val = e.target.value;
                            if (editingAddress === "billing") {
                              setBillingAddress((prev) => ({ ...prev, street: val }));
                            } else {
                              setShippingAddress((prev) => ({ ...prev, street: val }));
                            }
                          }}
                          className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-[#ff6a00] outline-none"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Town / City *
                          </label>
                          <input
                            type="text"
                            value={
                              editingAddress === "billing"
                                ? billingAddress.city
                                : shippingAddress.city
                            }
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingAddress === "billing") {
                                setBillingAddress((prev) => ({ ...prev, city: val }));
                              } else {
                                setShippingAddress((prev) => ({ ...prev, city: val }));
                              }
                            }}
                            className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-[#ff6a00] outline-none"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Province *
                          </label>
                          <input
                            type="text"
                            value={
                              editingAddress === "billing"
                                ? billingAddress.province
                                : shippingAddress.province
                            }
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingAddress === "billing") {
                                setBillingAddress((prev) => ({ ...prev, province: val }));
                              } else {
                                setShippingAddress((prev) => ({ ...prev, province: val }));
                              }
                            }}
                            className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-[#ff6a00] outline-none"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Postcode / ZIP *
                          </label>
                          <input
                            type="text"
                            value={
                              editingAddress === "billing"
                                ? billingAddress.postcode
                                : shippingAddress.postcode
                            }
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingAddress === "billing") {
                                setBillingAddress((prev) => ({ ...prev, postcode: val }));
                              } else {
                                setShippingAddress((prev) => ({ ...prev, postcode: val }));
                              }
                            }}
                            className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-[#ff6a00] outline-none"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Country / Region *
                          </label>
                          <input
                            type="text"
                            value={
                              editingAddress === "billing"
                                ? billingAddress.country
                                : shippingAddress.country
                            }
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingAddress === "billing") {
                                setBillingAddress((prev) => ({ ...prev, country: val }));
                              } else {
                                setShippingAddress((prev) => ({ ...prev, country: val }));
                              }
                            }}
                            className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-[#ff6a00] outline-none"
                            required
                          />
                        </div>
                      </div>

                      {editingAddress === "billing" && (
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            value={billingAddress.phone}
                            onChange={(e) =>
                              setBillingAddress((prev) => ({ ...prev, phone: e.target.value }))
                            }
                            className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-[#ff6a00] outline-none"
                            required
                          />
                        </div>
                      )}

                      <button
                        type="submit"
                        className="bg-[#ff6a00] hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-full transition shadow-sm"
                      >
                        Save Address
                      </button>
                    </form>
                  </div>
                )}

                {/* 5. ACCOUNT DETAILS TAB */}
                {activeTab === "account-details" && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#092143] mb-6">
                      Account Details
                    </h2>

                    <form onSubmit={handleAccountDetailsSave} className="space-y-6 max-w-xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-2">
                            First name *
                          </label>
                          <input
                            type="text"
                            value={accountDetails.firstName}
                            onChange={(e) =>
                              setAccountDetails((prev) => ({ ...prev, firstName: e.target.value }))
                            }
                            className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:border-[#ff6a00] outline-none"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-2">
                            Last name *
                          </label>
                          <input
                            type="text"
                            value={accountDetails.lastName}
                            onChange={(e) =>
                              setAccountDetails((prev) => ({ ...prev, lastName: e.target.value }))
                            }
                            className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:border-[#ff6a00] outline-none"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">
                          Display name *
                        </label>
                        <input
                          type="text"
                          value={accountDetails.displayName}
                          onChange={(e) =>
                            setAccountDetails((prev) => ({ ...prev, displayName: e.target.value }))
                          }
                          className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:border-[#ff6a00] outline-none"
                          required
                        />
                        <span className="text-[11px] text-gray-500 mt-1 block">
                          This is how your name will be displayed in the account section and in reviews
                        </span>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">
                          Email address *
                        </label>
                        <input
                          type="email"
                          value={accountDetails.email}
                          onChange={(e) =>
                            setAccountDetails((prev) => ({ ...prev, email: e.target.value }))
                          }
                          className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:border-[#ff6a00] outline-none"
                          required
                        />
                      </div>

                      {/* Password section */}
                      <fieldset className="border-t border-gray-200 pt-6">
                        <legend className="text-sm font-bold text-[#092143] px-2 mb-4">
                          Password change
                        </legend>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Current password (leave blank to leave unchanged)
                            </label>
                            <input
                              type="password"
                              value={accountDetails.currentPassword}
                              onChange={(e) =>
                                setAccountDetails((prev) => ({
                                  ...prev,
                                  currentPassword: e.target.value,
                                }))
                              }
                              className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-[#ff6a00] outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              New password (leave blank to leave unchanged)
                            </label>
                            <input
                              type="password"
                              value={accountDetails.newPassword}
                              onChange={(e) =>
                                setAccountDetails((prev) => ({
                                  ...prev,
                                  newPassword: e.target.value,
                                }))
                              }
                              className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-[#ff6a00] outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Confirm new password
                            </label>
                            <input
                              type="password"
                              value={accountDetails.confirmPassword}
                              onChange={(e) =>
                                setAccountDetails((prev) => ({
                                  ...prev,
                                  confirmPassword: e.target.value,
                                }))
                              }
                              className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-[#ff6a00] outline-none"
                            />
                          </div>
                        </div>
                      </fieldset>

                      <button
                        type="submit"
                        className="bg-[#ff6a00] hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-full transition shadow-sm"
                      >
                        Save Changes
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAccount;
