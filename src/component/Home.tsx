import { ChevronsRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from ".";

export default function Home() {
  return (
    <div className="flex flex-col pt-6 h-fit custom-bg w-full">

      <div className="px-5 ">
        <p className="bg-white bg-opacity-75 text-black text-xl font-semibold font-serif italic mt-4 p-12 rounded-lg px-5">
          Welcome to bookie, your one-stop shop for all your literary needs!
          <br />
          <br />
          At Bookie, we believe that books have the power to transport us to new worlds, expand our minds, and ignite our imagination. That's why we offer a wide selection of books from various genres, including fiction, non-fiction, biographies, self-help, and more.
          <br />
          <br />
          Whether you're a bookworm or a casual reader, we have something for everyone. Our user-friendly website makes it easy for you to browse through our collection, read book reviews, and make purchases with just a few clicks.
          <br />
          <br />
          Our mission is to provide our customers with an exceptional online shopping experience, and we strive to offer the best prices, fast shipping, and excellent customer service.
          <br />
          <br />
          Thank you for choosing Bookie. We hope you find the perfect book to add to your collection!
        </p>




        <div className=" flex flex-row justify-center  h-80 w-full px-5 pt-10 gap-5">
          <div className="child-bg  rounded-3xl  hover:shadow-zinc-900  shadow-white shadow-lg">
            <p className="pt-44 pr-16 text-xl font-semibold text-white italic text-center">"The World Belongs To Those Who Read." <br /> - "Rick Holland"</p>
          </div>
          <div className="child2-bg  rounded-3xl    shadow-white  hover:shadow-zinc-900 shadow-lg">
            <p className="pt-44 text-xl font-semibold text-white italic text-center">"Reading Gives Us Some Place To Go When We Have To Stay Where We Are." <br /> - "Mason Cooley"</p>
          </div>
          <div className="h-80 w-1/2">
            <Link to={"/books"}>
              <button className="flex gap-3 border ml-12 px-5 my-28 p-2 text-cyan-600 bg-white hover:shadow-zinc-900  shadow-sm rounded-2xl">
                Browse Books
                <ChevronsRight />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-row justify-center  h-60 w-full bg-white bg-opacity-75 mt-10 p-16 gap-60 rounded-xl">
          <div>
            <img src="https://gangarams.com/wp-content/uploads/2019/01/lock-free-img.png" className="pb-5 pl-8 h-20 w-30"></img>
            <p>SECURE PAYMENTS</p>
          </div>
          <div>
            <img src="https://gangarams.com/wp-content/uploads/2020/08/free-icon-book-71-150x150.png" className="pb-5 pl-12 h-20 w-30"></img>
            <p>WIDEST RANGE OF BOOKS</p>
          </div>
          <div>
            <img src="https://gangarams.com/wp-content/uploads/2019/01/tag-free-img.png" className="pb-5 pl-12 h-20 w-30"></img>
            <p>BEST OFFERS TO AVAIL</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}