import Image from "next/image";
import ProductPage from "../component/mainsession4";
import Header from "../component/header";
import Section5 from "../component/section5";
import Shopmain from "../component/shopmain";
import Product from "../Shop/[slug]/page";

export default function Home2() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <Image
          src="/pic1.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 text-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          <p className="text-sm sm:text-base lg:text-lg mb-2">Summer 2020</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">NEW COLLECTION</h1>
          <p className="text-sm sm:text-base md:text-lg text-center mb-6 max-w-md">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-sm sm:text-base transition duration-300 ease-in-out transform hover:scale-105">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Editor's Pick Section */}
      {/* <section className="my-12 sm:my-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">Editor's Pick</h2>
          <p className="text-gray-600 text-center text-sm sm:text-base mb-6 max-w-2xl mx-auto">
            Problems trying to resolve the conflict between
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative aspect-w-3 aspect-h-4">
              <Image
                src="/hero-men.png"
                alt="Men"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative aspect-w-3 aspect-h-4">
              <Image
                src="/hero-women.png"
                alt="Women"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-w-3 aspect-h-2">
                <Image
                  src="/hero-accecories.png"
                  alt="Accessories"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="relative aspect-w-3 aspect-h-2">
                <Image
                  src="/hero-kids.png"
                  alt="Kids"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
        <div className="container mx-auto px-4 py-8">
  {/* Header Section */}
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold">Editor's Pick</h2>
    <p className="text-gray-600">
      Problems trying to resolve the conflict between
    </p>
  </div>

  {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {/* MEN */}
    <div className="relative group">
      <div className="aspect-square">
        <img
          src="filter.png"
          alt="Men"
          className="rounded-lg w-full h-full object-cover object-top"
        />
      </div>
      <button className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-2 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
        MEN
      </button>
    </div>

    {/* WOMEN */}
    <div className="relative group">
      <div className="aspect-square">
        <img
          src="filter-2.png"
          alt="Women"
          className="rounded-lg w-full h-full object-cover object-top"
        />
      </div>
      <button className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-2 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
        WOMEN
      </button>
    </div>

    {/* ACCESSORIES */}
    <div className="relative group">
      <div className="aspect-square">
        <img
          src="filter-3.png"
          alt="Accessories"
          className="rounded-lg w-full h-full object-cover object-center"
        />
      </div>
      <button className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-2 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
        ACCESSORIES
      </button>
    </div>

    {/* KIDS */}
    <div className="relative group sm:col-span-2 md:col-span-1">
      <div className="aspect-square">
        <img
          src="filter-4.png"
          alt="Kids"
          className="rounded-lg w-full h-full object-cover object-center"
        />
      </div>
      <button className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-2 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
        KIDS
      </button>
    </div>
  </div>
</div>

      <Shopmain/>
      <ProductPage />
      <Section5/>
    </>
  );
}

