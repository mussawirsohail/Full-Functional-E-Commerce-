"use client"
import React from "react";
import Header2 from "../component/header2";
import Products from "../component/Products";
const Shop = () => {
  const products = [
    {
      image: '/photo.png',
      slug:"Graphic-Design",
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
      image: '/photo2.png',
      slug:"Graphic-Design-2",
      title: 'Graphic Design 2',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
      image: '/photo3.png',
      slug:"Graphic-Design-3",
      title: 'Graphic Design 3',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
      image: '/photo4.png',
      slug:"Graphic-Design-4",
      title: 'Graphic Design 4',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
        image: '/photo5.png',
        slug:'Graphic-Design-5',
        title: 'Graphic Design 5',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
      },
      {
        image: '/photo6.png',
        title: 'Graphic Design 6',
        slug:'Graphic-Design-6',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
      },
      {
        image: '/photo7.png',
        title: 'Graphic Design 7',
        slug:'Graphic-Design-7',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
      },
      {
        image: '/photo8.png',
        title: 'Graphic Design 8',
        slug:'Graphic-Design-8',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
      },
      
    {
        image: '/photo9.png',
        title: 'Graphic Design 9',
        slug:'Graphic-Design-9',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
      },
      {
        image: '/photo10.png',
        title: 'Graphic Design 10',
        slug:'Graphic-Design-10',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
      },
      {
        image: '/photo11.png',
        title: 'Graphic Design 11',
        slug:'Graphic-Design-11',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
      },
      {
        image: '/photo12.png',
        title: 'Graphic Design 12',
        slug:'Graphic-Design-12',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
      }
  ];

  const items = [
    { id: 1, name: 'Cloths', count: '5 Items', image: '/cloth1.png' },
    { id: 2, name: 'Cloths', count: '5 Items', image: '/cloth2.png' },
    { id: 3, name: 'Cloths', count: '5 Items', image: '/cloth3.png' },
    { id: 4, name: 'Cloths', count: '5 Items', image: '/cloth4.png' },
    { id: 5, name: 'Cloths', count: '5 Items', image: '/cloth5.png' },
  ];

  const brands = [
    { id: 1, name: 'Hooli', image: '/hooli.png' },
    { id: 2, name: 'Lyft', image: '/lyft.png' },
    { id: 3, name: 'Stripe', image: '/stripe.png' },
    { id: 4, name: 'AWS', image: '/aws.png' },
    { id: 5, name: 'Reddit', image: 'slice.png' },
  ];

  return (
    <>
      <Header2 />
      <div className="bg-gray-100 min-h-screen">
        <div className="text-center mb-10 px-4">
          <h1 className="text-3xl font-bold text-gray-800">Shop</h1>
          <p className="text-sm text-gray-500 font-bold">Home &gt; Shop</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-[100px] px-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[206px] object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.count}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-10 px-4">
          <p className="text-sm text-gray-500">Showing all 12 results</p>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
              Grid
            </button>
            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
              List
            </button>
            <select className="p-2 border rounded">
              <option>Popularity</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
            </select>
            <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-[94px] h-[50px]">
              Filter
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-12 px-4">
          {brands.map((brand) => (
            <div key={brand.id} className="w-24">
              <img
                src={brand.image}
                alt={brand.name}
                className="object-contain h-16"
              />
            </div>
          ))}
        </div>
        <div className="container mx-auto py-12 px-4">
          <h2 className="text-2xl text-center mb-4">Featured Products</h2>
          <h3 className="text-3xl font-bold text-center mb-4">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-center mb-10">
            Problems trying to resolve the conflict between
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <a
               key={product.slug}
               href={`/Shop/${product.slug}`}
               className="bg-white w-full overflow-hidden">
                <div
                  className="h-[300px] w-full bg-cover bg-center"
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
                  <div className="flex mt-4">
                    {product.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-6 h-6 rounded-full mr-2"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    
      {/* <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination> */}
    {/* <Products products={products}/> */}
    </>
  );
};

export default Shop;


