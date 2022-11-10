import { prisma } from "../../../../database/prismaClient";

interface CreateDeliveryUseCaseProps {
  item_name: string;
  id_client: string;
}

export class CreateDeliveryUseCase {
  async execute({ item_name, id_client }: CreateDeliveryUseCaseProps) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
      },
    });

    return delivery;
  }
}
