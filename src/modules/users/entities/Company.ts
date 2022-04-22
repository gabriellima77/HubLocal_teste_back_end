import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Location } from "./Location";
import { Ticket } from "./Ticket";
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

  @ManyToOne(() => User, (user) => user.companies)
  @JoinColumn()
  user: User;

  @Column({ type: "uuid" })
  userId: string;

  @OneToMany(() => Location, (location) => location.company)
  locations: Location[];

  @OneToMany(() => Ticket, (ticket) => ticket.location)
  tickets: Ticket;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    this.id = uuidV4();
  }
}

export { Company };
