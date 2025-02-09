import { defineQuery } from "next-sanity";

export const allProducts = defineQuery(
    `*[_type == "product" ] {
            productName,
            discription,
            image,
            price,
            category,
            inventory,
            colors,
            status,
            "imageurl": image.asset->url
}`)
