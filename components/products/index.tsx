"use client";

import { Input } from "@/components/ui/input";
import { useSearch } from "@/hooks/useSearch";
import { ProductsComponent } from "./productsComponent";
import { IProduct } from "@/utils";
import { FC } from "react";

interface Props {
  products: IProduct[];
}
export const Proudcts: FC<Props> = ({ products }) => {
  const { filterProducts, searchTerm, handleSearch } = useSearch();
  const filteredProducts = filterProducts(products);
  return (
    <>
      <Input
        type="search"
        placeholder="search"
        value={searchTerm}
        onChange={handleSearch}
        className="mb-5 max-w-[1090px] mx-auto w-full"
      />
      <ProductsComponent products={filteredProducts} />
    </>
  );
};
