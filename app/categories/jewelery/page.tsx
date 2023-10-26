import { ProductsComponent } from "@/components/products/productsComponent";
import { filterProductsByCategories, getAllProducts } from "@/utils";
export default async function Jewelery() {
  const allProducts = await getAllProducts();
  const products = filterProductsByCategories(allProducts, "jewelery");
  return (
    <div className="py-10">
      <h2 className="text-3xl text-center text-yellow-500 mb-5">Jewelery</h2>
      <ProductsComponent products={products} />
    </div>
  );
}
