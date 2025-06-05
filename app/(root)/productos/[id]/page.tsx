// import { FetchSingleProduct } from "@/fetch/fetchProducts";
import Image from "next/image";

import CardFooterCartButton from "@/components/CardFooterCartButton";
import CardFooterForm from "@/components/CardFooterForm";
import CategoryProductsCarousel from "@/components/CategoryProductsCarousel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { fetchProducts, FetchSingleProduct } from "@/fetch/fetchProducts";
import { Home } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ id: number }>;
}

const ProductDetailPage = async ({ params }: Props) => {
  const product = await FetchSingleProduct((await params).id);
  const products = await fetchProducts();
  const filteredProductsByCategory = products.filter(
    (p) => p.category === product.category && p.title !== product.title,
  );

  return (
    <>
      <section className="mt-10 p-4">
        <div className="flex items-center justify-start">
          <Button
            asChild
            className="text-md m-0 mb-5 w-fit p-0 font-bold wrap-normal hover:underline"
            variant={"link"}
          >
            <Link href={"/"}>
              <Home className="size-5" /> Inicio{" "}
              <Separator orientation="vertical" className="mx-2 h-full" />
            </Link>
          </Button>
          <span className="text-md mb-5 inline-flex items-center font-light tracking-widest">
            {product.title}
          </span>
        </div>
        <Card className="md:flex-row md:items-center md:justify-center md:py-10 lg:mx-5 lg:px-5 lg:py-5 xl:px-15 xl:py-20">
          <CardHeader className="flex-1">
            <Link href={product.thumbnail}>
              <Image
                width={500}
                height={500}
                src={product.thumbnail}
                alt={product.title}
              />
            </Link>
          </CardHeader>
          <CardContent className="flex-1">
            <CardTitle className="text-3xl md:text-center md:text-4xl">
              {product.title}
            </CardTitle>
            <p className="bg-accent my-5 w-2/5 rounded-3xl py-2 text-center font-extrabold shadow-md md:mx-auto lg:my-10 dark:shadow-black">
              {product.price} USD
            </p>
            <CardDescription className="md:text-center">
              {product.description}
            </CardDescription>
            <div className="mx-auto mt-5 flex w-full flex-col items-center justify-center gap-5">
              <CardFooterForm />
              <CardFooterCartButton className="!w-[100%] xl:mt-5 xl:!w-10/12" />
            </div>
          </CardContent>
        </Card>
      </section>
      <section>
        <CategoryProductsCarousel products={filteredProductsByCategory} />
      </section>
    </>
  );
};

export default ProductDetailPage;
