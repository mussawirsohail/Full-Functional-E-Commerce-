import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY || "sk_test_51QlWxGRuxuzvuiRUlYD0HrrqcvbtXwiCpyJb6zraWXUZCXwo1DOY4UYvQZdVBFxUY5i8SHpcv3gfwb9KZEuujdfy00nrau7hI9", {
   apiVersion:"2025-01-27.acacia"
})

export async function POST(req: NextApiRequest) {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            success_url: "https://www.google.com/",
            cancel_url: "https://www.fast.com",
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: "Product 1",
                            description: "This is my stripe test product"
                        },
                        unit_amount: 2000
                    }
                }
            ]
        })
        console.log("Session ID :", session.id)
        return NextResponse.json({ sessionId: session.id })
    } catch (err) {
        return NextResponse.json({ err: err })
    }
}