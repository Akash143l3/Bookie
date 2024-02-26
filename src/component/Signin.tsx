import { Link } from "react-router-dom"
import Button from "./button"
import Input from "./input"

export default function Signin() {
    return (
        <div className="flex justify-center pt-10" >
      <form className="flex flex-col  gap-5 px-20 pt-5  shadow-cyan-300 shadow-xl  rounded-xl">
      <p className=" text-right font-semibold pt-8 text-cyan-400"><Link to={"/"}>Back</Link></p>
        <div className="flex flex-col items-center py-5">
          <h1 className="text-3xl font-extrabold"> Sign In To Continue</h1>
          <p className="text-base text-neutral-600">to explore our shop</p>
        </div>
        <div className="flex flex-col items-center w-80 py-5 gap-5 ">
        <Input  placeholder="Email"/>
        <Input  placeholder="Password" />
        </div>
        <div className="flex flex-col items-center pb-10">
  
        <Button className="py-13">  Sign-In  </Button>
        <br/>
        <p>Don't have an account ? <Link to={"/Auth/Signup"} className=" text-cyan-400 font-semibold">Sign-Up</Link></p>
        </div>
      </form>
    </div>
    )
}