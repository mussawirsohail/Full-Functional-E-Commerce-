"use client";
import React from "react";

const Shopmain = () => {
  const products = [
    {
      image: '/photo.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
      image: '/photo2.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
      image: '/photo3.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
      image: '/photo4.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
      image: '/photo5.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
      image: '/photo6.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
      image: '/photo7.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
      image: '/photo8.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
      image: '/photo9.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
      image: '/photo10.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
      image: '/photo11.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
      image: '/photo12.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl text-center mb-2">Featured Products</h2>
      <h3 className="text-3xl font-bold text-center mb-4">BESTSELLER PRODUCTS</h3>
      <p className="text-center text-gray-600 mb-8">
        Problems trying to resolve the conflict between
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
          >
            <div
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${product.image})` }}
            />
            <div className="p-4">
              <h4 className="text-lg font-medium mb-2">{product.title}</h4>
              <p className="text-gray-500 mb-4">{product.department}</p>
              <div className="flex items-center justify-between">
                <p className="text-gray-500 line-through mr-2">
                  ${product.originalPrice}
                </p>
                <p className="text-blue-500 font-medium">${product.price}</p>
              </div>
              <div className="flex mt-4 space-x-2">
                {product.colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="w-6 h-6 rounded-full border border-gray-200"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopmain;
