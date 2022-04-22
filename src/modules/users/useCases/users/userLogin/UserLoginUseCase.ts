import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../../errors/AppError";
import { IUserRepository } from "../../../repositories/IUserRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
  user: {
    name: string;
    email: string;
    id: string;
  };
}

@injectable()
class UserLoginUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new AppError("Email or password are incorrect!", 400);
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError("Email or password are incorrect!", 400);
    }

    const token = sign({}, "63f1dff46a1197a3e7031d46e962dd960", {
      subject: user.id,
      expiresIn: "1d",
    });

    return {
      token,
      user: {
        name: user.name,
        email,
        id: user.id,
      },
    };
  }
}

export { UserLoginUseCase };
