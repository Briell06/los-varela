import { PageProps } from "@/utils/types";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";

const SearchPage = async ({ products, search }: PageProps) => {
  const filteredProducts = products.filter((product) => {
    if (search) {
      return product.title.toLowerCase().includes(search.toLowerCase());
    }
  });

  return (
    <main role="main" className="container mx-auto">
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
        <div className="grid-layout">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
