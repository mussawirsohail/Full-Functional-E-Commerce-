import Link from "next/link";

export default function Header2() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between w-full h-[58px] bg-[#23856D] border-black text-white px-4 py-2">
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-7 mb-2 sm:mb-0">
          <div className="flex items-center mb-2 sm:mb-0">
            <img src="call.png" alt="" className="h-[16px] w-[16px] m-[5px]" />
            <p>(225) 555-0118</p>
          </div>
          <div className="flex items-center mb-2 sm:mb-0">
            <img src="email.png" alt="" className="h-[16px] w-[16px] m-[5px]" />
            <p>michelle.rivera@example.com</p>
          </div>
        </div>
        <div className="hidden sm:block h-[44px] w-[343px] mt-[15px]">
          <p className="TopHeaderText">Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex space-x-3 sm:space-x-4 items-center mb-2 sm:mb-0">
          <p>Follow us: </p>
          <img src="instagram.png" alt="" className="h-[26px] w-[26px]" />
          <img src="youtube.png" alt="" className="h-[26px] w-[26px]" />
          <img src="facebook.png" alt="" className="h-[26px] w-[26px]" />
          <img src="twitter.png" alt="" className="h-[26px] w-[26px]" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-4 bg-white">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Bandage</h1>
        </div>
        <div className="flex space-x-4 sm:space-x-8 mt-4 sm:mt-0">
          <Link href={"/"}>
            <p className="text-lg cursor-pointer">Home</p>
          </Link>
          <Link href={"/shop2"}>
            <p className="text-lg cursor-pointer">Shop</p>
          </Link>
          <Link href={"/ContactUs"}>
            <p className="text-lg cursor-pointer">About</p>
          </Link>
          <Link href={"/Blogs"}>
            <p className="text-lg cursor-pointer">Blog</p>
          </Link>
          <Link href={"/"}>
            <p className="text-lg cursor-pointer">Contact</p>
          </Link>
        </div>
        <div className="flex space-x-4 items-center mt-4 sm:mt-0">
          <div className="flex items-center">
            <img src="vector.png" alt="" className="h-[16px] w-[16px] m-[5px]" />
            <Link href={"/login"}> <p className="ml-2 text-sm">Login / Register</p></Link>
          </div>
          <img src="search.png" alt="search" className="h-[46px] w-[56px] cursor-pointer" />
          <Link href={"/wishlist"}><img src="heart.png" alt="heart" className="h-[46px] w-[56px] cursor-pointer" /></Link>
          <Link href={"/CartPage"}><img src="cart.png" alt="cart" className="h-[46px] w-[56px] cursor-pointer" /></Link>
        </div>
      </div>
    </>
  );
}
