import { Location } from "../../model/Location";
import {
  ICreateLocationDTO,
  ILocationRepository,
  IUpdateLocationDTO,
} from "../ILocationRepository";

class LocationRepository implements ILocationRepository {
  private locations: Location[];
  private static INSTANCE: LocationRepository;

  constructor() {
    this.locations = [];
  }

  public static getInstance(): LocationRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new LocationRepository();
    }
    return this.INSTANCE;
  }

  create({ address, city, name, state }: ICreateLocationDTO): Location {
    const location = new Location();
    Object.assign(location, { address, city, name, state });
    this.locations.push(location);
    return location;
  }

  list(company: string): Location[] {
    const locations = this.locations.filter(
      (location) => location.company === company
    );
    return locations;
  }

  getLocation(id: string): Location {
    return this.locations.find((location) => location.id === id);
  }

  update({ address, city, name, state, id }: IUpdateLocationDTO): Location {
    const index = this.locations.findIndex((location) => location.id === id);
    Object.assign(this.locations[index], { address, city, name, state });
    return this.locations[index];
  }

  delete(id: string): string {
    const index = this.locations.findIndex((location) => location.id === id);
    this.locations.splice(index, 1);
    return id;
  }
}
