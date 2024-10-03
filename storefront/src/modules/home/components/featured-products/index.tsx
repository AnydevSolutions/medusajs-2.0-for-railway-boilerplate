import { Region } from "@medusajs/medusa"

import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCollectionWithPreviews } from "types/global"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
}) {
  return collections.map((collection) => (
    <>
    <div className="text-center max-w-3xl mx-auto pt-[4rem]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestra <span className="gradient-text">Tienda</span>
          </h2>
          <p className="mt-4  leading-6 text-gray-500">
            Ver nuestros productos y servicios
          </p>
    </div>
    <li key={collection.id}>
      <ProductRail collection={collection} region={region} />
    </li>
    </>
  ))
}
