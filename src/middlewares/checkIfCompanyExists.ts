import { NextFunction, Response } from "express";

import { CompaniesRepository } from "../modules/users/repositories/implementations/CompaniesRepository";

export async function checkIfCompanyExists(
  request,
  response: Response,
  next: NextFunction
) {
  const { company_id } = request.headers;
  const repository = new CompaniesRepository();
  const company = await repository.findCompanyById(company_id);
  if (!company) {
    return response.status(400).json({ error: "Company doesn't exist!" });
  }
  request.company = company;
  return next();
}
