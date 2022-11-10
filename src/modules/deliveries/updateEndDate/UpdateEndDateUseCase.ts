import { prisma } from "../../../database/prismaClient";

interface UpdateEndDateUseCaseProps {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateEndDateUseCase {
  async execute({ id_delivery, id_deliveryman }: UpdateEndDateUseCaseProps) {
    const result = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman,
      },
      data: {
        end_at: new Date(),
      },
    });
    return result;
  }
}