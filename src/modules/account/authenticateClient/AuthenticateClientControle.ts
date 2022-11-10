import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";
import { Response, Request } from "express";

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateCLientUseCase = new AuthenticateClientUseCase();
    const result = await authenticateCLientUseCase.execute({
      username,
      password,
    });
    return response.json(result);
  }
}
