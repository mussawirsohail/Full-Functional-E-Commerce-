// "use client"
// import { getProductById } from "@/sanity/lib/sanity"
// import Image from "next/image"
// import Link from "next/link"
// import { CustomButton } from "@/app/component/CustomButton"
// import WishlistButton from "@/app/component/WishlistButton"
// import { useState, useEffect } from "react"
// import { CommentSection } from "@/app/component/CommentSection"
// import Header from "@/app/component/header"

// interface PageProps {
//   params: {
//     id: string
//   }
// }

// export default function ProductPage({ params }: PageProps) {
//   const [product, setProduct] = useState<any>(null)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//         const fetchedProduct = await getProductById(params.id)
//         setProduct(fetchedProduct)
//       } catch (error) {
//         console.error("Error fetching product:", error)
//         setError("Product not found")
//       }
//     }

//     fetchProduct()
//   }, [params.id])

//   if (error) {
//     return <div>{error}</div>
//   }

//   if (!product) {
//     return <div>Loading...</div>
//   }

//   return (
//     <>
//     <Header/>
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex justify-between items-center mb-8">
//         <Link href="/shop2" className="text-blue-600 hover:underline">
//           &larr; Back to all products
//         </Link>
//         <div className="flex gap-4">
//           <Link href="/CartPage" className="flex items-center text-blue-600 hover:underline">
//             <span>View Cart</span>
//           </Link>
//           <Link href="/wishlist" className="flex items-center text-blue-600 hover:underline">
//             <span>View Wishlist</span>
//           </Link>
//         </div>
//       </div>
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="relative aspect-square">
//           <Image
//             src={product.imageUrl || "/placeholder.svg"}
//             alt={product.title}
//             fill
//             sizes="(max-width: 768px) 100vw, 50vw"
//             style={{ objectFit: "cover" }}
//             className="rounded-lg"
//           />
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
//           <div className="flex items-center gap-2 my-2">
//             <span className="text-yellow-500 text-lg">★★★★★</span>
//             <span className="text-gray-500 text-sm">(10 Reviews)</span>
//           </div>
//           <p className="text-2xl font-semibold text-gray-800 mb-2">${product.price.toFixed(2)}</p>
//           <p className="text-green-600 font-semibold mb-4">In Stock</p>

//           <div className="flex items-center gap-2 mb-6">
//             <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
//             <div className="w-6 h-6 bg-green-500 rounded-full"></div>
//             <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
//             <div className="w-6 h-6 bg-black rounded-full"></div>
//           </div>
//           <div className="flex gap-4">
//             <CustomButton
//               onClick={() => {
//                 // Add to cart functionality
//                 console.log("Added to cart:", product._id)
//               }}
//             >
//               Add to Cart
//             </CustomButton>
//             <WishlistButton productId={product._id} productName={product.title} />
//           </div>
//           {product.discountPercentage > 0 && <p className="text-red-500 mt-4">{product.discountPercentage}% off</p>}
//           <div className="mt-4">
//             {product.tags &&
//               product.tags.map((tag: string, index: number) => (
//                 <span
//                   key={index}
//                   className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//                 >
//                   {tag}
//                 </span>
//               ))}
//           </div>
//           <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
//           {product.isNew && <p className="text-green-500 font-semibold mt-4">New Product</p>}
//         </div>
//       </div>
//       <CommentSection />
//     </div>
//     </>
//   )
// }
"use client"
import { getProductById } from "@/sanity/lib/sanity"
import Image from "next/image"
import Link from "next/link"
import { CustomButton } from "@/app/component/CustomButton"
import WishlistButton from "@/app/component/WishlistButton"
import { useState, useEffect } from "react"
import { CommentSection } from "@/app/component/CommentSection"
import Header from "@/app/component/header"
import { useCart } from "@/app/Context/CartContext"

interface PageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: PageProps) {
  const [product, setProduct] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const { addToCart } = useCart()

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct = await getProductById(params.id)
        setProduct(fetchedProduct)
      } catch (error) {
        console.error("Error fetching product:", error)
        setError("Product not found")
      }
    }

    fetchProduct()
  }, [params.id])

  if (error) {
    return <div>{error}</div>
  }

  if (!product) {
    return <div>Loading...</div>
  }

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    })
    console.log("Added to cart:", product._id)
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/shop2" className="text-blue-600 hover:underline">
            &larr; Back to all products
          </Link>
          <div className="flex gap-4">
            <Link href="/CartPage" className="flex items-center text-blue-600 hover:underline">
              <span>View Cart</span>
            </Link>
            <Link href="/wishlist" className="flex items-center text-blue-600 hover:underline">
              <span>View Wishlist</span>
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
            <div className="flex items-center gap-2 my-2">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span className="text-gray-500 text-sm">(10 Reviews)</span>
            </div>
            <p className="text-2xl font-semibold text-gray-800 mb-2">${product.price.toFixed(2)}</p>
            <p className="text-green-600 font-semibold mb-4">In Stock</p>

            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
              <div className="w-6 h-6 bg-black rounded-full"></div>
            </div>
            <div className="flex gap-4">
              <CustomButton onClick={handleAddToCart}>Add to Cart</CustomButton>
              <WishlistButton productId={product._id} productName={product.title} />
            </div>
            {product.discountPercentage > 0 && <p className="text-red-500 mt-4">{product.discountPercentage}% off</p>}
            <div className="mt-4">
              {product.tags &&
                product.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
            {product.isNew && <p className="text-green-500 font-semibold mt-4">New Product</p>}
          </div>
        </div>
        <CommentSection />
      </div>
    </>
  )
}

