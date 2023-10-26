"use client";
import { IProduct } from "@/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC } from "react";
import Image from "next/image";
import { RatingComp } from "@/components/ratings";
import { DollarSign } from "lucide-react";
import Link from "next/link";
interface Props {
  product: IProduct;
}
export const Product: FC<Props> = ({ product }) => {
  return (
    <Card className="w-[350px] flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="hover:text-yellow-500 hover:underline hover:cursor-pointer">
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={product.image}
          className="w-80 h-40 bg-transparent"
          width={320}
          height={150}
          alt={`${product.title}`}
          priority
        />
      </CardContent>
      <CardFooter className="flex gap-2">
        <h4 className="flex text-xl">
          <DollarSign />
          <span>{product.price}</span>
        </h4>
        <RatingComp ratings={product.rating.rate} />
      </CardFooter>
    </Card>
  );
};
