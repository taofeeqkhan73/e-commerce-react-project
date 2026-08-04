import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Map from "../assets/map.svg";
import Bundle from "../assets/bundle.svg";
import Like from "../assets/like.svg";
import Phone from "../assets/phone.svg";
import Heart from "../assets/heart.svg";

const Features = () => {
  const featureData = [
    {
      id: 1,
      image: Map,
      title: "Fast, Free Shipping",
      description: "On order over $50",
    },
    {
      id: 2,
      image: Bundle,
      title: "Next Day Delivery",
      description: "Free – spend over $99",
    },
    {
      id: 3,
      image: Like,
      title: "60-Day Free Returns",
      description: "All shipping methods",
    },
    {
      id: 4,
      image: Phone,
      title: "Expert Customer Service",
      description: "Choose chat or call us",
    },
    {
      id: 5,
      image: Heart,
      title: "Exclusive Brands",
      description: "More exclusive products",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < featureData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full px-4 py-5">

      {/* ================= Mobile ================= */}
      <div className="lg:hidden overflow-hidden">
        <div className="relative bg-[linear-gradient(180deg,#FF6A00_0%,#212121_100%)] rounded-2xl py-5">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-3 top-1/2 -translate-y-1/2 z-10 ${currentIndex === 0
                ? "opacity-40 cursor-not-allowed"
                : ""
              }`}
          >
            <FaChevronLeft className="text-white text-xl" />
          </button>

          {/* Slider */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {featureData.map((item) => (
              <div
                key={item.id}
                className="min-w-full flex items-center justify-center px-12"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12"
                />

                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-white">
                    {item.title}
                  </h2>

                  <p className="text-sm text-white mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentIndex === featureData.length - 1}
            className={`absolute right-3 top-1/2 -translate-y-1/2 z-10 ${currentIndex === featureData.length - 1
                ? "opacity-40 cursor-not-allowed"
                : ""
              }`}
          >
            <FaChevronRight className="text-white text-xl" />
          </button>
        </div>
      </div>

      {/* ================= Desktop ================= */}
      <div className="hidden lg:grid grid-cols-5 bg-[linear-gradient(180deg,#FF6A00_0%,#212121_100%)] rounded-full">
        {featureData.map((item) => (
          <div
            key={item.id}
            className="flex items-center px-0 py-5"
          >
            <img
              src={item.image}
              alt={item.title}
              className="ml-6"
            />

            <div className="ml-4">
              <h2 className="text-xs lg:text-sm xl:text-base font-medium text-white">
                {item.title}
              </h2>

              <p className="text-[11px] lg:text-xs xl:text-sm text-white mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Features;