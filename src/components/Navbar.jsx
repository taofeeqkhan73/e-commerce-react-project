import React, { useState } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" text-[#333]">
      <div className="max-w-full mx-auto border-gray-400 px-4 lg:px-6">

        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-between items-center">

          {/* Left Side */}
          <div className="flex items-center gap-6">
            <div className="text-sm border-l border-r px-2 py-2">
              <a href="#" className="hover:text-yellow-400">
                About Us
              </a>
            </div>

            <div className="text-sm">
              <a href="#" className="hover:text-yellow-400">
                Our Partners
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-stretch">
            <div className="px-2 py-2 border-l border-gray-400 flex items-center gap-4">
              <FaWhatsapp className="text-xl cursor-pointer hover:text-green-400" />
              <FaFacebookF className="text-xl cursor-pointer hover:text-blue-300" />
              <FaInstagram className="text-xl cursor-pointer hover:text-pink-400" />
              <FaTwitter className="text-xl cursor-pointer hover:text-sky-300" />
              <FaYoutube className="text-xl cursor-pointer hover:text-red-500" />
              <FaTiktok className="text-xl cursor-pointer hover:text-white" />
            </div>

            <div className="px-2 border-r border-gray-400 flex items-center">
              <span className="text-sm cursor-pointer hover:text-yellow-300">
                Track Our Order
              </span>
            </div>

            <div className="px-2 border-r border-gray-400 flex items-center">
              <span className="text-sm cursor-pointer hover:text-yellow-300">
                Contact Us
              </span>
            </div>

            <div className="px-2 border-r border-gray-400 flex items-center">
              <span className="text-sm cursor-pointer hover:text-yellow-300">
                FAQs
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden justify-between items-center px-4 py-3">
          <h2 className="font-semibold">Menu</h2>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4">

            <div className="py-2 border-b">
              <a href="#" className="hover:text-yellow-400">
                About Us
              </a>
            </div>

            <div className="py-2 border-b">
              <a href="#" className="hover:text-yellow-400">
                Our Partners
              </a>
            </div>

            <div className="flex items-center gap-4 py-3 border-b">
              <FaWhatsapp className="text-xl" />
              <FaFacebookF className="text-xl" />
              <FaInstagram className="text-xl" />
              <FaTwitter className="text-xl" />
              <FaYoutube className="text-xl" />
              <FaTiktok className="text-xl" />
            </div>

            <div className="py-2 border-b">
              <span className="text-sm">Track Our Order</span>
            </div>

            <div className="py-2 border-b">
              <span className="text-sm">Contact Us</span>
            </div>

            <div className="py-2">
              <span className="text-sm">FAQs</span>
            </div>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;