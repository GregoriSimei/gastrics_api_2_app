import { DataSource } from 'typeorm';
import { typeormConfig } from '../../../../config/typeORMConfig';

const datasource = new DataSource(typeormConfig);
datasource.initialize()
  .then(
    () => {
      console.log('Postgres Connected');
    },
  )
  .catch(
    (err) => {
      console.log('Error to connect Postgres Database', err);
    },
  );

export default datasource;
