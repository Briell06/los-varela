import { Product } from "@/utils/types";
import ProductCard from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface Props {
  products: Product[];
}

const CategoryProductsCarousel = ({ products }: Props) => {
  return (
    <div className="my-10 px-5">
      <p className="my-5 text-center text-3xl font-bold">
        Otros productos de la categoría{" "}
        <span className="font-extrabold text-blue-600">
          &quot;
          {products[0].category.charAt(0).toUpperCase() +
            products[0].category.slice(1)}
          &quot;
        </span>
      </p>
      <Carousel>
        <CarouselContent>
          {products.map((prod) => (
            <CarouselItem
              className="custom-basis custom-basis my-10 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              key={prod.id}
            >
              <ProductCard
                arrowRight={
                  products.at(products.length - 1)?.title.toLowerCase() !==
                  prod.title.toLowerCase()
                }
                arrowLeft={
                  products.at(0)?.title.toLowerCase() !==
                  prod.title.toLowerCase()
                }
                containerClassName="relative h-full"
                product={prod}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center max-md:hidden">
          <CarouselPrevious className="!relative" />
          <CarouselNext className="!relative" />
        </div>
      </Carousel>
    </div>
  );
};

export default CategoryProductsCarousel;
