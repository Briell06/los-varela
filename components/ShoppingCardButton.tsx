import { ShoppingCart } from "lucide-react";

const ShoppingCartButton = () => {
  return (
    <button
      aria-label="Shopping Cart"
      aria-labelledby="Shopping Cart"
      role="button"
      className="rounded-full p-2 text-blue-600 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-blue-100 active:scale-95 max-md:hidden dark:bg-slate-950 dark:text-white dark:hover:bg-black dark:hover:shadow-slate-800"
    >
      <ShoppingCart />
    </button>
  );
};

export default ShoppingCartButton;
