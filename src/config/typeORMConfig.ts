import { DataSourceOptions } from 'typeorm';
import { Branch } from '../infra/repository/models/Branch';
import { Company } from '../infra/repository/models/Company';
import { Cylinder } from '../infra/repository/models/Cylinder';
import { Employee } from '../infra/repository/models/Employee';

export const typeormConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [
    Company,
    Branch,
    Cylinder,
    Employee,
  ],
  synchronize: true,
};
