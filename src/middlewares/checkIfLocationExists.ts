import { NextFunction, Response } from "express";

import { LocationRepository } from "../modules/users/repositories/implementations/LocationRepository";

export async function checkIfLocationExists(
  request,
  response: Response,
  next: NextFunction
) {
  const { location_id } = request.headers;
  const repository = new LocationRepository();
  const location = await repository.getLocation(location_id);
  if (!location) {
    return response.status(400).json({ error: "Location doesn't exist!" });
  }
  request.location = location;
  return next();
}
