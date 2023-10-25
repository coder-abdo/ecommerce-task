"use client";

import { IProduct } from "@/utils";
import { FC } from "react";
import { Product } from "../product";

interface Props {
  products: IProduct[];
}
export const Proudcts: FC<Props> = ({ products }) => {
  return (
    <div className="flex gap-5 flex-wrap justify-center mx-auto w-11/12">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
