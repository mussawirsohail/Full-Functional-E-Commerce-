// "use client";

// import React, { createContext, useContext, useReducer, ReactNode } from "react";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image:string
// }

// interface CartState {
//   items: CartItem[];
// }

// interface CartContextProps extends CartState {
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
//   clearCart: () => void;
// }

// const CartContext = createContext<CartContextProps | undefined>(undefined);

// const cartReducer = (state: CartState, action: any): CartState => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const existingItem = state.items.find((item) => item.id === action.payload.id);
//       if (existingItem) {
//         return {
//           ...state,
//           items: state.items.map((item) =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       }
//       return {
//         ...state,
//         items: [...state.items, { ...action.payload, quantity: 1 }],
//       };
//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload),
//       };
//     case "CLEAR_CART":
//       return { ...state, items: [] };
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [state, dispatch] = useReducer(cartReducer, { items: [] });

//   const addToCart = (item: CartItem) => dispatch({ type: "ADD_TO_CART", payload: item });
//   const removeFromCart = (id: string) => dispatch({ type: "REMOVE_FROM_CART", payload: id });
//   const clearCart = () => dispatch({ type: "CLEAR_CART" });

//   return (
//     <CartContext.Provider value={{ ...state, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = (): CartContextProps => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };
// // "use client"

// // import type React from "react"
// // import { createContext, useState, useContext, useEffect } from "react"

// // export interface CartItem {
// //   id: string
// //   name: string
// //   price: number
// //   quantity: number
// //   imageUrl: string
// // }

// // interface CartContextType {
// //   cart: CartItem[]
// //   addToCart: (item: Omit<CartItem, "quantity">) => void
// //   removeFromCart: (id: string) => void
// //   clearCart: () => void
// // }

// // const CartContext = createContext<CartContextType | undefined>(undefined)

// // export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
// //   const [cart, setCart] = useState<CartItem[]>([])

// //   useEffect(() => {
// //     const savedCart = localStorage.getItem("cart")
// //     if (savedCart) {
// //       setCart(JSON.parse(savedCart))
// //     }
// //   }, [])

// //   useEffect(() => {
// //     localStorage.setItem("cart", JSON.stringify(cart))
// //   }, [cart])

// //   const addToCart = (item: Omit<CartItem, "quantity">) => {
// //     setCart((prevCart) => {
// //       return [...prevCart, { ...item, quantity: 1 }]
// //     })
// //   }

// //   const removeFromCart = (id: string) => {
// //     setCart((prevCart) => prevCart.filter((item) => item.id !== id))
// //   }

// //   const clearCart = () => {
// //     setCart([])
// //   }

// //   return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
// // }

// // export const useCart = () => {
// //   const context = useContext(CartContext)
// //   if (context === undefined) {
// //     throw new Error("useCart must be used within a CartProvider")
// //   }
// //   return context
// // }

// "use client"

// import type React from "react"
// import { createContext, useState, useContext, useEffect } from "react"

// export interface CartItem {
//   id: string
//   name: string
//   price: number
//   quantity: number
//   imageUrl: string
// }

// interface CartContextType {
//   cart: CartItem[]
//   addToCart: (item: Omit<CartItem, "quantity">) => void
//   removeFromCart: (id: string) => void
//   clearCart: () => void
// }

// const CartContext = createContext<CartContextType | undefined>(undefined)

// export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [cart, setCart] = useState<CartItem[]>([])

//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart")
//     if (savedCart) {
//       setCart(JSON.parse(savedCart))
//     }
//   }, [])

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart))
//   }, [cart])

//   const addToCart = (item: Omit<CartItem, "quantity">) => {
//     setCart((prevCart) => {
//       return [...prevCart, { ...item, quantity: 1 }]
//     })
//   }

//   const removeFromCart = (id: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id))
//   }

//   const clearCart = () => {
//     setCart([])
//   }

//   return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
// }

// export const useCart = () => {
//   const context = useContext(CartContext)
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider")
//   }
//   return context
// }

"use client"
import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface CartItem {
  id: string
  name: string
  price: number
  imageUrl: string
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
}

