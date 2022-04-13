import { User } from "../../model/User";
import {
  IUserRepository,
  ICreateUserDTO,
  IUpdateUserDTO,
} from "../IUserRepository";

class UserRepository implements IUserRepository {
  private users: User[];
  private static INSTANCE: UserRepository;

  constructor() {
    this.users = [];
  }

  public static getInstace(): UserRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new UserRepository();
    }
    return this.INSTANCE;
  }

  create({ name, email, password }: ICreateUserDTO): User {
    const user = new User();
    Object.assign(user, { name, email, password });

    this.users.push(user);
    return user;
  }

  list(): User[] {
    return this.users;
  }

  findByEmail(email: string): User {
    return this.users.find((user) => user.email === email);
  }

  findById(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  update({ email, name, id }: IUpdateUserDTO): User {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index].email = email;
    this.users[index].name = name;
    return this.users[index];
  }
}

export { UserRepository };
