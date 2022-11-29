import { DataSourceOptions } from 'typeorm';
import { Alert } from '../infra/repository/postgress/models/Alert';
import { Branch } from '../infra/repository/postgress/models/Branch';
import { Company } from '../infra/repository/postgress/models/Company';
import { Cylinder } from '../infra/repository/postgress/models/Cylinder';
import { Employee } from '../infra/repository/postgress/models/Employee';

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
    Alert,
  ],
  synchronize: true,
};
