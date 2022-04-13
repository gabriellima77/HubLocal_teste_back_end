import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUpdateUserDTO {
  name: string;
  email: string;
  id: string;
}

interface IUserRepository {
  create: (user: ICreateUserDTO) => User;
  list: () => User[];
  findByEmail: (email: string) => User;
  findById: (id: string) => User;
  update: (update: IUpdateUserDTO) => User;
}

export { IUserRepository, ICreateUserDTO, IUpdateUserDTO };
