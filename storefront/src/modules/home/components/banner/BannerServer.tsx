// BannerServer.tsx (Server Component)
import { getCustomer } from "@lib/data"; // Importamos la función para obtener el customer

export default async function BannerServer() {
  const customer = await getCustomer().catch(() => null);
  return customer;
}
