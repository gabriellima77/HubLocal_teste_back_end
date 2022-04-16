import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

import { Location } from "./Location";
import { User } from "./User";

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

  @Column({ unique: true })
  created_by: string;

  @Column({ unique: true })
  service: string;

  @Column()
  status: string;

  @ManyToOne((type) => Location, (location) => location.tickets)
  location: Location;
}

export { Ticket };
