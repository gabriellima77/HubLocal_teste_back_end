import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateResponsible1650425873468 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "responsible",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "phone",
            type: "varchar",
          },
          {
            name: "isMain",
            type: "boolean",
            default: false,
          },
          {
            name: "address",
            type: "varchar",
          },
          {
            name: "city",
            type: "varchar",
          },
          {
            name: "state",
            type: "varchar",
          },
          {
            name: "locationId",
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
      "responsible",
      new TableForeignKey({
        columnNames: ["locationId"],
        referencedTableName: "locations",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("responsible");
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("locationId") !== -1
    );
    await queryRunner.dropForeignKey("locations", foreignKey);
    await queryRunner.dropTable("responsible");
  }
}
