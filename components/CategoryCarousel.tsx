import CarouselCard from "./CarouselCard";
import { Carousel, CarouselContent } from "./ui/carousel";

const CategoryCarousel = async () => {
  const categories: string[] = await fetch(
    "https://dummyjson.com/products/category-list",
    { next: { revalidate: 60 } },
  ).then((res) => res.json());

  return (
    <div className="my-15 px-5">
      <p className="mb-5 text-center text-2xl font-bold">Explorar Categorías</p>
      <Carousel>
        <CarouselContent>
          {categories.map((category: string) => (
            <CarouselCard key={category} category={category} />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
