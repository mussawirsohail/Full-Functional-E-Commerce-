// "use client"

// import { useCart } from "../Context/CartContext"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "../component/Button"

// export default function CartPage() {
//   const { cart, removeFromCart, clearCart } = useCart()

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="divide-y divide-gray-200">
//             {cart.map((item) => (
//               <li key={item.id} className="py-4 flex items-center">
//                 <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
//                   <Image
//                     src={item.imageUrl || "/placeholder.svg"}
//                     alt={item.name}
//                     width={96}
//                     height={96}
//                     className="w-full h-full object-center object-cover"
//                   />
//                 </div>
//                 <div className="ml-4 flex-1 flex flex-col">
//                   <div>
//                     <div className="flex justify-between text-base font-medium text-gray-900">
//                       <h3>{item.name}</h3>
//                       <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
//                     </div>
//                     <p className="mt-1 text-sm text-gray-500">Quantity: {item.quantity}</p>
//                   </div>
//                   <div className="flex-1 flex items-end justify-between text-sm">
//                     <Button onClick={() => removeFromCart(item.id)} variant="destructive" size="sm">
//                       Remove
//                     </Button>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-8 flex justify-between items-center">
//             <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
//             <div>
//               <Button onClick={clearCart} variant="outline" className="mr-4">
//                 Clear Cart
//               </Button>
//               <Button>Checkout</Button>
//             </div>
//           </div>
//         </>
//       )}
//       <Link href="/" className="mt-8 inline-block text-blue-600 hover:underline">
//         &larr; Continue Shopping
//       </Link>
//     </div>
//   )
// }


"use client"

import { useCart } from "../Context/CartContext"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../component/Button"

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cart.map((item, index) => (
              <li key={`${item.id}-${index}`} className="py-4 flex items-center">
                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                  <Image
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="ml-4 flex-1 flex flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{item.name}</h3>
                      <p className="ml-4">${item.price.toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex-1 flex items-end justify-between text-sm">
                    <Button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-between items-center">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <div>
              <Button onClick={clearCart} className="mr-4">
                Clear Cart
              </Button>
              <Link href={"/checkout"}><Button>Checkout</Button></Link>
            </div>
          </div>
        </>
      )}
      <Link href="/" className="mt-8 inline-block text-blue-600 hover:underline">
        &larr; Continue Shopping
      </Link>
    </div>
  )
}


