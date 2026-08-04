import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Hp1 from "../assets/hp1.jpg"
import Istock from "../assets/istock.jpg"
import Cpu from "../assets/cpu.jpg"
import Img4 from "../assets/img4.jpg"
import Samsung1 from "../assets/samsung1.jpg"
import Wifi from "../assets/wifi.jpg"
import Img5 from "../assets/img5.jpeg"
import Bg from "../assets/bg.png"
import CommonButton from "../common/Button";
import ProductAction from "../common/ProductAction";
import ProductButton from "../common/ProductButton";
import { useCart } from "../context/CartContext";





export default function Dashboard() {
    const { addToCart } = useCart();

    // Top Slider
    const [topSlide, setTopSlide] = useState(0);

    // Bottom Slider
    const [bottomSlide, setBottomSlide] = useState(0);

    // Top Slider Functions
    const nextTopSlide = () => {
        setTopSlide((prev) =>
            prev === sliderData.length - 1 ? 0 : prev + 1
        );
    };

    const prevTopSlide = () => {
        setTopSlide((prev) =>
            prev === 0 ? sliderData.length - 1 : prev - 1
        );
    };

    // Bottom Slider Functions
    const nextBottomSlide = () => {
        setBottomSlide((prev) =>
            prev === sliderData.length - 1 ? 0 : prev + 1
        );
    };

    const prevBottomSlide = () => {
        setBottomSlide((prev) =>
            prev === 0 ? sliderData.length - 1 : prev - 1
        );
    };

    //   chekbox left side==================
    const handleCheck = () => {
        setTimeout(() => {
            window.location.reload();
        }, 200);
    };

    //================= Array Data left side ============================
    const sliderData = [
        {
            id: 1,
            image: Hp1,
            title: "НР ProBook 430 G8",
            description: "R1420,00",
        },
        {
            id: 2,
            image: Istock,
            title: "Tefal SV8055E0",
            description: "R220,00",
        },
        {
            id: 3,
            image: Cpu,
            title: "Tefal PERFECTMIX",
            description: "R120,00",
        },
        {
            id: 4,
            image: Img4,
            title: "SMEG FAB10HRBL5",
            description: "R1000,00",
        },
        {
            id: 5,
            image: Samsung1,
            title: "Siemens ",
            description: "R410,00",
        },
        {
            id: 6,
            image: Wifi,
            title: "Samsung",
            description: "R1125,00",
        },
        {
            id: 7,
            image: Img5,
            title: "Samsung ",
            description: "R925,00",
        },
    ];
    // =================banner section-left==============================
    const bannerData = [
        {
            id: 1,
            bgImage: Bg,
            title: "Alby Urbanears",
            description: "Get ready to impressive sound",
            leftImage: "https://ivos.co.za/wp-content/uploads/2025/01/banner-l-headphones-inf-1.svg",
            rightImage: "https://ivos.co.za/wp-content/uploads/2025/01/banner-l-headphones-inf-2.svg",
        },
    ];

    //=================== checkbox-leftside================================

    const filterData = [
        {
            id: 1,
            title: "Last articles",
            description: "Stock status",
            checkboxes: [
                { id: 1, label: "On sale" },
                { id: 2, label: "In stock" },
            ],
        },
    ]



    //  =================right side section card slider========================= 
    const productData = {
        popular: [
            {

                id: 1,
                image: "https://m.media-amazon.com/images/I/61L5QgPvgqL._SL1500_.jpg",
                title: "Apple MacBook Pro 13” M2",
                description: "Computer, Laptops, MacBook",
                price: "₹1299,00 – 1499,00"
            },

            {
                id: 2,
                image: "https://ivos.co.za/wp-content/uploads/2025/01/apple-macbook-pro-16-silver-1.jpg",
                title: "Apple MacBook Pro 16” M1pro",
                description: "Computer, Laptops, MacBook",
                price: "₹2499,00 – 2999,00"
            },

            {
                id: 3,
                image: "https://ivos.co.za/wp-content/uploads/2025/01/asus-zenbook-oled-13-1.jpg",
                title: "ASUS ZenBook OLED 13",
                description: "Laptops, Business Laptop, Computer",
                price: "₹1600,00"
            },
            {
                id: 4,
                image: "https://ivos.co.za/wp-content/uploads/2025/01/asus-zenbook-pro-15-flip-1.jpg",
                title: "ASUS ZenBook Pro 15 Flip",
                description: "Computer, Laptops, Ultrabook",
                price: "₹2320,00"
            },

            { id: 5, image: "https://ivos.co.za/wp-content/uploads/2025/11/Gemini_Generated_Image_sxyi4asxyi4asxyi-300x127.jpeg", title: "Keyboard", price: "₹999" },
            { id: 6, image: "https://ivos.co.za/wp-content/uploads/2025/01/Group-1-279x300.png", title: "Laptop Stand", price: "₹599" },
            { id: 7, image: "https://ivos.co.za/wp-content/uploads/2025/01/shared_image__9_-removebg-preview-300x300.png", title: "Power Bank", price: "₹1299" },
            { id: 8, image: "https://ivos.co.za/wp-content/uploads/2025/01/shared-image-31-1-2.png", title: "USB Hub", price: "₹499" },
            { id: 9, image: "https://ivos.co.za/wp-content/uploads/2025/01/shared_image__9_-removebg-preview-300x300.png", title: "Monitor", price: "₹8999" },
            { id: 10, image: "https://ivos.co.za/wp-content/uploads/2025/01/shared-image-31-1-2.png", title: "Webcam", description: "RGB gaming mouse with high DPI sensor.", price: "₹1999" },
            { id: 11, image: "https://ivos.co.za/wp-content/uploads/2025/01/He3075443a36548a6b2609a8cf135f7dbs-300x300.avif", title: "Microphone", price: "₹2499" },
            { id: 12, image: "https://ivos.co.za/wp-content/uploads/2025/01/Dual-Card-Wireless-Extender-4G-5g-LTE-WiFi-Portable-Ceiling-Power-Router-300x300.avif", title: "SSD 512GB", price: "₹3999" },
        ],

        viewed: [
            { id: 1, image: "/images/view1.jpg", title: "Phone Cover", price: "₹299" },
            { id: 2, image: "/images/view2.jpg", title: "Fast Charger", price: "₹699" },
            { id: 3, image: "/images/view3.jpg", title: "Earbuds", price: "₹999" },
            { id: 4, image: "/images/view4.jpg", title: "Smart Band", price: "₹1499" },
            { id: 5, image: "/images/view5.jpg", title: "Laptop Bag", price: "₹799" },
            { id: 6, image: "/images/view6.jpg", title: "Pendrive", price: "₹599" },
            { id: 7, image: "/images/view7.jpg", title: "Router", price: "₹1999" },
            { id: 8, image: "/images/view8.jpg", title: "Tripod", price: "₹899" },
            { id: 9, image: "/images/view9.jpg", title: "Camera", price: "₹29999" },
            { id: 10, image: "/images/view10.jpg", title: "Mouse Pad", price: "₹299" },
            { id: 11, image: "/images/view11.jpg", title: "Cooling Pad", price: "₹999" },
            { id: 12, image: "/images/view12.jpg", title: "HDMI Cable", price: "₹499" },
        ],

        selling: [
            { id: 1, image: "/images/sell1.jpg", title: "Laptop", price: "₹45999" },
            { id: 2, image: "/images/sell2.jpg", title: "iPad", price: "₹39999" },
            { id: 3, image: "/images/sell3.jpg", title: "MacBook", price: "₹89999" },
            { id: 4, image: "/images/sell4.jpg", title: "iPhone", price: "₹69999" },
            { id: 5, image: "/images/sell5.jpg", title: "Samsung S25", price: "₹79999" },
            { id: 6, image: "/images/sell6.jpg", title: "Sony Camera", price: "₹55999" },
            { id: 7, image: "/images/sell7.jpg", title: "Gaming PC", price: "₹99999" },
            { id: 8, image: "/images/sell8.jpg", title: "Printer", price: "₹12999" },
            { id: 9, image: "/images/sell9.jpg", title: "Projector", price: "₹24999" },
            { id: 10, image: "/images/sell10.jpg", title: "Drone", price: "₹59999" },
            { id: 11, image: "/images/sell11.jpg", title: "VR Headset", price: "₹34999" },
            { id: 12, image: "/images/sell12.jpg", title: "Smart TV", price: "₹49999" },
        ],
    };

    const [activeTab, setActiveTab] = useState("popular");
    const [page, setPage] = useState(0);

    const cardsPerPage = 4;

    const products = productData[activeTab];

    const visibleProducts = products.slice(
        page * cardsPerPage,
        page * cardsPerPage + cardsPerPage
    );



    // second section right -side

    const products1 = [
        {
            id: 1,
            title: "Apple MacBook Pro 13”",
            category: "Computer, Laptops, MacBook",
            price: "₹1299,00, ₹1499,00",
            image:
                "https://m.media-amazon.com/images/I/61L5QgPvgqL._SL1500_.jpg",

        },
        {
            id: 2,
            title: "Apple MacBook Pro 16”",
            category: "Computer, Laptops, MacBook",
            price: "₹2499,00 - ₹2999,00",
            image:
                "https://ivos.co.za/wp-content/uploads/2025/01/apple-macbook-pro-16-silver-1.jpg",
            hot: true,
        },
        {
            id: 3,
            title: "ASUS ZenBook OLED",
            category: ["Laptops, Business Laptop, Computer"],
            price: "₹1600,00",
            image:
                "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg",
            hot: true,
        },
    ];
    //  third section right-side left 

    const leftItems = [
        {
            id: 1,
            title: "Premium VCC",
            description: "Category",
            price: "R75.00",
            image: "https://ivos.co.za/wp-content/uploads/2025/01/Apple-MacBook-Pro-13-inch-A1989-2019-With-Touch-Bar-Touch-ID-Intel-Core-i5.jpg",

            hoverImage: "https://ivos.co.za/wp-content/uploads/2025/01/apple-ipad-air-6th-gen-2024-27-59-cm-11-inch-wi-fi-tablet-128-gb-blue-digital-o494404942-p608933212-2-202405082001.webp",
        },
    ];
    const [activeProduct, setActiveProduct] = useState(leftItems[0]);
    const [centerImage, setCenterImage] = useState(leftItems[0].image);

    //  third-section right 
    const recentProducts = [
        {
            id: 1,
            title: "Apple",
            category: "₹1499,00–",
            price: "₹1299,00",
           
            image:
                "https://ivos.co.za/wp-content/uploads/2025/01/apple-macbook-pro-13-space-gray-1.jpg",
        },
        {
            id: 2,
            title: "Apple",
            category: "₹2499,00-",
            price: "₹2999,00",
            image:
                "https://ivos.co.za/wp-content/uploads/2025/01/apple-macbook-pro-16-silver-1.jpg",
        },
        {
            id: 3,
            title: "ASUS ZenBook",
            // category: "Laptop",
            price: "₹1600.00",
            image:
                "https://ivos.co.za/wp-content/uploads/2025/01/asus-zenbook-oled-13-1.jpg",
        },
        {
            id: 4,
            title: "ASUS ZenBook",
            // category: "Laptop",
            price: "₹2320.00",
            image:
                "https://ivos.co.za/wp-content/uploads/2025/01/asus-zenbook-pro-15-flip-1.jpg",
        },
        {
            id: 5,
            title: "Asus-laptop",
            // category: "Laptop",
            price: "₹500.00",
            image:
                "https://ivos.co.za/wp-content/uploads/2025/01/apple-macbook-pro-13-space-gray-1.jpg",
        },
        {
            id: 6,
            title: "Bamix",
            // category: "Laptop",
            price: "₹605.00",
            image:
                "https://ivos.co.za/wp-content/uploads/2025/01/apple-macbook-pro-16-silver-1.jpg",
        },
    ];

    const [rightSlide, setRightSlide] = useState(0);

    const rightVisibleProducts = recentProducts.slice(
        rightSlide,
        rightSlide + 2
    );

    const nextRightSlide = () => {
        if (rightSlide + 2 < recentProducts.length) {
            setRightSlide(rightSlide + 2);
        } else {
            setRightSlide(0);
        }

    };

    const prevRightSlide = () => {
        if (rightSlide - 2 >= 0) {
            setRightSlide(rightSlide - 2);
        } else {
            setRightSlide(Math.max(recentProducts.length - 2, 0));
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 p-3 sm:p-5 w-full py-6 sm:py-10">

            {/* ================= LEFT SECTION (20%) ================= */}
            <div className="col-span-1 flex flex-col gap-5 sm:gap-8">

                {/* Top Slider */}
                <div className="  h-[64vh] sm:h-[30vh] bg-white relative  rounded-xl shadow overflow-hidden group">
                    <h1 className="text-lg sm:text-2xl font-bold ml-4 mt-5">Recently viewed</h1>
                    {/* Image + Text */}
                    <div className=" flex items-start h-full px-3 gap-4 pt-4">

                        {/* Left Image */}
                        <div className="w-[30%] flex justify-center">
                            <img
                                src={sliderData[topSlide].image}
                                alt=""
                                className="w-auto h-auto object-contain"
                            />
                        </div>

                        {/* Right Text */}
                        <div className="w-[70%]">
                            <h2 className="text-sm sm:text-base text-[#4e4b4b] font-bold">
                                {sliderData[topSlide].title}
                            </h2>

                            <p className="text-sm text-[#FF6A00] font-bold mt-2">
                                {sliderData[topSlide].description}
                            </p>
                        </div>

                    </div>

                    {/* Left Arrow */}
                    <button
                        onClick={prevTopSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2
             w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white
             flex items-center justify-center
             opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={nextTopSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2
             w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow
             flex items-center justify-center
             opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition"
                    >
                        <FaChevronRight />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {sliderData.map((item, index) => (
                            <button
                                key={`top-dot-${item.id}`}
                                onClick={() => setTopSlide(index)}
                                className={`w-2.5 h-2.5 rounded-full transition ${topSlide === index ? "bg-black" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>

                </div>

                {/*====================== Banner Image=============== */}
                <div className="h-[90vh] sm:h-[70vh] lg:h-screen  rounded-xl shadow overflow-hidden">
                    {bannerData.map((item) => (
                        <div
                            key={`banner-${item.id}`}
                            className="relative h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.bgImage})` }}
                        >
                            <div className="absolute inset-0"></div>

                            <div className="relative z-10  flex flex-col justify-between p-4 sm:p-6 text-center pt-8 sm:pt-10">
                                <div>
                                    <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold">
                                        {item.title}
                                    </h1>

                                    <p className="text-sm sm:text-lg mt-3 sm:mt-5">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex justify-between items-end">
                                    <img
                                        src={item.leftImage}
                                        alt="Left"
                                        className="w-16 sm:w-24 object-contain"
                                    />

                                    <img
                                        src={item.rightImage}
                                        alt="Right"
                                        className="w-16 sm:w-24 object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ======================Second Slider ==================*/}
                <div className="h-auto sm:h-[30vh] bg-white rounded-xl shadow flex items-start justify-start pb-4 sm:pb-0">
                    {filterData.map((section) => (
                        <div key={`filter-${section.id}`}>
                            {/* Heading */}
                            <h2 className="text-lg sm:text-xl font-bold text-gray-800 ml-5 mt-5">
                                {section.title}
                            </h2>

                            {/* Description */}
                            <p className="text-sm text-gray-500 mt-5 mb-4 ml-5">
                                {section.description}
                            </p>

                            {/* Checkboxes */}
                            {section.checkboxes.map((item) => (
                                <label
                                    key={`filter-check-${item.id}`}
                                    className="flex items-start gap-3 py-2 ml-5  cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5  accent-[#FF6A00]"
                                        onChange={() => window.location.reload()}
                                    />

                                    <span className="text-gray-700">
                                        {item.label}
                                    </span>
                                </label>
                            ))}
                        </div>
                    ))}
                </div>

                {/*========================Third Slider========================= */}
                <div className="  h-[64vh] sm:h-[30vh] bg-white relative  rounded-xl shadow overflow-hidden group">
                    <h1 className="text-lg sm:text-2xl font-bold ml-4 mt-5">Latest products</h1>
                    {/* Image + Text */}
                    <div className=" flex items-start h-full px-3 gap-4 pt-4">

                        {/* Left Image */}
                        <div className="w-[30%] flex justify-center">
                            <img
                                src={sliderData[bottomSlide].image}
                                alt=""
                                className="w-auto h-auto object-contain"
                            />
                        </div>

                        {/* Right Text */}
                        <div className="w-[70%]">
                            <h2 className="text-sm sm:text-base text-[#4e4b4b] font-bold">
                                {sliderData[bottomSlide].title}
                            </h2>

                            <p className="text-sm text-[#FF6A00] font-bold mt-2">
                                {sliderData[bottomSlide].description}
                            </p>
                        </div>

                    </div>

                    {/* Left Arrow */}
                    <button
                        onClick={prevBottomSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2
             w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white
             flex items-center justify-center
             opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={nextBottomSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2
             w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow
             flex items-center justify-center
             opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition"
                    >
                        <FaChevronRight />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {sliderData.map((item, index) => (
                            <button
                                key={`bottom-dot-${item.id}`}
                                onClick={() => setBottomSlide(index)}
                                className={`w-2.5 h-2.5 rounded-full transition ${bottomSlide === index ? "bg-black" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>

                </div>
            </div>

            {/* ================= RIGHT SECTION (80%) ================= */}
            <div className="col-span-1 lg:col-span-4 flex flex-col gap-5">

                {/* Heading */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <h1 className="text-2xl sm:text-3xl font-bold">Featured Products</h1>

                    <div className="flex gap-3 sm:gap-6 overflow-x-auto">
                        <button
                            onClick={() => {
                                setActiveTab("popular");
                                setPage(0);
                            }}
                            className={`pb-2 whitespace-nowrap text-lg sm:text-xl font-bold transition-colors duration-300 ${activeTab === "popular"
                                ? "text-[#ff6a00]"
                                : "text-gray-700 hover:text-[#ff6a00]"
                                }`}
                        >
                            Popular Products
                        </button>

                        <button
                            onClick={() => {
                                setActiveTab("viewed");
                                setPage(0);
                            }}
                            className={`pb-2 whitespace-nowrap text-sm sm:text-base font-bold ${activeTab === "viewed"
                                ? " text-[#ff6a00]"
                                : "text-gray-700 hover:text-[#ff6a00]"
                                }`}
                        >
                            Most Viewed Products
                        </button>

                        <button
                            onClick={() => {
                                setActiveTab("selling");
                                setPage(0);
                            }}
                            className={`pb-2 whitespace-nowrap text-sm sm:text-base font-bold ${activeTab === "selling"
                                ? "border-b-2 border-blue-600 text-[#ff6a00]"
                                : "text-gray-700 hover:text-[#ff6a00]"
                                }`}
                        >
                            Top Selling
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-2">
                    {visibleProducts.map((item) => (



                        <div
                            key={`${activeTab}-${item.id}`}
                            onClick={() => addToCart(item)}
                            className="relative group bg-white rounded-xl shadow hover:shadow-lg overflow-hidden cursor-pointer"
                        >

                            <img
                                src={item.image}
                                alt={item.image}
                                className="w-full h-32 sm:h-44 lg:h-56 object-cover"
                            />
                            {/* icon */}
                            <ProductAction />

                            {/* hover-button */}
                            <ProductButton
                                text="Select Option"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart(item);
                                }}
                                className="absolute bottom-52 left-0"
                            />
                            {(item.id === 1 || item.id === 2) && (
                                <div className="my-6 sm:my-8 flex justify-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-gray-300"></span>
                                    <span className="h-3 w-3 rounded-full bg-gray-400"></span>
                                </div>
                            )}

                            <div className="p-3 sm:p-4">
                                <h2 className="font-semibold text-xs sm:text-lg text-center">{item.title}</h2>
                                <p className="text-gray-600 text-xs sm:text-base text-center">{item.description}</p>

                                <p className="text-[#ff6a00] font-bold mt-2 text-sm sm:text-base text-center">
                                    {item.price}
                                </p>


                                {/* <button className="w-full mt-3 sm:mt-4 bg-blue-600 text-white py-1.5 sm:py-2 text-sm sm:text-base rounded-lg hover:bg-blue-700">
                                    Add To Cart
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3 Dots */}
                <div className="flex justify-center gap-3 mt-2">
                    {[0, 1, 2].map((dot) => (
                        <button
                            key={`page-dot-${dot}`}
                            onClick={() => setPage(dot)}
                            className={`w-3 h-3 rounded-full ${page === dot ? "bg-blue-600" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>

                {/* ===========================Second Section============================== */}

                <section className="bg-gray-100 py-4 sm:py-6 px-0">
                    <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[20px] sm:rounded-[30px] bg-[#222222] p-4 sm:p-6 lg:flex-row">

                        {/* Left Banner */}
                        <div className="flex w-full flex-col justify-between rounded-[20px] sm:rounded-[25px] bg-[#222222] p-4 sm:p-6 lg:w-84">

                            <div>
                                <h2 className="text-xl sm:text-3xl font-bold leading-tight text-white">
                                    Get discount
                                    <br />
                                    on PS5 games
                                </h2>
                                <CommonButton
                                    text="Buy Now"

                                    className="mt-6 sm:mt-8 rounded-full bg-white px-6 sm:px-7 py-2.5 sm:py-3 font-semibold transition hover:bg-gray-200"
                                />
                            </div>

                            <img
                                src="https://ivos.co.za/wp-content/uploads/2025/10/Xv5XxVmweEhvTykJkksDWj_1-removebg-preview.png"
                                alt="PlayStation"
                                className="mt-5 object-contain w-40 sm:w-auto"
                            />
                        </div>

                        {/* Product Cards */}
                        <div className="flex flex-1 gap-4 sm:gap-5 overflow-x-auto text-center">

                            {products1.map((item, index) => (
                                <div
                                    key={`p1-${item.id}`}
                                    onClick={() => addToCart(item)}
                                    className="group relative min-w-[75%] sm:min-w-auto rounded-[20px] sm:rounded-[25px] bg-white p-4 sm:p-6 hover:shadow-2xl duration-300 flex flex-col cursor-pointer"
                                >
                                    {item.hot && (
                                        <span className="absolute left-4 top-4 sm:left-5 sm:top-5 rounded-full bg-red-500 px-3 sm:px-4 py-1 text-xs font-semibold text-white">
                                            HOT
                                        </span>
                                    )}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="mx-auto h-full object-contain"
                                    />

                                    {/* icon */}
                                    <ProductAction />

                                    {/* hover-button */}
                                    <ProductButton
                                        text="Select Option"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(item);
                                        }}
                                        className="absolute bottom-55 left-0"
                                    />

                                    {index < 2 && (
                                        <div className="my-6 sm:my-8 flex justify-center gap-2">
                                            <span className="h-3 w-3 rounded-full bg-gray-300"></span>
                                            <span className="h-3 w-3 rounded-full bg-gray-400"></span>
                                        </div>
                                    )}

                                    <h2 className="text-sm sm:text-base font-semibold">
                                        {item.title}
                                    </h2>
                                    <div className="mt-2 text-gray-500 text-xs sm:text-base">
                                        {item.id === 3 ? (
                                            item.category[0].split(",").map((cat, catIndex) => (
                                                <p key={`p1-cat-${item.id}-${catIndex}`}>{cat.trim()}</p>
                                            ))
                                        ) : (
                                            <p>{Array.isArray(item.category) ? item.category.join(", ") : item.category}</p>
                                        )}
                                    </div>


                                    <div className="mt-4 sm:mt-5 mb-0 text-lg sm:text-xl font-bold text-orange-500">
                                        {item.id === 2 ? (
                                            item.price.split(" - ").map((price, priceIndex) => (
                                                <div key={`p1-price-${item.id}-${priceIndex}`}>{price.trim()}</div>
                                            ))
                                        ) : (
                                            <p>{item.price}</p>
                                        )}
                                    </div>

                                </div>
                            ))}
                        </div>

                        {/* Next Button */}
                        {/* <button className="absolute bottom-8 right-8 hidden h-12 w-12 items-center justify-center rounded-full bg-white shadow lg:flex">
                            <ChevronRight />
                        </button> */}

                    </div>
                </section>

                {/*=============================== Third Section ============================*/}
                <div className="bg-gray-100 rounded-xl shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">

                        {/* Left Section */}
                        <div className="col-span-1 lg:col-span-3 bg-white text-center">

                            {leftItems.map((item) => (
                                <div
                                    key={`left-${item.id}`}
                                    onMouseEnter={() => {
                                        setActiveProduct(item);
                                        setCenterImage(item.hoverImage);
                                    }}
                                    onClick={() => addToCart(item)}
                                    className={` group relative rounded-xl p-4 cursor-pointer transition-all duration-300 ${activeProduct.id === item.id

                                        }`}
                                >
                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-40 sm:w-48 h-auto sm:h-full mx-auto"
                                    />

                                    {/* icon */}
                                    <ProductAction />

                                    {/* hover-button */}
                                    <ProductButton
                                        text="Select Option"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(item);
                                        }}
                                        className="absolute bottom-25 left-0"

                                    />

                                    {/* Text */}
                                    <div className="mt-4">
                                        <h3 className="font-semibold text-base sm:text-lg">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-500 text-sm">
                                            {item.description}
                                        </p>

                                        <p className="text-orange-500 font-bold mt-2">
                                            {item.price}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Center Section */}
                        <div className=" lg:-ml-32 col-span-1 lg:col-span-5 rounded-xl p-0">
                            <img
                                src="https://ivos.co.za/wp-content/uploads/2025/10/apple-macbook-pro-12-inch-2017-4218-1.png"
                                alt="MacBook Pro"
                                className="w-full h-56 sm:h-72 lg:h-90 object-contain rounded-2xl"
                            />
                        </div>

                        {/* Right Section */}
                        <div className="col-span-1 lg:col-span-4 relative group rounded-xl p-4 bg-white overflow-hidden lg:-ml-25">
                            {/* Heading */}
                            <div className="flex justify-between items-center mb-5">
                                <h2 className="text-lg sm:text-xl font-bold">Top 100 Appliances</h2>

                                <div className="relative inline-block">
                                    <CommonButton
                                        text="Shop More"
                                        className="bg-transparent shadow-none p-0 text-black font-semibold"
                                    />

                                    <div className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#ff6a00]"></div>
                                </div>
                            </div>

                            {/* Products */}
                            <div className="flex gap-3 sm:gap-4 mt-8 lg:mt-43">
                                {rightVisibleProducts.map((item) => (
                                    <div
                                        key={`right-${item.id}`}
                                        onClick={() => addToCart(item)}
                                        className="w-1/2 flex items-center gap-2 sm:gap-3 rounded-xl p-2 sm:p-3 cursor-pointer"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-16 h-16 sm:w-22 sm:h-22 object-contain"
                                        />

                                        <div>
                                            <h3 className="text-sm sm:text-lg font-bold">
                                                {item.title}</h3>

                                            <p className="text-orange-500 font-bold text-xs sm:text-base">
                                                {item.category}</p>

                                            <p className="text-orange-500 font-bold text-xs sm:text-base">
                                                {item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Previous Arrow */}
                            <button
                                onClick={prevRightSlide}
                                className="absolute left-2 top-1/2 -translate-y-1/2 mt-8 lg:mt-25
                                 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg
                                 flex items-center justify-center
                                 opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                                transition-all duration-300 z-10"
                            >
                                <FaChevronLeft className="text-gray-700" />
                            </button>

                            {/* Next Arrow */}
                            <button
                                onClick={nextRightSlide}
                                className="absolute right-2 top-1/2 -translate-y-1/2 mt-8 lg:mt-25
                                  w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg
                                flex items-center justify-center
                                 opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                                 transition-all duration-300 z-10"
                            >
                                <FaChevronRight className="text-gray-700" />
                            </button>

                        </div>

                    </div>
                </div>
            </div >

        </div >
    );
}