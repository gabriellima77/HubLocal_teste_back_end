import { verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IResponse {
  name: string;
  id: string;
  email: string;
}

@injectable()
class UserAuthenticatedUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(token: string): Promise<IResponse> {
    try {
      const { sub: user_id } = verify(
        token,
        "63f1dff46a1197a3e7031d46e962dd960"
      );
      const user = await this.userRepository.findById(String(user_id));

      if (!user) {
        throw new Error("User doesn't exist!");
      }
      return {
        name: user.name,
        id: user.id,
        email: user.email,
      };
    } catch {
      throw new Error("Invalid token!");
    }
  }
}

export { UserAuthenticatedUseCase };
