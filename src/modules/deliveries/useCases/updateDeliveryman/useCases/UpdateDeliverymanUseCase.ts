import { prisma } from "../../../../../database/prismaClient";

interface UpdateDeliverymanUseCaseProps {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: UpdateDeliverymanUseCaseProps) {
    const result = await prisma.deliveries.update({
        where:{
            id:id_delivery,
        },
        data : {
            id_deliveryman
        }
    })
    return result
  }
}
