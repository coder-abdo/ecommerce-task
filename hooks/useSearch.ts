import { IProduct } from "@/utils";
import { ChangeEvent, useState } from "react";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const filterProducts = (products: IProduct[]) => {
    const result = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    return result;
  };
  return { searchTerm, handleSearch, filterProducts };
};
