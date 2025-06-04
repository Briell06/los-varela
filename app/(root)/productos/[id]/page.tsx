// import { FetchSingleProduct } from "@/fetch/fetchProducts";

interface Props {
  params: Promise<{ id: number }>;
}

const SingleProductPage = async ({ params }: Props) => {
  const id = (await params).id;
  // const product = await FetchSingleProduct(id);

  return <div>{id}</div>;
};

export default SingleProductPage;
