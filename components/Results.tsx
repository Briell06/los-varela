import { Product } from "@/utils/types";
interface Props {
  filteredProducts: Product[];
  string: string;
}

const Results = ({ filteredProducts, string }: Props) => {
  return (
    <div className="mt-5 flex flex-col items-center justify-center px-4">
      <h1 className="mb-4 text-2xl font-bold">Resultados de búsqueda</h1>
      <p className="mb-6 text-gray-600">
        {filteredProducts.length === 0 && "No se encontraron productos"}
        {filteredProducts.length === 1 &&
          `Se encontró ${filteredProducts.length} producto para "${string}"`}
        {filteredProducts.length > 1 &&
          `Se encontraron ${filteredProducts.length} productos para "${string}"`}
      </p>
    </div>
  );
};

export default Results;
