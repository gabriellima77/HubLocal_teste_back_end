import { AppError } from "../errors/AppError";

interface IRequest {
  data: any;
}

export function validData({ data }: IRequest) {
  const keys = Object.keys(data);
  keys.forEach((key) => {
    if (!data[key]) {
      throw new AppError(`Field ${key} is required!`, 400);
    }

    if (typeof data[key] !== "string") {
      throw new AppError(`Field ${key} must be a string!`, 400);
    }
  });
}

export function validPhone(phone: string) {
  const regex = /\({0,1}\d{2}\){0,1}[ ]{0,1}\d{4,5}-{0,1}\d{4}/g;
  if (!phone.match(regex)) {
    throw new AppError("Phone number is not valid!", 400);
  }
}
