import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUserRepository {
  create: (user: ICreateUserDTO) => User;
  list: () => User[];
  findByEmail: (email: string) => User;
  findById: (id: string) => User;
}

export { IUserRepository, ICreateUserDTO };
