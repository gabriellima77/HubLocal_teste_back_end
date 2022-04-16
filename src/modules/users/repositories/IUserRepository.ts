import { User } from "../entities/User";

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
  create: (user: ICreateUserDTO) => Promise<void>;
  list: () => Promise<User[]>;
  findByEmail: (email: string) => Promise<User>;
  findById: (id: string) => Promise<User>;
  update: (update: IUpdateUserDTO) => Promise<User>;
}

export { IUserRepository, ICreateUserDTO, IUpdateUserDTO };
