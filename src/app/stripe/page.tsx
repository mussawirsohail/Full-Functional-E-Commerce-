"use client";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_51QlWxGRuxuzvuiRUtGMq9VkiOCJ2nQ5fmYdM94bKNy5Ax2g1ugo6mH9fA1JKEXgw0IDeT5GD1jxhgHroTF8VOF1u00gEPkl68s");

export default function Home5() {
  const handleCheckout = async () => {
    const stripeUI = await stripe;
    let sessionResponse: any = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        data: [],
      }),
    });
    sessionResponse = await sessionResponse.json();

    stripeUI?.redirectToCheckout({
      sessionId: sessionResponse.sessionId,
    });
  };

  return (
    <>
      <button
        onClick={handleCheckout}
        className="w-[200px] h-[70px] bg-purple-400"
      >
        Checkout
      </button>
    </>
  );
}