import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTickets1650571619807 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tickets",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "created_by",
            type: "varchar",
          },
          {
            name: "will_solve",
            type: "varchar",
          },
          {
            name: "status",
            type: "enum",
            enum: ["pendente", "progresso", "concluido"],
          },
          {
            name: "locationId",
            type: "uuid",
          },
          {
            name: "companyId",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "tickets",
      new TableForeignKey({
        columnNames: ["locationId"],
        referencedTableName: "locations",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "tickets",
      new TableForeignKey({
        columnNames: ["companyId"],
        referencedTableName: "companies",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("tickets");
    let foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("locationId") !== -1
    );
    await queryRunner.dropForeignKey("tickets", foreignKey);
    foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("companyId") !== -1
    );
    await queryRunner.dropForeignKey("tickets", foreignKey);
    await queryRunner.dropTable("tickets");
  }
}
