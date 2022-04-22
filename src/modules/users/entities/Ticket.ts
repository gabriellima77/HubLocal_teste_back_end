import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Company } from "./Company";
import { Location } from "./Location";

@Entity("tickets")
class Ticket {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  created_by: string;

  @Column()
  will_solve: string;

  @Column({
    type: "enum",
    enum: ["pendente", "progresso", "concluido"],
    default: "pendente",
  })
  status: string;

  @ManyToOne(() => Location, (location) => location.tickets)
  @JoinColumn()
  location: Location;

  @Column({ type: "uuid" })
  locationId: string;

  @ManyToOne(() => Company, (company) => company.tickets)
  @JoinColumn()
  company: Location;

  @Column({ type: "uuid" })
  companyId: string;

  constructor() {
    this.id = uuidV4();
  }
}

export { Ticket };
