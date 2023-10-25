import { getAllProducts } from "@/utils";
import { Proudcts } from "@/components/products";
import { Navbar } from "@/components/navbar";
export default async function Home() {
  const products = await getAllProducts();
  return (
    <main>
      <h2 className="capitalize text-4xl text-yellow-600 mb-5">All products</h2>
      <Proudcts products={products} />
    </main>
  );
}
