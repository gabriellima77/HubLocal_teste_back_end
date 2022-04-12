import { UserRepository } from "../../repositories/implementations/UserRepository";
import { UserLoginController } from "./UserLoginController";
import { UserLoginUseCase } from "./UserLoginUseCase";

const userRepository = UserRepository.getInstace();
const userLoginUseCase = new UserLoginUseCase(userRepository);
const userLoginController = new UserLoginController(userLoginUseCase);

export { userLoginController };
