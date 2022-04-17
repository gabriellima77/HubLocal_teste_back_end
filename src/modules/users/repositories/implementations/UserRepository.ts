import { Repository } from "typeorm";

import { dataSource } from "../../../../database";
import { User } from "../../entities/User";
import {
  IUserRepository,
  ICreateUserDTO,
  IUpdateUserDTO,
} from "../IUserRepository";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      password,
    });

    const newUser = await this.repository.save(user);
    return newUser;
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ where: { email } });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = this.repository.findOne({ where: { id } });
    return user;
  }

  async update({ email, name, id }: IUpdateUserDTO): Promise<User> {
    const user = await this.repository.save({
      id,
      email,
      name,
    });
    return user;
  }
}

export { UserRepository };
