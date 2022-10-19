import { DataSource } from 'typeorm';
import { typeormConfig } from '../../../config/typeORMConfig';

const datasource = new DataSource(typeormConfig);
datasource.initialize()
  .then(
    () => {
      console.log('DataBase connected');
    },
  )
  .catch(
    (err) => {
      console.log('Error to connect Database', err);
    },
  );

export default datasource;
