
import React, { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import menuImg from "../assets/menu.avif";
import Viewsonic from "../assets/viewsonic.jpg"
import Transcend from "../assets/transcend.jpg"
import Samsung from "../assets/samsung.jpg"
import Philips from "../assets/philips.jpg"
import Lg from "../assets/lg.jpg"
import Kodak from "../assets/kodak.jpg"
import Hp from "../assets/hp.jpg"
import Gigabyte from "../assets/gigabyte.jpg"
import Dell from "../assets/dell.jpg"
import Games from "../assets/games.jpg"
import Headphones from "../assets/headphones.jpg"
import PrinterImg from "../assets/printer.webp"


const menuData = [
    {
        name: "Categories",
        type: "categories",
        items: ["Computers", "Laptop's", "Printer's", "CCTV & Security", "Computer Accessories", "PC Part & Components", "WiFi & Networking", "Software",
        ],
    },
    // All product
    {
        name: "All Products",
        mega: true,
        type: "products",


        columns: [
            {
                title: "Computer & Tablets",
                items: ["Laptops", "Desktops & All-in-One Computers", "2-in-one Laptops", "MacBook", "Tablets", "Computers Accessories", "Tablets Accessories", "Laptop Comparison Guide"],
            },
            {
                title: "Monitors",
                items: ["All Monitors", "Curved Monitors", "4K Monitors", "Gaming Monitors", "24 Inch Monitors", "27 Inch Monitors", "Monitor Accessories", "Computer Monitors Sale"],
            },
            {
                title: "PRINTER, INK & TONER",
                items: ["All Printers", "Ink & Toner Cartridges", "Tank Printer", "Laser Printer", "Inkjet Printer", "Manufacturing Printer", "Label Printers", "Printer Accessories"],
            },
            {
                title: "PC PART & COMPONENTS",
                items: ["Memory RAM", "Graphic Card", "Hard Drive", "Motherboards", "PC Fans & Cooler", "Power Suppplies", "CPU Processors", "Computer Cases"],
            },
        ],

        bottomColumns: [
            {
                title: "Computer Accessories",
                items: ["Laptop Bags & Cases", "Keyboards & Mouse Bundles"],
            },
            {
                title: "WiFi & Networking",
                items: ["WiFi Routers", "WiFi Range Extenders"],
            },
            {
                title: "CCTV & Security",
                items: ["Access Contorl", "Security Cameras"],
            },
            {
                title: "Software",
                items: ["Microsoft Office", "Antivirus Software"],
            },
        ],
        banner: {
            image: menuImg,
            title: "UP TO 25%",
            subtitle: "DISCOUNT ON ALL",
        },
    },
    // laptops
    {
        name: "Laptops",
        type: "laptops",

        top: [
            {
                title: "Laptops For Sale",
                items: ["Al + Co-Pilot Laptop", "Window Laptops", "2-in-1 Laptops", "Gaming Laptops", "MacBook", "Chromebooks", "Workstation Laptops", "Compare Laptops Deals"],
            },
            {
                title: "Laptop Brands",
                items: ["Dell Laptops", " HP Laptop", "Lenovo Laptop", "Apple MacBooks", "Asus Laptops", "Acer Laptops"],
            },
            {
                title: "Popular Searches",
                items: ["Laptop under R10,000", "Laptop under R15,000", "Intel Core i5 Laptop", "Intel Core i7 Laptop", "16GB Laptops", "Laptop Specials"],
            },
            {
                title: "Laptop Accessories",
                items: ["Laptop Bags", "Laptop Charger", "Laptop Battery", "Laptop Stand", "Keyboard & Mouse", "Webcams"],
            },
        ],

        bottom: {
            title: "MORE WAYS TO SHOP",
            items: ["Top Selling", "Our Recommends"],

            images: [
                Viewsonic,
                Transcend,
                Samsung,
                Philips,
                Lg,
                Kodak,
                Hp,
                Gigabyte,
                Dell,
            ],
        },
    },
    // Monitors
    {
        name: "Monitars",
        type: "Monitars",

        top: [
            {
                title: "Monitors for Sell",
                items: ["All Monitors", "4K Monitors", "Curved Monitors", "Gaming Monitors", "Monitors Accessories"],
            },
            {
                title: "Shop by Size",
                items: ['Under 22" Monitors', '23"-24" Monitors', '25"-27" Monitors', '27" or Bigger Monitors'],
            },
            {
                title: "Shop by Brand",
                items: ["Dell Monitors", "Hp Monitors", "Samsung Monitors", "AOC Monitors"],
            },
            {
                title: "Popular Searches",
                items: ["Dell 24 Inch Monitors", "Dell 27 Inch Monitors", "Monitor Specials", "Monitor Comparison Guide"],
            },
        ],

        bottom: {
            title: "MORE WAYS TO SHOP",
            items: ["Top Selling", "Our Recommends"],

            cards: [
                {
                    image: Games,
                    offer: "Save up to -45%",
                    title: "Get discount",
                    desc: "on PS5 games",
                },
                {
                    image: Headphones,
                    desc: "Get ready to impressive sound",
                    title: "Alby Urbanears",


                },
            ],
        }
    },
    // printing
    {
        name: "Printers",
        type: "Printers",

        top: [
            {
                title: "Printers on Sale",
                items: ["All Printers", "Tank Printers", "Inkjet Printers", "Leaser Printers", "Multifunction Printers", "Label Printers", "Large Format Printers", "POS Printers"],
            },
            {
                title: "Shop by Brand",
                items: ["HP Printers", "Canon Printers", "Epson Printers", "Brother Printers", "Zebra Printers"],
            },
            {
                title: "Printer Cartridges",
                items: ["Ink Cartridges", "Toner Cartridges"],
            },
            {
                title: "Printer Accessories",
                items: ["Drum Kits", "Maintenance Kits", "Printer Cables"],
            },
        ],

        banner: {
            image: PrinterImg,
            offer: "Save up to 40%",
            title: "Discount on all",
        },
    },
    // software
    {
        name: "Software",
        items: ["HP", "Dell", "Lenovo", "Asus"],
    },
    // brand
    {
        name: "Brands",
        mega: true,
        type: "brands",

        brands: ["Dell Technology", "HP", "Lenovo", "Apple", "Asus", "Microsoft", "Logitech",
            "Jabra", "Samsung", "Yealink", "Mecer", "Canon", "Epson", "Brother", "LG", "TP", "Seagate",
            "Parrot", "APC", "Zebra", "Hikvision", "Targus", "Synology", "Port Designs", "Instant On",
            "Ubiquiti", "Brands"

        ],
    },
    // top deals
    {
        name: "Top Deals",
        items: ["HP", "Dell", "Lenovo", "Asus"],
    },
    // clreaance
    {
        name: "Clearance",
        items: ["HP", "Dell", "Lenovo", "Asus"],
    },

];

const NavMenu = () => {

    const [hoverMenu, setHoverMenu] = useState("");

    const productMenu = menuData.find((m) => m.type === "products");


    return (
        <nav className=" hidden lg:block bg-white text-[#092143]">
            <div className="max-w-full mx-auto relative flex items-center ">

                {menuData.map((menu, index) => (
                    <div key={index} className="group">
                        <button
                            onMouseEnter={() => setHoverMenu(menu.type)}
                            className={`flex items-center justify-between px-4 py-4 ml-4 hover:bg-white hover:text-[#ff6a00] transition ${menu.name === "Categories"
                                ? "w-84 border border-[#e1e4e8] rounded-lg"
                                : "w-auto"
                                }`}

                        >
                            {menu.name === "Categories" ? (
                                <>
                                    <div className="flex items-center gap-3">
                                        <FaBars />
                                        <span>{menu.name}</span>
                                    </div>

                                    <FaChevronDown
                                        className={`transition-transform duration-300 ${hoverMenu === "categories" ? "rotate-180" : ""
                                            }`}
                                    />
                                </>
                            ) : (
                                <span>{menu.name}</span>
                            )}
                        </button>

                        {/* ================= Categories ================= */}

                        {menu.type === "categories" && (
                            <div className="absolute top-full left-4 hidden group-hover:block w-84 bg-white text-black shadow-lg border-x border-b border-[#e1e4e8] rounded-b-xl overflow-hidden z-50">

                                {menu.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="px-5 py-3 border-b border-[#e1e4e8] last:border-b-0 hover:bg-gray-50 hover:text-orange-600 cursor-pointer"
                                    >
                                        {item}
                                    </div>
                                ))}

                            </div>
                        )}

                        {/* ================= All Products ================= */}

                        {hoverMenu === "products" && (
                            <div
                                className="absolute top-full left-0 right-0 bg-white shadow-xl z-50 p-8"
                                onMouseLeave={() => setHoverMenu("")}
                            >
                                {/* First Row */}
                                <div className="grid grid-cols-5 gap-0">

                                    {productMenu.columns.map((column, index) => (
                                        <div key={index}>
                                            <h3 className="font-bold mb-3 hover:text-orange-500">
                                                {column.title}
                                            </h3>

                                            {column.items.map((item, i) => (
                                                <p
                                                    key={i}
                                                    className="py-2 text-gray-500 hover:text-orange-500 cursor-pointer"
                                                >
                                                    {item}
                                                </p>
                                            ))}
                                        </div>
                                    ))}

                                    {/* Banner */}
                                    <div className="relative w-56">
                                        <img
                                            src={productMenu.banner.image}
                                            alt=""
                                            className="w-full h-42 object-cover rounded-lg"
                                        />

                                        <div className="absolute top-20 left-8 text-white">
                                            <h2>{productMenu.banner.title}</h2>
                                            <p className="mt-2 text-lg font-semibold">
                                                {productMenu.banner.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                {/* Second Row */}
                                <div className="grid grid-cols-5 pt-8">

                                    <div className="col-span-4 grid grid-cols-4">

                                        {productMenu.bottomColumns.map((column, index) => (
                                            <div key={index}>
                                                <h3 className="font-bold mb-3 hover:text-orange-500">
                                                    {column.title}
                                                </h3>

                                                {column.items.map((item, i) => (
                                                    <p
                                                        key={i}
                                                        className="py-1 text-gray-500 hover:text-orange-500 cursor-pointer"
                                                    >
                                                        {item}
                                                    </p>
                                                ))}
                                            </div>
                                        ))}

                                    </div>

                                </div>
                            </div>
                        )}
                        {/* ================= Laptop ================= */}

                        {menu.type === "laptops" && (
                            <div className="absolute top-full left-0 right-0 hidden group-hover:block bg-white shadow-lg z-50">

                                {/* Top Row */}
                                <div className="grid grid-cols-5 p-8">
                                    {menu.top.map((col, index) => (
                                        <div key={index}>
                                            <h3 className="font-bold mb-3 text-[#575353] hover:text-orange-500">
                                                {col.title}
                                            </h3>

                                            {col.items.map((item, i) => (
                                                <p
                                                    key={i}
                                                    className="py-1 text-gray-500 hover:text-orange-500 cursor-pointer"
                                                >
                                                    {item}
                                                </p>
                                            ))}
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Row */}
                                <div className="grid grid-cols-5 border-t border-gray-300 p-8">

                                    <div>
                                        <h3 className="font-bold mb-3 text-[#575353]">
                                            {menu.bottom.title}
                                        </h3>

                                        {menu.bottom.items.map((item, i) => (
                                            <p
                                                key={i}
                                                className="py-1 text-gray-500 hover:text-orange-500 cursor-pointer"
                                            >
                                                {item}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="col-span-4 grid grid-cols-9 gap-2">
                                        {menu.bottom.images.map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                alt=""
                                                className="w-24 h-24 object-contain hover:scale-105 transition"
                                            />
                                        ))}
                                    </div>

                                </div>

                            </div>
                        )}
                        {/* ================= Monitars ================= */}

                        {menu.type === "Monitars" && (
                            <div className="absolute top-full left-0 right-0 hidden group-hover:block bg-white shadow-lg z-50">

                                {/* Top */}
                                <div className="grid grid-cols-5 p-8">
                                    {menu.top.map((col, i) => (
                                        <div key={i}>
                                            <h3 className="mb-3 font-bold text-[#575353]">{col.title}</h3>

                                            {col.items.map((item, j) => (
                                                <p
                                                    key={j}
                                                    className="py-1 text-gray-500 hover:text-orange-500 cursor-pointer"
                                                >
                                                    {item}
                                                </p>
                                            ))}
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom */}
                                <div className="grid grid-cols-5 border-t border-gray-300 p-8">

                                    <div>
                                        <h3 className="mb-3 font-bold text-[#575353]">
                                            {menu.bottom.title}
                                        </h3>

                                        {menu.bottom.items.map((item, i) => (
                                            <p
                                                key={i}
                                                className="py-1 text-gray-500 hover:text-orange-500 cursor-pointer"
                                            >
                                                {item}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="col-span-4 flex gap-6 justify-end">
                                        {menu.bottom.cards.map((card, i) => (
                                            <div key={i} className="relative overflow-hidden rounded-lg">
                                                <img
                                                    src={card.image}
                                                    alt={card.title}
                                                    className="w-84 h-44 object-cover"
                                                />

                                                <div className="absolute top-10 left-4 text-white">
                                                    {card.offer && (
                                                        <p className="text-sm font-semibold text-orange-400">
                                                            {card.offer}
                                                        </p>
                                                    )}

                                                    <h3 className="mt-2 text-2xl font-bold">
                                                        {card.title}
                                                    </h3>

                                                    <p className="mt-2 text-sm">
                                                        {card.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                            </div>
                        )}
                     
                        {/* =======================printer================= */}
                        {menu.type === "Printers" && (
                            <div className="absolute top-full left-0 right-0 hidden group-hover:block bg-white shadow-lg z-50">
                                {/* First 4 Columns */}
                                <div className="grid grid-cols-5 gap-0 p-8 mb-12  border-b border-gray-300 ">
                                    {menu.top.map((col, i) => (
                                        <div key={i}>
                                            <h3 className="font-bold mb-3 text-[#575353]">{col.title}</h3>

                                            {col.items.map((item, j) => (
                                                <p
                                                    key={j}
                                                    className="py-1 hover:text-orange-500 cursor-pointer text-gray-500"
                                                >
                                                    {item}
                                                </p>
                                            ))}
                                        </div>
                                    ))}

                                    {/* 5th Column - Image */}
                                    <div className="relative w-full min-w-0 overflow-hidden rounded-lg">
                                        <img
                                            src={menu.banner.image}
                                            alt="Printer Banner"
                                            className="block w-full h-48 object-cover rounded-lg"
                                        />

                                        <div className="absolute top-25 left-8 text-white">
                                            <p className="text-sm font-semibold">
                                                {menu.banner.offer}
                                            </p>

                                            <h3 className="text-2xl font-bold mt-2">
                                                {menu.banner.title}
                                            </h3>

                                            <p className="text-sm mt-2">
                                                {menu.banner.desc}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        )}

                        {/* ==============================brands======================== */}

                        {hoverMenu === "brands" && (
                            <div
                                className="absolute top-full left-0 right-0 bg-white shadow-xl z-50 p-8"
                                onMouseLeave={() => setHoverMenu("")}
                            >
                                <h2 className="text-2xl font-bold mb-6 text-[#092143]">
                                    All Brands
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {menuData
                                        .find((m) => m.type === "brands")
                                        .brands.map((brand, index) => (
                                            <button
                                                key={index}
                                                className="px-4 py-3 bg-[#f8f9fa] text-[#092143] border border-[#e1e4e8] rounded-2xl transition duration-300 whitespace-nowrap"
                                            >
                                                {brand}
                                            </button>
                                        ))}
                                </div>
                            </div>
                        )}

                        {/* ================= Simple Dropdown ================= */}

                        {menu.type === "dropdown" && (
                            <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-white text-black shadow-lg">

                                {menu.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="px-5 py-3 hover:bg-orange-50 hover:text-orange-600 cursor-pointer"
                                    >
                                        {item}
                                    </div>
                                ))}

                            </div>
                        )}

                    </div>
                ))}
            </div>
        </nav>
    );
};

export default NavMenu;