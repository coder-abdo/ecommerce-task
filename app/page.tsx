import { getAllProducts } from "@/utils";
import { Proudcts } from "@/components/products";
import { Navbar } from "@/components/navbar";
export default async function Home() {
  const products = await getAllProducts();
  return (
    <main className="py-5 px-4">
      <h2 className="capitalize text-center text-4xl text-yellow-600 mb-5">
        All products
      </h2>
      <Proudcts products={products} />
    </main>
  );
}
