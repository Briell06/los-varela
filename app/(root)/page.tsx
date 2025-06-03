import CategoryCarousel from "@/components/CategoryCarousel";
import CategoryPage from "@/components/CategoryPage";
import ProductCard from "@/components/ProductCard";
import SearchPage from "@/components/SearchPage";
import fetchProducts from "@/hooks/fetchProducts";

interface Props {
  searchParams: Promise<{ search?: string; category?: string }>;
}

const Home = async ({ searchParams }: Props) => {
  const products = await fetchProducts();
  const category = (await searchParams).category;
  const search = (await searchParams).search;

  if (search) return <SearchPage products={products} search={search} />;

  if (category) return <CategoryPage products={products} category={category} />;

  return (
    <>
      <CategoryCarousel />
      <h3 className="text-center text-3xl font-bold">Todos los Productos</h3>
      <div className="grid-layout">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default Home;
