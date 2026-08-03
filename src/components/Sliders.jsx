
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import CommonButton from "../common/Button";
import Iphone from "../assets/iphone.jpg";
import Slim from "../assets/slim.webp";
import Img3 from "../assets/img3.jpg";
import Laptops from "../assets/laptops.jpg";

const Slider = () => {
  // Array of Objects
  const sliderData = [
    {
      id: 1,
      image: Iphone,
      title: "Apple Smart Phone",
      description: "Latest iPhones with advanced performance.",
    },
    {
      id: 2,
      image: Slim,
      title: "PlayStation Consoles",
      description: "PlayStation 5 Digital Pro Console.",
    },
    {
      id: 3,
      image: Img3,
      title: "Samsung TV",
      description: "Smart Samsung TVs with vivid visuals.",
    },
    {
      id: 4,
      image: Laptops,
      title: "Laptop",
      description: "Powerful laptops for fast daily performance.",
    },
  ];

  return (
    <div className="max-w-full mx-auto py-10 px-4">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className=" shadow-lg overflow-hidden hover:shadow-xl duration-300 " >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover"
              />

              <div className="p-4  [text-shadow:0_0_15px_#FF6A00] text-[#212121] bg-[linear-gradient(180deg,#F5F5F5_0%,#FF6A00_100%)]">
                <h2 className="text-xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-2 text-lg">
                  {item.description}
                </p>

                <CommonButton
                  text="Shop Now"
                  icon=">>"
                   onClick={() => navigate("")}
                  className="bg-transparent text-black [text-shadow:0_0_15px_#FF6A00] font-bold text-xl"
                 
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
