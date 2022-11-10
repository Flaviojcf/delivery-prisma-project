import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { sign } from "jsonwebtoken";

interface AuthenticateClientUseCaseProps {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ password, username }: AuthenticateClientUseCaseProps) {
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });
    if (!client) {
      throw new Error("User doesn't exists");
    }
    const passwordMatch = await compare(password, client.password);
    if (!passwordMatch) {
      throw new Error("Password invalid");
    }

    const token = sign({ username }, "1e0e091617e2e3356d0d3f602e4becc3", {
      subject: client.id,
      expiresIn: "1d",
    });
    return token;
  }
}
