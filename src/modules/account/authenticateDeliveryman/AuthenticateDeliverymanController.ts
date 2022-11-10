import { Response, Request } from "express";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateCLientUseCase = new AuthenticateDeliverymanUseCase();
    const result = await authenticateCLientUseCase.execute({
      username,
      password,
    });
    return response.json(result);
  }
}
