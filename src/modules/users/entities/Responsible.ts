import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

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

  @ManyToOne((type) => Location, (location) => location.responsible)
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
}

export { Responsible };
