import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { sign } from "jsonwebtoken";

interface AuthenticateDeliverymanUseCaseProps {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ password, username }: AuthenticateDeliverymanUseCaseProps) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });
    if (!deliveryman) {
      throw new Error("User doesn't exists");
    }
    const passwordMatch = await compare(password, deliveryman.password);
    if (!passwordMatch) {
      throw new Error("Password invalid");
    }

    const token = sign({ username }, "1e0e091617e2e3356d0d3f602e4becc3", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });
    return token;
  }
}
