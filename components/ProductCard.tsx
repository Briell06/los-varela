"use client";
import { Product } from "@/utils/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const [amount, setAmount] = useState(1);

  const handleIncrement = () => {
    setAmount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);

    if (!value) setAmount(0);
    if (value >= 0) setAmount(value);
  };

  return (
    <Card>
      <CardHeader className="xl:h-45">
        <CardTitle className="text-3xl">{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={product.thumbnail}
          className="rounded-lg"
          width={700}
          height={700}
          alt="image"
        />
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-0.5">
            <Button
              size="icon"
              onClick={handleDecrement}
              variant={"ghost"}
              className="rounded-full"
            >
              <Minus />
            </Button>
            <Input
              type="number"
              value={amount.toFixed(0)}
              onChange={handleChange}
              className="w-10 [appearance:textfield] px-0 text-center shadow-xs [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <Button
              size="icon"
              onClick={handleIncrement}
              variant="ghost"
              className="rounded-full"
            >
              <Plus />
            </Button>
          </div>
          <Button variant={"secondary"} className="text-md font-bold shadow-md">
            <ShoppingCart />
            Añadir al carrito
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
