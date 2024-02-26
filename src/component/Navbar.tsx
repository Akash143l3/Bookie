import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsCtx } from "../store/product.ctx";
import { ShoppingCart,CircleUser } from "lucide-react";


export default function Navbar() {
  const { cart } = useContext(ProductsCtx);
  function msg(){
    return alert("You don't have an account in Bookie . Please Sign-in to continue")
  }

  return (
    <div className="h-16 flex sticky top-0 left-0 right-0 bg-white bg-opacity-75 backdrop-blur-sm items-center justify-between px-3 w-full border-b border-b-slate-300 z-50">
      <Link to={"/"}>
        <div className="flex items-center justify-center gap-1 text-lg font-medium">
          <img className="h-12 w-12" src="/WhatsApp_Image_2024-02-15_at_18.51.39_5b18a482-removebg-preview.png" />
          <h1 className=" font-extralight text-black"><b>BOOKIE</b></h1>
        </div>
      </Link>
      
      <ul className="flex gap-5 text-base items-center font-medium">
      <Link to={"/Books"}>Browse Books</Link>
      <Link to={"/About"}>About Us</Link>
      
        <Link to={"/cart"} className="flex">
          <ShoppingCart />
          <div className="bg-black flex items-center justify-center text-sm text-neutral-100 px-2 rounded-full">
            {cart.length}
          </div>
        </Link>
        <Link to={"/Auth/Signin"} ><button onClick={msg} className="pt-2"><CircleUser /></button></Link>
      </ul>
    </div>
  );
}