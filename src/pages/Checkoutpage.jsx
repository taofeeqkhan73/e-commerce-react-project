import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const parsePrice = (price) => {
  if (typeof price === "number") return price;
  if (typeof price === "string") {
    const cleaned = price.replace(/[^0-9.]/g, "");
    return parseFloat(cleaned) || 0;
  }
  return 0;
};

const formatRand = (amount) => `R${amount.toFixed(2).replace(".", ",")}`;

const PAYMENT_METHODS = [
  { id: "card", label: "Credit / Debit Card" },
  { id: "eft", label: "EFT / Bank Transfer" },
  { id: "cod", label: "Cash on Delivery" },
];

const initialForm = {
  firstName: "",
  lastName: "",
  companyName: "",
  country: "South Africa",
  streetAddress: "",
  townCity: "",
  province: "",
  postcode: "",
  phone: "",
  email: "",
  notes: "",
};

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const subtotal = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * (item.quantity || 1),
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const required = [
      "firstName",
      "lastName",
      "country",
      "streetAddress",
      "townCity",
      "province",
      "postcode",
      "phone",
      "email",
    ];
    const newErrors = {};
    required.forEach((field) => {
      if (!form[field].trim()) newErrors[field] = "Required";
    });
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    if (!validate()) return;

    setSubmitting(true);
    // TODO: send { form, paymentMethod, cart, subtotal } to your backend / payment gateway
    console.log("Placing order:", { form, paymentMethod, cart, subtotal });

    setTimeout(() => {
      setSubmitting(false);
      navigate("/order-confirmation");
    }, 800);
  };

  const inputClass = (field) =>
    `w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500 ${
      errors[field] ? "border-red-400" : "border-gray-300"
    }`;

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Side — Billing / Shipping Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-6">Billing Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className={inputClass("firstName")}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className={inputClass("lastName")}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name (optional)
              </label>
              <input
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                className={inputClass("companyName")}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country / Region <span className="text-red-500">*</span>
              </label>
              <input
                name="country"
                value={form.country}
                onChange={handleChange}
                className={inputClass("country")}
              />
              {errors.country && (
                <p className="text-red-500 text-xs mt-1">{errors.country}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                name="streetAddress"
                value={form.streetAddress}
                onChange={handleChange}
                placeholder="House number and street name"
                className={inputClass("streetAddress")}
              />
              {errors.streetAddress && (
                <p className="text-red-500 text-xs mt-1">{errors.streetAddress}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Town / City <span className="text-red-500">*</span>
              </label>
              <input
                name="townCity"
                value={form.townCity}
                onChange={handleChange}
                className={inputClass("townCity")}
              />
              {errors.townCity && (
                <p className="text-red-500 text-xs mt-1">{errors.townCity}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Province <span className="text-red-500">*</span>
              </label>
              <input
                name="province"
                value={form.province}
                onChange={handleChange}
                className={inputClass("province")}
              />
              {errors.province && (
                <p className="text-red-500 text-xs mt-1">{errors.province}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Postcode / ZIP <span className="text-red-500">*</span>
              </label>
              <input
                name="postcode"
                value={form.postcode}
                onChange={handleChange}
                className={inputClass("postcode")}
              />
              {errors.postcode && (
                <p className="text-red-500 text-xs mt-1">{errors.postcode}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={inputClass("phone")}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Order Notes (optional)
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Notes about your order, e.g. special notes for delivery"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Right Side — Order Summary + Payment */}
        <div className="bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-24">
          <h2 className="text-2xl font-bold mb-6">Your Order</h2>

          <div className="border-b pb-4 mb-4">
            {cart.length === 0 ? (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={`checkout-${item.id}`}
                  className="flex justify-between text-sm py-1.5"
                >
                  <span className="text-gray-600">
                    {item.title} × {item.quantity || 1}
                  </span>
                  <span className="font-semibold text-gray-800">
                    {formatRand(parsePrice(item.price) * (item.quantity || 1))}
                  </span>
                </div>
              ))
            )}
          </div>

          <div className="flex justify-between py-2 text-xl font-bold border-b pb-4">
            <span>Total</span>
            <span className="text-orange-600">{formatRand(subtotal)}</span>
          </div>

          {/* Payment Method */}
          <div className="mt-5">
            <h3 className="text-base font-bold mb-3">Payment Method</h3>
            <div className="space-y-2">
              {PAYMENT_METHODS.map((method) => (
                <label
                  key={method.id}
                  className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition ${
                    paymentMethod === method.id
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="accent-orange-500"
                  />
                  <span className="text-sm font-medium text-gray-800">
                    {method.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={cart.length === 0 || submitting}
            className="w-full mt-6 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold transition"
          >
            {submitting ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;