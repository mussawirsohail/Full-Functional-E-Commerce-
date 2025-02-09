"use server"

import { cookies } from "next/headers"

export async function addToCart(productId: string) {
  const cartItems = cookies().get("cartItems")?.value
  const updatedCartItems = cartItems ? JSON.parse(cartItems) : []

  const existingItemIndex = updatedCartItems.findIndex((item: { id: string }) => item.id === productId)

  if (existingItemIndex > -1) {
    updatedCartItems[existingItemIndex].quantity += 1
  } else {
    updatedCartItems.push({ id: productId, quantity: 1 })
  }

  cookies().set("cartItems", JSON.stringify(updatedCartItems))
}

export async function getCartItems() {
  const cartItems = cookies().get("cartItems")?.value
  return cartItems ? JSON.parse(cartItems) : []
}

