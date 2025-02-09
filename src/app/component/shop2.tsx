"use client"
import React, { useState } from "react";

const ShopPage = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional Information" },
    { id: "reviews", label: "Reviews (0)" },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen p-6 ]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAFAFA] p-6 h-[598px] w-[1050">
        <div>
          <img
            src="/shop1.png"
            alt="Floating Phone"
            className=" object-cover rounded- h-[450] w-[506px]"
          />
          <div className="flex mt-4 gap-4">
            <img
              src="/chair.png"
              alt="Thumbnail 1"
              className="w-[100] h-[75px]  border-gray-300"
            />
            <img
              src="/smallshop.png"
              alt="Thumbnail 2"
              className="w-[100] h-[75px] border-gray-300"
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Floating Phone</h1>
          <div className="flex items-center gap-2 my-2">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-gray-500 text-sm">(10 Reviews)</span>
          </div>
          <p className="text-2xl font-semibold text-gray-800">$1,139.33</p>
          <p className="text-green-600 font-semibold my-2">In Stock</p>
          <p className="text-gray-600 text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
            <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
            <div className="w-6 h-6 bg-black rounded-full"></div>
          </div>
          <button className="mt-[180px] bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
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
        <div className="mt-4">
          {activeTab === "description" && (
            <p className="text-gray-600">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          )}
          {activeTab === "additional" && (
            <ul className="text-gray-600 list-disc pl-6">
              <li>The quick fox jumps over the lazy dog</li>
              <li>The quick fox jumps over the lazy dog</li>
              <li>The quick fox jumps over the lazy dog</li>
            </ul>
          )}
          {activeTab === "reviews" && (
            <p className="text-gray-600">No reviews yet. Be the first to review!</p>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default ShopPage;

