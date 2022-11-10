import { Response } from "express";
import { Request } from "express";
import { CreateDeliverymanUsecase } from "./CreateDeliverymanUsecase";

export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createDeliverymanUsecase = new CreateDeliverymanUsecase();
    const result = await createDeliverymanUsecase.execute({
      username,
      password,
    });
    return response.json(result);
  }
}
