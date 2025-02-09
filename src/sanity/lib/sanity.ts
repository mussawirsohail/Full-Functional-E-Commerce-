import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'mo4vi3xu',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-06-20',
})

export async function getProducts() {
  return client.fetch(`*[_type == "product"]{
    _id,
    title,
    price,
    "imageUrl": productImage.asset->url,
    tags,
    dicountPercentage,
    description,
    isNew
  }`)
}

export async function getProductById(id: string) {
  return client.fetch(`*[_type == "product" && _id == $id][0]{
    _id,
    title,
    price,
    "imageUrl": productImage.asset->url,
    tags,
    dicountPercentage,
    description,
    isNew
  }`, { id })
}

