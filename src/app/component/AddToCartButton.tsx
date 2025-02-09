"use client"

import { useCart } from "../Context/CartContext"
import { Button } from "./Button"

interface AddToCartButtonProps {
  productId: string
  productName: string
  price: number
  imageUrl: string
}

export default function AddToCartButton({ productId, productName, price, imageUrl }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ id: productId, name: productName, price, imageUrl })
  }

  return <Button onClick={handleAddToCart}>Add to Cart</Button>
}

