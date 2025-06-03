import { ProductsFetchResponse } from "@/utils/types";

const fetchProducts = async () => {
  const { products }: ProductsFetchResponse = await fetch(
    "https://dummyjson.com/products",
    { next: { revalidate: 60 } },
  ).then((res) => res.json());

  return products;
};

export default fetchProducts;
