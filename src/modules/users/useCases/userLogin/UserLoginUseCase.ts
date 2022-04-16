import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/implementations/UserRepository";

interface IRequest {
  email: string;
  password: string;
}

@injectable()
class UserLoginUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<User> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error("Email or password are incorrect!");
    }

    if (user.password !== password) {
      throw new Error("Email or password are incorrect!");
    }

    return user;
  }
}

export { UserLoginUseCase };
