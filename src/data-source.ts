import { DataSource, DataSourceOptions } from "typeorm";

const ormConfig: DataSourceOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "FA",
    entities: [
        "src/entity/**/*.ts"
    ],
}

export const AppDataSource = new DataSource(ormConfig);