"use client";

import { FC } from "react";
import { IProduct } from "@/utils";
import Image from "next/image";
import { RatingComp } from "../ratings";
import { DollarSign } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  product: IProduct;
}
export const ProductsDetails: FC<Props> = ({ product }) => {
  return (
    <main className="py-5 px-4">
      <h2 className="text-3xl text-yellow-500 capitalize text-center">
        {product.title}
      </h2>
      <section className="w-full flex justify-center py-5">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={100}
        />
      </section>
      <section className="py-5">
        <h4 className="text-lg text-yellow-600 font-semibold">Description:</h4>
        <p className="text-lg">{product.description}</p>
      </section>
      <section className="py-5">
        <h5 className="flex items-center gap-1 mb-4">
          <span className="text-xl text-yellow-600">Price:</span>
          <span className="text-2xl font-semibold">{product.price}</span>
          <DollarSign className="text-sm" />
        </h5>
        <div className="flex gap-2">
          <span className="text-yellow-600 text-xl font-semibold">
            Rating:({product.rating.rate})
          </span>
          <div className="w-28">
            <RatingComp ratings={product.rating.rate} />
          </div>
        </div>
      </section>
      <Button asChild className="bg-yellow-500 text-black hover:bg-black hover:text-yellow-500">
        <Link href={"/"}>Back to Home</Link>
      </Button>
    </main>
  );
};
