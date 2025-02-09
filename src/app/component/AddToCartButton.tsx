"use client"
import { useCart } from "../Context/CartContext"
import { Button } from "./Button"
interface AddToCartButtonProps {
  productId: string
  productName: string
  price: number
  imageUrl: string
  quantity?: number // Make it optional with a default value
}

export default function AddToCartButton({ productId, productName, price, imageUrl, quantity = 1 }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ id: productId, name: productName, price, imageUrl, quantity })
  }

  return <Button onClick={handleAddToCart}>Add to Cart</Button>
}

