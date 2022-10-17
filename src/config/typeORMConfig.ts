import { DataSourceOptions } from 'typeorm';

export const typeormConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  synchronize: true,
};
