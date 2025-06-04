import { PageProps } from "@/utils/types";
import GoBackLink from "./GoBackLink";
import ProductCard from "./ProductCard";
import Results from "./Results";

const SearchPage = async ({ products, search }: PageProps) => {
  const filteredProducts = products.filter((product) => {
    if (search) {
      return product.title.toLowerCase().includes(search.toLowerCase());
    }
  });

  return (
    <>
      <GoBackLink />
      <Results filteredProducts={filteredProducts} string={search ?? ""} />
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

export default SearchPage;
