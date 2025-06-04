import { PageProps } from "@/utils/types";
import CategoryCarousel from "./CategoryCarousel";
import GoBackLink from "./GoBackLink";
import ProductCard from "./ProductCard";
import Results from "./Results";

const CategoryPage = async ({ products, category }: PageProps) => {
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category?.toLowerCase(),
  );
  return (
    <>
      <div className="mx-3 mt-4">
        <CategoryCarousel />
      </div>
      <GoBackLink />
      <Results filteredProducts={filteredProducts} string={category ?? ""} />
      <div className="container mx-auto">
        <section className="grid-layout">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>
    </>
  );
};

export default CategoryPage;
