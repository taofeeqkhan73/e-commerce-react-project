import React from "react";


const blogs = [
  {
    id: 1,
    day: "14",
    month: "SEP",
    title: "Sensor network gauges air quality",
    image:
      "https://ivos.co.za/wp-content/uploads/2024/09/shared-image-42-1-1024x633.png",
  },
  {
    id: 2,
    day: "11",
    month: "NOV",
    title: "Logitech POP Keys",
    image:
      "https://ivos.co.za/wp-content/uploads/2025/01/logitech-pop-keys-entry-header.jpg",
  },
  {
    id: 3,
    day: "30",
    month: "OCT",
    title: "Green interior design inspiration",
    image:
      "https://ivos.co.za/wp-content/uploads/2024/10/nvidia-rtx-5090-laptop-gpu-undergoes-multiple-benchmark-v0-io1bzwECvAxwU-3lppuhiQvUu0Ov9CX1lK6fPGU3wvE-1-1024x633.png",
  },
  {
    id: 4,
    day: "02",
    month: "SEP",
    title: "Best webcams you can still buy",
    image:
      "https://ivos.co.za/wp-content/uploads/2024/09/71Q3EXSA6-L._AC_UF8941000_QL80_-1-1024x633.png",
  },
];

const cards = [
  {
    id: 1,
    image:
        "https://ivos.co.za/wp-content/uploads/2025/07/svgviewer-output-9.png",
    title: "Free Shipping",
    desc: "No one rejects, dislikes.",
  },
  {
    id: 2,
    image:
      "https://ivos.co.za/wp-content/uploads/2025/07/svgviewer-output-10.png",
    title: "24/7 Support.",
    desc: "It has survived not only.",
  },
  {
    id: 3,
    image:
      "https://ivos.co.za/wp-content/uploads/2025/07/svgviewer-output-11.png",
    title: "Online Payment.",
    desc: "Secure online payments accepted",
  },
  {
    id: 4,
    image:
      "https://ivos.co.za/wp-content/uploads/2025/07/svgviewer-output-12.png",
    title: "Fast Delivery.",
    desc: "Many desktop page now.",
  },
];

export default function BlogSection() {
  return (
    <>
      {/* Blog Section */}
      <section className="w-full py-12 px-5 lg:px-10 pb-20">
        <div className="mb-10 relative border-b-2 border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Latest Blog Posts
          </h2>

          <div className="absolute bottom-0 left-0 w-40 h-0.5 bg-[#ff6a00] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative overflow-hidden rounded-2xl group"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-54 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/70 transition duration-500"></div>

              {/* Date */}
              <div className="absolute top-4 left-4 z-10 bg-white rounded-xl w-16 h-16 flex flex-col items-center justify-center shadow-lg">
                <span className="text-3xl">{blog.day}</span>
                <span className="text-sm">{blog.month}</span>
              </div>

              {/* Title */}
              <div className="absolute bottom-5 left-5 right-5 z-10 text-center">
                <h3 className="text-white text-2xl font-bold">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Section */}
      <section className="w-screen bg-white mt-20 py-6 relative left-1/2 -translate-x-1/2">
        <div className="max-w-full mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex items-center gap-4  p-4"
              >
                {/* Left Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-12 h-auto object-cover rounded-lg"
                />

                {/* Right Content */}
                <div>
                  <h3 className="text-lg font-semibold text-[#FF6A00]">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#FF6A00] mt-2">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}