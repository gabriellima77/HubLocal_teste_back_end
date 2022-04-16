import { inject, injectable } from "tsyringe";

import { UserRepository } from "../../repositories/implementations/UserRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository
  ) {}

  async execute({ email, name, password }: IRequest): Promise<void> {
    const emailAlredyInUse = await this.userRepository.findByEmail(email);
    if (emailAlredyInUse) {
      throw new Error("Email alredy in use!");
    }

    await this.userRepository.create({ email, name, password });
  }
}

export { CreateUserUseCase };
