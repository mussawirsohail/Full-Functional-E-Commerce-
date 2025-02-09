// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'

// interface Product {
//   _id: string
//   title: string
//   price: number
//   imageUrl: string
//   tags: string[]
//   dicountPercentage: number
//   description: string
//   isNew: boolean
// }

// export default function Products({ products }: { products: Product[] }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {products.map((product) => (
//         <Link href={`/product/${product._id}`} key={product._id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
//           <div className="relative h-64">
//             <Image
//               src={product.imageUrl || "/placeholder.svg"}
//               alt={product.title}
//               fill
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               style={{ objectFit: 'cover' }}
//             />
//             {product.isNew && (
//               <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
//                 New
//               </span>
//             )}
//           </div>
//           <div className="p-4">
//             <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
//             <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
//             {product.dicountPercentage > 0 && (
//               <p className="text-red-500 mb-2">
//                 {product.dicountPercentage}% off
//               </p>
//             )}
//             <p className="text-gray-700 mb-2 line-clamp-2">{product.description}</p>
//             <div className="flex flex-wrap gap-2">
//               {product.tags.slice(0, 3).map((tag, index) => (
//                 <span
//                   key={index}
//                   className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   )
// }

"use client"

import Image from "next/image"
import Link from "next/link"

interface Product {
  _id: string
  title: string
  price: number
  imageUrl: string
  tags: string[]
  discountPercentage: number
  description: string
  isNew: boolean
}

export default function Products({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          href={`/product/${product._id}`}
          key={product._id}
          className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-64">
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
            {product.isNew && (
              <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">New</span>
            )}
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
            {product.discountPercentage > 0 && <p className="text-red-500 mb-2">{product.discountPercentage}% off</p>}
            <p className="text-gray-700 mb-2 line-clamp-2">{product.description}</p>
            <div className="flex flex-wrap gap-2">
              {product.tags &&
                product.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

