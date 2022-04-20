import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Location } from "./Location";

@Entity()
class Responsible {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @ManyToOne(() => Location, (location) => location.responsible)
  @JoinColumn()
  location: Location;

  @Column({ type: "uuid" })
  locationId: string;

  @Column()
  isMain: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    this.id = uuidV4();
  }
}

export { Responsible };
