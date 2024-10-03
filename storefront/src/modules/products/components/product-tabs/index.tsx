"use client"
import { Button, Text } from "@medusajs/ui";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import { RocketLaunch,Puzzle,EllipseGreenSolid } from "@medusajs/icons"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"

type ProductTabsProps = {
  product: PricedProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Información del servicio",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Beneficios",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Paquete</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Desarrollado en</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Tipo</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Hosting</span>
            <p>{product.weight ? `${product.weight} Año` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Secciones</span>
            <p>
            {product.height ? `${product.height} +` : "-"}
            </p>
          </div>
        </div>
      </div>
      {product.tags?.length ? (
  <div>
    <span className="font-semibold">Tags</span>
    <div className="flex flex-wrap gap-2 mt-2">
      {product.tags.map((tag, index) => (
        <button
        
          key={index}
          className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-sm font-medium px-4 py-2 rounded-full focus:none"
        >
          {tag.value}
        </button>
      ))}
    </div>
  </div>
) : null}
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <RocketLaunch />
          <div>
            <span className="font-semibold">Implementación inmediata</span>
            <p className="max-w-sm">
              Tu sitio web quedará implementado de 5 a 10 días hábiles, además podrás realizar 5 cambios dentro del periodo de desarrollo
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Puzzle />
          <div>
            <span className="font-semibold">Turbo Addons</span>
            <p className="max-w-sm">
              Agrega cualquier funcionalidad a tu sitio web, ¡tranquilo! no tienes que hacerlo ahora.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <EllipseGreenSolid />
          <div>
            <span className="font-semibold">Pago seguro</span>
            <p className="max-w-sm">
              Descuida, nuestro pagos están protegidos y encriptados, tu dinero siempre estará seguro hasta que finalice tu desarrollo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
