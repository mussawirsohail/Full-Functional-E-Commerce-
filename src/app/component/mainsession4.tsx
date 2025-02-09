
import React from "react";
import Image from "next/image";

const ProductPage = () => {
  return (
    <>
      {/* Header Section */}
      <div className="bg-[#23856D] text-white flex flex-col md:flex-row items-center md:items-start py-8 px-4 md:px-8">
        <header className="md:w-1/2">
          <p className="text-lg mb-5">SUMMER 2020</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Vita Classic Product
          </h1>
          <h2 className="text-lg md:text-xl font-bold mb-4 mt-4">
            We know how large objects will act. We know how small objects will act.
          </h2>
          <div className="flex items-center space-x-4 mt-4">
            <p className="text-lg font-bold">$16.48</p>
            <button className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              ADD TO CART
            </button>
          </div>
        </header>

        {/* Product Image */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src="/man.png"
            alt="Product Image"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Secondary Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start py-12 px-4 md:px-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="hero.png" alt="Hero Section" className="max-w-full rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 text-center md:text-left">
          <p className="text-gray-400 mb-2">Summer 2020</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Part of the Neural <br /> Universe
          </h2>
          <p className="text-lg mb-4 text-gray-400">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-6 rounded">
              BUY NOW
            </button>
            <a
              href="#"
              className="text-green-400 hover:text-green-600 font-bold py-2 px-4 rounded"
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
