import { getProducts } from "@/sanity/lib/sanity";
import Products from "../component/Products";

import ProductPage from "../product/[id]/page";
import Header2 from "../component/header2";

export default async function Shop2 () {
  const products = await getProducts()

  return (
    <>
    <Header2/>
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Product Catalog</h1>
      <Products products={products}/>

    </main>
    </>
  )
}