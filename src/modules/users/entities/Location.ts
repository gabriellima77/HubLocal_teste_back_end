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

import { Company } from "./Company";
import { Responsible } from "./Responsible";
import { Ticket } from "./Ticket";

@Entity("locations")
class Location {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @ManyToOne(() => Company, (company) => company.locations)
  @JoinColumn()
  company: Company;

  @Column({ type: "uuid" })
  companyId: string;

  @OneToMany(() => Responsible, (responsible) => responsible.location)
  responsible: Responsible;

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

export { Location };
