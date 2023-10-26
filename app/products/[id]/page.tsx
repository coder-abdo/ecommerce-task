import { ProductsDetails } from "@/components/product/productDetails";
import { getproductById } from "@/utils";

export default async function ProductDetails({
  params,
}: {
  params: { id: number };
}) {
  const product = await getproductById(params.id);
  return <ProductsDetails product={product}/>;
}
