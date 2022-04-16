import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Location } from "./Location";
import { User } from "./User";

@Entity("companies")
class Company {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  cnpj: string;

  @Column()
  description: string;

  @ManyToOne((type) => User, (user) => user.companies)
  user: string;

  @OneToMany((type) => Location, (location) => location.company)
  locations: Location[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    this.id = uuidV4();
  }
}

export { Company };
