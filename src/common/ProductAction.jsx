import { FaShoppingCart, FaRegHeart, FaShareAlt } from "react-icons/fa";

const ProductActions = () => {
  return (
    <div className="absolute top-3 right-5 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
      <button className="w-9 h-9 rounded-full bg-white flex justify-center items-center shadow">
        <FaShoppingCart />
      </button>

      <button className="w-9 h-9 rounded-full bg-white flex justify-center items-center shadow">
        <FaRegHeart />
      </button>

      <button className="w-9 h-9 rounded-full bg-white flex justify-center items-center shadow">
        <FaShareAlt />
      </button>
    </div>
  );
};

export default ProductActions;