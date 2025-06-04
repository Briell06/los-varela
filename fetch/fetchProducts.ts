import { Product, ProductsFetchResponse } from "@/utils/types";

export const fetchProducts = async () => {
  const { products }: ProductsFetchResponse = await fetch(
    "https://dummyjson.com/products",
    { next: { revalidate: 60 } },
  ).then((res) => res.json());

  return products;
};

export const FetchSingleProduct = async (id: number) => {
  const product: Product = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());

  return product;
};
