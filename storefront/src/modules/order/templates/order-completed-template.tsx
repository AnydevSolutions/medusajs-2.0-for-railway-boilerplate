import { Order } from "@medusajs/medusa"
import { Heading } from "@medusajs/ui"
import { cookies } from "next/headers"
import {CheckCircleSolid} from "@medusajs/icons"
import CartTotals from "@modules/common/components/cart-totals"
import Help from "@modules/order/components/help"
import Items from "@modules/order/components/items"
import OnboardingCta from "@modules/order/components/onboarding-cta"
import OrderDetails from "@modules/order/components/order-details"
import ShippingDetails from "@modules/order/components/shipping-details"
import PaymentDetails from "@modules/order/components/payment-details"

type OrderCompletedTemplateProps = {
  order: Order
}

export default function OrderCompletedTemplate({
  order,
}: OrderCompletedTemplateProps) {
  const isOnboarding = cookies().get("_medusa_onboarding")?.value === "true"

  return (
    <div className="py-6 min-h-[calc(100vh-64px)]">
      <div className="content-container flex flex-col justify-center items-center gap-y-10 max-w-4xl h-full w-full">
        {isOnboarding && <OnboardingCta orderId={order.id} />}
        <div className="flex flex-col gap-4 max-w-4xl h-full bg-white w-full py-10" data-testid="order-complete-container">
          <Heading
            level="h1"
            className="grid grid-cols-1 gap-y-3 text-center justify-center items-center text-ui-fg-base text-3xl mb-4 bg-green-600 text-white p-6 rounded-3xl"
          >
            <span>Gracias!</span>
            <span className="flex justify-center items-center">Tu compra ha sido procesada. </span>
            

            
          </Heading>
          
          <OrderDetails order={order} />
          <Heading level="h2" className="flex flex-row text-3xl-regular">
            Resumen
          </Heading>
          <Items items={order.items} region={order.region} />
          <CartTotals data={order} />
          <ShippingDetails order={order} />
          <PaymentDetails order={order} />
          <Help />
        </div>
      </div>
    </div>
  )
}
