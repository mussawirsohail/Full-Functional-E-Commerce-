import Link from "next/link";

export default function Header3() {
  return (
    <div className="Header px-4 py-6 sm:px-6 md:px-12">
      <div className="mb-4 sm:mb-0">
        <h1 className="text-2xl sm:text-3xl font-bold">Bandage</h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-0 w-full sm:w-auto">
        <div className="flex flex-col sm:flex-row sm:space-x-8 text-center sm:text-left mb-4 sm:mb-0 w-full sm:w-auto">
          <Link href={"/"}>
            <p className="text-lg cursor-pointer">Home</p>
          </Link>
          <Link href={"/pricing"}>
            <p className="text-lg cursor-pointer">Pricing</p>
          </Link>
          <Link href={"/ContactUs"}>
            <p className="text-lg cursor-pointer">Contact</p>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-center w-full sm:w-auto">
        <Link href={"/login"}><button className="w-full sm:w-[100px] h-[52px]  bg-white text-blue-500 mb-4 sm:mb-0">Login</button></Link>
          <Link href={"/getintouch"}>
            <button className="w-full sm:w-[214px] h-[52px] rounded-md bg-blue-500 text-white p-2">
              Become a member
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
