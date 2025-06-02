import CategoryCarousel from "@/components/CategoryCarousel";
import CategoryPage from "@/components/CategoryPage";
import ProductCard from "@/components/ProductCard";
import SearchPage from "@/components/SearchPage";
import { ProductsFetchResponse } from "@/utils/types";

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

  if (search) return <SearchPage products={products} search={search} />;

  if (category) return <CategoryPage products={products} category={category} />;

  return (
    <main role="main" className="container mx-auto">
      <CategoryCarousel />
      <h3 className="text-center text-3xl font-bold">Todos los Productos</h3>
      <div className="grid-layout">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};
export default Home;
