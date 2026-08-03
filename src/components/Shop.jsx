import React from "react";
import { Link } from "react-router-dom";
import Nintendo from "../assets/nintendo-.png"
import Watch from "../assets/Watch.png"

const categories = [
  {
    id: 1,
    name: "Category",
    slug: "category",
    image: "https://ivos.co.za/wp-content/uploads/2025/10/Group-1-1-2.png",
  },
  {
    id: 2,
    name: "Zebra\nPrinters",
    slug: "zebra-Printers",
    image: "https://ivos.co.za/wp-content/uploads/woocommerce-placeholder.png",
  },
  {
    id: 3,
    name: "Workstation\nLaptops",
    slug: "workstation-Laptops",
    image: "https://ivos.co.za/wp-content/uploads/woocommerce-placeholder.png",
  },
  {
    id: 4,
    name: "Window\nLaptops",
    slug: "window-Laptops",
    image: "https://ivos.co.za/wp-content/uploads/woocommerce-placeholder.png",
  },
  {
    id: 5,
    name: "WiFi Routers",
    slug: "wiFi-Routers",
    image: "https://ivos.co.za/wp-content/uploads/woocommerce-placeholder.png",
  },
  {
    id: 6,
    name: "WiFi Range\nExtenders",
    slug: "wiFi Range-Extenders",
    image: "https://ivos.co.za/wp-content/uploads/woocommerce-placeholder.png",
  },
  {
    id: 7,
    name: "WiFi &\nNetworking",
    slug: "wiFi &-Networking",
    image: "https://ivos.co.za/wp-content/uploads/2025/01/download-3.jpg",
  },
  {
    id: 8,
    name: "Webcams",
    slug: "webcams",
    image: "https://ivos.co.za/wp-content/uploads/woocommerce-placeholder.png",
  },
  {
    id: 9,
    name: "Visual Display",
    slug: "visual-Display",
    image: "https://ivos.co.za/wp-content/uploads/woocommerce-placeholder.png",
  },
  {
    id: 10,
    name: 'Under 22"\nMonitors',
    slug: 'under 22"-Monitors',
    image: "https://ivos.co.za/wp-content/uploads/woocommerce-placeholder.png",
  },
];

// card section
const cards = [
  {
    id: 1,
    bg: "https://ivos.co.za/wp-content/uploads/2026/01/Nintendo-.png",
    image: Nintendo,
    title: "Nintendo Switch 2 + Mario",
    desc: "Nintendo Switch 2 + Mario Kart World",
  },

  {
    id: 2,
    type: "video",
    video:
      "https://ivos.co.za/wp-content/uploads/2026/01/WhatsApp-Video-2026-01-07-at-11.42.56-PM.mp4",
  },

  {
    id: 3,
    bg: "https://ivos.co.za/wp-content/uploads/2026/01/Apple-Watch-Tab-4.png",
    image: Watch,
    title: "Sony PS5 Ghost of Yotei Gold",
    desc: "Sony PS5 Ghost of Yotei Gold Limited Edition Wireless Gamepad (White, Gold)",
  },
];
export default function CategorySection() {
  return (
    <>
      <section className="w-full bg-[#f6f6f6] py-8 ">
        <div className="max-w-full mx-auto px-4 overflow-hidden">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-8">
            Shop by categories
          </h2>

          {/* Cards */}
          <div className="flex items-start justify-between gap-5 overflow-x-auto scrollbar-hide">
            {categories.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.slug}`}
                className="flex flex-col items-center min-w-32 cursor-pointer group"
              >
                {/* Circle */}
                <div className="w-32 h-32 rounded-full bg-white shadow-sm overflow-hidden flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-contain transition-transform duration-300 group-hover:scale-125"
                  />
                </div>

                {/* Text */}
                <p className="mt-4 text-center text-[15px] font-medium text-gray-800 whitespace-pre-line leading-6">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* // card section */}

      <section className="max-w-full mx-auto py-10 px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item) => (
            <div
              key={item.id}
              className="relative h-screen rounded-2xl overflow-hidden group"
            >
              {item.type === "video" ? (
                <>
                  {/* Full Video */}
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0  transition-all duration-500"></div>

                  {/* Hover Button */}
                  <button
                    className="
                absolute
                left-1/2
                -translate-x-1/2
                -bottom-20
                opacity-0
                group-hover:bottom-8
                group-hover:opacity-100
                transition-all
                duration-500
                bg-white
                px-6
                py-3
                rounded-full
                font-semibold
                z-20
              "
                  >
                    Shop Now
                  </button>
                </>
              ) : (
                <>
                  {/* Background Image */}
                  <img
                    src={item.bg}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0"></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto transition-all duration-500 group-hover:scale-110"
                    />

                    {/* Text */}
                    <div className="mt-10 text-center transition-all duration-500 group-hover:-translate-y-20">
                      <h2 className="text-4xl font-bold text-black">
                        {item.title}
                      </h2>

                      <p className="text-black mt-5">
                        {item.desc}
                      </p>
                    </div>

                    {/* Hover Button */}
                    <button
                      className="absolute left-1/2-translate-x-1/2-bottom-20 opacity-0 group-hover:bottom-8 group-hover:opacity-100
                  transition-all duration-500  bg-black text-amber-50 px-6  py-3 rounded-full font-semibold "
                    >
                      Shop Now
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>

  );
}