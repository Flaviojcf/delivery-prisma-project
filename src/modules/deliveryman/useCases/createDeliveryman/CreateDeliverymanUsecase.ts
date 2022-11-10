import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface CreateDeliverymanUsecaseProps {
  username: string;
  password: string;
}

export class CreateDeliverymanUsecase {
  async execute({ password, username }: CreateDeliverymanUsecaseProps) {
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (deliverymanExist) {
      throw new Error("Deliveryman already exists");
    }
    const hasPassowrd = await hash(password, 10);

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hasPassowrd,
      },
    });
    return deliveryman
  }
}
