import { useContext } from "react";
import { ProductsCtx } from "../store/product.ctx";
import CartItem from "./cartItems"; 
import { CheckCircle, ShoppingCartIcon } from "lucide-react";

export default function Cart() {
  const { cart } = useContext(ProductsCtx);

  // Function to clean the price string and convert it to a number
  const cleanPrice = (priceString:string) => {
    // Remove any non-numeric characters except the decimal point
    const numericString = priceString.replace(/[^\d.]/g, '');
    return parseFloat(numericString);
  };

  // Calculate the subtotal
  const subtotal = cart.reduce((total, product) => {
    return total + cleanPrice(product.price);
  }, 0);

  return (
    <div className="p-5 flex flex-col gap-3">
      <h1 className="text-2xl font-bold">My Cart</h1>
      <div className="flex gap-3">
        <div className="flex flex-[3] flex-col gap-3">
          {cart.length === 0 ? (
            <div className="w-full border-dashed h-96 rounded-lg flex flex-col justify-center items-center border border-neutral-200">
              <ShoppingCartIcon className="h-20 w-20 text-neutral-200" />
              <span className="text-center text-xl font-medium">No items</span>
            </div>
          ) : (
            cart.map((product, index) => (
              <CartItem key={`${product.isbn13}-${index}`} data={product} />
            ))
            
            
          )}
        </div>
        <div className="flex-1 flex flex-col gap-5 h-fit border border-neutral-200 rounded-lg p-4">
          <h2 className="text-lg font-bold">Subtotal</h2>
          <p className="text-xl font-extrabold ">
            Total: $ {subtotal.toFixed(2)}
          </p>
          <button
            onClick={() => {}}
            className="bg-purple-900 text-sm flex items-center gap-2 justify-center hover:bg-purple-800 text-neutral-100 px-4 py-2 rounded-md"
          >
            <CheckCircle />
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
