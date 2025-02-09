import React from "react";
import Header3 from "../component/header3";

const ContactSection = () => {
  return (
    <>
    <Header3/>
    <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 sm:px-12 md:px-24 py-12">
      <div className="text-center lg:text-left lg:max-w-md">
        <h4 className="text-sm font-semibold text-gray-600 uppercase">Contact Us</h4>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 my-4">
          Get in touch today!
        </h1>
        <p className="text-gray-600 mb-6">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="mb-4">
          <p className="text-gray-800 font-medium">
            Phone: <span className="font-semibold">+451 215 215</span>
          </p>
          <p className="text-gray-800 font-medium">
            Fax: <span className="font-semibold">+451 215 215</span>
          </p>
        </div>
        <div className="flex justify-center lg:justify-start gap-4">
          <img src="blackt.png" className="text-gray-800 hover:text-blue-500"/>
            <i className="fab fa-twitter text-xl"></i>
        
          <img src="blackf.png"  className="text-gray-800 hover:text-blue-500"/>
            <i className="fab fa-facebook-f text-xl"></i>
        
          <img src="instaBlack.png"  className="text-gray-800 hover:text-blue-500"/>
            <i className="fab fa-instagram text-xl"></i>
          
          <img src="blackl.png"  className="text-gray-800 hover:text-blue-500"/>
            <i className="fab fa-linkedin-in text-xl"></i>
        </div>
      </div>
      <div className="mt-8 lg:mt-0">
        <div className="relative">
          <img
            src="/getintouch.png"
            alt="Family shopping"
            className="max-w-full h-auto"
          />
          <div className="absolute top-0 left-0 w-32 h-32 bg-pink-100 rounded-full -z-10" />
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactSection;
