import { UserRepository } from "../../repositories/implementations/UserRepository";

interface IRequest {
  email: string;
  password: string;
}

class UserLoginUseCase {
  constructor(private userRepository: UserRepository) {}

  execute({ email, password }: IRequest) {
    const user = this.userRepository.findByEmail(email);
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
