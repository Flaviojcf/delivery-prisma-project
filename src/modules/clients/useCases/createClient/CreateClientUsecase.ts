import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface CreateClientProps {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ password, username }: CreateClientProps) {
    const clientExist = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (clientExist) {
      throw new Error("Client already exists");
    }
    const hashPassword = await hash(password, 10);

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });
    return client;
  }
}
