import { useContext } from "react";
import Product from "./product";
import { ProductsCtx } from "../store/product.ctx";
import ProductSkeleton from "./product.Skeleton";
import { Footer } from ".";

export default function Books() {
  const { products } = useContext(ProductsCtx);

  return (
    <div>
    <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-5 py-5 h-full px-5">
      {products.length === 0
        ? Array(8)
            .fill(10)
            .map((_, index) => <ProductSkeleton key={index} />)
        : products.map((product) => (
            <Product key={product.title} data={product} />
          ))}
          </div>
          <Footer />
    </div>
  );
}