"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const CardFooterForm = () => {
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
    <div className="flex gap-0.5">
      <Button
        size="icon"
        role="button"
        aria-labelledby="decrementar cantidad"
        aria-label="decrementar cantidad"
        onClick={handleDecrement}
        variant={"ghost"}
        className="rounded-full"
      >
        <Minus />
      </Button>
      <Input
        type="number"
        aria-label="cantidad"
        aria-describedby="cantidad de productos"
        value={amount.toFixed(0)}
        onChange={handleChange}
        className="w-10 [appearance:textfield] px-0 text-center shadow-xs [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <Button
        size="icon"
        role="button"
        aria-label="incrementar cantidad"
        aria-labelledby="incrementar cantidad"
        onClick={handleIncrement}
        variant="ghost"
        className="rounded-full"
      >
        <Plus />
      </Button>
    </div>
  );
};

export default CardFooterForm;
