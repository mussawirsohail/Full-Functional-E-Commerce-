'use client'

import { useState, useEffect } from 'react'
import { CustomButton } from './CustomButton'

interface WishlistButtonProps {
  productId: string
  productName: string
}

export default function WishlistButton({ productId, productName }: WishlistButtonProps) {
  const [isInWishlist, setIsInWishlist] = useState(false)

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
    setIsInWishlist(wishlist.some((item: { id: string }) => item.id === productId))
  }, [productId])

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
    const updatedWishlist = isInWishlist
      ? wishlist.filter((item: { id: string }) => item.id !== productId)
      : [...wishlist, { id: productId, name: productName }]

    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
    setIsInWishlist(!isInWishlist)
  }

  return (
    <CustomButton 
      onClick={toggleWishlist} 
      variant="outline"
      className={`flex items-center justify-center ${isInWishlist ? "bg-blue-100" : ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isInWishlist ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 mr-2"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      <span>{isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</span>
    </CustomButton>
  )
}
