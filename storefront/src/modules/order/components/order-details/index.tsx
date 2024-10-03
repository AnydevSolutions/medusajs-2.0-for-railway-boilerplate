import { Order } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

type OrderDetailsProps = {
  order: Order
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  // Mapea el estatus al español
  const translateStatus = (status: string) => {
    const statusMap: { [key: string]: string } = {
      "pending": "Pendiente",
      "completed": "Completado",
      "shipped": "Enviado",
      "canceled": "Cancelado",
      "partially_shipped": "Parcialmente enviado",
      "requires_action": "Requiere acción",
      "not_fulfilled": "No cumplido",
      "fulfilled": "Cumplido",
      "partially_fulfilled": "Parcialmente cumplido",
      "refunded": "Reembolsado",
      "partially_refunded": "Parcialmente reembolsado",
      "paid": "Pagado",
      "awaiting_payment": "En espera de pago",
      "unpaid": "No pagado",
      "processing": "Procesando",
      "captured":"Capturado"
      // Agrega más estados si es necesario
    }

    return statusMap[status] || status
  }

  return (
    <div>
      <Text>
        Hemos enviado los datos de confirmación del pedido a{" "}
        <span className="text-ui-fg-medium-plus font-semibold" data-testid="order-email">
          {order.email}
        </span>
        .
      </Text>
      <Text className="mt-2">
        Fecha de la orden: <span data-testid="order-date" className="capitalize">{new Date(order.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
      </Text>
      <Text className="mt-2 text-ui-fg-interactive">
        Numero de orden: <span data-testid="order-id">{order.display_id}</span>
      </Text>

      <div className="flex items-center text-compact-small gap-x-4 mt-4">
        {showStatus && (
          <>
            <Text>
              Estatus de la orden:{" "}
              <span className="text-ui-fg-subtle" data-testid="order-status">
                {translateStatus(order.fulfillment_status)}
              </span>
            </Text>
            <Text>
              Estatus del pago:{" "}
              <span className="text-ui-fg-subtle" data-testid="order-payment-status">
                {translateStatus(order.payment_status)}
              </span>
            </Text>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetails
