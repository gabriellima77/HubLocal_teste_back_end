import { User } from "../../model/User";
import { UserRepository } from "../../repositories/implementations/UserRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute({ email, name, password }: IRequest): User {
    const emailAlredyInUse = this.userRepository.findByEmail(email);
    if (emailAlredyInUse) {
      throw new Error("Email alredy in use!");
    }

    const user = this.userRepository.create({ email, name, password });
    return user;
  }
}

export { CreateUserUseCase };
