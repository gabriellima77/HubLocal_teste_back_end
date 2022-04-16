import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    this.id = uuidV4();
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export { User };