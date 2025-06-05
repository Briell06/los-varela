import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

const CardFooterCartButton = ({ className }: { className?: string }) => {
  return (
    <Button
      aria-label="añadir al carrito"
      variant={"secondary"}
      className={cn(
        "bg-gradient-to-r from-blue-500 to-blue-600 font-bold text-white shadow-md dark:shadow-black",
        className,
      )}
    >
      <ShoppingCart />
      Añadir al Carrito
    </Button>
  );
};

export default CardFooterCartButton;
