import { hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  name: string;
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
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ email, name, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);
    if (user) {
      throw new Error("User alredy exists!");
    }

    const encryptedPassword = await hash(password, 8);

    const newUser = await this.userRepository.create({
      email,
      name,
      password: encryptedPassword,
    });

    const token = sign({}, "63f1dff46a1197a3e7031d46e962dd960", {
      subject: newUser.id,
      expiresIn: "1d",
    });

    return {
      token,
      user: {
        name: newUser.name,
        email,
        id: newUser.id,
      },
    };
  }
}

export { CreateUserUseCase };
