import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "postgres",
  host: "database",
  username: "docker",
  password: "password",
  port: 5432,
  database: "desafio",
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/modules/**/entities/*.ts"],
});
