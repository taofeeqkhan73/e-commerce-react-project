import React from "react";
import {
    FaFacebookF,
    FaXTwitter,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa6";

import { ChevronUp } from "lucide-react";

const companyLinks = [
    "About Us",
    "Collaborate",
    "Open Roles",
    "Your Privacy",
    "Terms of Service",
];

const securePaymentLinks = [
    "Hassle-Free Returns",
    "Secure & Easy Checkout",
    "Shipped On Time, Every Time",
    "We've Got Your Back",
    "Quality Assured",
];

const sellOnIvosLinks = [
    "Launch Your Storefront",
    "My Business Hub",
    "Apply for Verified Status",
    "Strategic Alliance Programs",
    "Get the App",
];

const helpLinks = [
    "Email Us",
    "Knowledge Base",
    "Chat Now",
    "Order Status",
    "Refund Status",
    "Report an Issue",
];

const paymentBadges = [
    { label: "VISA", classes: "bg-blue-900 text-white" },
    { label: "MC", classes: "bg-red-600 text-white" },
    { label: "PayPal", classes: "bg-blue-600 text-white" },
    { label: "AMEX", classes: "bg-sky-700 text-white" },
    { label: "VISA", classes: "bg-blue-900 text-white" },
    { label: "MC", classes: "bg-orange-600 text-white" },
];

const shippingBadges = [
    { label: "DHL", classes: "bg-yellow-400 text-red-700" },
    { label: "UPS", classes: "bg-amber-700 text-yellow-300" },
    { label: "FedEx", classes: "bg-purple-800 text-orange-400" },
    { label: "TNT", classes: "bg-orange-500 text-white" },
    { label: "dpd", classes: "bg-red-600 text-white" },
    { label: "DGLS", classes: "bg-blue-700 text-yellow-300" },
];

const socialIcons = [
    { Icon: FaFacebookF, label: "Facebook", color: "text-blue-600" },
    { Icon: FaXTwitter, label: "X" },
    { Icon: FaInstagram, label: "Instagram" },
    { Icon: FaYoutube, label: "YouTube", color: "text-red-600" },
    { Icon: FaWhatsapp, label: "WhatsApp" },
];

function FooterColumn({ title, links }) {
    return (
        <div>
            <h3 className="text-orange-500 font-semibold mb-4 text-[15px]">
                {title}
            </h3>
            <ul className="space-y-3">
                {links.map((link) => (
                    <li key={link}>
                        <a
                            href="#"
                            className="text-orange-500 hover:text-orange-400 text-[14px] transition-colors"
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function BadgeRow({ items }) {
    return (
        <div className="flex flex-wrap gap-2">
            {items.map((item, idx) => (
                <a
                    href="#"
                    key={idx}
                    className={`flex items-center justify-center h-7 w-11 rounded text-[10px] font-bold italic ${item.classes} hover:opacity-80 transition-opacity`}
                >
                    {item.label}
                </a>
            ))}
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="bg-[#1c1c1c] text-gray-300 px-6 py-10 md:px-10 ml-2">
            <div className="max-w-7xl mx-auto">
                {/* Top grid */}
                <div className="grid grid-cols-2 md:grid-cols-[0.8fr_0.8fr_0.8fr_0.8fr_2fr] gap-8 text-[18px]">
                    <FooterColumn title="Company" links={companyLinks} />
                    <FooterColumn title="Secure Payments" links={securePaymentLinks} />
                    <FooterColumn title="Sell On IVOS" links={sellOnIvosLinks} />
                    <FooterColumn title="Help & Support" links={helpLinks} />

                    {/* Coming soon / newsletter */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-orange-500 font-semibold mb-4 text-[18px]">
                            Coming Soon:
                        </h3>
                        <div className="flex flex-row gap-3 mb-5 flex-wrap">
                            <a
                                href="#"
                                className="flex items-center gap-2 bg-black border border-gray-600 rounded-md px-3 py-2 w-40 hover:border-gray-400 transition-colors"              >
                                <span className="text-white text-lg leading-none"></span>
                                <span className="flex flex-col leading-tight">
                                    <span className="text-[8px] text-gray-300">
                                        Download on the
                                    </span>
                                    <span className="text-white text-sm font-semibold">
                                        App Store
                                    </span>
                                </span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 bg-black border border-gray-600 rounded-md px-3 py-1.5 w-fit hover:border-gray-400 transition-colors"
                            >
                                <span className="text-lg leading-none">▶</span>
                                <span className="flex flex-col leading-tight">
                                    <span className="text-[8px] text-gray-300">
                                        ANDROID APP ON
                                    </span>
                                    <span className="text-white text-sm font-semibold">
                                        Google Play
                                    </span>
                                </span>
                            </a>
                        </div>

                        <a
                            href="#"
                            className="text-orange-500 font-semibold  text-[15px] block mb-2"
                        >
                            Join our newsletter!
                        </a>
                        <p className="text-[15px] text-gray-200 mb-3">
                            Will be used in accordance with our{" "}
                            <a href="#" className="text-orange-500">
                                Privacy Policy
                            </a>
                        </p>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex rounded-md overflow-hidden max-w-xs gap-4"
                        >
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-3 py-3 text-sm text-gray-800 bg-white outline-none min-w-0 rounded-2xl"
                            />
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 whitespace-nowrap transition-colors rounded-2xl"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="px-2 md:px-0">
                    <hr className="w-full border-gray-700 my-8 md:relative md:left-1/2 md:-translate-x-1/2 " />
                </div>

                {/* Bottom row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 relative">
                    <div>
                        <h4 className="text-white font-medium mb-3 text-[15px]">
                            Payment System:
                        </h4>
                        <BadgeRow items={paymentBadges} />
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-3 text-[15px]">
                            Shipping System:
                        </h4>
                        <BadgeRow items={shippingBadges} />
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-3 text-[15px]">
                            Our Social Links:
                        </h4>
                        <div className="flex gap-3">
                            {socialIcons.map(({ Icon, label }) => (
                                <a
                                    href="#"
                                    key={label}
                                    aria-label={label}
                                    className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
                                >
                                    <Icon size={16} className="text-white" />
                                </a>
                            ))}
                            {/* TikTok - not in lucide, using text glyph */}
                            <a
                                href="#"
                                aria-label="TikTok"
                                className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors text-white text-xs font-bold"
                            >
                                TT
                            </a>
                        </div>
                    </div>

                    {/* Scroll to top */}
                    <button
                        aria-label="Scroll to top"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="w-15 h-15 rounded-full bg-gray-200 hover:bg-white flex items-center justify-center absolute right-0 -top-2 md:static transition-colors"
                    >
                        <ChevronUp size={20} className="text-gray-800" />
                    </button>
                </div>
            </div>
        </footer>
    );
}