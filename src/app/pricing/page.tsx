"use client"
import React, { useState } from 'react';
import Header3 from '../component/header3';

export default function Pricing() {
    const brands = [
        { id: 1, name: "Hooli", image: "/hooli.png" },
        { id: 2, name: "Lyft", image: "/lyft.png" },
        { id: 3, name: "Stripe", image: "/stripe.png" },
        { id: 4, name: "AWS", image: "/aws.png" },
        { id: 5, name: "Reddit", image: "slice.png" },
      ];
  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  return (
    <>
    <Header3/>
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Simple Pricing</h1>
        <p className="text-gray-500 mb-6">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        <div className="flex items-center justify-center mb-8">
          <span className="text-gray-600">Monthly</span>
          <button
            className={`mx-4 p-1 w-16 bg-gray-200 rounded-full flex items-center ${
              isYearly ? 'justify-end' : 'justify-start'
            }`}
            onClick={toggleBilling}
          >
            <span className="w-6 h-6 bg-grey rounded-full"></span>
          </button>
          <span className="text-gray-600">Yearly <span className="text-blue-500 font-bold">Save 25%</span></span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Free Plan */}
        <div className="premium">
          <h2 className="text-xl font-semibold mb-4">FREE</h2>
          <p className="text-gray-500 mb-4">Organize across all apps by hand</p>
          <p className="text-4xl font-bold mb-4 text-[#23A6F0]">$0</p>
          <p className="text-gray-500 mb-4">Per Month</p>
          <ul className="mb-6">
            <li className="text-gray-600">✅ Unlimited product updates</li>
          </ul>
        </div>

        {/* Standard Plan */}
        <div className="bg-[#252B42] text-white shadow-md rounded-lg p-6 text-center relative">
          
          <h2 className="text-xl font-semibold mb-4">STANDARD</h2>
          <p className="text-gray-200 mb-4">Organize across all apps by hand</p>
          <p className="text-4xl font-bold mb-4  text-[#23A6F0]">
            ${isYearly ? '7.49' : '9.99'}
          </p>
          <p className="text-gray-200 mb-4">Per Month</p>
          <ul className="mb-6">
            <li>✅ Unlimited product updates</li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="premium">
          <h2 className="text-xl font-semibold mb-4">PREMIUM</h2>
          <p className="text-gray-500 mb-4">Organize across all apps by hand</p>
          <p className="text-4xl font-bold mb-4  text-[#23A6F0]">
            ${isYearly ? '14.99' : '19.99'}
          </p>
          <p className="text-gray-500 mb-4">Per Month</p>
          <ul className="mb-6">
            <li className="text-gray-600">✅ Unlimited product updates</li>
          </ul>
          
        </div>
      </div>
    </div>
<p className='text-xl text-center p-[25px]'>Trusted By Over 4000 Big Companies</p>
     <div className="flex justify-around items-center">
     {brands.map((brand) => (
       <div key={brand.id} className="w-24">
         <img src={brand.image} alt={brand.name} className="object-contain h-16" />
       </div>
     ))}
   </div>
   <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Pricing FAQs</h1>
        <p className="text-center text-gray-500 mb-10">
          Problems trying to resolve the conflict between the two major realms of Classical physics
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-lg"
            >
              <span className="text-blue-500 text-2xl font-bold">&gt;</span>
              <div>
                <h3 className="font-semibold text-lg">
                  the quick fox jumps over the lazy dog
                </h3>
                <p className="text-gray-500 text-sm">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
                  consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
              </div>
              
            </div>
            
          ))}
        </div>
      </div>

      {/* Support Link */}
      <div className="text-center my-10">
        <p className="text-gray-600">
          Haven't got your answer?{' '}
          <a href="/support" className=  "text-gray-600 hover:text-blue-500 underline">
            Contact our support
          </a>
        </p>
      </div>

      {/* Free Trial Section */}
      <div className="bg-white py-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start your 14 days free trial</h2>
          <p className="text-gray-500 mb-6">
            Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do met sent. RELIT official
            consequent.
          </p>
          <button className="bg-[#23A6F0] text-white px-6 py-2  hover:bg-blue-600">
            Try it free now
          </button>

          <div className="flex justify-center gap-6 mt-6">
           
            <img src="twitterB.png" alt="" className='w-[30px] h-[24px]'/>
            <img src="facebookDB.png" alt="" className='w-[30px] h-[30px]'/>
            <img src="instaBlack.png" alt="" className='w-[30px] h-[30px]'/>
            <img src="linkedin.png" alt="" className='w-[30px] h-[30px]'/>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}
