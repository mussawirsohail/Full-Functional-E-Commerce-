// import Link from "next/link";

// export default function Header() {
//   return (
//     <>
//       <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[58px] bg-[#252B42] text-white px-4 py-2 md:space-x-40">
//         <div className="flex flex-col md:flex-row items-center md:w-[421px] space-y-2 md:space-y-0 md:space-x-7">
//           <div className="flex items-center space-x-2">
//             <img src="call.png" alt="Call" className="h-[16px] w-[16px]" />
//             <p className="text-sm">(225) 555-0118</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <img src="email.png" alt="Email" className="h-[16px] w-[16px]" />
//             <p className="text-sm">michelle.rivera@example.com</p>
//           </div>
//         </div>
//         <div className="text-center text-sm md:text-base md:w-[343px]">
//           <p>Follow Us and get a chance to win 80% off</p>
//         </div>
//         <div className="flex items-center space-x-4 mt-2 md:mt-0">
//           <p className="text-sm">Follow us:</p>
//           <img src="instagram.png" alt="Instagram" className="h-[26px] w-[26px]" />
//           <img src="youtube.png" alt="YouTube" className="h-[26px] w-[26px]" />
//           <img src="facebook.png" alt="Facebook" className="h-[26px] w-[26px]" />
//           <img src="twitter.png" alt="Twitter" className="h-[26px] w-[26px]" />
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 py-4 border-b">
//         <div className="text-2xl font-bold mb-4 md:mb-0">Bandage</div>
//         <div className="flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-10">
//           <Link href="/">
//             <p className="cursor-pointer hover:text-gray-400">Home</p>
//           </Link>
//           <Link href="/shop2">
//             <p className="cursor-pointer hover:text-gray-400">Shop</p>
//           </Link>
//           <Link href="#">
//             <p className="cursor-pointer hover:text-gray-400">About</p>
//           </Link>
//           <Link href="/Blogs">
//             <p className="cursor-pointer hover:text-gray-400">Blog</p>
//           </Link>
//           <Link href="/ContactUs">
//             <p className="cursor-pointer hover:text-gray-400">Contact</p>
//           </Link>
//         </div>
//         <div className="flex items-center space-x-4 mt-4 md:mt-0">
//           <div className="flex items-center space-x-2">
//             <img src="vector.png" alt="Login" className="h-[16px] w-[16px]" />
//             <Link href={"/login"}><p className="text-sm cursor-pointer">Login/ Register</p></Link>
//           </div>
//          <button> <img src="search.png" alt="Search" /> </button>
//          <Link href={"/wishlist"}><button> <img src="heart.png" alt="Heart" /></button></Link>
//          <Link href={"/CartPage"}><button> <img src="cart.png" alt="Cart"  /></button></Link>
//         </div>
//       </div>
//     </>
//   );
// }
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[58px] bg-[#252B42] text-white px-4 py-2 md:space-x-40">
        <div className="flex flex-col md:flex-row items-center md:w-[421px] space-y-2 md:space-y-0 md:space-x-7">
          <div className="flex items-center space-x-2">
            <img src="call.png" alt="Call" className="h-[16px] w-[16px]" />
            <p className="text-sm">(225) 555-0118</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src="email.png" alt="Email" className="h-[16px] w-[16px]" />
            <p className="text-sm">michelle.rivera@example.com</p>
          </div>
        </div>
        <div className="text-center text-sm md:text-base md:w-[343px]">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <p className="text-sm">Follow us:</p>
          <img src="instagram.png" alt="Instagram" className="h-[26px] w-[26px]" />
          <img src="youtube.png" alt="YouTube" className="h-[26px] w-[26px]" />
          <img src="facebook.png" alt="Facebook" className="h-[26px] w-[26px]" />
          <img src="twitter.png" alt="Twitter" className="h-[26px] w-[26px]" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 py-4 border-b">
        <div className="text-2xl font-bold mb-4 md:mb-0">Bandage</div>
        <div className="flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-10">
          <Link href="/">
            <p className="cursor-pointer hover:text-gray-400">Home</p>
          </Link>
          <Link href="/shop2">
            <p className="cursor-pointer hover:text-gray-400">Shop</p>
          </Link>
          <Link href="#">
            <p className="cursor-pointer hover:text-gray-400">About</p>
          </Link>
          <Link href="/Blogs">
            <p className="cursor-pointer hover:text-gray-400">Blog</p>
          </Link>
          <Link href="/ContactUs">
            <p className="cursor-pointer hover:text-gray-400">Contact</p>
          </Link>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="flex items-center space-x-2">
            <img src="vector.png" alt="Login" className="h-[16px] w-[16px]" />
            <Link href={"/login"}><p className="text-sm cursor-pointer">Login/ Register</p></Link>
          </div>
         <button> <img src="search.png" alt="Search" /> </button>
         <Link href={"/wishlist"}><button> <img src="heart.png" alt="Heart" /></button></Link>
         <Link href={"/CartPage"}><button> <img src="cart.png" alt="Cart"  /></button></Link>
        </div>
      </div>
    </>
  );
}
