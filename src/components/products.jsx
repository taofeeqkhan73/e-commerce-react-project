import { useState } from "react";
import ProductAction from "../common/ProductAction";
import ProductButton from "../common/ProductButton";
import { useCart } from "../context/CartContext";


// ================= DATA =================

const products = [
    {
        id: 1,
        title: "Apple MacBook Pro 13” M2",
        category: "Computer, Laptops, MacBook",
        price: "R1299,00 – R1499,00",
        image: "https://ivos.co.za/wp-content/uploads/2025/01/apple-macbook-pro-13-space-gray-1.jpg",
        hot: false,
    },
    {
        id: 2,
        title: "Apple MacBook Pro 16″ M1 Pro",
        category: "Computer, Laptops, MacBook",
        price: "R2499,00 – R2999,00",

        image: "https://ivos.co.za/wp-content/uploads/2025/01/apple-macbook-pro-16-silver-1.jpg",
        hot: true,
    },
    {
        id: 3,
        title: "ASUS ZenBook OLED 13",
        category: "Laptops, Business Laptop, Computer",
        price: "R1600,00",
        image: "https://ivos.co.za/wp-content/uploads/2025/01/asus-zenbook-oled-13-1.jpg",
        hot: true,
    },
    {
        id: 4,
        title: "ASUS ZenBook Pro 15 Flip",
        category: "Computer, Laptops, Ultrabook",
        price: "R2320,00",
        image: "https://ivos.co.za/wp-content/uploads/2025/01/asus-zenbook-pro-15-flip-1.jpg",
        hot: false,
    },
    {
        id: 5,
        title: "Asus-laptop",
        category: "Gaming",
        price: "₹500",
        image: "https://ivos.co.za/wp-content/uploads/2025/11/Gemini_Generated_Image_sxyi4asxyi4asxyi-768x326.jpeg",
        hot: false,
    },
    {
        id: 6,
        title: "Dell XPS",
        category: "Laptop",
        price: "₹1,850",
        image: "https://ivos.co.za/wp-content/uploads/2025/01/Group-1-279x300.png",
        hot: false,
    },
    {
        id: 7,
        title: "HP Pavilion",
        category: "Laptop",
        price: "₹980",
        image: "https://ivos.co.za/wp-content/uploads/2025/01/shared_image__9_-removebg-preview-300x300.png",
        hot: false,
    },
    {
        id: 8,
        title: "Lenovo ThinkPad",
        category: "Business",
        price: "₹1,150",
        image: "https://ivos.co.za/wp-content/uploads/2025/01/shared-image-31-1-2.png",
        hot: false,
    },
    {
        id: 9,
        title: "MSI Gaming",
        category: "Gaming",
        price: "₹2,100",
        image: "https://ivos.co.za/wp-content/uploads/2025/01/He3075443a36548a6b2609a8cf135f7dbs-300x300.avif",
        hot: false,
    },
    {
        id: 10,
        title: "Acer Predator",
        category: "Gaming",
        price: "₹1,450",
        image: "https://ivos.co.za/wp-content/uploads/2025/01/Dual-Card-Wireless-Extender-4G-5g-LTE-WiFi-Portable-Ceiling-Power-Router-300x300.avif",
        hot: false,
    },
    {
        id: 11,
        title: "Surface Laptop",
        category: "Microsoft",
        price: "₹1,999",
        image: "https://ivos.co.za/wp-content/uploads/2025/01/shared-image-31-1-2.png",
        hot: false,
    },
    {
        id: 12,
        title: "LG Gram",
        category: "Ultrabook",
        price: "₹1,250",
        image: "https://ivos.co.za/wp-content/uploads/2025/01/He3075443a36548a6b2609a8cf135f7dbs-300x300.avif",
        hot: false,
    },
    {
        id: 13,
        title: "Razer Blade",
        category: "Gaming",
        price: "₹2,890",
        image: "https://ivos.co.za/wp-content/uploads/2025/01/Dual-Card-Wireless-Extender-4G-5g-LTE-WiFi-Portable-Ceiling-Power-Router-300x300.avif",
        hot: false,
    },
    {
        id: 14,
        title: "Huawei MateBook",
        category: "Laptop",
        price: "₹1,350",
        image: "https://ivos.co.za/wp-content/uploads/2025/01/hoco-gm12-light-and-shadow-rgb-gaming-keyboard-mouse-set-english-768x768.jpg",
        hot: false,
    },
    {
        id: 15,
        title: "Samsung Galaxy Book",
        category: "Laptop",
        price: "₹1,799",
        image: "https://ivos.co.za/wp-content/uploads/2025/01/download.jpeg",
        hot: false,
    },
];

// ================= CARD =================

// Card itself is clickable (not just the button) so tapping anywhere on the
// card adds that card's exact data to the cart.
const ProductCard = ({ item }) => {
    const { addToCart } = useCart();

    return (
        <div
            onClick={() => addToCart(item)}
            className="group bg-white rounded-xl shadow overflow-hidden hover:shadow-xl duration-300 cursor-pointer"
        >
            <div className="relative overflow-hidden px-4 pt-4">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover rounded-lg"
                />

                {/* icon */}
                <ProductAction />

                {/* hover-button  */}
                <ProductButton
                    text="Select Option"
                    onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item);
                    }}
                />
            </div>

            <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{item.category}</p>
                <h4 className="text-[#ff6a00] font-bold text-xl mt-3">{item.price}</h4>
            </div>
        </div>
    );
};
// ================= SLIDER =================

export default function ProductSlider() {
    const [page, setPage] = useState(0);

    const cardsPerPage = 5;
    const totalPages = Math.ceil(products.length / cardsPerPage);

    return (
        <section className="w-full mx-auto py-10 px-5">

            <h2 className="text-2xl  mb-8">
                More Recommended Products
            </h2>

            <div className="overflow-hidden">

                <div
                    className="flex transition-transform duration-700"
                    style={{
                        transform: `translateX(-${page * 100}%)`,
                    }}
                >
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <div
                            key={`slider-page-${i}`}
                            className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
                        >
                            {products
                                .slice(i * cardsPerPage, i * cardsPerPage + cardsPerPage)
                                .map((item) => (
                                    <ProductCard key={`slider-item-${item.id}`} item={item} />
                                ))}
                        </div>
                    ))}
                </div>

            </div>

            <div className="flex justify-center gap-3 mt-8">

                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={`slider-dot-${i}`}
                        onClick={() => setPage(i)}
                        className={`h-3 rounded-full transition-all ${page === i
                            ? "w-8 bg-[#ff6a00]"
                            : "w-3 bg-gray-300"
                            }`}
                    />
                ))}

            </div>

        </section>
    );
}