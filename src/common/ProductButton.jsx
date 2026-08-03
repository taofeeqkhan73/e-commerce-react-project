import { FaShoppingCart } from "react-icons/fa";

const ProductButton = ({
  text = "Add to Cart",
  onClick,
  className = "",
}) => {
  return (
    <div
      className={`absolute bottom-0 left-0 w-full px-4 flex justify-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50 ${className}`}
    >
      <button
        onClick={onClick}
        className="group/cart relative w-full bg-[rgb(255,106,0)] text-white py-3 rounded-br-2xl rounded-bl-2xl flex justify-center items-center overflow-hidden hover:bg-[rgb(255,105,0)] transition-all duration-300"
      >
        <span className="group-hover/cart:opacity-0 group-hover/cart:-translate-y-5 transition-all duration-300">
          {text}
        </span>

        <FaShoppingCart className="absolute opacity-0 translate-y-8 group-hover/cart:opacity-100 group-hover/cart:translate-y-0 transition-all duration-300 text-xl" />
      </button>
    </div>
  );
};

export default ProductButton;