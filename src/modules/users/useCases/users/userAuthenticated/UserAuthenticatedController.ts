import { Response } from "express";

class UserAuthenticatedController {
  async handle(request, response: Response): Promise<Response> {
    const { user } = request;
    return response.json({
      name: user.name,
      id: user.id,
      email: user.email,
    });
  }
}

export { UserAuthenticatedController };
