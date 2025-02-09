"use client"
import React, { useState } from "react";
import { useEffect } from "react";
import Header2 from "../component/header2";
const ShopPage = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional Information" },
    { id: "reviews", label: "Reviews (0)" },
  ];
  const brands = [
    { id: 1, name: "Hooli", image: "/hooli.png" },
    { id: 2, name: "Lyft", image: "/lyft.png" },
    { id: 3, name: "Stripe", image: "/stripe.png" },
    { id: 4, name: "AWS", image: "/aws.png" },
    { id: 5, name: "Reddit", image: "slice.png" },
  ];
    const products = [
      {
        id: 1,
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        discountedPrice: "$6.48",
        image: "/fixed-height.png",
      },
      {
        id: 2,
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        discountedPrice: "$6.48",
        image: "/fixed-height-2.png",
      },
      {
        id: 3,
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        discountedPrice: "$6.48",
        image: "/fixed-height-3.png",
      },
      {
        id: 4,
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        discountedPrice: "$6.48",
        image: "/fixed-height-4.png",
      },
      {
        id: 5,
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        discountedPrice: "$6.48",
        image: "/fixed-height-5.png",
      },
      {
        id: 6,
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        discountedPrice: "$6.48",
        image: "/fixed-height-6.png",
      },
      {
        id: 7,
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        discountedPrice: "$6.48",
        image: "/fixed-height-7.png",
      },
      {
        id: 8,
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        discountedPrice: "$6.48",
        image: "/fixed-height-8.png",
      },
    ];
    
  
  

  return (
    <>
    <Header2/>
    <div className="bg-[#FAFAFA] min-h-screen p-6 ]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 bg-[#FAFAFA] p-6">
  <div>
    <img
      src="/shop1.png"
      alt="Floating Phone"
      className="object-cover rounded-md w-full max-h-96"
    />
    <div className="flex mt-4 gap-4">
      <img
        src="/chair.png"
        alt="Thumbnail 1"
        className="w-24 h-20 object-cover border border-gray-300 rounded-md"
      />
      <img
        src="/smallshop.png"
        alt="Thumbnail 2"
        className="w-24 h-20 object-cover border border-gray-300 rounded-md"
      />
    </div>
  </div>

  {/* Right Section */}
  <div>
    <h1 className="text-2xl font-bold text-gray-800 mb-2">Floating Phone</h1>
    <div className="flex items-center gap-2 my-2">
      <span className="text-yellow-500 text-lg">★★★★★</span>
      <span className="text-gray-500 text-sm">(10 Reviews)</span>
    </div>
    <p className="text-2xl font-semibold text-gray-800 mb-2">$1,139.33</p>
    <p className="text-green-600 font-semibold mb-4">In Stock</p>
    <p className="text-gray-600 text-sm leading-relaxed mb-4">
      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
      RELIT official consequent door ENIM RELIT Mollie.
    </p>
    <div className="flex items-center gap-2 mb-6">
      <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
      <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
      <div className="w-6 h-6 bg-black rounded-full"></div>
    </div>
    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
      Select Options
    </button>
  </div>
</div>

      <div className="container mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
        <div className="flex border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
                <div className="flex flex-col lg:flex-row lg:h-auto w-full justify-evenly mx-4 my-8">
            <div className="w-full lg:w-1/3 h-auto flex justify-center mb-8 lg:mb-0">
                <img src="dicor.png" alt="" className="w-4/5 h-auto" />
            </div>
            <div className="w-full lg:w-1/3 h-auto flex flex-col justify-center px-4">
                <p className="text-2xl lg:text-3xl font-semibold mb-4">the quick fox jumps over</p>
                <p className="text-sm lg:text-base leading-relaxed text-gray-700">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.<br /><br />
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.<br /><br />
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
            </div>
            <div className="w-full lg:w-1/3 h-auto flex flex-col justify-between px-4">
                <p className="text-2xl lg:text-3xl font-semibold mb-4">the quick fox jumps over</p>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <img src="right-arrow.png" alt="" className="h-4 w-4 mr-2" />
                        <p className="text-sm lg:text-base">a quick brown fox jumps over a lazy dog</p>
                    </div>
                    <div className="flex items-center">
                        <img src="right-arrow.png" alt="" className="h-4 w-4 mr-2" />
                        <p className="text-sm lg:text-base">a quick brown fox jumps over a lazy dog</p>
                    </div>
                    <div className="flex items-center">
                        <img src="right-arrow.png" alt="" className="h-4 w-4 mr-2" />
                        <p className="text-sm lg:text-base">a quick brown fox jumps over a lazy dog</p>
                    </div>
                    <div className="flex items-center">
                        <img src="right-arrow.png" alt="" className="h-4 w-4 mr-2" />
                        <p className="text-sm lg:text-base">a quick brown fox jumps over a lazy dog</p>
                    </div>
                </div>

                <p className="text-2xl lg:text-3xl font-semibold mt-8">the quick fox jumps over</p>
                <div className="space-y-4 mt-4">
                    <div className="flex items-center">
                        <img src="right-arrow.png" alt="" className="h-4 w-4 mr-2" />
                        <p className="text-sm lg:text-base">a quick brown fox jumps over a lazy dog</p>
                    </div>
                    <div className="flex items-center">
                        <img src="right-arrow.png" alt="" className="h-4 w-4 mr-2" />
                        <p className="text-sm lg:text-base">a quick brown fox jumps over a lazy dog</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          BESTSELLER PRODUCTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-gray-800 font-bold text-base">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {product.department}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-gray-400 line-through text-sm">
                    {product.originalPrice}
                  </span>
                  <span className="text-green-600 font-bold text-sm">
                    {product.discountedPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 items-center">
  {brands.map((brand) => (
    <div key={brand.id} className="w-24 sm:w-32 md:w-40 lg:w-48">
      <img
        src={brand.image}
        alt={brand.name}
        className="object-contain h-16 sm:h-20 md:h-24 lg:h-28"
      />
    </div>
  ))}
</div>
    </>
    
  );
};

export default ShopPage;

