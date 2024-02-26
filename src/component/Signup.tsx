import { Link } from "react-router-dom";
import Button from "./button";
import Input from "./input";

export default function Signup() {
  return (
    <div className="flex justify-center pt-10" >
      <form className="flex flex-col gap-5 px-20 pt-10 shadow-xl shadow-cyan-300  rounded-xl">
        <p className=" text-right p-2 text-cyan-400 font-semibold "><Link to={"/"}>Back</Link></p>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-extrabold">Create Account</h1>
          <p className="text-base text-neutral-600">to explore our shop</p>
        </div>
        <div className="flex flex-col items-center w-80 gap-5 pb-10 pt-5">
        <Input placeholder="Name"/>
        <Input  placeholder="Email"/>
        <Input  placeholder="Password" />
        <Button className="py-13"> Sign-Up</Button>
        
        <p>Already have an account ?  <Link to={"/Auth/Signin"} className=" text-cyan-400 font-semibold"> Sign-In</Link></p>
        </div>
      </form>
    </div>
  );
}