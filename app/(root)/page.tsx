import CategoryCarousel from "@/components/CategoryCarousel";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ProductsFetchResponse } from "@/utils/types";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ search?: string; category?: string }>;
}

const Home = async ({ searchParams }: Props) => {
  const search = (await searchParams).search;
  const category = (await searchParams).category;
  const { products }: ProductsFetchResponse = await fetch(
    "https://dummyjson.com/products",
    { next: { revalidate: 60 } },
  ).then((res) => res.json());

  if (search) {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    );

    return (
      <div>
        <div className="mx-4 mt-3">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft /> Volver a la tienda
            </Button>
          </Link>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center px-4">
          <h1 className="mb-4 text-2xl font-bold">Resultados de búsqueda</h1>
          <p className="mb-6 text-gray-600">
            {filteredProducts.length === 0 && "No se encontraron productos"}
            {filteredProducts.length === 1 &&
              `Se encontró ${filteredProducts.length} producto para "${search}"`}
            {filteredProducts.length > 1 &&
              `Se encontraron ${filteredProducts.length} productos para "${search}"`}
          </p>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (category) {
    const filteredProducts = products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase(),
    );
    return (
      <div className="container mx-auto">
        <div className="mt-4mx-3">
          <CategoryCarousel />
        </div>
        <div className="mx-4 mt-3">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft /> Volver a la tienda
            </Button>
          </Link>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center px-4">
          <h1 className="mb-4 text-2xl font-bold">Resultados de búsqueda</h1>
          <p className="mb-6 text-gray-600">
            {filteredProducts.length === 0 && "No se encontraron productos"}
            {filteredProducts.length === 1 &&
              `Se encontró ${filteredProducts.length} producto para "${category}"`}
            {filteredProducts.length > 1 &&
              `Se encontraron ${filteredProducts.length} productos para "${category}"`}
          </p>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <CategoryCarousel />
      <h3 className="text-center text-3xl font-bold">Todos los Productos</h3>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!search &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default Home;
