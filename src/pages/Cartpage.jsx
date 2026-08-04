import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaTimes } from "react-icons/fa";

const FREE_SHIPPING_THRESHOLD = 2000;

// Mock coupon table — replace with a real API call when ready
const COUPONS = {
  SAVE10: { type: "percent", value: 10, label: "10% off" },
  SAVE50: { type: "flat", value: 50, label: "R50,00 off" },
};

const parsePrice = (price) => {
  if (typeof price === "number") return price;
  if (typeof price === "string") {
    const cleaned = price.replace(/[^0-9.]/g, "");
    return parseFloat(cleaned) || 0;
  }
  return 0;
};

const formatRand = (amount) => `₹${amount.toFixed(2).replace(".", ",")}`;

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const navigate = useNavigate();

  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null); // { code, type, value, label }

  const subtotal = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * (item.quantity || 1),
    0
  );

  const discountAmount = appliedCoupon
    ? appliedCoupon.type === "percent"
      ? subtotal * (appliedCoupon.value / 100)
      : Math.min(appliedCoupon.value, subtotal)
    : 0;

  const total = Math.max(subtotal - discountAmount, 0);

  const amountLeftForFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);
  const shippingProgress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (!code) {
      setCouponError("Please enter a coupon code.");
      return;
    }

    const match = COUPONS[code];
    if (!match) {
      setCouponError("Invalid or expired coupon code.");
      setAppliedCoupon(null);
      return;
    }

    setCouponError("");
    setAppliedCoupon({ code, ...match });
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setCouponError("");
  };

  const handleDecrease = (item) => {
    if ((item.quantity || 1) <= 1) return; // never go below 1
    decreaseQuantity && decreaseQuantity(item.id);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      {/* Free shipping progress bar */}
      {cart.length > 0 && (
        amountLeftForFreeShipping > 0 ? (
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-2">
              Add{" "}
              <span className="text-orange-500 font-semibold">
                {formatRand(amountLeftForFreeShipping)}
              </span>{" "}
              to cart and get free shipping!
            </p>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 transition-all"
                style={{
                  width: `${shippingProgress}%`,
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(255,255,255,0.35) 0, rgba(255,255,255,0.35) 10px, transparent 10px, transparent 20px)",
                }}
              />
            </div>
          </div>
        ) : (
          <p className="text-sm text-green-600 font-semibold mb-8">
            🎉 You've qualified for free shipping!
          </p>
        )
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Side — Product table */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-[auto_2fr_1fr_1fr_1fr] gap-4 border-b pb-4 font-semibold text-gray-700 text-sm uppercase tracking-wide">
            <span></span>
            <p>Product</p>
            <p className="text-center">Price</p>
            <p className="text-center">Quantity</p>
            <p className="text-right">Subtotal</p>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="py-10 text-center text-gray-500">
              Your Cart is Empty
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-[auto_2fr_1fr_1fr_1fr] gap-4 items-center border-b py-6"
              >
                {/* Remove */}
                <button
                  onClick={() => removeFromCart && removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  <FaTimes size={16} />
                </button>

                {/* Product */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain border rounded-lg"
                  />
                  <div>
                    <h2 className="font-semibold text-base text-gray-900">
                      {item.title}
                    </h2>
                    {item.category && (
                      <p className="text-sm text-gray-500 mt-1">
                        <span className="font-semibold text-gray-700">Vendor:</span>{" "}
                        {item.category}
                      </p>
                    )}
                  </div>
                </div>

                {/* Price */}
                <p className="text-center font-semibold text-gray-700">
                  {formatRand(parsePrice(item.price))}
                </p>

                {/* Quantity */}
                <div className="flex justify-center">
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <button
                      onClick={() => handleDecrease(item)}
                      disabled={(item.quantity || 1) <= 1}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 font-semibold">
                      {item.quantity || 1}
                    </span>
                    <button
                      onClick={() => increaseQuantity && increaseQuantity(item.id)}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <p className="text-right font-bold text-orange-600">
                  {formatRand(parsePrice(item.price) * (item.quantity || 1))}
                </p>
              </div>
            ))
          )}

          {/* Coupon */}
          {cart.length > 0 && (
            <div className="mt-8">
              {appliedCoupon ? (
                <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                  <p className="text-sm text-green-700">
                    Coupon <span className="font-semibold">{appliedCoupon.code}</span> applied — {appliedCoupon.label}
                  </p>
                  <button
                    onClick={handleRemoveCoupon}
                    className="text-sm text-red-500 hover:underline font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => {
                      setCouponCode(e.target.value);
                      setCouponError("");
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleApplyCoupon()}
                    placeholder="Coupon code"
                    className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    Apply Coupon
                  </button>
                </div>
              )}
              {couponError && (
                <p className="text-red-500 text-sm mt-2">{couponError}</p>
              )}
            </div>
          )}
        </div>

        {/* Right Side — Cart totals */}
        <div className="bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-24">
          <h2 className="text-2xl font-bold mb-6">Cart Totals</h2>

          <div className="flex justify-between border-b pb-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">{formatRand(subtotal)}</span>
          </div>


          {appliedCoupon && (
            <div className="flex justify-between border-b py-4">
              <span className="text-gray-600">Discount ({appliedCoupon.code})</span>
              <span className="font-semibold text-green-600">
                -{formatRand(discountAmount)}
              </span>
            </div>
          )}

          <div className="flex justify-between border-b py-4">
            <span className="text-gray-600">Shipping</span>
            <span className="text-green-600 font-semibold">
              {amountLeftForFreeShipping > 0 ? "Calculated at checkout" : "Free"}
            </span>
          </div>

          <div className="flex justify-between py-5 text-xl font-bold">
            <span>Total</span>
            <span className="text-orange-600">{formatRand(total)}</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            disabled={cart.length === 0}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold transition"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;