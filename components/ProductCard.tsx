import { cn } from "@/lib/utils";
import { Product } from "@/utils/types";
import { ArrowLeft, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CardFooterCartButton from "./CardFooterCartButton";
import CardFooterForm from "./CardFooterForm";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Props {
  product: Product;
  containerClassName?: string;
  arrowRight?: boolean;
  arrowLeft?: boolean;
}

const ProductCard = ({
  product,
  containerClassName,
  arrowRight,
  arrowLeft,
}: Props) => {
  return (
    <Card className={cn(containerClassName ?? "")}>
      <CardHeader className="">
        <Link href={`/productos/${product.id}`}>
          <CardTitle className="text-3xl">{product.title}</CardTitle>
        </Link>
        <Link
          className="w-fit hover:underline"
          href={`/?search=${product.category}`}
        >
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Link>
      </CardHeader>
      <CardContent className="relative my-auto">
        <Link href={`/productos/${product.id}`}>
          <Image
            src={product.thumbnail}
            className="rounded-lg"
            width={500}
            height={500}
            alt="image"
          />
        </Link>
        <span className="absolute top-0 text-2xl font-bold">
          {product.price}
        </span>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center justify-between">
          <CardFooterForm />
          <CardFooterCartButton />
        </div>
      </CardFooter>
      {arrowRight && (
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-3/6 right-2 animate-bounce rounded-full md:hidden"
        >
          <ArrowRightIcon className="text-lg" />
        </Button>
      )}

      {arrowLeft && (
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-3/6 left-2 animate-bounce rounded-full md:hidden"
        >
          <ArrowLeft className="text-lg" />
        </Button>
      )}
    </Card>
  );
};

export default ProductCard;
