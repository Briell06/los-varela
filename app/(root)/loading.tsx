import CategorySkeleton from "@/components/CategorySkeleton";
import ProductSkeleton from "@/components/ProductSkeleton";
import { Carousel, CarouselContent } from "@/components/ui/carousel";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

const loading = () => {
  return (
    <>
      <div className="my-15 px-5">
        <p className="mb-5 text-center text-2xl font-bold">
          Explorar Categorías
        </p>
        <Carousel>
          <CarouselContent>
            <CategorySkeleton />
            <CategorySkeleton />
            <CategorySkeleton />
            <CategorySkeleton />
            <CategorySkeleton />
          </CarouselContent>
        </Carousel>
      </div>
      <h3 className="text-center text-3xl font-bold">Todos los Productos</h3>
      <div className="grid-layout">
        {skeletons.map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    </>
  );
};

export default loading;
