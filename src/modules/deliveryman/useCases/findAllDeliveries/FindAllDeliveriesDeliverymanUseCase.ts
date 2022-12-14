import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesDeliverymanUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: id_client,
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });
    return deliveries
  }
}
